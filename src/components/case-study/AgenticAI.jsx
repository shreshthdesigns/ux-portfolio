import React, { useState } from 'react';
import SectionLabel from './SectionLabel';

const agents = [
  { id: "data", label: "Data Agent", desc: "Ingests and preprocesses raw Gecko log data for downstream analysis.", x: 50, y: 10 },
  { id: "context", label: "Context Agent", desc: "Enriches logs with product context, user journey stage, and feature metadata.", x: 20, y: 40 },
  { id: "classify", label: "UX Classification Agent", desc: "Maps issues to UX taxonomy categories using fine-tuned prompts.", x: 80, y: 40 },
  { id: "pattern", label: "Pattern Agent", desc: "Detects recurring themes and clusters across thousands of classified entries.", x: 30, y: 75 },
  { id: "insight", label: "Insight Agent", desc: "Generates actionable UX recommendations with supporting evidence.", x: 70, y: 75 },
];

const connections = [
  [0, 1], [0, 2], [1, 3], [2, 4], [1, 4], [2, 3], [3, 4],
];

const AgenticAI = () => {
  const [activeAgent, setActiveAgent] = useState(null);

  return (
    <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <SectionLabel number="06" label="Agentic AI" />

        <h2 className="reveal" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700", marginBottom: "4rem" }}>
          Neural <span className="cosmic-text-gradient-purple">Network</span> of Agents
        </h2>

        <div style={{ position: "relative", height: "400px" }}>
          {/* SVG connections */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 100 100" preserveAspectRatio="none">
            {connections.map(([from, to], i) => (
              <line
                key={i}
                x1={agents[from].x}
                y1={agents[from].y}
                x2={agents[to].x}
                y2={agents[to].y}
                stroke="var(--cosmic-blue)"
                strokeWidth="0.2"
                strokeOpacity="0.15"
              />
            ))}
          </svg>

          {agents.map((agent, i) => (
            <div
              key={agent.id}
              className="reveal"
              style={{
                position: "absolute",
                left: `${agent.x}%`,
                top: `${agent.y}%`,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                zIndex: activeAgent === agent.id ? 20 : 10
              }}
              onMouseEnter={() => setActiveAgent(agent.id)}
              onMouseLeave={() => setActiveAgent(null)}
            >
              <div
                className={`cosmic-glass ${activeAgent === agent.id ? "cosmic-glow-blue" : ""}`}
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  transform: activeAgent === agent.id ? "scale(1.1)" : "scale(1)",
                  minWidth: "120px"
                }}
              >
                <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--cosmic-fg)", whiteSpace: "nowrap" }}>{agent.label}</div>
                <div
                  style={{
                    maxHeight: activeAgent === agent.id ? "100px" : "0",
                    opacity: activeAgent === agent.id ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    marginTop: activeAgent === agent.id ? "0.5rem" : "0"
                  }}
                >
                  <p style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", maxWidth: "180px", lineHeight: "1.4" }}>
                    {agent.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticAI;
