import React, { useState } from 'react';
import SectionLabel from './SectionLabel';

const categories = [
  { label: "Discoverability", sub: ["Entry point issues", "Hidden features", "Search failures", "Menu hierarchy"], angle: 0 },
  { label: "Navigation", sub: ["Dead ends", "Loops", "Deep nesting"], angle: 60 },
  { label: "Learnability", sub: ["Onboarding gaps", "Tooltip absence", "Complex workflows"], angle: 120 },
  { label: "Feedback", sub: ["Missing confirmation", "Error clarity", "State visibility"], angle: 180 },
  { label: "Efficiency", sub: ["Redundant steps", "Slow paths", "Missing shortcuts"], angle: 240 },
  { label: "Consistency", sub: ["Pattern breaks", "Terminology mismatch"], angle: 300 },
];

const UXTaxonomy = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <SectionLabel number="08" label="UX Taxonomy" />

        <h2 className="reveal" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700", marginBottom: "4rem", textAlign: "center" }}>
          The UX <span className="cosmic-text-gradient-purple">Constellation</span>
        </h2>

        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "500px", aspectRatio: "1/1" }}>
            {/* Center node */}
            <div
              className="reveal"
              style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10
              }}
            >
              <div className="cosmic-glass cosmic-glow-blue" style={{ padding: "0.75rem 1.5rem", fontSize: "1.125rem", fontWeight: "700", color: "var(--cosmic-fg)" }}>
                UX
              </div>
            </div>

            {/* SVG lines */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 500 500">
              {categories.map((cat, i) => {
                const rad = (cat.angle * Math.PI) / 180;
                const x = 250 + Math.cos(rad) * 180;
                const y = 250 + Math.sin(rad) * 180;
                return (
                  <line
                    key={cat.label}
                    x1="250" y1="250" x2={x} y2={y}
                    stroke="var(--cosmic-blue)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    strokeOpacity="0.12"
                  />
                );
              })}
            </svg>

            {/* Category nodes */}
            {categories.map((cat, i) => {
              const rad = (cat.angle * Math.PI) / 180;
              const r = 38;
              const left = 50 + Math.cos(rad) * r;
              const top = 50 + Math.sin(rad) * r;

              return (
                <div
                  key={cat.label}
                  className="reveal"
                  style={{
                    position: "absolute", left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)", cursor: "pointer", zIndex: expanded === cat.label ? 30 : 20
                  }}
                  onClick={() => setExpanded(expanded === cat.label ? null : cat.label)}
                >
                  <div
                    className={`cosmic-glass ${expanded === cat.label ? "cosmic-glow-purple" : ""}`}
                    style={{
                      padding: "0.5rem 1rem", fontSize: "0.875rem", fontWeight: "500", color: "var(--cosmic-fg)", whiteSpace: "nowrap", transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  >
                    {cat.label}
                  </div>

                  {expanded === cat.label && (
                    <div
                      style={{
                        position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: "0.5rem", zIndex: 40
                      }}
                    >
                      <div className="cosmic-glass cosmic-glow-purple" style={{ padding: "0.75rem", minWidth: "160px", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {cat.sub.map((s) => (
                          <div key={s} style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--cosmic-purple)", opacity: 0.6 }} />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXTaxonomy;
