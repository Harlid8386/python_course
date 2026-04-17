import Link from "next/link";
import Nav from "@/components/Nav";
import { phases, getTotalLessons, getTotalExercises } from "@/data/phases";

export default function Home() {
  const totalLessons = getTotalLessons();
  const totalExercises = getTotalExercises();

  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
        {/* Hero */}
        <section className="hero">
          <div className="hero-badge">
            <span className="hero-dot" />
            12 veckor · Körbar Python · Gratis
          </div>
          <h1 className="display hero-title">
            Lär dig <span className="accent-gradient">Python</span>
            <br />för AI — från grunden.
          </h1>
          <p className="hero-desc">
            En interaktiv kurs i tre faser: från Python-grunder till att bygga riktiga ML-modeller.
            All kod körs direkt i webbläsaren — ingen installation behövs.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">{phases.length}</div>
              <div className="stat-label">Faser</div>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <div className="stat-num">{totalLessons}</div>
              <div className="stat-label">Lektioner</div>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <div className="stat-num">{totalExercises}</div>
              <div className="stat-label">Körbara övningar</div>
            </div>
          </div>

          <div className="hero-cta">
            <Link href="/fas/1" className="btn btn-primary">
              Börja Fas 1 →
            </Link>
            <a href="#phases" className="btn btn-ghost">
              Se alla faser
            </a>
          </div>
        </section>

        {/* Phases */}
        <section id="phases" className="phases">
          <div className="section-title">
            <h2 className="display section-heading">Kursplan</h2>
            <p className="section-desc">Tre faser. Bygg kunskap lager på lager.</p>
          </div>

          <div className="phase-grid">
            {phases.map((phase) => (
              <Link key={phase.id} href={`/fas/${phase.id}`} className="phase-card">
                <div className="phase-card-inner" style={{ "--phase-color": phase.accent }}>
                  <div className="phase-top">
                    <div className="phase-icon" style={{ background: phase.accent + "18", color: phase.accent }}>
                      {phase.icon}
                    </div>
                    <div className="phase-meta mono" style={{ color: phase.accent }}>
                      Fas {phase.id} · {phase.weeks}
                    </div>
                  </div>
                  <h3 className="phase-title">{phase.title}</h3>
                  <p className="phase-desc">{phase.description}</p>
                  <div className="phase-stats">
                    <div className="phase-stat">
                      <span className="mono" style={{ color: phase.accent }}>
                        {phase.lessons.length}
                      </span>
                      <span>lektioner</span>
                    </div>
                    <div className="phase-stat">
                      <span className="mono" style={{ color: phase.accent }}>
                        {phase.lessons.reduce((s, l) => s + l.exercises.length, 0)}
                      </span>
                      <span>övningar</span>
                    </div>
                  </div>
                  <div className="phase-topics">
                    {phase.lessons.slice(0, 3).map((l, i) => (
                      <div key={i} className="phase-topic">
                        <span>{l.icon}</span> {l.title}
                      </div>
                    ))}
                    {phase.lessons.length > 3 && (
                      <div className="phase-topic more">
                        +{phase.lessons.length - 3} till
                      </div>
                    )}
                  </div>
                  <div className="phase-arrow" style={{ color: phase.accent }}>
                    Börja →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="tips">
          <h2 className="display section-heading" style={{ textAlign: "center", marginBottom: 32 }}>
            Så får du ut mest av kursen
          </h2>
          <div className="tips-grid">
            <div className="tip">
              <div className="tip-num">01</div>
              <h3 className="tip-title">Kod varje dag</h3>
              <p className="tip-desc">
                Även 20 minuter räcker. Kontinuitet slår intensitet — kod är en färdighet som byggs över tid.
              </p>
            </div>
            <div className="tip">
              <div className="tip-num">02</div>
              <h3 className="tip-title">Lös övningarna själv</h3>
              <p className="tip-desc">
                Titta inte på lösningen direkt. Även om det känns svårt — kampen är där inlärningen sker.
              </p>
            </div>
            <div className="tip">
              <div className="tip-num">03</div>
              <h3 className="tip-title">Bygg egna projekt</h3>
              <p className="tip-desc">
                När du klarar en fas, bygg något eget. Tutorials ger kunskap, egna projekt ger förståelse.
              </p>
            </div>
            <div className="tip">
              <div className="tip-num">04</div>
              <h3 className="tip-title">Bli inte fast</h3>
              <p className="tip-desc">
                Om något är svårt — markera det, gå vidare, kom tillbaka. Hjärnan jobbar i bakgrunden.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>
            Byggt med Next.js + Pyodide. All Python körs i din webbläsare via WebAssembly — ingen backend.
          </p>
        </footer>
      </main>

      <style jsx>{`
        .hero {
          padding: 40px 0 72px;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px;
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: 20px;
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 24px;
        }
        .hero-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
        }
        .hero-title {
          font-size: clamp(38px, 7vw, 64px);
          margin-bottom: 20px;
          line-height: 1.05;
        }
        .accent-gradient {
          background: linear-gradient(120deg, var(--teal), var(--purple) 50%, var(--pink));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-style: italic;
        }
        .hero-desc {
          font-size: 17px;
          color: var(--text-muted);
          margin-bottom: 32px;
          line-height: 1.6;
          max-width: 580px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-stats {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 16px 28px;
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: 14px;
          margin-bottom: 32px;
        }
        @media (max-width: 540px) {
          .hero-stats { gap: 12px; padding: 14px 18px; }
        }
        .stat-num {
          font-family: "Fraunces", serif;
          font-weight: 700;
          font-size: 32px;
          background: linear-gradient(120deg, var(--teal), var(--purple));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .stat-label {
          font-size: 11px;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
        .stat-sep {
          width: 1px;
          height: 32px;
          background: var(--border);
        }
        .hero-cta {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .section-title {
          text-align: center;
          margin-bottom: 48px;
        }
        .section-heading {
          font-size: clamp(30px, 5vw, 44px);
          margin-bottom: 10px;
        }
        .section-desc {
          color: var(--text-muted);
          font-size: 16px;
        }
        .phases {
          padding: 40px 0;
        }
        .phase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }
        .phase-card {
          text-decoration: none;
          color: inherit;
        }
        .phase-card-inner {
          padding: 28px;
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: 18px;
          height: 100%;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .phase-card-inner::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--phase-color);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .phase-card:hover .phase-card-inner {
          transform: translateY(-3px);
          border-color: var(--phase-color);
          box-shadow: 0 12px 40px -8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--phase-color);
        }
        .phase-card:hover .phase-card-inner::before {
          opacity: 1;
        }
        .phase-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        .phase-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
        }
        .phase-meta {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .phase-title {
          font-family: "Fraunces", serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .phase-desc {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.55;
          margin-bottom: 18px;
        }
        .phase-stats {
          display: flex;
          gap: 18px;
          margin-bottom: 16px;
        }
        .phase-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .phase-stat span:first-child {
          font-size: 22px;
          font-weight: 700;
        }
        .phase-stat span:last-child {
          font-size: 11px;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .phase-topics {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
          padding-top: 14px;
          border-top: 1px solid var(--border);
        }
        .phase-topic {
          font-size: 13px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .phase-topic.more {
          color: var(--text-dim);
          font-style: italic;
        }
        .phase-arrow {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .tips {
          padding: 72px 0 40px;
          margin-top: 40px;
          border-top: 1px solid var(--border);
        }
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .tip {
          padding: 24px;
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: 12px;
        }
        .tip-num {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--teal);
          margin-bottom: 12px;
          letter-spacing: 0.1em;
        }
        .tip-title {
          font-family: "Fraunces", serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .tip-desc {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.5;
        }
        .footer {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--text-dim);
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
