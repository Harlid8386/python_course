"use client";

import { useState } from "react";
import PythonEditor from "./PythonEditor";
import Exercise from "./Exercise";

export default function Lesson({ lesson, accent, packages }) {
  const [tab, setTab] = useState("theory");

  return (
    <div className="lesson">
      <div className="lesson-header">
        <div className="lesson-icon" style={{ background: accent + "22", color: accent }}>
          {lesson.icon}
        </div>
        <div>
          <div className="lesson-id mono" style={{ color: accent }}>
            Lektion {lesson.id}
          </div>
          <h2 className="lesson-title display">{lesson.title}</h2>
        </div>
      </div>

      <div className="lesson-tabs">
        {[
          { id: "theory", label: "📖 Teori" },
          { id: "examples", label: `📝 Kodexempel (${lesson.examples.length})` },
          { id: "exercises", label: `🎯 Övningar (${lesson.exercises.length})` },
        ].map((t) => (
          <button
            key={t.id}
            className={`lesson-tab ${tab === t.id ? "active" : ""}`}
            onClick={() => setTab(t.id)}
            style={{
              color: tab === t.id ? accent : "var(--text-muted)",
              borderColor: tab === t.id ? accent : "var(--border)",
              background: tab === t.id ? accent + "14" : "transparent",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="lesson-content">
        {tab === "theory" && (
          <div className="theory">
            {lesson.theory.split("\n\n").map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: formatTheory(para) }} />
            ))}
          </div>
        )}

        {tab === "examples" && (
          <div className="examples">
            {lesson.examples.map((ex, i) => (
              <div key={i} className="example">
                <h3 className="example-title">{ex.title}</h3>
                {ex.explanation && (
                  <div className="example-explanation" style={{ borderLeftColor: accent }}>
                    {ex.explanation}
                  </div>
                )}
                <PythonEditor initialCode={ex.code} packages={packages} />
              </div>
            ))}
          </div>
        )}

        {tab === "exercises" && (
          <div className="exercises">
            {lesson.exercises.map((ex, i) => (
              <Exercise
                key={i}
                exercise={ex}
                index={i}
                accent={accent}
                packages={packages}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .lesson {
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          margin-bottom: 24px;
        }
        @media (max-width: 640px) {
          .lesson { padding: 20px 16px; }
        }
        .lesson-header {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 24px;
        }
        .lesson-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
        }
        .lesson-id {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .lesson-title {
          font-size: 28px;
          margin: 0;
        }
        @media (max-width: 640px) {
          .lesson-title { font-size: 22px; }
        }
        .lesson-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .lesson-tab {
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 600;
          border-radius: 8px;
          border: 1px solid;
          transition: all 0.15s;
        }
        .theory {
          font-size: 15px;
          color: var(--text);
          line-height: 1.7;
        }
        .theory p {
          margin-bottom: 14px;
        }
        .theory :global(strong) {
          color: var(--text);
          font-weight: 600;
        }
        .theory :global(code) {
          background: var(--bg-code);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 13px;
          color: #a5f3fc;
          border: 1px solid var(--border);
        }
        .example {
          margin-bottom: 24px;
        }
        .example-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 8px;
        }
        .example-explanation {
          padding: 12px 16px;
          background: var(--bg-card);
          border-left: 3px solid;
          border-radius: 0 8px 8px 0;
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 12px;
          line-height: 1.6;
          white-space: pre-line;
        }
      `}</style>
    </div>
  );
}

function formatTheory(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/•/g, "•")
    .replace(/\n/g, "<br/>");
}
