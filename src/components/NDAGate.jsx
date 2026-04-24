import { useState } from "react";

// Set to true to require password entry. Set to false to pre-fill and allow open access.
const NDA_ACTIVE = false;

const PASSKEY = "123";

export default function NDAGate({ projectId, onSuccess, onBack }) {
  const [input, setInput] = useState(NDA_ACTIVE ? "" : PASSKEY);
  const [error, setError] = useState(false);

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

          <h2 className="nda-title">🔒 NDA Protected</h2>

          <p className="nda-desc">
            This project is protected under NDA.
          </p>

          <p className="nda-desc">
            The case study uses reimagined UI screens that reflect the design thinking,
            problem-solving process, and outcomes of the actual work — while protecting
            proprietary product details. The visual language has been intentionally altered
            from MathWorks’ MATLAB and Simulink interfaces to respect confidentiality constraints.
          </p>

          <p className="nda-desc">
            The design decisions, research insights, and impact metrics are real.
          </p>

          <form onSubmit={handleSubmit} className="nda-form">

            <input
              type="password"
              placeholder="Enter Passkey"
              value={input}
              onChange={(e) => { if (NDA_ACTIVE) setInput(e.target.value); }}
              readOnly={!NDA_ACTIVE}
              className="nda-input"
            />

            <button type="submit" className="btn-primary">
              View Case Study
            </button>

          </form>

          {error && (
            <div className="nda-error">
              Incorrect passkey. Please try again.
            </div>
          )}

          <div className="nda-contact">
            Password is included in my job application. Don’t have it? Write to me at{" "}
            <a href="mailto:shubhamshreshthsingh@gmail.com">
              shubhamshreshthsingh@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}