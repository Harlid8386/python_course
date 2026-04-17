"use client";

import { useState } from "react";
import PythonEditor from "./PythonEditor";

export default function Exercise({ exercise, index, accent, packages }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="exercise">
      <div className="exercise-header">
        <div className="exercise-num" style={{ background: accent + "22", color: accent }}>
          Övning {index + 1}
        </div>
        <button
          className="hint-btn"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Dölj tips" : "💡 Visa tips"}
        </button>
      </div>

      {exercise.explanation && (
        <div className="exercise-explanation" style={{ borderLeftColor: accent }}>
          {exercise.explanation}
        </div>
      )}

      <p className="exercise-question">{exercise.question}</p>

      {showHint && (
        <div className="exercise-hint" style={{ borderLeftColor: accent }}>
          <strong>Tips:</strong> {exercise.hint}
        </div>
      )}

      <PythonEditor
        initialCode={exercise.starter}
        packages={packages}
        solution={exercise.solution}
        expected={exercise.expected}
      />

      <style jsx>{`
        .exercise {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
          margin-bottom: 16px;
        }
        .exercise-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .exercise-num {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .hint-btn {
          padding: 5px 12px;
          font-size: 12px;
          border-radius: 6px;
          color: var(--text-muted);
          background: transparent;
          border: 1px solid var(--border);
          transition: all 0.15s;
        }
        .hint-btn:hover {
          color: var(--text);
          background: var(--bg-raised);
        }
        .exercise-question {
          font-size: 15px;
          color: var(--text);
          margin-bottom: 10px;
          line-height: 1.5;
        }
        .exercise-explanation {
          padding: 12px 16px;
          background: var(--bg-raised);
          border-left: 3px solid;
          border-radius: 0 8px 8px 0;
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 12px;
          line-height: 1.6;
          white-space: pre-line;
        }
        .exercise-hint {
          padding: 10px 14px;
          background: var(--bg-raised);
          border-left: 3px solid;
          border-radius: 0 8px 8px 0;
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 10px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
