import React from 'react';
import SectionLabel from './SectionLabel';

const pipelineSteps = [
  { label: "Gecko Data", active: false },
  { label: "Cleaning", active: false },
  { label: "Presidio", active: true, isShield: true },
  { label: "Masked Data", active: false },
  { label: "AI Processing", active: false },
];

const PrivacyLayer = () => (
  <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionLabel number="04" label="Privacy Layer" />

      <h2 className="reveal" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700", marginBottom: "1.5rem" }}>
        Engineered <span className="cosmic-text-gradient-blue">Trust</span>
      </h2>

      <p className="reveal" style={{ color: "var(--cosmic-muted-fg)", fontSize: "1.125rem", maxWidth: "36rem", marginBottom: "4rem" }}>
        Every data point passes through a privacy shield before reaching AI.
      </p>

      {/* Pipeline */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
        {pipelineSteps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div
              className={`cosmic-glass reveal ${step.isShield ? "cosmic-glow-cyan" : ""}`}
              style={{
                padding: "0.75rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: step.isShield ? "var(--cosmic-cyan)" : "var(--cosmic-fg)"
              }}
            >
              {step.isShield && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              )}
              {step.label}
            </div>
            {i < pipelineSteps.length - 1 && (
              <div style={{ width: "2rem", height: "1px", backgroundColor: "var(--cosmic-blue)", opacity: 0.2 }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Redacted text demo */}
      <div className="cosmic-glass cosmic-glow-cyan reveal" style={{ maxWidth: "32rem", margin: "0 auto", padding: "1.5rem" }}>
        <p style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-muted-fg)", opacity: 0.6, textTransform: "uppercase", marginBottom: "0.75rem" }}>Example</p>
        <p style={{ fontSize: "0.875rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6" }}>
          User <span style={{ backgroundColor: "rgba(185, 80, 55, 0.2)", color: "var(--cosmic-cyan)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontFamily: "monospace", fontSize: "0.75rem" }}>[REDACTED]</span> reported
          that the simulation in <span style={{ backgroundColor: "rgba(185, 80, 55, 0.2)", color: "var(--cosmic-cyan)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontFamily: "monospace", fontSize: "0.75rem" }}>[REDACTED]</span> workspace
          failed to load after update.
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-cyan)", opacity: 0.6, display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            PII removed
          </span>
          <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-cyan)", opacity: 0.6 }}>Safe for AI</span>
        </div>
      </div>
    </div>
  </section>
);

export default PrivacyLayer;
