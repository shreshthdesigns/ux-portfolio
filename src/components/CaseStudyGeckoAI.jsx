import { useEffect, useState, useRef } from "react";

const GeckoDemo = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhase((p) => (p + 1) % 4);
    }, 3500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="cs-demo-window">
      <div className="cs-demo-header">
        <div className="cs-demo-dots"><span className="red" /><span className="yellow" /><span className="green" /></div>
        <div className="cs-demo-title">Gecko AI - UX Intelligence Workspace</div>
      </div>
      <div className="cs-demo-body">

        {/* Phase 0 & 1: Configuration Form */}
        <div className={`cs-demo-panel ${phase === 0 || phase === 1 ? 'active' : ''}`}>
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: ".5rem" }}>New Analysis Run</h4>
            <p style={{ color: "var(--ink2)", fontSize: ".9rem" }}>Configure the parameters for the agentic logs scan.</p>
          </div>

          <div className="cs-demo-form-group">
            <label>Target Release Versions</label>
            <div className={`cs-demo-select ${phase === 1 ? 'selected' : ''}`}>
              {phase === 0 ? "Select version..." : "R2024a, R2024b"}
            </div>
          </div>

          <div className="cs-demo-form-group">
            <label>Analysis Framework</label>
            <div className={`cs-demo-select ${phase === 1 ? 'selected' : ''}`}>
              {phase === 0 ? "Select objective..." : "Overall Usability & Friction"}
            </div>
          </div>

          <button className={`cs-demo-btn ${phase === 1 ? 'clicked' : ''}`}>
            Run Extraction Engine →
          </button>

          {/* Simulated Cursor */}
          <div className={`cs-demo-cursor phase-${phase}`}>
            <svg width="24" height="36" viewBox="0 0 24 36" fill="none"><path d="M1 1L10.3235 34.1953L13.5678 21.054L23.8347 13.9103L1 1Z" fill="#1a1a1a" stroke="white" strokeWidth="2" /></svg>
          </div>
        </div>

        {/* Phase 2: Processing Animation */}
        <div className={`cs-demo-panel processing ${phase === 2 ? 'active' : ''}`}>
          <div className="cs-demo-spinner"></div>
          <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginTop: "1.5rem" }}>Agent Execution in Progress</h4>

          <div className="cs-demo-logs">
            <div className="log-line">[System] 4,192 bug reports loaded.</div>
            <div className="log-line">[Presidio] PII Masking complete (12s).</div>
            <div className="log-line">[AI Agent] Extracting Discoverability signals...</div>
            <div className="log-line active">[AI Agent] Mapping taxonomy nodes ▰▰▰▱▱</div>
          </div>
        </div>

        {/* Phase 3: Dashboard Output */}
        <div className={`cs-demo-panel dashboard ${phase === 3 ? 'active' : ''}`}>
          <div className="dashboard-header">
            <h4>Analysis Complete</h4>
            <span className="badge">18 Critical UX Issues Found</span>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card stat">
              <div className="stat-value">12</div>
              <div className="stat-label">Discoverability Friction</div>
            </div>
            <div className="dashboard-card stat">
              <div className="stat-value">6</div>
              <div className="stat-label">Mental Model Conflicts</div>
            </div>
            <div className="dashboard-card full">
              <div style={{ fontSize: ".8rem", color: "var(--ai-accent)", fontWeight: "600", marginBottom: ".5rem" }}>TOP INSIGHT</div>
              <div style={{ fontWeight: "600", fontSize: "1rem" }}>Simulation Target Locator</div>
              <div style={{ fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem" }}>"Users failed to locate the panel entry point..." (31 reports)</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const AIPipelineDiagram = () => {
  const steps = [
    { label: "Gecko API", desc: "Source of issue logs", type: "data" },
    { label: "Data Extraction", desc: "Retrieving logs & metadata", type: "data" },
    { label: "Data Cleaning", desc: "Removing duplicates & formatting text", type: "data" },
    { label: "PII Detection", desc: "Microsoft Presidio engine detecting customer info", type: "security" },
    { label: "Anonymization", desc: "Masking personal customer data", type: "security" },
    { label: "Context Enrichment", desc: "Adding product & workflow context", type: "data" },
    { label: "ChatGPT API", desc: "Analyzing logs with LLM reasoning", type: "ai" },
    { label: "UX Classification", desc: "Mapping issues to usability taxonomy", type: "analytics" },
    { label: "Pattern Detection", desc: "Clustering recurring UX problems", type: "analytics" },
    { label: "Insight Store", desc: "Repository of finalized UX insights", type: "analytics" }
  ];

  const icons = {
    data: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>,
    security: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    ai: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
    analytics: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
  };

  return (
    <div className="cs-ai-pipeline-container" style={{
      width: '100%',
      padding: '2.5rem',
      background: '#fafafa',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      marginTop: '3rem',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* Continuous background line */}
        <div style={{ position: 'absolute', top: '16px', bottom: '16px', left: '15px', width: '2px', background: 'rgba(0,0,0,0.06)' }}></div>

        {steps.map((step, index) => {
          let colorTheme = { bg: '#fff', color: '#4a5568', border: '#cbd5e0' };
          if (step.type === 'security') colorTheme = { bg: '#f0fff4', color: '#276749', border: '#48bb78' };
          else if (step.type === 'ai') colorTheme = { bg: 'var(--ai-accent-light)', color: 'var(--ai-accent)', border: 'var(--ai-accent)' };
          else if (step.type === 'analytics') colorTheme = { bg: '#ebf8ff', color: '#2b6cb0', border: '#3182ce' };

          return (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: index === steps.length - 1 ? 0 : '1.25rem',
              position: 'relative',
              zIndex: 1
            }}>
              {/* Icon Circle */}
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: colorTheme.bg,
                border: `2px solid ${colorTheme.border}`,
                color: colorTheme.color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                boxShadow: '0 0 0 4px #fafafa' // match container background to "cut out" the line
              }}>
                {icons[step.type]}
              </div>

              {/* Text Content */}
              <div style={{
                marginLeft: '1.25rem',
                display: 'flex',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: '0.5rem',
                background: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                flex: 1,
                boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
              }}>
                <div style={{ fontWeight: '600', color: 'var(--ink)' }}>{index + 1}. {step.label}</div>
                <div style={{ color: '#cbd5e0' }}>—</div>
                <div style={{ color: 'var(--ink2)', fontSize: '0.9rem' }}>{step.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const GeckoHeroAnim = () => {
  return (
    <div className="cs-hero-anim">
      {/* LEFT: Raw Messy Data */}
      <div className="cs-hero-raw">
        {[...Array(20)].map((_, i) => (
          <div
            key={`raw-${i}`}
            className="cs-data-dot raw"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Raw Logs</div>
      </div>

      {/* CENTER: AI Lens */}
      <div className="cs-hero-lens-container">
        <div className="cs-hero-lens">
          <span>AI Engine</span>
        </div>

        {/* Animated flow lines */}
        <div className="cs-flow-line left"></div>
        <div className="cs-flow-line right"></div>
      </div>

      {/* RIGHT: Structured Insights */}
      <div className="cs-hero-structured">
        {[...Array(6)].map((_, i) => (
          <div
            key={`struct-${i}`}
            className={`cs-struct-line type-${i % 3}`}
            style={{
              top: `${(i * 15) + 15}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ai-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Structured Insights</div>
      </div>
    </div>
  );
};


export default function CaseStudyGeckoAI({ onBack, activeSection, displaySections, project }) {

  return (
      <div className="case-study-page cs-gecko">
        {/* STICKY NAV BAR */}
        <div className="cs-topbar">
          <div className="cs-topbar-inner">
            <button className="cs-back" onClick={onBack}>
              <span className="cs-back-arrow">←</span>
              Back to Work
            </button>
            <div className="cs-section-nav">
              {displaySections.map((section) => {
                let isActive = false;
                if (project === "gecko-ai") {
                  if (section.id === "overview" && ["overview", "problem", "validation", "opportunity"].includes(activeSection)) isActive = true;
                  else if (section.id === "data" && ["data", "privacy", "architecture", "agents"].includes(activeSection)) isActive = true;
                  else if (section.id === "reasoning" && ["reasoning", "taxonomy", "prompts", "human"].includes(activeSection)) isActive = true;
                  else if (section.id === "insights" && ["insights", "impact", "future", "demo"].includes(activeSection)) isActive = true;
                } else {
                  isActive = activeSection === section.id;
                }

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={isActive ? "active" : ""}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="wrap">
          <main className="cs-content">

            {/* 1. HERO SECTION */}
            <section id="overview" className="cs-hero">
              <div className="cs-label" style={{ marginBottom: "1.5rem", fontSize: ".85rem", color: "var(--ai-accent)", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }}>
                AI Case Study
              </div>

              <h1 className="cs-title" style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "2rem", letterSpacing: "-0.03em" }}>
                Designing an AI System to Mine UX Insights from Gecko Data
              </h1>

              <p className="cs-tagline" style={{ fontSize: "1.5rem", color: "var(--ink2)", marginBottom: "3rem", maxWidth: "800px" }}>
                Transforming thousands of bug reports into actionable UX intelligence using LLMs.
              </p>

              <div className="cs-grid-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "2rem 0", marginBottom: "3rem" }}>
                <div>
                  <div style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem" }}>Role</div>
                  <div style={{ fontWeight: "500" }}>UX Designer</div>
                </div>
                <div>
                  <div style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem" }}>Focus</div>
                  <div style={{ fontWeight: "500" }}>AI Workflows, UX Intelligence</div>
                </div>
                <div>
                  <div style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem" }}>Timeline</div>
                  <div style={{ fontWeight: "500" }}>3–4 months</div>
                </div>
              </div>

              {/* HERO VISUAL (ANIMATED DATA FLOW) */}
              <div className="cs-ai-hero-visual">
                <GeckoHeroAnim />
              </div>
            </section>

            {/* 2. THE PROBLEM */}
            <section id="problem" className="cs-section">
              <h2 className="cs-section-title">The Problem</h2>
              <p>
                MathWorks relies on an internal database called <strong>Gecko</strong>. It houses millions of technical bug reports, but finding latent, systemic UX friction within them is like searching for a needle in a haystack.
              </p>

              <div className="cs-diagram-box" style={{ background: "#fafafa", padding: "2rem" }}>
                <div style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink2)", marginBottom: "1rem" }}>Raw Gecko Record Example JSON structure</div>
                <div className="cs-code-block" style={{ margin: 0, boxShadow: "none" }}>
                  <div className="cs-code-header">
                    <div className="cs-code-dot red"></div><div className="cs-code-dot yellow"></div><div className="cs-code-dot green"></div>
                    <span style={{ marginLeft: "1rem", color: "#8b949e", fontSize: ".8rem" }}>bug_record_4192.json</span>
                  </div>
                  <div className="cs-code-body">
                    <div className="cs-code-line"><span className="cs-code-label">"severity":</span><span className="cs-code-value"> "High"</span></div>
                    <div className="cs-code-line"><span className="cs-code-label">"component":</span><span className="cs-code-value"> "UI Frame"</span></div>
                    <div className="cs-code-line"><span className="cs-code-label">"summary":</span><span className="cs-code-value"> "Warning popup unresponsive during specific model setup. User clicked multiple times..."</span></div>
                  </div>
                </div>
              </div>

              <div className="cs-grid-3" style={{ marginTop: "3rem" }}>
                <div className="cs-card">
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--ink)" }}>Cognitive Overload</h3>
                  <p style={{ fontSize: ".9rem", margin: 0 }}>Human analysts cannot process the daily volume of incoming technical logs.</p>
                </div>
                <div className="cs-card">
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--ink)" }}>Inconsistent Analysis</h3>
                  <p style={{ fontSize: ".9rem", margin: 0 }}>Different researchers label "discoverability" differently, missing core patterns.</p>
                </div>
                <div className="cs-card">
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--ink)" }}>Hidden UX Issues</h3>
                  <p style={{ fontSize: ".9rem", margin: 0 }}>User friction and mental model failures are filed merely as "technical bugs".</p>
                </div>
              </div>
            </section>

            {/* 2B. SURVEY VALIDATION */}
            <section id="validation" className="cs-section">
              <h2 className="cs-section-title">Validating the Problem</h2>
              <p>
                To ensure this wasn't an isolated frustration, we surveyed Product Managers and UXers at MathWorks regarding their Gecko data workflows. The response confirmed a systemic need for intelligent summarization.
              </p>

              <div className="cs-validation-grid" style={{ marginTop: "3rem", display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="cs-demo-window" style={{ margin: 0, padding: "2.5rem", height: "100%", border: "1px solid var(--border)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                  <div style={{ color: "var(--ink)", fontWeight: "700", fontSize: "3rem", lineHeight: "1", letterSpacing: "-0.04em" }}>100%</div>
                  <div style={{ fontSize: "1rem", fontWeight: "600", color: "var(--ink)", marginTop: "0.75rem", marginBottom: "0.5rem" }}>Found mining data challenging.</div>
                  <div style={{ fontSize: ".9rem", color: "var(--ink2)", lineHeight: "1.5" }}>Every single respondent found identifying meaningful insights from unstructured text either "Challenging" or "Very Difficult".</div>
                </div>

                <div className="cs-demo-window" style={{ margin: 0, padding: "2.5rem", height: "100%", border: "1px solid var(--border)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                  <div style={{ color: "var(--ai-accent)", fontWeight: "700", fontSize: "3rem", lineHeight: "1", letterSpacing: "-0.04em" }}>80%</div>
                  <div style={{ fontSize: "1rem", fontWeight: "600", color: "var(--ink)", marginTop: "0.75rem", marginBottom: "0.5rem" }}>Reliant on the data.</div>
                  <div style={{ fontSize: ".9rem", color: "var(--ink2)", lineHeight: "1.5" }}>A massive majority actively use Gecko for insights, with most analyzing over 50–300 records per project.</div>
                </div>

                <div className="cs-demo-window" style={{ margin: 0, gridColumn: "1 / -1", padding: "2.5rem", border: "1px solid var(--border)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                  <div style={{ fontSize: "1rem", fontWeight: "600", color: "var(--ink)", marginBottom: "1.5rem" }}>Top User Pain Points Extracted</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <span style={{ background: "#f4f5f7", color: "var(--ink)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: ".85rem" }}>“Tedious manual filtering”</span>
                    <span style={{ background: "#f4f5f7", color: "var(--ink)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: ".85rem" }}>“Noise vs Signal imbalance”</span>
                    <span style={{ background: "#f4f5f7", color: "var(--ink)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: ".85rem" }}>“No LLM integration to speed it up”</span>
                    <span style={{ background: "#f4f5f7", color: "var(--ink)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: ".85rem" }}>“No standardized UX priority tags”</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. THE OPPORTUNITY */}
            <section id="opportunity" className="cs-section">
              <h2 className="cs-section-title">The Opportunity</h2>
              <div className="cs-opportunity-panel" style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)', marginTop: '2.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {/* BEFORE STATE */}
                  <div style={{ flex: '1 1 300px', background: 'white', padding: '3.5rem', borderRight: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#fff5f5', color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #fed7d7' }}>✕</div>
                      <h3 style={{ fontSize: '1.25rem', m: 0, color: '#4a5568' }}>Before AI Integration</h3>
                    </div>
                    <ul className="cs-taxonomy-list" style={{ opacity: 0.8 }}>
                      <li style={{ borderBottomColor: '#f7fafc' }}><span style={{ color: '#a0aec0', marginRight: '6px' }}>—</span> Manual, tedious log reading</li>
                      <li style={{ borderBottomColor: '#f7fafc' }}><span style={{ color: '#a0aec0', marginRight: '6px' }}>—</span> Weeks required for analysis</li>
                      <li style={{ borderBottomColor: '#f7fafc', borderBottom: 'none' }}><span style={{ color: '#a0aec0', marginRight: '6px' }}>—</span> UX signals buried by technical jargon</li>
                    </ul>
                  </div>

                  {/* AFTER STATE */}
                  <div style={{ flex: '1 1 300px', background: '#faf5ff', padding: '3.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--ai-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(107, 70, 193, 0.3)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', m: 0, color: 'var(--ai-accent)' }}>The Agentic Solution</h3>
                    </div>
                    <ul className="cs-taxonomy-list">
                      <li style={{ borderBottomColor: 'rgba(107, 70, 193, 0.05)' }}><strong style={{ color: 'var(--ai-accent)', marginRight: '8px' }}>01.</strong> Automated natural language parsing</li>
                      <li style={{ borderBottomColor: 'rgba(107, 70, 193, 0.05)' }}><strong style={{ color: 'var(--ai-accent)', marginRight: '8px' }}>02.</strong> Instant cross-project pattern detection</li>
                      <li style={{ borderBottomColor: 'none' }}><strong style={{ color: 'var(--ai-accent)', marginRight: '8px' }}>03.</strong> Usability themes extracted in seconds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. UNDERSTANDING GECKO DATA */}
            <section id="data" className="cs-section">
              <h2 className="cs-section-title">Understanding Gecko Data</h2>
              <p>
                To leverage LLMs effectively, we first had to map the anatomy of a Gecko log, separating rigid technical metadata from messy, unstructured human text.
              </p>

              <div className="cs-diagram-box">
                <div className="cs-two-col">
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ink)" }}>Structured Data</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                      <span className="cs-pipeline-node" style={{ padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0 }}>Severity</span>
                      <span className="cs-pipeline-node" style={{ padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0 }}>Component</span>
                      <span className="cs-pipeline-node" style={{ padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0 }}>Owner</span>
                      <span className="cs-pipeline-node" style={{ padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0 }}>Version</span>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ai-accent)" }}>Unstructured Text (AI Target)</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                      <span className="cs-pipeline-node" style={{ background: "var(--ai-accent-light)", color: "var(--ai-accent)", borderColor: "var(--ai-accent-light)", padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0 }}>Issue Descriptions</span>
                      <span className="cs-pipeline-node" style={{ background: "var(--ai-accent-light)", color: "var(--ai-accent)", borderColor: "var(--ai-accent-light)", padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0 }}>Reproduction Steps</span>
                      <span className="cs-pipeline-node" style={{ background: "var(--ai-accent-light)", color: "var(--ai-accent)", borderColor: "var(--ai-accent-light)", padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0 }}>Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. PRIVACY STRATEGY & ARCHITECTURE */}
            <section id="architecture" className="cs-section">
              <h2 className="cs-section-title">Data Processing & Privacy Architecture</h2>
              <p>
                Gecko logs occasionally contain customer PII. Passing raw data directly to an external LLM was strictly prohibited. We designed a robust, scalable data processing pipeline that extracts logs, scrubs sensitive data natively using Microsoft Presidio, injects product metadata, and finally orchestrates structural reasoning via the ChatGPT API.
              </p>

              <AIPipelineDiagram />
            </section>

            {/* 8. REASONING & 9. TAXONOMY */}
            <section id="reasoning" className="cs-section">
              <h2 className="cs-section-title">The Taxonomy Engine</h2>
              <p>
                We established a strict hierarchical UX taxonomy. The AI maps natural language complaints into designated UI failure states like <em>Discoverability, Mental Model Sync,</em> and <em>Learnability.</em>
              </p>

              <div className="cs-two-col" style={{ marginTop: "2.5rem" }}>
                <div className="cs-card" style={{ border: "none", background: "none", padding: 0 }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ink)" }}>AI Reasoning Chain</h3>
                  <div style={{ borderLeft: "2px solid var(--border)", marginLeft: "1rem", paddingLeft: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "-2.4rem", top: "0.2rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--ai-accent)", boxShadow: "0 0 0 4px var(--bg)" }}></div>
                      <div style={{ fontWeight: "500", fontSize: ".95rem", color: "var(--ink)", marginBottom: ".25rem" }}>1. Parse Context</div>
                      <div style={{ fontSize: ".9rem", color: "var(--ink2)" }}>Detect underlying signals amidst technical jargon.</div>
                    </div>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "-2.4rem", top: "0.2rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--ai-accent)", opacity: 0.7, boxShadow: "0 0 0 4px var(--bg)" }}></div>
                      <div style={{ fontWeight: "500", fontSize: ".95rem", color: "var(--ink)", marginBottom: ".25rem" }}>2. Map to Taxonomy</div>
                      <div style={{ fontSize: ".9rem", color: "var(--ink2)" }}>Align signal against Discoverability or Feedback branches.</div>
                    </div>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "-2.4rem", top: "0.2rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--ai-accent)", opacity: 0.4, boxShadow: "0 0 0 4px var(--bg)" }}></div>
                      <div style={{ fontWeight: "500", fontSize: ".95rem", color: "var(--ink)", marginBottom: ".25rem" }}>3. Score Confidence</div>
                      <div style={{ fontSize: ".9rem", color: "var(--ink2)" }}>Require 85%+ certitude, else mark for human review.</div>
                    </div>
                  </div>
                </div>

                <div className="cs-diagram-box" style={{ margin: 0, padding: "2rem", background: "#f8f9fa" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ink)" }}>Taxonomy Overview</h3>
                  <ul className="cs-taxonomy-list">
                    <li><span className="cs-taxonomy-icon">◇</span> Discoverability (Visibility, Naming)</li>
                    <li><span className="cs-taxonomy-icon">◇</span> Navigation & Architecture</li>
                    <li><span className="cs-taxonomy-icon">◇</span> System Feedback & Errors</li>
                    <li><span className="cs-taxonomy-icon">◇</span> Mental Model Mismatch</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 10. PROMPT ENGINEERING */}
            <section id="prompts" className="cs-section">
              <h2 className="cs-section-title">Prompt Schema</h2>
              <p>
                Consistent output across thousands of logs relies on a highly structured prompt configuration, ensuring valid JSON generation without hallucinations.
              </p>

              <div className="cs-code-block">
                <div className="cs-code-header">
                  <div className="cs-code-dot red"></div><div className="cs-code-dot yellow"></div><div className="cs-code-dot green"></div>
                  <span style={{ marginLeft: "1rem", color: "#8b949e", fontSize: ".8rem" }}>system_prompt.ts</span>
                </div>
                <div className="cs-code-body">
                  <div className="cs-code-line"><span style={{ color: "#ff7b72" }}>const</span> <span style={{ color: "#d2a8ff" }}>systemContext</span> <span style={{ color: "#ff7b72" }}>=</span> <span style={{ color: "#a5d6ff" }}>\`</span></div>
                  <div className="cs-code-line"><span style={{ color: "#a5d6ff" }}>  You are an expert UX Researcher analyzing technical bug logs.</span></div>
                  <div className="cs-code-line"><span style={{ color: "#a5d6ff" }}>  Your goal is to extract latent UI friction.</span></div>
                  <div className="cs-code-line"><span style={{ color: "#a5d6ff" }}></span></div>
                  <div className="cs-code-line"><span style={{ color: "#79c0ff" }}>  [CLASSIFICATION RULES]</span></div>
                  <div className="cs-code-line"><span style={{ color: "#a5d6ff" }}>  If a user remarks 'cannot find', map to Discoverability.</span></div>
                  <div className="cs-code-line"><span style={{ color: "#a5d6ff" }}>  You must quote the user directly for the 'evidence' field.</span></div>
                  <div className="cs-code-line"><span style={{ color: "#a5d6ff" }}></span></div>
                  <div className="cs-code-line"><span style={{ color: "#79c0ff" }}>  [OUTPUT SCHEMA]</span></div>
                  <div className="cs-code-line"><span style={{ color: "#a5d6ff" }}>  Must be valid JSON matching the strict UI Taxonomy...</span></div>
                  <div className="cs-code-line"><span style={{ color: "#a5d6ff" }}>\`;</span></div>
                </div>
              </div>
            </section>

            {/* 11. HUMAN IN THE LOOP */}
            <section id="human" className="cs-section">
              <h2 className="cs-section-title">Human-in-the-Loop Collaboration</h2>
              <p>
                We engineered the system not to replace qualitative research, but to augment it. Analysts act as the ultimate validators of the AI's flagged insights.
              </p>

              <div className="cs-two-lane-diagram">
                <div className="cs-lane ai-lane">
                  <h3 style={{ fontSize: "1.1rem", color: "var(--ai-accent)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    AI Lane
                  </h3>
                  <ul className="cs-taxonomy-list">
                    <li style={{ fontSize: ".9rem" }}>1. Parses raw batch logs</li>
                    <li style={{ fontSize: ".9rem" }}>2. Flags potential friction points</li>
                    <li style={{ fontSize: ".9rem" }}>3. Recommends Taxonomy</li>
                  </ul>
                </div>
                <div className="cs-lane human-lane">
                  <h3 style={{ fontSize: "1.1rem", color: "var(--ink)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="7" r="4"></circle><path d="M5.4 20.2a8 8 0 0 1 13.2 0"></path></svg>
                    Human Lane
                  </h3>
                  <ul className="cs-taxonomy-list">
                    <li style={{ fontSize: ".9rem" }}>1. Reviews aggregated dashboards</li>
                    <li style={{ fontSize: ".9rem" }}>2. Confirms AI rationale & evidence</li>
                    <li style={{ fontSize: ".9rem" }}>3. Validates insights for product teams</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 12. UX INSIGHT EXAMPLES */}
            <section id="insights" className="cs-section">
              <h2 className="cs-section-title">Final Output: Actionable Intelligence</h2>
              <p>
                The ultimate output transforms impenetrable code logs into readable, actionable product design deliverables.
              </p>

              <div className="cs-two-col" style={{ marginTop: "2.5rem" }}>
                <div className="cs-insight-card">
                  <div style={{ fontSize: ".7rem", color: "var(--ai-accent)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "1rem" }}>Verified Insight Node</div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Model Setup Panel</h3>
                  <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "1rem", marginBottom: "1rem", color: "var(--ink2)", fontSize: ".95rem" }}>
                    <strong>Issue Map:</strong> Discoverability
                  </div>
                  <div style={{ color: "var(--ink2)", fontSize: ".95rem", lineHeight: "1.6" }}>
                    <strong>AI Evidence Extracted:</strong> <br />
                    <em style={{ color: "var(--ink)" }}>"Users continuously fail to locate the simulation entry point; 4x clicks logged prior to failure."</em>
                  </div>
                  <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ background: "#f4f5f7", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: ".8rem", fontWeight: "600", color: "var(--ink)" }}>n = 31 Reports</span>
                  </div>
                </div>

                <div className="cs-insight-card">
                  <div style={{ fontSize: ".7rem", color: "var(--ai-accent)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "1rem" }}>Verified Insight Node</div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Error State Navigation</h3>
                  <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "1rem", marginBottom: "1rem", color: "var(--ink2)", fontSize: ".95rem" }}>
                    <strong>Issue Map:</strong> Mental Model Mismatch
                  </div>
                  <div style={{ color: "var(--ink2)", fontSize: ".95rem", lineHeight: "1.6" }}>
                    <strong>AI Evidence Extracted:</strong> <br />
                    <em style={{ color: "var(--ink)" }}>"Expected clicking the warning node to open the inspector, but it triggered a system reset."</em>
                  </div>
                  <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ background: "#f4f5f7", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: ".8rem", fontWeight: "600", color: "var(--ink)" }}>n = 18 Reports</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 13. IMPACT & FUTURE VISION */}
            <section id="impact" className="cs-section">
              <h2 className="cs-section-title">Impact & Horizon</h2>

              <div className="cs-grid-3" style={{ marginBottom: "4rem" }}>
                <div>
                  <div className="cs-metric-huge">Mins</div>
                  <div style={{ fontSize: "1rem", color: "var(--ink2)" }}>Reduction in analysis time (Down from Weeks)</div>
                </div>
                <div>
                  <div className="cs-metric-huge">10k+</div>
                  <div style={{ fontSize: "1rem", color: "var(--ink2)" }}>Latent UX Issues Detected Across Logs</div>
                </div>
                <div>
                  <div className="cs-metric-huge">Global</div>
                  <div style={{ fontSize: "1rem", color: "var(--ink2)" }}>Cross-Team Knowledge Infrastructure</div>
                </div>
              </div>

              <div className="cs-pipeline-grid" style={{ background: "#fafafa", padding: "2rem", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "12px", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  <div style={{ fontWeight: "600", fontSize: ".9rem", color: "var(--ink)" }}>Phase 1 (Current)</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink2)" }}>Standalone Insight Aggregator</div>
                </div>
                <div className="cs-pipeline-arrow">→</div>
                <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  <div style={{ fontWeight: "600", fontSize: ".9rem", color: "var(--ai-accent)" }}>Phase 2</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink2)" }}>Integrated Gecko Intelligence Layer</div>
                </div>
                <div className="cs-pipeline-arrow">→</div>
                <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  <div style={{ fontWeight: "600", fontSize: ".9rem", color: "var(--ink)" }}>Phase 3</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink2)" }}>Predictive Product Insights</div>
                </div>
              </div>
            </section>

            {/* 15. INTERACTIVE DEMO PROTOTYPE */}
            <section id="demo" className="cs-section" style={{ paddingTop: 0 }}>
              <h2 className="cs-section-title">Interactive Prototype Loop</h2>
              <p style={{ marginBottom: "2.5rem" }}>
                A conceptualized interaction flow simulating how a Product Designer queries the finalized Gecko AI tooling to generate a usability report.
              </p>

              <GeckoDemo />

            </section>

          </main>
        </div>
      </div>
  );
}
