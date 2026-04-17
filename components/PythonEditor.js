"use client";

import { useState } from "react";
import { usePyodide } from "@/lib/usePyodide";

export default function PythonEditor({ initialCode, packages = [], solution, expected, compact = false }) {
  const { status, error: pyError, runPython } = usePyodide();
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState(null);
  const [image, setImage] = useState(null);
  const [runError, setRunError] = useState(null);
  const [running, setRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const handleRun = async () => {
    setRunning(true);
    setOutput(null);
    setImage(null);
    setRunError(null);
    try {
      const result = await runPython(code, packages);
      setOutput(result.output);
      setImage(result.image);
      if (result.error) setRunError(result.error);
    } catch (e) {
      setRunError(String(e.message || e));
    } finally {
      setRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
    setImage(null);
    setRunError(null);
  };

  const handleUseSolution = () => {
    if (solution) setCode(solution);
  };

  const statusLabel = {
    idle: "Initierar...",
    loading: "Laddar Python (första körningen tar 10–20s)...",
    ready: packages.length ? `Redo (${packages.join(", ")})` : "Redo",
    error: "Fel vid laddning",
  }[status];

  const statusColor = {
    idle: "var(--text-dim)",
    loading: "var(--amber)",
    ready: "var(--green)",
    error: "var(--red)",
  }[status];

  const lineCount = code.split("\n").length;

  return (
    <div className="py-editor">
      <div className="py-toolbar">
        <div className="py-status">
          <span className="py-status-dot" style={{ background: statusColor }} />
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{statusLabel}</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {solution && (
            <button className="py-btn py-btn-ghost" onClick={handleUseSolution}>
              Använd lösning
            </button>
          )}
          <button className="py-btn py-btn-ghost" onClick={handleReset}>
            Återställ
          </button>
          <button
            className="py-btn py-btn-run"
            onClick={handleRun}
            disabled={status !== "ready" || running}
          >
            {running ? "Kör..." : "▶ Kör"}
          </button>
        </div>
      </div>

      <div className="py-code-wrap">
        <div className="py-line-numbers" aria-hidden>
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <textarea
          className="py-code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          style={{ height: Math.max(compact ? 120 : 160, lineCount * 22 + 16) }}
        />
      </div>

      {(output !== null || runError || image || pyError) && (
        <div className="py-output">
          <div className="py-output-header">OUTPUT</div>
          {pyError && <div className="py-error">Pyodide-fel: {pyError}</div>}
          {runError && <div className="py-error">{runError}</div>}
          {output && <pre className="py-stdout">{output}</pre>}
          {image && (
            <div className="py-image">
              <img src={`data:image/png;base64,${image}`} alt="Plot" />
            </div>
          )}
          {expected && output && !runError && (
            <div className="py-expected">
              <div style={{ fontSize: 11, color: "var(--text-dim)", marginBottom: 4 }}>Förväntad output:</div>
              <pre style={{ fontSize: 12, color: "var(--text-muted)" }}>{expected}</pre>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .py-editor {
          background: var(--bg-code);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          margin: 12px 0;
        }
        .py-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: var(--bg-raised);
          border-bottom: 1px solid var(--border);
        }
        .py-status {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .py-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 8px currentColor;
        }
        .py-btn {
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 6px;
          transition: all 0.15s;
        }
        .py-btn-ghost {
          background: transparent;
          color: var(--text-muted);
          border: 1px solid var(--border);
        }
        .py-btn-ghost:hover {
          color: var(--text);
          background: var(--bg-card);
        }
        .py-btn-run {
          background: var(--teal);
          color: var(--bg);
          border: 1px solid var(--teal);
        }
        .py-btn-run:hover:not(:disabled) {
          background: #0f9488;
        }
        .py-btn-run:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .py-code-wrap {
          display: flex;
          background: var(--bg-code);
        }
        .py-line-numbers {
          flex-shrink: 0;
          padding: 8px 10px;
          font-family: "JetBrains Mono", monospace;
          font-size: 13px;
          color: var(--text-dim);
          text-align: right;
          line-height: 22px;
          user-select: none;
          background: rgba(255, 255, 255, 0.02);
          border-right: 1px solid var(--border);
        }
        .py-code {
          flex: 1;
          background: transparent;
          color: #e6edf3;
          font-family: "JetBrains Mono", monospace;
          font-size: 13px;
          line-height: 22px;
          padding: 8px 12px;
          border: none;
          outline: none;
          resize: vertical;
          min-height: 80px;
          tab-size: 4;
        }
        .py-output {
          border-top: 1px solid var(--border);
          padding: 10px 14px;
          background: rgba(0, 0, 0, 0.3);
        }
        .py-output-header {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-dim);
          margin-bottom: 6px;
        }
        .py-stdout {
          font-family: "JetBrains Mono", monospace;
          font-size: 12.5px;
          color: #a5f3fc;
          white-space: pre-wrap;
          word-break: break-word;
          margin: 0;
        }
        .py-error {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.08);
          border-left: 3px solid var(--red);
          padding: 8px 12px;
          border-radius: 4px;
          white-space: pre-wrap;
          margin: 4px 0;
        }
        .py-image {
          margin-top: 8px;
          background: white;
          padding: 8px;
          border-radius: 6px;
          max-width: 100%;
          overflow: auto;
        }
        .py-image img {
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }
        .py-expected {
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px dashed var(--border);
        }
      `}</style>
    </div>
  );
}
