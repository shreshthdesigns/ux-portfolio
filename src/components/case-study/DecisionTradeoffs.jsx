import React from 'react';
import SectionLabel from './SectionLabel';

const decisions = [
  {
    num: "01",
    title: "Analysis Architecture",
    tension: "Real-time stream vs. Batch processing",
    final: "On-demand Agentic Batch Processing",
    why: "Real-time streams caused alert fatigue. Batch processing allows the AI to develop deeper 'reasoning chains' before surfacing insights.",
    delay: 0.1
  },
  {
    num: "02",
    title: "Insight Classification",
    tension: "Generic bugs vs. UX Taxonomy",
    final: "Multi-dimensional UX Constellation Mapping",
    why: "Generic bug labels lacked engineering context. Mapping issues to a UX taxonomy allowed for direct translation into product requirements.",
    delay: 0.2
  },
  {
    num: "03",
    title: "Human-AI Interaction",
    tension: "Automated fixes vs. Strategic guidance",
    final: "AI Exploration with Human Validation",
    why: "Fully automated fixes lacked trust in enterprise environments. The AI now proposes 'Reasoning Blocks' that engineers can validate or pivot.",
    delay: 0.3
  }
];

const DecisionTradeoffs = () => (
  <section id="tradeoffs" className="reveal" style={{ 
    margin: "4rem auto", 
    maxWidth: "80rem", 
    padding: "4rem 2rem",
    background: "#fdfdff", // Very light off-white
    borderRadius: "24px",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.03)",
    position: "relative",
    color: "#1a1a1b" // Dark charcoal
  }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <div style={{ marginBottom: "4rem", textAlign: "left" }}>
        <span style={{ 
          fontSize: "0.75rem", 
          textTransform: "uppercase", 
          letterSpacing: "0.2em", 
          color: "var(--cosmic-blue)",
          fontWeight: "700",
          display: "block",
          marginBottom: "1rem"
        }}>
          Design Strategy
        </span>
        <h2 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "800", 
          color: "#05070a",
          letterSpacing: "-0.02em"
        }}>
          Decisions & <span style={{ color: "var(--cosmic-blue)" }}>Trade-offs</span>
        </h2>
        <p style={{ 
          marginTop: "1.5rem", 
          color: "#4a4d55", 
          fontSize: "1.1rem", 
          lineHeight: "1.6",
          maxWidth: "600px"
        }}>
          Balancing technical feasibility with UX excellence. Every pivotal choice was evaluated against enterprise scale and engineer trust.
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "2rem" 
      }}>
        {decisions.map((d, i) => (
          <div key={d.num} className="reveal" style={{ 
            background: "white", 
            border: "1px solid rgba(0,0,0,0.06)", 
            borderRadius: "16px",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ 
                fontFamily: "monospace", 
                fontSize: "0.875rem", 
                color: "var(--cosmic-blue)", 
                fontWeight: "600" 
              }}>
                {d.num}
              </span>
              <div style={{ width: "30px", height: "1px", background: "rgba(0,0,0,0.05)" }} />
            </div>

            <div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#05070a", marginBottom: "0.5rem" }}>
                {d.title}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>
                {d.tension}
              </p>
            </div>

            <div style={{ 
              background: "#f1f5f9", 
              padding: "1rem", 
              borderRadius: "8px", 
              borderLeft: "3px solid var(--cosmic-blue)" 
            }}>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", fontWeight: "700", color: "var(--cosmic-blue)", display: "block", marginBottom: "0.25rem" }}>Final Decision</span>
              <p style={{ fontSize: "0.95rem", fontWeight: "600", color: "#0f172a" }}>{d.final}</p>
            </div>

            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#475569" }}>
              {d.why}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DecisionTradeoffs;
