import React, { useEffect, useRef, useState } from "react";
import ParticleField from "./case-study/ParticleField";
import HeroSection from "./case-study/HeroSection";
import ProblemSection from "./case-study/ProblemSection";
import ShiftSection from "./case-study/ShiftSection";
import DataUnderstanding from "./case-study/DataUnderstanding";
import PrivacyLayer from "./case-study/PrivacyLayer";
import SystemArchitecture from "./case-study/SystemArchitecture";
import AgenticAI from "./case-study/AgenticAI";
import AIReasoning from "./case-study/AIReasoning";
import UXTaxonomy from "./case-study/UXTaxonomy";
import HumanAICollab from "./case-study/HumanAICollab";
import InsightOutputs from "./case-study/InsightOutputs";
import ImpactSection from "./case-study/ImpactSection";
import FutureVision from "./case-study/FutureVision";
import DecisionTradeoffs from "./case-study/DecisionTradeoffs";
import ConnectorLine from "./case-study/ConnectorLine";

const GeckoDemo = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhase((p) => (p + 1) % 4);
    }, 3500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="cs-demo-window cosmic-glass animate-cosmic-float" style={{ marginTop: "2rem" }}>
      <div className="cs-demo-header">
        <div className="cs-demo-dots"><span className="red" /><span className="yellow" /><span className="green" /></div>
        <div className="cs-demo-title">Gecko AI - UX Intelligence Workspace</div>
      </div>
      <div className="cs-demo-body" style={{ background: "rgba(0,0,0,0.3)" }}>

        {/* Phase 0 & 1: Configuration Form */}
        <div className={`cs-demo-panel ${phase === 0 || phase === 1 ? 'active' : ''}`}>
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: ".5rem", color: "var(--cosmic-fg)" }}>New Analysis Run</h4>
            <p style={{ color: "var(--cosmic-muted-fg)", fontSize: ".9rem" }}>Configure the parameters for the agentic logs scan.</p>
          </div>

          <div className="cs-demo-form-group">
            <label style={{ color: "var(--cosmic-muted-fg)" }}>Target Release Versions</label>
            <div className={`cs-demo-select ${phase === 1 ? 'selected' : ''}`} style={{ background: "rgba(255,255,255,0.05)", borderColor: "var(--cosmic-border)" }}>
              {phase === 0 ? "Select version..." : "R2024a, R2024b"}
            </div>
          </div>

          <button className={`cs-demo-btn ${phase === 1 ? 'clicked' : ''}`} style={{ background: "var(--cosmic-blue)", color: "white" }}>
            Run Extraction Engine →
          </button>
        </div>

        {/* Phase 2: Processing Animation */}
        <div className={`cs-demo-panel processing ${phase === 2 ? 'active' : ''}`}>
          <div className="cs-demo-spinner" style={{ borderColor: "var(--cosmic-blue)", borderTopColor: "transparent" }}></div>
          <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginTop: "1.5rem", color: "var(--cosmic-fg)" }}>Agent Execution...</h4>
          <div className="cs-demo-logs" style={{ background: "rgba(0,0,0,0.2)" }}>
            <div className="log-line" style={{ color: "var(--cosmic-muted-fg)" }}>[System] 4,192 bug reports loaded.</div>
            <div className="log-line active" style={{ color: "var(--cosmic-blue)" }}>[AI Agent] Mapping taxonomy nodes...</div>
          </div>
        </div>

        {/* Phase 3: Dashboard Output */}
        <div className={`cs-demo-panel dashboard ${phase === 3 ? 'active' : ''}`}>
          <div className="dashboard-header">
            <h4 style={{ color: "var(--cosmic-fg)" }}>Analysis Complete</h4>
            <span className="badge" style={{ background: "var(--cosmic-glow-blue)", color: "var(--cosmic-blue)" }}>18 Critical Issues</span>
          </div>
          <div className="dashboard-grid">
            <div className="cosmic-glass cosmic-glow-blue" style={{ padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--cosmic-blue)" }}>12</div>
              <div style={{ fontSize: "0.7rem", color: "var(--cosmic-muted-fg)" }}>Friction Points</div>
            </div>
            <div className="cosmic-glass cosmic-glow-purple" style={{ padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--cosmic-purple)" }}>6</div>
              <div style={{ fontSize: "0.7rem", color: "var(--cosmic-muted-fg)" }}>Model Conflicts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CaseStudyGeckoAI({ onBack, displaySections, project }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    window.scrollTo(0, 0);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="case-study-page gecko-dark-theme" ref={containerRef} style={{ background: "var(--cosmic-bg)", minHeight: "100vh" }}>
      <ParticleField />
      
      {/* STICKY NAV BAR */}
      <div className="cs-topbar" style={{ background: "rgba(3, 5, 10, 0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--cosmic-border)" }}>
        <div className="cs-topbar-inner" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <button className="cs-back" onClick={onBack} style={{ color: "var(--cosmic-fg)" }}>
            <span className="cs-back-arrow">←</span>
            Back to Work
          </button>
          <div className="cs-section-nav">
            {displaySections.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`} 
                style={{ color: "var(--cosmic-muted-fg)", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.1em" }}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="cs-content" style={{ position: "relative", zIndex: 1 }}>
        <div id="overview">
          <HeroSection />
        </div>
        
        <ConnectorLine />
        
        <div id="problem">
          <ProblemSection />
        </div>
        
        <ConnectorLine />
        
        <div id="opportunity">
          <ShiftSection />
        </div>
        
        <ConnectorLine />
        
        <div id="data">
          <DataUnderstanding />
        </div>
        
        <ConnectorLine />
        
        <div id="privacy">
          <PrivacyLayer />
        </div>
        
        <ConnectorLine />
        
        <div id="architecture">
          <SystemArchitecture />
        </div>
        
        <ConnectorLine />
        
        <div id="agents">
          <AgenticAI />
        </div>
        
        <ConnectorLine />
        
        <div id="reasoning">
          <AIReasoning />
        </div>
        
        <ConnectorLine />
        
        <div id="taxonomy">
          <UXTaxonomy />
        </div>
        
        <ConnectorLine />
        
        <div id="human">
          <HumanAICollab />
        </div>
        
        <ConnectorLine />

        <div id="tradeoffs">
          <DecisionTradeoffs />
        </div>
        
        <ConnectorLine />
        
        <div id="insights">
          <InsightOutputs />
        </div>
        
        <ConnectorLine />
        
        <div id="impact">
          <ImpactSection />
        </div>
        
        <ConnectorLine />
        
        <div id="future">
          <FutureVision />
        </div>
        
        <div id="demo" className="cosmic-section-padding" style={{ maxWidth: "64rem", margin: "0 auto", textAlign: "center" }}>
          <h2 className="reveal" style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", color: "var(--cosmic-fg)" }}>Interactive Prototype</h2>
          <p className="reveal" style={{ color: "var(--cosmic-muted-fg)", marginBottom: "4rem" }}>Conceptualized flow simulating the user journey through the Gecko AI workspace.</p>
          <div className="reveal">
            <GeckoDemo />
          </div>
        </div>
        
        <div style={{ height: "10rem" }} />
      </main>
    </div>
  );
}
