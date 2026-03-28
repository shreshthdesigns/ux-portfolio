import React from 'react';
import SectionLabel from './SectionLabel';

const chaosLabels = [
  { text: "Cognitive overload", x: "15%", y: "25%", rotate: -8 },
  { text: "Inconsistent interpretation", x: "55%", y: "18%", rotate: 5 },
  { text: "Hidden UX issues", x: "35%", y: "70%", rotate: -3 },
];

const logSnippets = [
  "Error: dialog not found", "User clicked 3x", "Feature unused",
  "Nav timeout", "Search returned 0", "Tooltip missing",
  "Menu collapsed", "Action failed", "Retry attempted",
  "Input cleared", "Session ended", "Load > 5s",
];

const ProblemSection = () => {
  return (
    <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <SectionLabel number="01" label="The Problem" />

        <h2 className="reveal" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700", marginBottom: "1.5rem" }}>
          Signal Lost in <span className="cosmic-text-gradient-purple">Noise</span>
        </h2>

        <p className="reveal" style={{ color: "var(--cosmic-muted-fg)", fontSize: "1.125rem", maxWidth: "36rem", marginBottom: "4rem" }}>
          Thousands of bug logs. No clear patterns. Designers drowning in data they can't interpret.
        </p>

        {/* Chaos visualization */}
        <div style={{ position: "relative", height: "24rem", marginBottom: "3rem" }}>
          {logSnippets.map((snippet, i) => (
            <div
              key={i}
              className="cosmic-glass reveal"
              style={{
                position: "absolute",
                padding: "0.375rem 0.75rem",
                fontSize: "0.75rem",
                color: "hsla(220, 20%, 88%, 0.4)",
                left: `${10 + (i % 4) * 22}%`,
                top: `${10 + Math.floor(i / 4) * 30}%`,
                animation: "cosmic-float 8s ease-in-out infinite",
                animationDelay: `${i * 0.8}s`,
                transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                pointerEvents: "none",
                whiteSpace: "nowrap"
              }}
            >
              {snippet}
            </div>
          ))}

          {chaosLabels.map((label, i) => (
            <div
              key={label.text}
              className="cosmic-glass cosmic-glow-purple reveal"
              style={{
                position: "absolute",
                left: label.x,
                top: label.y,
                zIndex: 10,
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "var(--cosmic-purple)",
                transform: `rotate(${label.rotate}deg)`
              }}
            >
              {label.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
