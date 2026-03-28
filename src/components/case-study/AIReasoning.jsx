import React from 'react';
import SectionLabel from './SectionLabel';
import GlowCard from './GlowCard';

const steps = [
  { label: "Understand Issue", desc: "Parse the raw log for user intent and context" },
  { label: "Detect UX Signals", desc: "Identify patterns indicating usability problems" },
  { label: "Map to Taxonomy", desc: "Classify against established UX categories" },
  { label: "Extract Evidence", desc: "Pull supporting data points and frequency" },
  { label: "Generate Insight", desc: "Produce actionable recommendation with confidence" },
];

const AIReasoning = () => (
  <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionLabel number="07" label="AI Reasoning" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
        {/* Reasoning stack */}
        <div>
          <h2 className="reveal" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "3rem" }}>
            Reasoning <span className="cosmic-text-gradient-blue">Stack</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {steps.map((step, i) => (
              <GlowCard key={step.label} glowColor={i % 2 === 0 ? "blue" : "purple"} delay={i * 0.1}>
                <div style={{ display: "flex", alignItems: "start", gap: "1rem" }}>
                  <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-blue)", opacity: 0.5, marginTop: "0.25rem" }}>0{i + 1}</span>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--cosmic-fg)" }}>{step.label}</h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", marginTop: "0.25rem" }}>{step.desc}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Example */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="cosmic-glass cosmic-glow-blue reveal" style={{ padding: "1.5rem", width: "100%" }}>
            <p style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-muted-fg)", opacity: 0.6, textTransform: "uppercase", marginBottom: "1rem" }}>Live Example</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ padding: "0.75rem", background: "rgba(0,0,0,0.2)", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.05)" }}>
                <p style={{ fontSize: "0.875rem", color: "var(--cosmic-muted-fg)", fontStyle: "italic" }}>"User cannot find simulation settings"</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(100, 160, 255, 0.4)" }}>
                <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(100, 160, 255, 0.2)" }} />
                <span style={{ fontSize: "0.75rem" }}>→</span>
                <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(100, 160, 255, 0.2)" }} />
              </div>
              <div style={{ padding: "0.75rem", background: "rgba(0,0,0,0.2)", borderRadius: "0.5rem", border: "1px solid rgba(100, 160, 255, 0.2)" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-blue)" }}>Category:</span>
                <span style={{ fontSize: "0.875rem", color: "var(--cosmic-fg)", marginLeft: "0.5rem" }}>Discoverability</span>
              </div>
              <div style={{ padding: "0.75rem", background: "rgba(0,0,0,0.2)", borderRadius: "0.5rem", border: "1px solid rgba(147, 51, 234, 0.2)" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-purple)" }}>Sub-type:</span>
                <span style={{ fontSize: "0.875rem", color: "var(--cosmic-fg)", marginLeft: "0.5rem" }}>Entry point issue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AIReasoning;
