import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export function Layout() {
  return (
    <div className="shell">
      <header className="header">
        <div className="header__inner">
          <NavLink to="/" className="brand">
            Lvoq Stream
          </NavLink>
          <nav className="nav" aria-label="Legal pages">
            <NavLink to="/privacy" className="nav__link">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="nav__link">
              Terms
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Lvoq Stream. For Meta (Facebook) Login and
          Apple App Store compliance.
        </p>
      </footer>
    </div>
  );
}