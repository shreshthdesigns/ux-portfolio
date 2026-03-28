import React from 'react';
import SectionLabel from './SectionLabel';
import GlowCard from './GlowCard';

const insights = [
  {
    category: "Discoverability",
    issue: "Toolbox items hidden under deep sub-menus",
    evidence: "342 failed attempts in Simulink navigation",
    frequency: "High",
  },
  {
    category: "Consistency",
    issue: "Varying terminology for 'Simulation Settings'",
    evidence: "User search queries use 5+ different terms",
    frequency: "Medium",
  },
  {
    category: "Learnability",
    issue: "Missing contextual help for new toolboxes",
    evidence: "Longer task completion times for first-time users",
    frequency: "High",
  },
];

const InsightOutputs = () => (
  <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionLabel number="10" label="Insights" />

      <h2 className="reveal" style={{ fontSize: "clamp(2.125rem, 5vw, 3rem)", fontWeight: "700", marginBottom: "4rem" }}>
        Actionable <span className="cosmic-text-gradient-cyan">Outputs</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {insights.map((ins, i) => (
          <GlowCard key={ins.category} glowColor={i % 2 === 0 ? "blue" : "purple"} delay={i * 0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.625rem", fontFamily: "monospace", color: i % 2 === 0 ? "var(--cosmic-blue)" : "var(--cosmic-purple)", opacity: 0.7, textTransform: "uppercase" }}>{ins.category}</span>
                <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", backgroundColor: i % 2 === 0 ? "var(--cosmic-blue)" : "var(--cosmic-purple)" }} />
              </div>
              <div>
                <span style={{ fontSize: "0.625rem", fontFamily: "monospace", color: "var(--cosmic-muted-fg)", opacity: 0.5, textTransform: "uppercase" }}>Issue</span>
                <p style={{ fontSize: "0.875rem", color: "var(--cosmic-fg)", fontWeight: "500", marginTop: "0.25rem" }}>{ins.issue}</p>
              </div>
              <div>
                <span style={{ fontSize: "0.625rem", fontFamily: "monospace", color: "var(--cosmic-muted-fg)", opacity: 0.5, textTransform: "uppercase" }}>Evidence</span>
                <p style={{ fontSize: "0.875rem", color: "var(--cosmic-muted-fg)", marginTop: "0.25rem", lineHeight: "1.5" }}>{ins.evidence}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize: "0.625rem", fontFamily: "monospace", color: "var(--cosmic-muted-fg)", opacity: 0.5, textTransform: "uppercase" }}>Frequency</span>
                <span style={{ 
                  fontSize: "0.625rem", fontFamily: "monospace", padding: "0.125rem 0.5rem", borderRadius: "0.25rem",
                  backgroundColor: ins.frequency === "High" ? "rgba(100, 160, 255, 0.1)" : "rgba(147, 51, 234, 0.1)",
                  color: ins.frequency === "High" ? "var(--cosmic-blue)" : "var(--cosmic-purple)"
                }}>
                  {ins.frequency}
                </span>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>
);

export default InsightOutputs;
