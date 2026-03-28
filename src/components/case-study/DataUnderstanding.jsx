import React from 'react';
import SectionLabel from './SectionLabel';
import GlowCard from './GlowCard';

const structuredFields = [
  { label: "Product", value: "MATLAB" },
  { label: "Component", value: "Simulink" },
  { label: "Severity", value: "Medium" },
  { label: "Frequency", value: "142 reports" },
];

const unstructuredSnippets = [
  "User expected to find simulation settings under File menu...",
  "Cannot locate the toolbox after recent update...",
  "Navigation between workspace and editor feels disconnected...",
];

const DataUnderstanding = () => (
  <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionLabel number="03" label="Data Understanding" />

      <h2 className="reveal" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700", marginBottom: "4rem" }}>
        Decoding the <span className="cosmic-text-gradient-blue">Signal</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        <GlowCard glowColor="blue">
          <h3 style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.2em", color: "var(--cosmic-blue)", opacity: 0.7, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Structured Data
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {structuredFields.map((f) => (
              <div key={f.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "0.5rem", borderBottom: "1px solid hsla(220, 20%, 88%, 0.1)" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--cosmic-muted-fg)" }}>{f.label}</span>
                <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--cosmic-fg)", fontFamily: "monospace" }}>{f.value}</span>
              </div>
            ))}
          </div>
        </GlowCard>

        <GlowCard glowColor="purple" delay={0.15}>
          <h3 style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.2em", color: "var(--cosmic-purple)", opacity: 0.7, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Unstructured Data
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {unstructuredSnippets.map((s, i) => (
              <div key={i} style={{ fontSize: "0.875rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", padding: "0.75rem", background: "rgba(0,0,0,0.2)", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.05)" }}>
                "{s}"
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ height: "1px", width: "2rem", backgroundColor: "var(--cosmic-cyan)", opacity: 0.5 }} />
            <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-cyan)", opacity: 0.7 }}>UX signals hidden here</span>
          </div>
        </GlowCard>
      </div>
    </div>
  </section>
);

export default DataUnderstanding;
