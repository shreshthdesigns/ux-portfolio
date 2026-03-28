import React from 'react';

const SectionLabel = ({ number, label }) => (
  <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
    <span style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.2em", color: "var(--cosmic-blue)", opacity: 0.6, textTransform: "uppercase" }}>
      {number}
    </span>
    <div style={{ height: "1px", width: "3rem", backgroundColor: "var(--cosmic-blue)", opacity: 0.3 }} />
    <span style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.2em", color: "var(--cosmic-muted-fg)", textTransform: "uppercase" }}>
      {label}
    </span>
  </div>
);

export default SectionLabel;
