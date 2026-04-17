"use client";

import { useEffect, useState, useRef } from "react";

let pyodideInstance = null;
let pyodideLoadingPromise = null;

export function usePyodide() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const pyodideRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (pyodideInstance) {
      pyodideRef.current = pyodideInstance;
      setStatus("ready");
      return;
    }

    if (pyodideLoadingPromise) {
      setStatus("loading");
      pyodideLoadingPromise
        .then((py) => {
          pyodideRef.current = py;
          setStatus("ready");
        })
        .catch((e) => {
          setError(e.message);
          setStatus("error");
        });
      return;
    }

    setStatus("loading");

    pyodideLoadingPromise = (async () => {
      if (!window.loadPyodide) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
          script.onload = resolve;
          script.onerror = () => reject(new Error("Kunde inte ladda Pyodide-skriptet"));
          document.head.appendChild(script);
        });
      }
      const py = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
      });
      pyodideInstance = py;
      return py;
    })();

    pyodideLoadingPromise
      .then((py) => {
        pyodideRef.current = py;
        setStatus("ready");
      })
      .catch((e) => {
        setError(e.message);
        setStatus("error");
      });
  }, []);

  const loadedPackagesRef = useRef(new Set());

  const ensurePackages = async (packages = []) => {
    const py = pyodideRef.current;
    if (!py || !packages.length) return;
    const toLoad = packages.filter((p) => !loadedPackagesRef.current.has(p));
    if (!toLoad.length) return;
    await py.loadPackage(toLoad);
    toLoad.forEach((p) => loadedPackagesRef.current.add(p));
  };

  const runPython = async (code, packages = []) => {
    const py = pyodideRef.current;
    if (!py) throw new Error("Pyodide inte redo");

    await ensurePackages(packages);

    // Setup stdout/stderr capture + matplotlib inline
    let output = "";
    py.setStdout({
      batched: (s) => {
        output += s + "\n";
      },
    });
    py.setStderr({
      batched: (s) => {
        output += s + "\n";
      },
    });

    let image = null;

    // Intercept plt.show() for matplotlib
    if (packages.includes("matplotlib")) {
      try {
        await py.runPythonAsync(`
import matplotlib
matplotlib.use("AGG")
import matplotlib.pyplot as plt
import io, base64

__last_img__ = None
def __capture_show__(*a, **kw):
    global __last_img__
    buf = io.BytesIO()
    plt.savefig(buf, format="png", dpi=100, bbox_inches="tight")
    buf.seek(0)
    __last_img__ = base64.b64encode(buf.read()).decode()
    plt.close("all")

plt.show = __capture_show__
__last_img__ = None
`);
      } catch (e) {
        // ignore
      }
    }

    try {
      await py.runPythonAsync(code);
      if (packages.includes("matplotlib")) {
        try {
          const img = py.globals.get("__last_img__");
          if (img) image = img;
        } catch (e) {}
      }
      return { output: output.trim(), image, error: null };
    } catch (e) {
      return { output: output.trim(), image: null, error: String(e.message || e) };
    }
  };

  return { status, error, runPython };
}
