import React from 'react';
import SectionLabel from './SectionLabel';

const HumanAICollab = () => (
  <section id="human" className="reveal" style={{ 
    margin: "4rem auto",
    maxWidth: "80rem",
    padding: "4rem 2rem",
    background: "#fdfdff",
    borderRadius: "24px",
    border: "1px solid rgba(0,0,0,0.08)",
    color: "#1a1a1b",
    position: "relative"
  }}>
    <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
      <SectionLabel number="08" label="Human-AI Collaboration" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", marginTop: "3rem", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem", color: "#05070a", letterSpacing: "-0.01em" }}>
            The <span style={{ color: "var(--cosmic-purple)" }}>Balance</span> of Power
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#475569", marginBottom: "2rem" }}>
            Gecko AI doesn't replace the designer; it amplifies their ability to process massive datasets. The interface is designed as a collaborative workspace where AI proposes and humans validate.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1.5rem", background: "white", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--cosmic-blue)" }} />
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0f172a" }}>AI Responsibility</h4>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: "1.5" }}>Pattern detection, data extraction, and preliminary categorization across thousands of agentic logs.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "white", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--cosmic-purple)" }} />
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0f172a" }}>Human Responsibility</h4>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: "1.5" }}>Strategic decision-making, validation, and contextual judgment to turn raw insights into product strategy.</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ 
            width: "100%", 
            maxWidth: "400px",
            aspectRatio: "1", 
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", 
            borderRadius: "32px",
            border: "1px solid rgba(0,0,0,0.04)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)"
          }}>
            {/* Minimal SVG Graphic representing the Venn overlap */}
            <svg viewBox="0 0 200 200" style={{ width: "80%", height: "80%" }}>
              <defs>
                <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--cosmic-blue)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--cosmic-blue)" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--cosmic-purple)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--cosmic-purple)" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <circle cx="85" cy="100" r="50" fill="url(#gradBlue)" stroke="var(--cosmic-blue)" strokeWidth="0.5" strokeDasharray="3 3" />
              <circle cx="115" cy="100" r="50" fill="url(#gradPurple)" stroke="var(--cosmic-purple)" strokeWidth="0.5" strokeDasharray="3 3" />
              <text x="60" y="100" fontSize="8" fontWeight="700" fill="var(--cosmic-blue)" textAnchor="middle">AI</text>
              <text x="140" y="100" fontSize="8" fontWeight="700" fill="var(--cosmic-purple)" textAnchor="middle">HUMAN</text>
              <circle cx="100" cy="100" r="15" fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" className="animate-cosmic-pulse" />
              <path d="M96 100 L104 100 M100 96 L100 104" stroke="#05070a" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HumanAICollab;
