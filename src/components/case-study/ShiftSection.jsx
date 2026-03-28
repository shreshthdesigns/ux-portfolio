import React from 'react';
import SectionLabel from './SectionLabel';

const leftItems = [
  { label: "Manual Analysis", icon: "📋" },
  { label: "Limited Visibility", icon: "👁️" },
  { label: "Weeks vs Days", icon: "⌛" },
];

const rightItems = [
  { label: "AI Powered", icon: "🤖" },
  { label: "Global Coverage", icon: "🌍" },
  { label: "Real-time Insights", icon: "⚡" },
];

const ShiftSection = () => (
  <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative" }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionLabel number="02" label="The Paradigm Shift" />

      <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
        {/* Before */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.2em", color: "var(--cosmic-muted-fg)", opacity: 0.6, textTransform: "uppercase", marginBottom: "1rem" }}>Before</p>
          {leftItems.map((item, i) => (
            <div key={item.label} className="cosmic-glass reveal" style={{ padding: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
              <span style={{ fontWeight: "500", color: "var(--cosmic-fg)" }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* After */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.2em", color: "var(--cosmic-blue)", opacity: 0.7, textTransform: "uppercase", marginBottom: "1rem" }}>After</p>
          {rightItems.map((item, i) => (
            <div key={item.label} className="cosmic-glass cosmic-glow-blue reveal" style={{ padding: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
              <span style={{ fontWeight: "500", color: "var(--cosmic-fg)" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow connector */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
        <div className="reveal" style={{ height: "1px", width: "10rem", background: "linear-gradient(90deg, transparent, var(--cosmic-blue), transparent)", opacity: 0.5 }} />
      </div>
    </div>
  </section>
);

export default ShiftSection;
