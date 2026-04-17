import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          <span className="nav-logo">{"{ }"}</span>
          <span className="nav-title">Python för AI</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Översikt</Link>
          <Link href="/fas/1" className="nav-link">Fas 1</Link>
          <Link href="/fas/2" className="nav-link">Fas 2</Link>
          <Link href="/fas/3" className="nav-link">Fas 3</Link>
        </div>
      </div>

      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(10, 14, 26, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text);
          text-decoration: none;
        }
        .nav-logo {
          font-family: "JetBrains Mono", monospace;
          font-weight: 700;
          font-size: 18px;
          color: var(--teal);
          background: var(--bg-raised);
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid var(--border);
        }
        .nav-title {
          font-family: "Fraunces", serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.01em;
        }
        @media (max-width: 640px) {
          .nav-title { display: none; }
        }
        .nav-links {
          display: flex;
          gap: 4px;
        }
        .nav-link {
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          border-radius: 8px;
          transition: all 0.15s;
        }
        .nav-link:hover {
          color: var(--text);
          background: var(--bg-raised);
        }
        @media (max-width: 480px) {
          .nav-link { padding: 6px 10px; font-size: 12px; }
        }
      `}</style>
    </nav>
  );
}
