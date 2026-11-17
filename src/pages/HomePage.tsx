import { Link } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  return (
    <article className="card">
      <h1>Legal documents</h1>
      <p className="lede">
        Public privacy policy and terms of service for the Lvoq Stream mobile app
        (iOS, iPadOS, and macOS). Use these URLs in the Meta Developer Console,
        Apple App Store Connect, and in-app settings.
      </p>
      <ul className="link-list">
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms">Terms of Service</Link>
        </li>
        <li>
          <Link to="/auth/facebook">Facebook OAuth callback</Link>
          <span className="hint"> (Meta redirect URI)</span>
        </li>
      </ul>
    </article>
  );
}