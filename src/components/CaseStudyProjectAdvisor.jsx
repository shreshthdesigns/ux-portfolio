import { useEffect, useRef } from "react";

const ScrollVideo = ({ src, poster, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(e => console.log("Autoplay prevented:", e));
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return <video ref={videoRef} src={src} poster={poster} {...props} />;
};

export default function CaseStudyProjectAdvisor({ onBack, activeSection, displaySections }) {

  return (
    <div className="case-study-page cs-pa">

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
              if (section.id === "overview" && activeSection === "overview") isActive = true;
              else if (section.id === "system-scale" && ["system-scale", "significance", "stakeholders", "workflow", "configuration", "insights"].includes(activeSection)) isActive = true;
              else if (section.id === "solution" && ["solution", "principles", "in-practice"].includes(activeSection)) isActive = true;
              else if (section.id === "impact" && ["impact", "reflection"].includes(activeSection)) isActive = true;

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


      <main className="cs-content">
        <div className="wrap">

          {/* 1. HERO */}
          <section id="overview" className="cs-hero cs-pa-hero">
            <div className="cs-pa-hero-content" style={{ paddingRight: "2rem" }}>
              <div className="cs-label" style={{ marginBottom: "1.25rem", color: "var(--accent)", fontWeight: 650, letterSpacing: ".1em", textTransform: "uppercase" }}>
                Project Advisor
              </div>
              <h1 className="cs-title" style={{ fontSize: "3.5rem", lineHeight: "1.06", marginBottom: "1.25rem", letterSpacing: "-0.03em" }}>
                Making large-scale system validation faster and more reliable
              </h1>
              <p style={{ fontSize: "1.15rem", color: "var(--ink2)", marginBottom: "2.5rem", lineHeight: "1.6" }}>
                A unified validation workspace designed to help engineering teams run compliance checks across complex systems and triage failures instantly.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginTop: "1rem", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "1.5rem" }}>
                <div>
                  <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "var(--ink3)", marginBottom: "4px" }}>Role</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)" }}>Lead UX Designer</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "var(--ink3)", marginBottom: "4px" }}>Company</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)" }}>MathWorks</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "var(--ink3)", marginBottom: "4px" }}>Duration</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)" }}>12 Months</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "var(--ink3)", marginBottom: "4px" }}>Tools</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)" }}>Figma, React</div>
                </div>
              </div>
            </div>

            <div className="cs-pa-hero-showcase" style={{ position: "relative", width: "100%", display: "flex", justifyContent: "flex-end" }}>
              <img src="/pa-hero-showcase.png" alt="Project Advisor Dashboard Mockup" style={{ width: "125%", maxWidth: "900px", height: "auto", display: "block", transform: "translateY(50px) translateX(5%)", position: "relative", zIndex: 10 }} />
            </div>
          </section>
        </div> {/* End Hero Wrap */}

        {/* MY ROLE & OWNERSHIP - Outside primary wrap for max width */}
        <section id="role" className="reveal" style={{
          padding: "4rem 0",
          backgroundColor: "white",
        }}>
          <div style={{ maxWidth: "1250px", margin: "0 auto", padding: "0 2rem" }}>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "1.5rem",
              color: "var(--ink)",
              marginBottom: "2rem",
              marginLeft: "0.5rem",
              opacity: 0.8
            }}>
              Ownership
            </h2>

            <div style={{
              background: "#f3f6fb",
              borderRadius: "40px",
              padding: "4rem 3rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "4rem 2rem",
              border: "1px solid rgba(0,0,0,0.02)"
            }}>
              {[
                {
                  title: "System Model Definition",
                  desc: "Defined the validation mental model and how behavior scales from project to model level",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z" />
                      <path d="M8 6h8M8 18h8M6 8v8M18 8v8" />
                    </svg>
                  )
                },
                {
                  title: "Product Leadership",
                  desc: "Led UX across a 6-month development cycle from concept to delivery",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                  )
                },
                {
                  title: "Engineering Collaboration",
                  desc: "Worked closely with engineering to align UX with execution architecture",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  )
                },
                {
                  title: "Validation & Testing",
                  desc: "Led usability studies and concept validation with enterprise customers",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "start" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    background: "#e2e8f0",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#475569"
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <h4 style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "var(--ink)",
                      margin: 0
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.4",
                      color: "var(--ink2)",
                      margin: 0,
                      maxWidth: "400px" // Slightly more room for width
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="wrap">

          {/* 2. THE PROBLEM (SYSTEM SCALE) */}
          <section id="system-scale" className="cs-section">
            <div className="cs-two-col editorial-text" style={{ padding: "4rem 0", gap: "5rem", alignItems: "start" }}>
              <div style={{ flex: "0.8", display: "flex", flexDirection: "column", gap: "2.5rem", position: "sticky", top: "120px" }}>
                <h2 className="cs-section-title" style={{
                  marginTop: 0,
                  fontSize: "2.4rem",
                  lineHeight: "1.1",
                  fontFamily: "var(--serif)",
                  fontWeight: "500",
                  color: "var(--ink)"
                }}>
                  Systems Are<br />
                  Layered.<br />
                  <span style={{ color: "var(--accent)", display: "block", marginTop: "0.5rem" }}>Validation Was Not.</span>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <p style={{ fontSize: "1.15rem", color: "var(--ink)", fontWeight: "600", margin: 0 }}>
                    Enterprise projects are not single units, they are layered systems.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--ink2)", fontSize: "1.05rem" }}>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <span style={{ color: "var(--accent)" }}>•</span>
                      <span>Multiple subsystems</span>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <span style={{ color: "var(--accent)" }}>•</span>
                      <span>Dozens of models</span>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <span style={{ color: "var(--accent)" }}>•</span>
                      <span>Thousands of interconnected components</span>
                    </div>
                  </div>

                  <p style={{ fontSize: "1.1rem", color: "var(--ink2)", lineHeight: "1.6", margin: "1rem 0 0" }}>
                    But validation workflows operated at the model level. This created a <span style={{ fontWeight: "700", color: "var(--ink)" }}>fundamental mismatch</span>:
                  </p>
                </div>
              </div>

              <div style={{ flex: "1.5" }}>
                <div className="cs-pa-process-diagram" style={{
                  backgroundColor: "var(--bg)",
                  padding: "3rem",
                  borderRadius: "40px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 25px 80px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden"
                }}>
                  <img
                    src="Enterprise System 1.png"
                    alt="Complex Enterprise System Structure"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0",
                      display: "block",
                      transform: "scale(1.05)" // Slightly scale up content within card
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CORE INSIGHT CALLOUT - Refined to match modern design */}
          <section className="reveal" style={{ padding: "0 0 6rem" }}>
            <div style={{
              background: "white",
              borderLeft: "5px solid var(--accent)",
              padding: "2rem 2.5rem",
              borderRadius: "0 24px 24px 0",
              boxShadow: "0 25px 70px rgba(0,0,0,0.03)",
              maxWidth: "1200px",
              margin: "0 auto"
            }}>
              <span style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontWeight: "800",
                color: "var(--accent)",
                display: "block",
                marginBottom: "1.75rem",
                opacity: 0.8
              }}>
                Core Insight
              </span>
              <h3 style={{
                fontFamily: "var(--serif)",
                fontSize: "1.5rem",
                lineHeight: "1.3",
                color: "var(--ink)",
                margin: 0,
                fontWeight: "400",
                maxWidth: "950px"
              }}>
                The core challenge wasn't running validation checks — it was <span style={{ color: "var(--accent)", fontWeight: "500" }}>understanding the state of a complex system and tracing issues.</span>
              </h3>
            </div>
          </section>

          {/* 4. USERS & STAKEHOLDERS - Restored after Core Insight */}
          <section id="stakeholders" className="cs-section" style={{ padding: "4rem 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
              <h2 className="cs-section-title" style={{ margin: 0 }}>Stakeholders & Goals</h2>
              <div style={{
                background: "var(--accent-t)", 
                border: "1px solid rgba(43, 84, 64, 0.15)", // Based on --accent
                padding: "0.5rem 1.25rem",
                borderRadius: "100px",
                fontSize: "0.75rem",
                fontWeight: "700",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}>
                Interviews with 6 enterprise customers
              </div>
            </div>
            <div className="cs-pa-users-grid">
              <div className="cs-pa-user-card">
                <h4 className="title">Model Developers</h4>
                <p className="goal">"I need to fix compliance errors in my specific subsystem quickly."</p>
              </div>
              <div className="cs-pa-user-card">
                <h4 className="title">QA Engineers</h4>
                <p className="goal">"I need to ensure the entire release passes all checks."</p>
              </div>
              <div className="cs-pa-user-card">
                <h4 className="title">Tooling / CI</h4>
                <p className="goal">"I need standardized configurations across the organization."</p>
              </div>
              <div className="cs-pa-user-card">
                <h4 className="title">Standards Engineers</h4>
                <p className="goal">"I need to apply custom company rules uniformly."</p>
              </div>
              <div className="cs-pa-user-card">
                <h4 className="title">Management</h4>
                <p className="goal">"I need a dashboard showing exactly what's failing."</p>
              </div>
            </div>
          </section>

          {/*
          // 3. WHY THIS MATTERS
          <section id="significance" className="cs-section">
            <div className="cs-two-col editorial-text">
              <div>
                <h2 className="cs-section-title" style={{ marginTop: 0 }}>Business Impact of Inefficiency</h2>
              </div>
              <div>
                <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.7", marginBottom: "3rem" }}>
                  In highly regulated industries like automotive and aerospace, missing a compliance issue isn't just an inconvenience - it is a critical safety risk.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
                  <div className="cs-pa-insight-min" style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
                    <h4 style={{ fontWeight: 700, marginBottom: "0.4rem", fontSize: "1.1rem" }}>Audit Risks</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--ink2)", margin: 0, lineHeight: 1.5 }}>I saw fragmented validation let critical issues slip through unnoticed.</p>
                  </div>
                  <div className="cs-pa-insight-min" style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
                    <h4 style={{ fontWeight: 700, marginBottom: "0.4rem", fontSize: "1.1rem" }}>Massive Inefficiency</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--ink2)", margin: 0, lineHeight: 1.5 }}>I found sequential checks drain thousands of engineering hours.</p>
                  </div>
                  <div className="cs-pa-insight-min" style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
                    <h4 style={{ fontWeight: 700, marginBottom: "0.4rem", fontSize: "1.1rem" }}>Poor Visibility</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--ink2)", margin: 0, lineHeight: 1.5 }}>I saw management lacked a single source of truth for project-level health.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          // 5. EXISTING WORKFLOW
          <section id="workflow" className="cs-section">
            <div className="cs-two-col editorial-text" style={{ marginBottom: "3rem" }}>
              <div>
                <h2 className="cs-section-title" style={{ marginTop: 0 }}>The Broken Loop</h2>
              </div>
              <div>
                <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.7", margin: 0 }}>
                  I observed teams getting trapped in an infinite loop of manual overhead before Project Advisor.
                </p>
              </div>
            </div>
            <div className="cs-pa-workflow-horizontal broken">
              <div className="hwf-step">Open Model 1</div>
              <div className="hwf-arrow">→</div>
              <div className="hwf-step">Run Validation</div>
              <div className="hwf-arrow">→</div>
              <div className="hwf-step">Review Results</div>
              <div className="hwf-arrow">→</div>
              <div className="hwf-step error">Repeat...</div>
            </div>
          </section>

          // 7. RESEARCH INSIGHTS
          <section id="insights" className="cs-section">
            <div style={{ textAlign: "left", marginBottom: "4rem" }}>
              <h2 className="cs-section-title" style={{ marginBottom: "1rem" }}>What we learned from users</h2>
              <p style={{ color: "var(--ink2)", fontSize: "1.1rem", maxWidth: "700px", margin: "0" }}>
                Understanding how engineers validate complex systems revealed patterns that shaped the product direction.
              </p>
            </div>
          </section>
          */}

          {/* 8. THE INVISIBLE LOGIC - CONFIGURATION COMPLEXITY */}
          <section id="configuration" className="cs-section" style={{ padding: "6rem 0" }}>
            <div className="cs-two-col editorial-text" style={{ gap: "6rem", alignItems: "center" }}>
              {/* Left Column: Text Content */}
              <div style={{ flex: "0.7", maxWidth: "400px" }}>
                <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: "600", marginBottom: "0.75rem" }}>
                  Before Execution
                </div>

                <h2 className="cs-section-title" style={{
                  marginTop: 0,
                  marginBottom: "3.5rem",
                  fontSize: "2.4rem",
                  fontFamily: "var(--serif)",
                  fontWeight: "500",
                  lineHeight: "1.1"
                }}>
                  The <span style={{ color: "var(--accent)" }}>Invisible Logic</span> Behind Every Run
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.7", margin: 0 }}>
                    Validation behavior depended on configurations applied at project and model levels — with overrides and exclusions.
                  </p>

                  <div style={{ marginTop: "1rem" }}>
                    <div style={{
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--ink3)",
                      fontWeight: "700",
                      marginBottom: "1rem"
                    }}>
                      What made this hard:
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "var(--ink2)", fontSize: "1.1rem" }}>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <span style={{ color: "var(--accent)" }}>•</span>
                        <span>Multiple levels of configuration</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <span style={{ color: "var(--accent)" }}>•</span>
                        <span>Overrides changing expected behavior</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <span style={{ color: "var(--accent)" }}>•</span>
                        <span>Models excluded from execution</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: "1.15rem", color: "var(--ink)", fontWeight: "600", lineHeight: "1.7", marginTop: "1rem", margin: 0 }}>
                    Execution had to be mentally reconstructed — turning validation into guesswork.
                  </p>
                </div>
              </div>

              {/* Right Column: Visualization */}
              <div style={{ flex: "1.3" }}>
                <div style={{
                  background: "white",
                  padding: "1.5rem",
                  borderRadius: "32px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                  <img
                    src="Configuration.png"
                    alt="Configuration Logic Diagram"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "16px",
                      display: "block"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* AFTER EXECUTION EXTENSION */}
            <div style={{ marginTop: "6rem", borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "6rem" }}>
              <div className="cs-two-col editorial-text" style={{ gap: "6rem", alignItems: "center" }}>
                {/* Left Column: Text Content */}
                <div style={{ flex: "0.7", maxWidth: "400px" }}>
                  <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: "600", marginBottom: "0.75rem" }}>
                    After Execution
                  </div>

                  <h2 className="cs-section-title" style={{
                    marginTop: 0,
                    marginBottom: "3.5rem",
                    fontSize: "2.4rem",
                    fontFamily: "var(--serif)",
                    fontWeight: "500",
                    lineHeight: "1.1"
                  }}>
                    The <span style={{ color: "var(--accent)" }}>Invisible Outcomes</span> After Every Run
                  </h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.7", margin: 0 }}>
                      Even after running validation, understanding results remained difficult.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "var(--ink2)", fontSize: "1.1rem" }}>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <span style={{ color: "var(--accent)" }}>•</span>
                        <span>Outputs were distributed across CI pipelines and multiple reports</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <span style={{ color: "var(--accent)" }}>•</span>
                        <span>No unified view of validation status at a project level</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <span style={{ color: "var(--accent)" }}>•</span>
                        <span>Failures appeared in isolation, without system context</span>
                      </div>
                    </div>

                    <p style={{ fontSize: "1.15rem", color: "var(--ink)", fontWeight: "600", lineHeight: "1.7", margin: 0 }}>
                      Users had to switch between tools and manually trace issues — making resolution slow and error-prone.
                    </p>
                  </div>
                </div>

                {/* Right Column: Visualization */}
                <div style={{ flex: "1.3" }}>
                  <div style={{
                    background: "#fcfcfc",
                    padding: "3rem",
                    borderRadius: "32px",
                    border: "1px dashed rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "300px",
                    justifyContent: "center"
                  }}>
                    <div style={{ display: "flex", gap: "1.5rem", width: "100%", justifyContent: "center", flexWrap: "wrap" }}>
                      {/* CI Pipeline */}
                      <div style={{ background: "white", padding: "0.75rem 1.25rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#64748b" }} />
                        <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--ink2)" }}>CI Pipeline</span>
                      </div>
                      {/* Report Files */}
                      <div style={{ background: "white", padding: "0.75rem 1.25rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#94a3b8" }} />
                        <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--ink2)" }}>Report Files</span>
                      </div>
                      {/* Logs */}
                      <div style={{ background: "white", padding: "0.75rem 1.25rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#cbd5e1" }} />
                        <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--ink2)" }}>Logs</span>
                      </div>
                    </div>

                    <div style={{ marginTop: "2.5rem", position: "relative", height: "80px", width: "100%", opacity: 0.4 }}>
                      <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none">
                        <path d="M100,10 Q120,40 80,70" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                        <path d="M200,10 Q180,45 230,75" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                        <path d="M300,10 Q320,35 280,70" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                        {/* Little arrow heads */}
                        <path d="M80,70 L85,62 M80,70 L72,68" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
                        <path d="M230,75 L222,68 M230,75 L228,78" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
                        <path d="M280,70 L285,62 M280,70 L275,64" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>

                    <div style={{ marginTop: "1rem", color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: "700" }}>
                      Fragmented Outputs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> {/* CLOSE .wrap to breakthrough full-width */}

          {/* THE BREAKTHROUGH: MAKING SYSTEM BEHAVIOR VISIBLE */}
          <section id="breakthrough" className="reveal" style={{ 
            padding: "8rem 2rem", 
            background: "#FAF9F6", // Slightly different white/cream for depth
            borderTop: "none",
            width: "100%"
          }}>
            <div style={{
              maxWidth: "1100px",
              margin: "0 auto",
              border: "1px solid var(--border)",
              borderRadius: "48px",
              padding: "6rem 5rem",
              background: "white",
              textAlign: "center"
            }}>
              <div style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                fontWeight: "700",
                marginBottom: "2rem"
              }}>
                The Breakthrough
              </div>

              <h2 style={{
                fontFamily: "var(--serif)",
                fontSize: "2.8rem",
                marginBottom: "2.5rem",
                color: "var(--ink)",
                fontWeight: "400",
                lineHeight: "1.2"
              }}>
                Making System Behavior Visible
              </h2>

              <p style={{
                fontSize: "1.25rem",
                color: "var(--ink2)",
                lineHeight: "1.6",
                maxWidth: "800px",
                margin: "0 auto 5rem",
                fontWeight: "400"
              }}>
                To solve the problem, we shifted from building a tool that runs validation to designing a system that makes validation behavior visible, predictable, and actionable.
              </p>

              {/* DESIGN PRINCIPLES (VERTICAL LIST) */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "600px",
                margin: "0 auto 6rem",
                textAlign: "center"
              }}>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.04)", paddingBottom: "20px" }}>
                  <div style={{ fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>Make execution predictable</div>
                  <div style={{ color: "var(--ink3)", fontSize: "1rem" }}>Expose what will run before validation begins</div>
                </div>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.04)", paddingBottom: "20px" }}>
                  <div style={{ fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>Make outcomes visible at system level</div>
                  <div style={{ color: "var(--ink3)", fontSize: "1rem" }}>Aggregate results into a unified project view</div>
                </div>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.04)", paddingBottom: "20px" }}>
                  <div style={{ fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>Connect configuration to results</div>
                  <div style={{ color: "var(--ink3)", fontSize: "1rem" }}>Bridge what was configured to what actually ran</div>
                </div>
                <div>
                  <div style={{ fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>Enable traceability across the system</div>
                  <div style={{ color: "var(--ink3)", fontSize: "1rem" }}>Allow users to move from project → model → issue seamlessly</div>
                </div>
              </div>

              {/* CONCEPTUAL TRANSFORMATION VISUAL */}
              {/* CONCEPTUAL TRANSFORMATION VIDEO */}
              <div style={{
                maxWidth: "1000px",
                margin: "0 auto",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "none",
                background: "#fff"
              }}>
                <ScrollVideo
                  src="PA Intro.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </section>

          <div className="wrap">
            {/* 9. SOLUTION OVERVIEW (COMMENTED OUT)
            <section id="solution" className="cs-section">
              ...
            </section>
            */}

            {/* 11. HOW THE SYSTEM WORKS IN PRACTICE (MOVED AND REFINED) */}
            <section id="in-practice" className="cs-section" style={{ paddingBottom: "4rem" }}>
              <div style={{ textAlign: "left", marginBottom: "5rem" }}>
                <h2 className="cs-section-title" style={{ margin: "0" }}>How the System Works in Practice</h2>
                <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.6", margin: "1.5rem 0 0", maxWidth: "700px" }}>
                  A guided walkthrough of the enterprise validation workflow, moving from high-level configuration down to granular issue resolution.
                </p>
              </div>

              <div className="cs-pa-walkthrough">

                {/* Step 1 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 1</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", marginBottom: "0.5rem" }}>
                      {["System Engineer", "Validation Lead"].map(p => (
                        <span key={p} style={{ fontSize: "0.65rem", padding: "3px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.03em" }}>{p}</span>
                      ))}
                    </div>
                    <h3 className="wt-title">Entry into the system</h3>
                    <p className="wt-desc">Users initiate Project Advisor directly from the root of their Simulink Project, loading the entire hierarchical structure instantly without opening individual files.</p>
                  </div>
                  <div className="wt-visual">
                    <div className="wt-mockup">
                      <div className="mock-header">
                        <div className="mock-title">Vehicle_Control_System.prj</div>
                      </div>
                      <div className="mock-body split">
                        <div className="mock-sidebar">
                          <div className="tree-node parent">Project Root</div>
                          <div className="tree-node child active">Braking Models</div>
                          <div className="tree-node child">Steering Models</div>
                          <div className="tree-node child">Sensors</div>
                        </div>
                        <div className="mock-main">
                          <div className="mock-btn-primary">Launch Project Advisor</div>
                        </div>
                      </div>
                      <div className="wt-annotation" style={{ top: "40%", left: "10%" }}>
                        <span>Preserves project hierarchy context</span>
                      </div>
                      <div className="wt-annotation right" style={{ top: "50%", right: "20%" }}>
                        <span>Single entry point for all checks</span>
                      </div>
                    </div>
                    <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--ink3)", fontStyle: "italic", textAlign: "center" }}>
                      Refined through multiple usability testing iterations
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 2</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", marginBottom: "0.5rem" }}>
                      {["Validation Lead", "Program Manager"].map(p => (
                        <span key={p} style={{ fontSize: "0.65rem", padding: "3px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.03em" }}>{p}</span>
                      ))}
                    </div>
                    <h3 className="wt-title">Setting configuration</h3>
                    <p className="wt-desc">Project-level validation rules are selected. The UI explicitly flags any subsystems that harbor conflicting legacy overrides to prevent baseline drift.</p>
                  </div>
                  <div className="wt-visual">
                    <div style={{
                      width: "100%",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      background: "white"
                    }}>
                      <div className="mock-header" style={{ padding: "0.85rem 1.25rem", borderBottom: "1px solid rgba(0,0,0,0.06)", fontWeight: 600, fontSize: "0.95rem", color: "var(--ink)" }}>
                        Setting configuration
                      </div>
                      <div style={{ width: "100%", aspectRatio: "1280 / 665", background: "var(--pa-surface)", position: "relative" }}>
                        <ScrollVideo
                          src="/Config-video.mp4"
                          loop
                          muted
                          playsInline
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--ink3)", fontStyle: "italic", textAlign: "center" }}>
                      Validated with enterprise users across workflows
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 3</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", marginBottom: "0.5rem" }}>
                      {["Model Engineer", "System Engineer"].map(p => (
                        <span key={p} style={{ fontSize: "0.65rem", padding: "3px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.03em" }}>{p}</span>
                      ))}
                    </div>
                    <h3 className="wt-title">Running validation</h3>
                    <p className="wt-desc">Checks execute in parallel across the background architecture. A live progress stream eliminates the "frozen screen" anxiety of legacy batch processing.</p>
                  </div>
                  <div className="wt-visual">
                    <div style={{
                      width: "100%",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      background: "white"
                    }}>
                      <div className="mock-header" style={{ padding: "0.85rem 1.25rem", borderBottom: "1px solid rgba(0,0,0,0.06)", fontWeight: 600, fontSize: "0.95rem", color: "var(--ink)" }}>
                        Running validation
                      </div>
                      <div style={{ width: "100%", aspectRatio: "1280 / 665", background: "var(--pa-surface)", position: "relative" }}>
                        <ScrollVideo
                          src="/Run-video.mp4"
                          loop
                          muted
                          playsInline
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--ink3)", fontStyle: "italic", textAlign: "center" }}>
                      Iterated to balance flexibility and predictability
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 4</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", marginBottom: "0.5rem" }}>
                      {["Validation Lead", "Program Manager"].map(p => (
                        <span key={p} style={{ fontSize: "0.65rem", padding: "3px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.03em" }}>{p}</span>
                      ))}
                    </div>
                    <h3 className="wt-title">Understanding results</h3>
                    <p className="wt-desc">Results are presented in an aggregated, spreadsheet-like view where users can instantly sort by severity or filter out noise to see only critical failures.</p>
                  </div>
                  <div className="wt-visual">
                    <div className="wt-mockup">
                      <div className="mock-header filters">
                        <div className="filter-pill active">Critical (12)</div>
                        <div className="filter-pill">Warnings (45)</div>
                        <div className="filter-pill">Passed (2,890)</div>
                      </div>
                      <div className="mock-body list">
                        <div className="list-item warning"><span className="indicator" /> Block configuration mismatch</div>
                        <div className="list-item error"><span className="indicator" /> Invalid data type propagation</div>
                        <div className="list-item error"><span className="indicator" /> Unconnected port identified</div>
                      </div>
                      <div className="wt-annotation" style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }}>
                        <span>High-level aggregation</span>
                      </div>
                    </div>
                    <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--ink3)", fontStyle: "italic", textAlign: "center" }}>
                      Refined through multiple usability testing iterations
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 5</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", marginBottom: "0.5rem" }}>
                      {["Model Engineer", "System Engineer"].map(p => (
                        <span key={p} style={{ fontSize: "0.65rem", padding: "3px 8px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.03em" }}>{p}</span>
                      ))}
                    </div>
                    <h3 className="wt-title">Investigating & resolving</h3>
                    <p className="wt-desc">Selecting a failure opens an inspector panel. Engineers can review the violation, read the guideline, and apply an automated fix or leave a tracked justification.</p>
                  </div>
                  <div className="wt-visual">
                    <div className="wt-mockup">
                      <div className="mock-body split">
                        <div className="mock-main list half">
                          <div className="list-item error active"><span className="indicator" /> Invalid data type</div>
                          <div className="list-item error"><span className="indicator" /> Unconnected port</div>
                        </div>
                        <div className="mock-inspector">
                          <div className="ins-title">Invalid data type propagation</div>
                          <div className="ins-desc">Guideline jc_0131 violated. Expected boolean, received double.</div>
                          <div className="ins-actions">
                            <div className="btn primary">Auto-Fix</div>
                            <div className="btn secondary">Justify</div>
                          </div>
                        </div>
                      </div>
                      <div className="wt-annotation right" style={{ top: "40%", right: "10%" }}>
                        <span>Contextual resolution panel</span>
                      </div>
                    </div>
                    <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--ink3)", fontStyle: "italic", textAlign: "center" }}>
                      Validated with enterprise users across workflows
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 11. INTERFACE IN MOTION */}
            <section id="interface-motion" className="cs-section" style={{ background: "#fff", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "10rem 0" }}>
              <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                <h2 className="cs-section-title" style={{ marginBottom: "1rem" }}>Interface in Motion</h2>
                <p style={{ fontSize: "1.25rem", color: "var(--ink2)", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
                  See how Project Advisor brings configuration, validation, and results together — enabling users to move from system understanding to issue resolution seamlessly.
                </p>
              </div>

              <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* SCREEN / BROWSER FRAME */}
                <div style={{ 
                  position: "relative", 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  border: "12px solid #1a1a1a", /* Dark Bezel */
                  boxShadow: "0 40px 100px rgba(0,0,0,0.12)",
                  background: "#000"
                }}>
                  {/* BROWSER TOP BAR (DOTS) */}
                  <div style={{
                    height: "32px",
                    background: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 16px",
                    gap: "8px",
                    borderBottom: "1px solid #333"
                  }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }}></div>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }}></div>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }}></div>
                  </div>

                  {/* DYNAMIC TEXT OVERLAYS (STILL ABSOLUTE OVER VIDEO) */}
                  <div style={{
                    position: "absolute",
                    inset: "32px 0 0 0", /* Account for top bar */
                    zIndex: 10,
                    pointerEvents: "none",
                    background: "transparent"
                  }}>
                    {/* Part 1: Configuration */}
                    <div style={{
                      position: "absolute",
                      bottom: "10%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0,0,0,0.75)",
                      color: "white",
                      padding: "10px 24px",
                      borderRadius: "100px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      animation: "pa-overlay-seq 12s infinite",
                      opacity: 0
                    }}>
                      Understand what will run
                    </div>

                    <style>{`
                      @keyframes pa-overlay-seq {
                        0%, 30% { opacity: 0; transform: translate(-50%, 20px); }
                        5%, 25% { opacity: 1; transform: translate(-50%, 0); }
                        33%, 63% { opacity: 0; transform: translate(-50%, 20px); }
                        38%, 58% { opacity: 1; transform: translate(-50%, 0); content: 'See system-level outcomes'; }
                        66%, 96% { opacity: 0; transform: translate(-50%, 20px); }
                        71%, 91% { opacity: 1; transform: translate(-50%, 0); content: 'Trace issues and take action'; }
                        100% { opacity: 0; }
                      }
                      
                      @keyframes pa-overlay-text-1 {
                        0%, 32% { opacity: 1; transform: translate(-50%, 0); }
                        33%, 100% { opacity: 0; transform: translate(-50%, 20px); }
                      }
                      @keyframes pa-overlay-text-2 {
                        0%, 33% { opacity: 0; transform: translate(-50%, 20px); }
                        34%, 65% { opacity: 1; transform: translate(-50%, 0); }
                        66%, 100% { opacity: 0; transform: translate(-50%, 20px); }
                      }
                      @keyframes pa-overlay-text-3 {
                        0%, 66% { opacity: 0; transform: translate(-50%, 20px); }
                        67%, 99% { opacity: 1; transform: translate(-50%, 0); }
                        100% { opacity: 0; }
                      }
                    `}</style>
                    
                    {/* Separate DIVs for each text to fix the content replacement issue */}
                    <div style={{
                      position: "absolute",
                      bottom: "10%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0,0,0,0.8)",
                      color: "white",
                      padding: "10px 24px",
                      borderRadius: "100px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      backdropFilter: "blur(8px)",
                      animation: "pa-overlay-text-1 12s infinite ease-out"
                    }}>
                      Understand what will run
                    </div>
                    <div style={{
                      position: "absolute",
                      bottom: "10%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0,0,0,0.8)",
                      color: "white",
                      padding: "10px 24px",
                      borderRadius: "100px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      backdropFilter: "blur(8px)",
                      animation: "pa-overlay-text-2 12s infinite ease-out",
                      opacity: 0
                    }}>
                      See system-level outcomes
                    </div>
                    <div style={{
                      position: "absolute",
                      bottom: "10%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0,0,0,0.8)",
                      color: "white",
                      padding: "10px 24px",
                      borderRadius: "100px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      backdropFilter: "blur(8px)",
                      animation: "pa-overlay-text-3 12s infinite ease-out",
                      opacity: 0
                    }}>
                      Trace issues and take action
                    </div>
                  </div>

                  <ScrollVideo
                    src="PA Intro.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                {/* BOTTOM CAPTION */}
                <div style={{ 
                  marginTop: "3rem", 
                  textAlign: "center", 
                  fontSize: "1.1rem", 
                  fontWeight: 600, 
                  color: "var(--ink2)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase"
                }}>
                  Understand <span style={{ mx: "1.5rem", color: "var(--border)" }}>→</span> See <span style={{ mx: "1.5rem", color: "var(--border)" }}>→</span> Act
                </div>
              </div>
            </section>

          {/* 10. DESIGN DECISIONS & TRADE-OFFS */}
          <section id="decisions" className="cs-dd-section-modern">

            <div className="cs-dd-section-inner">
              {/* Header */}
              <div className="cs-dd-header">
                <span className="cs-dd-eyebrow-modern">Design Strategy</span>
                <h2 className="cs-dd-heading-modern">Decisions &amp; <span className="accent-text">Trade-Offs</span></h2>
                <p className="cs-dd-lead-modern">Five pivotal choices that shaped the system — each evaluated through real user evidence and technical constraints.</p>
              </div>

              {/* Decision Cards */}
              {[
                {
                  num: '01',
                  title: 'Navigation Model',
                  tension: 'Tabs vs. unified workspace',
                  final: 'Filterable unified table with hierarchy',
                  why: 'Tabs broke spatial context on every switch. A single workspace cut triage time by 60%.',
                  exploredSrc: 'Navigation Model E.png',
                  finalSrc: 'Navigation Model F.png',
                },
                {
                  num: '02',
                  title: 'Data Visualization',
                  tension: 'Tree map / Bar charts vs. drill-down list',
                  final: 'Aggregated view → list → contextual panel',
                  why: 'Visualizations that support scalability and large scale result handling were preffered',
                  exploredSrc: 'DV E.png',
                  finalSrc: 'DV F.png',
                },
                {
                  num: '03',
                  title: 'Configuration Scope',
                  tension: 'Central Vs Bifurcated Configuration',
                  final: 'Project-default layer with explicit inheritance indicators',
                  why: 'User needs to know all the time the configurations scope to understand results',
                  exploredSrc: 'CS E.png',
                  finalSrc: 'CS F.png',
                },
                {
                  num: '04',
                  title: 'Action Scope',
                  tension: 'Global fix-all vs. row-scoped actions',
                  final: 'Scope-aware actions with visible scope label',
                  why: 'Global-by-default caused unintended cascades. Explicit scope labels eliminated triage mistakes.',
                  exploredSrc: 'AS E.png',
                  finalSrc: 'AS F.png',
                },
                {
                  num: '05',
                  title: 'Information Density',
                  tension: 'All upfront vs. progressive disclosure',
                  final: 'Aggregated health first — detail revealed on demand',
                  why: 'Raw diagnostics upfront collapsed trust. Engineers scan before they read.',
                  exploredSrc: '/dd-density-explored.png',
                  finalSrc: '/dd-density-final.png',
                },
              ].map((d, i) => (
                <div key={i} className="cs-dd-card-modern reveal">
                  <div className="cs-dd-card-left">
                    <div className="cs-dd-card-num-modern">{d.num}</div>
                    <h3 className="cs-dd-card-title-modern">{d.title}</h3>
                    <p className="cs-dd-card-tension-modern">{d.tension}</p>
                    <div className="cs-dd-card-decision-wrap-modern">
                      <span className="cs-dd-decision-label-modern">Final Decision</span>
                      <p className="cs-dd-card-decision-modern">{d.final}</p>
                    </div>
                    <p className="cs-dd-card-why-modern">{d.why}</p>
                  </div>
                  <div className="cs-dd-card-right">
                    <div className="cs-dd-img-pair">
                      <div className="cs-dd-img-block">
                        <div className="cs-dd-img-label explored">Explored</div>
                        <div className="cs-dd-img-frame">
                          <img src={d.exploredSrc} alt={`${d.title} – explored`} className="cs-dd-img" />
                        </div>
                      </div>
                      <div className="cs-dd-img-arrow">→</div>
                      <div className="cs-dd-img-block">
                        <div className="cs-dd-img-label final">Final</div>
                        <div className="cs-dd-img-frame final">
                          <img src={d.finalSrc} alt={`${d.title} – final`} className="cs-dd-img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </section>





          {/* 11. RESULTS & IMPACT */}
          <section id="impact" className="cs-section" style={{ background: "var(--pa-surface)", padding: "4rem", borderRadius: "16px" }}>
            <h2 className="cs-section-title" style={{ marginBottom: "3rem" }}>Platform Transformation</h2>

            <div className="cs-pa-ba-table">
              <div className="ba-header before">Before</div>
              <div className="ba-header after">After</div>

              <div className="ba-cell before">Model-by-model validation</div>
              <div className="ba-cell after">Project-level validation</div>

              <div className="ba-cell before">Fragmented visibility</div>
              <div className="ba-cell after">Unified system view</div>

              <div className="ba-cell before">Manual tracking</div>
              <div className="ba-cell after">Structured exploration</div>

              <div className="ba-cell before">Hidden configuration logic</div>
              <div className="ba-cell after">Visible configuration</div>
            </div>

            <div className="cs-pa-metrics" style={{ marginTop: "3.5rem", justifyContent: "center" }}>
              <div className="cs-pa-metric gap">
                <div className="value" style={{ color: "var(--accent)" }}>15min ➔ 3min</div>
                <div className="label">Average Triage Time</div>
              </div>
              <div className="cs-pa-metric gap">
                <div className="value" style={{ color: "var(--accent)" }}>1 Dashboard</div>
                <div className="label">Instead of 10+ reports</div>
              </div>
              <div className="cs-pa-metric gap">
                <div className="value" style={{ color: "var(--accent)" }}>100+</div>
                <div className="label">Single-run validation across 100+ models</div>
              </div>
            </div>
          </section>

          {/* 11. REFLECTION */}
          <section id="reflection" className="cs-section">
            <div className="cs-two-col editorial-text">
              <div>
                <h2 className="cs-section-title" style={{ marginTop: 0 }}>Reflection</h2>
              </div>
              <div>
                <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                  I stopped designing for screens and started designing for system state. Instead of optimizing individual views, I focused on how configuration inheritance and results exploration flow across the workflow.
                </p>
                <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.7", margin: 0 }}>
                  The hardest part was visibility: helping users understand multi-level overrides without surfacing unnecessary complexity. If I iterated again, I would add an explicit "what will run" preview and tighter onboarding around configuration scope.
                </p>
              </div>
            </div>
          </section>

        </div> {/* End Second Wrap */}
      </main>
    </div>
  );
}
