import { useEffect, useState } from "react";
import "./FacebookCallbackPage.css";

export function FacebookCallbackPage() {
  const [status, setStatus] = useState<"loading" | "complete" | "error">("loading");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("access_token=")) {
      setStatus("complete");
      return;
    }
    if (hash.includes("error=")) {
      setStatus("error");
      return;
    }
    if (!hash) {
      setStatus("complete");
    }
  }, []);

  return (
    <article className="callback">
      {status === "loading" && <p>Completing Facebook sign-in…</p>}
      {status === "complete" && (
        <>
          <h1>Sign-in complete</h1>
          <p>
            You can close this window and return to Lvoq Stream. This page is used as
            the Meta OAuth redirect URL.
          </p>
        </>
      )}
      {status === "error" && (
        <>
          <h1>Sign-in did not complete</h1>
          <p>
            Facebook reported an error. Close this window and try again from the app.
          </p>
        </>
      )}
    </article>
  );
}