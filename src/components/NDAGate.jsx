import { useState } from "react";

export default function NDAGate({ projectId, onSuccess, onBack }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const PASSKEY = "clarity2024"; // change to whatever you want

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSKEY) {
      onSuccess(projectId);
    } else {
      setError(true);
    }
  };

  return (
    <div className="nda-page">
      <div className="wrap nda-wrap">

        <button className="back-btn" onClick={onBack}>
          ← Back to Work
        </button>

        <div className="nda-box">

          <div className="nda-label">Confidential Case Study</div>

          <h2 className="nda-title">
            Restricted Access
          </h2>

          <p className="nda-desc">
            This case study includes proprietary enterprise workflows,
            internal product research, and system-level insights developed
            at MathWorks.
          </p>

          <p className="nda-desc">
            Access is restricted due to NDA constraints.
          </p>

          <form onSubmit={handleSubmit} className="nda-form">

            <input
              type="password"
              placeholder="Enter Passkey"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="nda-input"
            />

            <button type="submit" className="btn-primary">
              Unlock Case Study
            </button>

          </form>

          {error && (
            <div className="nda-error">
              Incorrect passkey. Please try again.
            </div>
          )}

          <div className="nda-contact">
            If you don’t have access, please contact me at:
            <br />
            <a href="mailto:shubhamshreshthsingh@gmail.com">
              shubhamshreshthsingh@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}