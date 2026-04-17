"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Lesson from "@/components/Lesson";
import PythonEditor from "@/components/PythonEditor";
import { getPhase, phases } from "@/data/phases";

export default function PhasePage({ params }) {
  const phase = getPhase(params.id);
  if (!phase) notFound();

  const [activeLesson, setActiveLesson] = useState(phase.lessons[0].id);
  const [showMilestone, setShowMilestone] = useState(false);

  const currentLesson = phase.lessons.find((l) => l.id === activeLesson);
  const currentIdx = phase.lessons.findIndex((l) => l.id === activeLesson);
  const prevLesson = phase.lessons[currentIdx - 1];
  const nextLesson = phase.lessons[currentIdx + 1];

  const nextPhase = phases.find((p) => p.id === phase.id + 1);
  const prevPhase = phases.find((p) => p.id === phase.id - 1);
  const packages = phase.requiresPackages || [];

  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 80 }}>
        {/* Phase header */}
        <header className="phase-header">
          <div className="phase-nav">
            <Link href="/" className="back-link">← Översikt</Link>
            {prevPhase && (
              <Link href={`/fas/${prevPhase.id}`} className="back-link">
                ← Fas {prevPhase.id}
              </Link>
            )}
            {nextPhase && (
              <Link href={`/fas/${nextPhase.id}`} className="back-link">
                Fas {nextPhase.id} →
              </Link>
            )}
          </div>

          <div className="phase-hero">
            <div className="phase-hero-left">
              <div className="phase-icon-big" style={{ background: phase.accent + "18", color: phase.accent }}>
                {phase.icon}
              </div>
            </div>
            <div>
              <div className="phase-meta mono" style={{ color: phase.accent }}>
                Fas {phase.id} · {phase.weeks}
              </div>
              <h1 className="display phase-title-big">{phase.title}</h1>
              <p className="phase-desc-big">{phase.description}</p>
              {packages.length > 0 && (
                <div className="phase-packages">
                  <span className="pkg-label">Inkluderade bibliotek:</span>
                  {packages.map((pkg) => (
                    <span key={pkg} className="pkg mono" style={{ color: phase.accent, borderColor: phase.accent + "55" }}>
                      {pkg}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Lesson navigator */}
        <nav className="lesson-nav">
          {phase.lessons.map((l, idx) => (
            <button
              key={l.id}
              onClick={() => {
                setActiveLesson(l.id);
                setShowMilestone(false);
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className={`lesson-pill ${activeLesson === l.id && !showMilestone ? "active" : ""}`}
              style={{
                "--pill-color": phase.accent,
                background: activeLesson === l.id && !showMilestone ? phase.accent + "18" : "var(--bg-raised)",
                borderColor: activeLesson === l.id && !showMilestone ? phase.accent : "var(--border)",
                color: activeLesson === l.id && !showMilestone ? phase.accent : "var(--text-muted)",
              }}
            >
              <span className="mono" style={{ opacity: 0.6, fontSize: 11 }}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              {l.icon} {l.title}
            </button>
          ))}
          <button
            onClick={() => {
              setShowMilestone(true);
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            className={`lesson-pill milestone-pill ${showMilestone ? "active" : ""}`}
            style={{
              background: showMilestone ? phase.accent + "18" : "var(--bg-raised)",
              borderColor: showMilestone ? phase.accent : "var(--border)",
              color: showMilestone ? phase.accent : "var(--text-muted)",
            }}
          >
            ✦ Milstolpe
          </button>
        </nav>

        {/* Content */}
        {showMilestone ? (
          <div className="milestone">
            <div className="milestone-header">
              <div className="milestone-badge" style={{ background: phase.accent + "18", color: phase.accent }}>
                ✦ Fas {phase.id} Milstolpe
              </div>
              <h2 className="display milestone-title">{phase.milestone.title}</h2>
              <p className="milestone-desc">{phase.milestone.description}</p>
            </div>
            <PythonEditor initialCode={phase.milestone.code} packages={packages} />
          </div>
        ) : (
          <Lesson lesson={currentLesson} accent={phase.accent} packages={packages} />
        )}

        {/* Prev/Next */}
        {!showMilestone && (
          <div className="lesson-pager">
            {prevLesson ? (
              <button
                onClick={() => {
                  setActiveLesson(prevLesson.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="pager-btn"
              >
                <span className="pager-label">Föregående</span>
                <span className="pager-title">{prevLesson.icon} {prevLesson.title}</span>
              </button>
            ) : <div />}
            {nextLesson ? (
              <button
                onClick={() => {
                  setActiveLesson(nextLesson.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="pager-btn pager-btn-right"
                style={{ borderColor: phase.accent, color: phase.accent }}
              >
                <span className="pager-label">Nästa</span>
                <span className="pager-title">{nextLesson.icon} {nextLesson.title} →</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowMilestone(true);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className="pager-btn pager-btn-right"
                style={{ borderColor: phase.accent, color: phase.accent }}
              >
                <span className="pager-label">Slutprojekt</span>
                <span className="pager-title">✦ Milstolpe →</span>
              </button>
            )}
          </div>
        )}
      </main>

      <style jsx>{`
        .phase-header {
          margin-bottom: 32px;
        }
        .phase-nav {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .back-link {
          font-size: 13px;
          color: var(--text-muted);
          padding: 6px 12px;
          border-radius: 6px;
          background: var(--bg-raised);
          border: 1px solid var(--border);
          transition: all 0.15s;
        }
        .back-link:hover {
          color: var(--text);
          background: var(--bg-card);
        }
        .phase-hero {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        @media (max-width: 640px) {
          .phase-hero { gap: 16px; }
        }
        .phase-icon-big {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .phase-icon-big { width: 60px; height: 60px; font-size: 30px; }
        }
        .phase-meta {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .phase-title-big {
          font-size: clamp(32px, 6vw, 52px);
          margin-bottom: 12px;
          line-height: 1.05;
        }
        .phase-desc-big {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 640px;
        }
        .phase-packages {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .pkg-label {
          font-size: 12px;
          color: var(--text-dim);
        }
        .pkg {
          font-size: 12px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 6px;
          border: 1px solid;
          background: var(--bg-raised);
        }
        .lesson-nav {
          display: flex;
          gap: 8px;
          margin-bottom: 28px;
          padding-bottom: 8px;
          overflow-x: auto;
          scrollbar-width: thin;
          flex-wrap: wrap;
        }
        .lesson-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 600;
          border-radius: 10px;
          border: 1px solid;
          transition: all 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .lesson-pill:hover {
          color: var(--text) !important;
        }
        .milestone-pill {
          font-style: italic;
        }
        .milestone {
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
        }
        @media (max-width: 640px) {
          .milestone { padding: 20px 16px; }
        }
        .milestone-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .milestone-title {
          font-size: clamp(26px, 4vw, 36px);
          margin-bottom: 12px;
        }
        .milestone-desc {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 720px;
        }
        .lesson-pager {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }
        @media (max-width: 540px) {
          .lesson-pager { grid-template-columns: 1fr; }
        }
        .pager-btn {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 18px;
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-align: left;
          transition: all 0.15s;
        }
        .pager-btn:hover {
          background: var(--bg-card);
        }
        .pager-btn-right {
          text-align: right;
        }
        .pager-label {
          font-size: 11px;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
        .pager-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
        }
      `}</style>
    </>
  );
}
