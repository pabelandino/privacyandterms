import "./LegalPage.css";

const EFFECTIVE = "November 17, 2025";
const CONTACT = "support@lvoqstream.com";

export function TermsPage() {
  return (
    <article className="legal prose">
      <header className="legal__header">
        <p className="legal__kicker">Lvoq Stream</p>
        <h1>Terms of Service</h1>
        <p className="legal__effective">Effective date: {EFFECTIVE}</p>
      </header>

      <p>
        By downloading or using Lvoq Stream (&quot;the App&quot;), you agree to these
        Terms. If you do not agree, do not use the App.
      </p>

      <h2>1. The service</h2>
      <p>
        Lvoq Stream provides tools for multi-camera video production, directing,
        optional team intercom, graphics overlays, and optional live streaming to
        destinations you configure (including Facebook Live and RTMPS).
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be old enough to form a binding contract in your jurisdiction and, if
        required, have permission to stream content you publish.
      </p>

      <h2>3. Your content and conduct</h2>
      <ul>
        <li>You are responsible for all video, audio, and graphics you capture or stream.</li>
        <li>
          You must have rights to broadcast your content and comply with Facebook,
          platform, and local laws (copyright, privacy, publicity, etc.).
        </li>
        <li>
          You may not use the App for unlawful harassment, hate, exploitation, or
          interference with others&apos; networks without authorization.
        </li>
      </ul>

      <h2>4. Third-party services</h2>
      <p>
        Facebook Login, Apple platforms, and your streaming providers have their own
        terms. Your use of those services is between you and those providers.
      </p>

      <h2>5. License</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable license to use the App
        for personal or internal business production in accordance with these Terms and
        the Apple App Store or Mac App Store rules, as applicable.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. LIVE
        STREAMING DEPENDS ON YOUR NETWORK, DEVICES, AND THIRD-PARTY SERVICES; WE DO NOT
        GUARANTEE UNINTERRUPTED OR ERROR-FREE BROADCASTS.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
        DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE APP.
      </p>

      <h2>8. Termination</h2>
      <p>
        You may stop using the App at any time. We may suspend access if you violate
        these Terms or if required to protect the service or others.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these Terms. The effective date on this page will change. Your
        continued use after updates constitutes acceptance.
      </p>

      <h2>10. Contact</h2>
      <p>
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>
    </article>
  );
}