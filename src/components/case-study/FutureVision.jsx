import React from 'react';
import SectionLabel from './SectionLabel';

const steps = [
  { label: "Standalone Tool", desc: "Internal analysis prototype", status: "done" },
  { label: "Integrated Gecko Layer", desc: "Embedded in existing workflows", status: "current" },
  { label: "Predictive UX Intelligence", desc: "Anticipate issues before they emerge", status: "future" },
];

const FutureVision = () => (
  <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative" }}>
    <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
      <SectionLabel number="12" label="Future Vision" />

      <h2 className="reveal" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700", marginBottom: "5rem", textAlign: "center" }}>
        The Road <span className="cosmic-text-gradient-blue">Ahead</span>
      </h2>

      <div style={{ position: "relative" }}>
        {/* Timeline line */}
        <div style={{ position: "absolute", left: "1.5rem", top: 0, bottom: 0, width: "1px", background: "linear-gradient(180deg, transparent, rgba(100, 160, 255, 0.2), transparent)" }} />

        <div style={{ gap: "4rem", display: "flex", flexDirection: "column" }}>
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="reveal"
              style={{ position: "relative", display: "flex", alignItems: "center", gap: "2rem" }}
            >
              {/* Dot */}
              <div style={{ position: "absolute", left: "1.5rem", transform: "translateX(-50%)", zIndex: 10 }}>
                <div 
                  style={{ 
                    width: "0.75rem", height: "0.75rem", borderRadius: "50%", 
                    backgroundColor: step.status === "done" ? "var(--cosmic-blue)" : step.status === "current" ? "var(--cosmic-purple)" : "rgba(255,255,255,0.1)",
                    boxShadow: step.status === "current" ? "0 0 10px var(--cosmic-purple)" : "none",
                    animation: step.status === "current" ? "cosmic-pulse-glow 2s infinite" : "none"
                  }} 
                />
              </div>

              {/* Content */}
              <div style={{ paddingLeft: "3.5rem" }}>
                <div className={`cosmic-glass ${step.status === "current" ? "cosmic-glow-purple" : ""}`} style={{ padding: "1.5rem" }}>
                  <div style={{ fontSize: "0.625rem", fontFamily: "monospace", color: "var(--cosmic-muted-fg)", opacity: 0.5, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    {step.status === "done" ? "Completed" : step.status === "current" ? "In Progress" : "Next"}
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "0.25rem" }}>{step.label}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--cosmic-muted-fg)" }}>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="reveal" style={{ textAlign: "center", marginTop: "8rem", paddingBottom: "3rem" }}>
        <p style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.2em", color: "var(--cosmic-muted-fg)", opacity: 0.4, textTransform: "uppercase" }}>
          Designed with systems thinking
        </p>
        <div style={{ height: "1px", width: "5rem", backgroundColor: "var(--cosmic-blue)", opacity: 0.15, margin: "1rem auto 0" }} />
      </div>
    </div>
    
    <style>{`
      @keyframes cosmic-pulse-glow {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
    `}</style>
  </section>
);

export default FutureVision;
