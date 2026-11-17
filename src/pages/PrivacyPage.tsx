import "./LegalPage.css";

const EFFECTIVE = "November 17, 2025";
const CONTACT = "support@lvoqstream.com";

export function PrivacyPage() {
  return (
    <article className="legal prose">
      <header className="legal__header">
        <p className="legal__kicker">Lvoq Stream</p>
        <h1>Privacy Policy</h1>
        <p className="legal__effective">Effective date: {EFFECTIVE}</p>
      </header>

      <p>
        This Privacy Policy describes how Lvoq Stream (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) collects, uses, and shares information when you use our
        mobile and desktop application (Bundle ID <code>com.lvoqstream.app</code>),
        including optional Facebook Login and live streaming features.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Account and profile (optional):</strong> If you sign in with
          Facebook, we receive information you authorize (such as name and profile
          identifier) and tokens needed to access Facebook Pages you choose for
          live broadcasting.
        </li>
        <li>
          <strong>Camera and microphone:</strong> When you use the app as a camera
          source or director, we process video and audio you capture to stream or
          record within the app. This stays on your devices and your local network
          unless you start a network broadcast you configure.
        </li>
        <li>
          <strong>Local network:</strong> The app discovers directors, cameras, and
          related services on your Wi‑Fi using Bonjour/mDNS. We do not send your local
          IP addresses to our servers by default.
        </li>
        <li>
          <strong>Streaming destinations:</strong> If you configure RTMPS or Facebook
          Live, stream metadata and credentials you enter are stored on your device to
          connect to those services.
        </li>
        <li>
          <strong>Diagnostics:</strong> We may collect crash or performance data only
          if you enable system-level diagnostics or if we add optional in-app
          feedback; we do not sell this data.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>Operate multi-camera directing, preview/program switching, and intercom.</li>
        <li>Authenticate with Facebook when you choose Facebook Login.</li>
        <li>Publish live video only when you explicitly start a broadcast.</li>
        <li>Comply with law and protect the security of the app.</li>
      </ul>

      <h2>3. Facebook (Meta) Login</h2>
      <p>
        Facebook Login is provided by Meta Platforms, Inc. Their use of your data is
        governed by{" "}
        <a
          href="https://www.facebook.com/policy.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta&apos;s Privacy Policy
        </a>
        . We receive only the permissions you approve in the Facebook dialog (such as
        public profile and, if you authorize, Page management permissions needed for
        Facebook Live). You can disconnect Facebook at any time in the app settings.
      </p>

      <h2>4. Sharing</h2>
      <p>
        We do not sell your personal information. We share data only with service
        providers you direct (e.g., Facebook, your RTMPS server) when you use those
        features, or when required by law.
      </p>

      <h2>5. Retention</h2>
      <p>
        Session tokens and preferences are stored on your device. You can remove
        Facebook session data by signing out in the app. Uninstalling the app removes
        locally stored app data unless backed up by your device.
      </p>

      <h2>6. Your choices</h2>
      <ul>
        <li>Deny camera, microphone, local network, or tracking permissions in iOS/macOS settings (some features may not work).</li>
        <li>Sign out of Facebook in the app.</li>
        <li>Request access or deletion by emailing us (see Contact).</li>
      </ul>

      <h2>7. Children</h2>
      <p>
        Lvoq Stream is not directed at children under 13. We do not knowingly collect
        personal information from children under 13.
      </p>

      <h2>8. International users</h2>
      <p>
        If you use the app outside your home country, your information may be processed
        where you and our service providers operate, including the United States (Meta,
        Apple infrastructure).
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update this policy. We will post the new effective date on this page.
        Continued use after changes means you accept the updated policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions or data requests:{" "}
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>
    </article>
  );
}