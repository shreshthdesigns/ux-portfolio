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


        <div className="wrap">

          <main className="cs-content">

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

            {/* 2. THE PROBLEM (SYSTEM SCALE) */}
            <section id="system-scale" className="cs-section">
              <div className="cs-two-col editorial-text">
                <div>
                  <h2 className="cs-section-title" style={{ marginTop: 0 }}>The Reality of Enterprise Systems</h2>
                </div>
                <div>
                  <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.7", marginBottom: "2rem" }}>
                    <span className="cs-pa-text-highlight delay-1">
                      I identified enterprise engineering systems as massive and deeply hierarchical.
                    </span> An enterprise vehicle or aerospace program isn’t just one model—it’s hundreds of interconnected components.
                  </p>
                  <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.7", marginBottom: "2rem" }}>
                    I found validation efforts to be painfully fragmented. <span className="cs-pa-text-highlight delay-2">
                      I saw teams forced to validate model-by-model
                    </span>, making it impossible to see the true compliance health of the overall project.
                  </p>
                </div>
              </div>

              <div className="cs-pa-process-diagram" style={{ marginTop: "2rem" }}>
                <div className="tier">
                  <div className="badge brand">Program / Project</div>
                </div>
                <div className="arrows">↓↓↓</div>
                <div className="tier spread">
                  <div className="badge">Model A</div>
                  <div className="badge">Model B</div>
                  <div className="badge">Model C</div>
                </div>
                <div className="arrows spread2">↓↓↓</div>
                <div className="tier massive-spread">
                  <div className="badge small">Subsystem</div>
                  <div className="badge small">Subsystem</div>
                  <div className="badge small">Subsystem</div>
                  <div className="badge small">Subsystem</div>
                  <div className="badge small">Subsystem</div>
                  <div className="badge small">Subsystem</div>
                </div>
                <div className="arrows massive-spread" style={{ marginBottom: "0.5rem" }}>•••</div>
                <div className="tier huge-spread">
                  <div style={{ fontSize: "0.85rem", color: "var(--ink3)", letterSpacing: "2px", fontWeight: "600", textTransform: "uppercase" }}>Thousands of individual components</div>
                </div>
              </div>
            </section>

            {/* Core Insight (after Problem) */}
            <div className="cs-pa-insight-callout" style={{ margin: "0 auto 56px", borderRadius: "16px", maxWidth: "1100px" }}>
              <div style={{ textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                Core insight
              </div>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.85rem", color: "var(--ink)", lineHeight: "1.25", margin: 0 }}>
                The core challenge wasn't running validation checks - it was understanding the state of a complex system.
              </p>
            </div>

            {/* 3. WHY THIS MATTERS */}
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

            {/* 4. USERS & STAKEHOLDERS */}
            <section id="stakeholders" className="cs-section">
              <h2 className="cs-section-title" style={{ marginBottom: "3rem" }}>Stakeholders & Goals</h2>
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

            {/* 5. EXISTING WORKFLOW */}
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

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
                <div className="cs-pa-chip">Highly Repetitive</div>
                <div className="cs-pa-chip">No Aggregation</div>
                <div className="cs-pa-chip">Manual Effort</div>
                <div className="cs-pa-chip">Error-Prone</div>
              </div>
            </section>

            {/* 7. RESEARCH INSIGHTS */}
            <section id="insights" className="cs-section">
              <div style={{ textAlign: "left", marginBottom: "4rem" }}>
                <h2 className="cs-section-title" style={{ marginBottom: "1rem" }}>What we learned from users</h2>
                <p style={{ color: "var(--ink2)", fontSize: "1.1rem", maxWidth: "700px", margin: "0" }}>
                  Understanding how engineers validate complex systems revealed patterns that shaped the product direction.
                </p>
              </div>
              <div className="cs-grid-3">
                <div className="cs-pa-insight-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "100%", aspectRatio: "1/1", backgroundColor: "#f8fafc", borderRadius: "8px", marginBottom: "1.5rem", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem", overflow: "hidden" }}>
                    <div style={{ width: "60px", height: "16px", background: "white", border: "1px solid #cbd5e1", borderRadius: "4px" }}></div>
                    <div style={{ display: "flex", gap: "1.5rem", height: "20px", position: "relative" }}>
                      <div style={{ position: "absolute", top: 0, left: "5px", right: "5px", height: "1px", background: "#cbd5e1" }}></div>
                      <div style={{ width: "1px", height: "100%", borderLeft: "1px dashed #cbd5e1" }}></div>
                      <div style={{ width: "1.5px", height: "100%", background: "var(--accent)" }}></div>
                      <div style={{ width: "1px", height: "100%", borderLeft: "1px dashed #cbd5e1" }}></div>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <div style={{ width: "24px", height: "24px", background: "transparent", border: "1px dashed #cbd5e1", borderRadius: "4px" }}></div>
                      <div style={{ width: "24px", height: "24px", background: "var(--accent-t)", border: "1px solid var(--accent)", borderRadius: "4px" }}></div>
                      <div style={{ width: "24px", height: "24px", background: "transparent", border: "1px dashed #cbd5e1", borderRadius: "4px" }}></div>
                    </div>
                  </div>
                  <div className="ic-header">01</div>
                  <h4>Hidden Settings</h4>
                  <p>I found configuration settings were hard to locate; override behavior was buried inside deep property menus.</p>
                </div>
                <div className="cs-pa-insight-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "100%", aspectRatio: "1/1", backgroundColor: "#f8fafc", borderRadius: "8px", marginBottom: "1.5rem", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", overflow: "hidden" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "36px" }}>
                      <div style={{ width: "100%", height: "4px", background: "#cbd5e1", borderRadius: "2px" }}></div>
                      <div style={{ width: "80%", height: "4px", background: "#cbd5e1", borderRadius: "2px" }}></div>
                      <div style={{ width: "90%", height: "4px", background: "#cbd5e1", borderRadius: "2px" }}></div>
                    </div>
                    <span style={{ color: "#94a3b8", fontSize: "1rem" }}>→</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "42px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ flex: 1, height: "4px", background: "#cbd5e1", borderRadius: "2px" }}></div>
                        <div style={{ width: "6px", height: "6px", background: "var(--accent)", borderRadius: "1px" }}></div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "60%", height: "4px", background: "var(--accent)", borderRadius: "2px" }}></div>
                        <div style={{ width: "6px", height: "6px", background: "var(--accent)", borderRadius: "1px" }}></div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "80%", height: "4px", background: "#cbd5e1", borderRadius: "2px" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="ic-header">02</div>
                  <h4>Spreadsheet Mentality</h4>
                  <p>I saw engineers expect spreadsheet-like interactions (filters, batch edits) to manage multiple failures - not paginated reports.</p>
                </div>
                <div className="cs-pa-insight-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "100%", aspectRatio: "1/1", backgroundColor: "#f8fafc", borderRadius: "8px", marginBottom: "1.5rem", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem", overflow: "hidden" }}>
                    <div style={{ flex: 1, position: "relative", height: "60px" }}>
                      <div style={{ position: "absolute", top: "0", left: "10%", width: "18px", height: "18px", background: "white", border: "1px solid #cbd5e1", borderRadius: "4px" }}></div>
                      <div style={{ position: "absolute", bottom: "5%", left: "40%", width: "18px", height: "18px", background: "white", border: "1px solid #cbd5e1", borderRadius: "4px" }}></div>
                      <div style={{ position: "absolute", top: "20%", right: "10%", width: "18px", height: "18px", background: "white", border: "1px solid #cbd5e1", borderRadius: "4px" }}></div>
                    </div>
                    <div style={{ width: "1px", height: "60px", background: "#e2e8f0", margin: "0 0.8rem" }}></div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: "40px", height: "14px", background: "var(--accent)", borderRadius: "4px" }}></div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <div style={{ width: "1.5px", height: "6px", background: "#cbd5e1" }}></div>
                          <div style={{ width: "17px", height: "14px", background: "white", border: "1px solid var(--accent)", borderRadius: "3px" }}></div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <div style={{ width: "1.5px", height: "6px", background: "#cbd5e1" }}></div>
                          <div style={{ width: "17px", height: "14px", background: "white", border: "1px solid var(--accent)", borderRadius: "3px" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ic-header">03</div>
                  <h4>Systems over Files</h4>
                  <p>I learned users think in functional architecture ("Steering Systems"), so reports must map to the hierarchy - not just filenames.</p>
                </div>
                <div className="cs-pa-insight-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "100%", aspectRatio: "1/1", backgroundColor: "#f8fafc", borderRadius: "8px", marginBottom: "1.5rem", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem", overflow: "hidden" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 14px)", gap: "4px" }}>
                      {[...Array(4)].map((_, i) => (
                        <div key={`low-${i}`} style={{ width: "14px", height: "14px", background: "white", border: "1px solid #cbd5e1", borderRadius: "3px" }}></div>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 10px)", gap: "3px" }}>
                      {[...Array(9)].map((_, i) => (
                        <div key={`med-${i}`} style={{ width: "10px", height: "10px", background: i === 4 ? "var(--accent)" : "white", border: i === 4 ? "none" : "1px solid #cbd5e1", borderRadius: "2px", transform: i === 4 ? "rotate(12deg) translateY(1px)" : "none" }}></div>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 7px)", gap: "2px" }}>
                      {[...Array(16)].map((_, i) => (
                        <div key={`high-${i}`} style={{ width: "7px", height: "7px", background: (i === 5 || i === 10 || i === 14) ? "var(--accent)" : "white", border: (i === 5 || i === 10 || i === 14) ? "none" : "1px solid #cbd5e1", borderRadius: "1.5px", transform: (i === 5 || i === 10 || i === 14) ? "rotate(-8deg) translateY(1px)" : "none", opacity: (i === 5 || i === 10 || i === 14) ? 0.9 : 1 }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="ic-header">04</div>
                  <h4>Automation Friction</h4>
                  <p>Running checks manually across hundreds of models caused extreme friction and massive drops in productivity.</p>
                </div>
                <div className="cs-pa-insight-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "100%", aspectRatio: "1/1", backgroundColor: "#f8fafc", borderRadius: "8px", marginBottom: "1.5rem", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.25rem", overflow: "hidden", position: "relative" }}>
                    <div style={{ width: "24px", height: "12px", background: "white", border: "1px solid #cbd5e1", borderRadius: "3px" }}></div>
                    <div style={{ width: "1.5px", height: "12px", background: "#cbd5e1" }}></div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: "100%" }}>
                      <div style={{ position: "absolute", right: "calc(50% + 12px)", top: "50%", width: "20px", height: "1.5px", background: "var(--accent)" }}></div>
                      <div style={{ position: "absolute", right: "calc(50% + 32px)", top: "50%", transform: "translateY(-50%)", width: "24px", height: "12px", background: "var(--accent-t)", border: "1px solid var(--accent)", borderRadius: "3px" }}></div>
                      <div style={{ position: "absolute", left: "calc(50% + 16px)", top: "50%", transform: "translateY(-50%)", fontSize: "0.45rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.5px", textTransform: "uppercase" }}>OVERRIDE</div>
                      <div style={{ width: "24px", height: "12px", background: "white", border: "1px solid #cbd5e1", borderRadius: "3px", zIndex: 2 }}></div>
                    </div>
                    <div style={{ width: "1.5px", height: "12px", background: "#cbd5e1" }}></div>
                    <div style={{ width: "24px", height: "12px", background: "white", border: "1px solid #cbd5e1", borderRadius: "3px" }}></div>
                  </div>
                  <div className="ic-header">05</div>
                  <h4>Lack of Confidence</h4>
                  <p>Without clear overview dashboards, engineers lacked confidence that they had run all required validations before integration.</p>
                </div>
                <div className="cs-pa-insight-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "100%", aspectRatio: "1/1", backgroundColor: "#f8fafc", borderRadius: "8px", marginBottom: "1.5rem", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", overflow: "hidden" }}>
                    <div style={{ width: "42px", height: "42px", background: "#334155", borderRadius: "6px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}></div>
                    <span style={{ color: "#94a3b8", fontSize: "1rem" }}>→</span>
                    <div style={{ position: "relative", width: "44px", height: "44px" }}>
                      <div style={{ position: "absolute", top: "0", left: "0", width: "32px", height: "32px", background: "rgba(16, 185, 129, 0.08)", border: "1px solid var(--accent)", borderRadius: "4px" }}></div>
                      <div style={{ position: "absolute", top: "5px", left: "5px", width: "32px", height: "32px", background: "rgba(16, 185, 129, 0.15)", border: "1px solid var(--accent)", borderRadius: "4px" }}></div>
                      <div style={{ position: "absolute", top: "10px", left: "10px", width: "32px", height: "32px", background: "white", border: "1px solid var(--accent)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(16,185,129,0.1)" }}>
                        <div style={{ width: "14px", height: "2px", background: "var(--accent)", borderRadius: "1px" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="ic-header">06</div>
                  <h4>Integration Anxiety</h4>
                  <p>Late stage compliance failures created huge bottlenecks because issues weren't caught early in the subsystem design phase.</p>
                </div>
              </div>
            </section>

            {/* 8. THE HARDEST PROBLEM - CONFIGURATION COMPLEXITY */}
            <section id="configuration" className="cs-section" style={{ background: "var(--pa-surface)", padding: "4rem", borderRadius: "16px", marginTop: "4rem" }}>
              <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <h2 className="cs-section-title" style={{ margin: "0 auto" }}>The Hardest Problem - Configuration Complexity</h2>
                <p style={{ fontSize: "1.15rem", color: "var(--ink2)", lineHeight: "1.6", margin: "1.5rem auto 0", maxWidth: "800px" }}>
                  I identified that the checks weren't the hard part. The hard part was reasoning about configuration at multiple levels:
                  project-level defaults, model-level inheritance, and occasional overrides.
                  Overrides were not visible, so users couldn't tell what configuration was active - or what would actually run.
                </p>
              </div>

              <div className="cs-pa-layered-diagram">
                <div className="layer top-layer">
                  <span className="label">Project Configuration (Default)</span>
                  <div className="rule-set">Active Checks: ISO-26262, MISRA-C</div>
                </div>
                <div className="layer-arrows">
                  <div className="arrow-down" />
                  <span style={{ background: "var(--pa-surface)", padding: "0 10px", color: "var(--ink3)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Inheritance & Overrides</span>
                </div>
                <div className="layer bottom-layer">
                  <div className="model-box inherited">
                    <span className="label">Model A</span>
                    <span className="status">Inherits Default</span>
                  </div>
                  <div className="model-box override">
                    <span className="label">Model B</span>
                    <span className="status">Overrides: Adds MISRA-AC</span>
                  </div>
                  <div className="model-box inherited">
                    <span className="label">Model C</span>
                    <span className="status">Inherits Default</span>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "center", marginTop: "2.5rem", color: "var(--ink)", fontSize: "1.1rem", fontWeight: 700 }}>
                Overrides create hidden complexity in system behavior
              </div>
              <div style={{ textAlign: "center", marginTop: "0.75rem", color: "var(--ink2)", fontSize: "1.05rem", fontWeight: 500, maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
                I designed the UI so inheritance and overrides are legible at a glance - before users hit "Run".
              </div>
            </section>

            {/* 8. DESIGN PRINCIPLES */}
            <section id="principles" className="cs-section">
              <div className="cs-two-col editorial-text" style={{ marginBottom: "3rem" }}>
                <div>
                  <h2 className="cs-section-title" style={{ marginTop: 0 }}>Design Principles</h2>
                </div>
                <div>
                  <div className="cs-pa-principle-list">
                    <div className="principle-item">
                      <span className="p-num">1</span>
                      <div>
                        <strong>System-first thinking</strong>
                        <p>I designed around project architectures, not individual files.</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <span className="p-num">2</span>
                      <div>
                        <strong>Visibility over hidden logic</strong>
                        <p>I made overrides and inherited configurations explicit in the UI.</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <span className="p-num">3</span>
                      <div>
                        <strong>Progressive disclosure</strong>
                        <p>I used progressive disclosure: show top-level health first, then drill down.</p>
                      </div>
                    </div>
                    <div className="principle-item">
                      <span className="p-num">4</span>
                      <div>
                        <strong>Familiar interaction patterns</strong>
                        <p>I leaned on familiar table sorting and standard IDE drawer layouts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. SOLUTION OVERVIEW */}
            <section id="solution" className="cs-section">
              <div style={{ textAlign: "left", marginBottom: "4rem" }}>
                <h2 className="cs-section-title" style={{ margin: "0" }}>The Solution: Project Advisor</h2>
              </div>

              <div className="cs-pa-solution-grid">
                <div className="solution-block">
                  <div className="s-text">
                    <div style={{ textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>Core Pillar</div>
                    <h3>A. Centralized Validation</h3>
                    <p>I designed a single entry point to process entire project hierarchies in parallel batch runs - saving hours.</p>
                  </div>
                  <div className="s-graphic" style={{ backgroundColor: "#ffffff", padding: "1.5rem", border: "1px solid rgba(0, 0, 0, 0.06)", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.04)" }}>
                    <img
                      src="/core-pillar-1.png"
                      alt="Centralized Validation Workflow"
                      style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                    />
                  </div>
                </div>

                <div className="solution-block reverse">
                  <div className="s-text">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--accent-t)", padding: "4px 10px", borderRadius: "100px", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "0.9rem" }}>✨</span>
                      <span style={{ textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontSize: "0.75rem", fontWeight: 700 }}>Core UX Contribution</span>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", lineHeight: "1.3", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                      Making configuration behavior predictable
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--ink2)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                      <p>Validation logic was distributed across project and model levels, creating hidden execution rules.</p>
                      <div>
                        <p style={{ marginBottom: "0.5rem", fontWeight: 500 }}>I simplified this into a clear and predictable system:</p>
                        <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem", color: "var(--ink2)", margin: 0 }}>
                          <li>Project configuration as the baseline</li>
                          <li>Explicit model-level overrides</li>
                          <li>Defined execution states</li>
                          <li>Pre-run visibility into behavior</li>
                        </ul>
                      </div>
                      <p style={{ marginTop: "0.5rem", fontWeight: 600, color: "var(--ink)", padding: "0.85rem 1rem", background: "rgba(16, 185, 129, 0.08)", borderLeft: "3px solid var(--accent)", borderRadius: "4px" }}>
                        Result: Users no longer infer system behavior — they see it.
                      </p>
                    </div>
                  </div>
                  <div className="s-graphic" style={{ backgroundColor: "#fafafc", padding: "2.5rem 2rem", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "16px", display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "auto" }}>

                    <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto", fontSize: "0.75rem", fontFamily: "var(--font-sans)" }}>

                      {/* ROOT: Project Config? */}
                      <div style={{ background: "white", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "0.5rem 0.75rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.02)", fontWeight: 600, color: "var(--ink)", position: "relative", zIndex: 2, fontSize: "0.75rem" }}>
                        <span style={{ width: "8px", height: "8px", background: "#cbd5e1", transform: "rotate(45deg)" }}></span>
                        Does the Project have a configuration?
                      </div>

                      {/* BRANCH YES */}
                      <div style={{ paddingLeft: "1.2rem", borderLeft: "2px solid #e2e8f0", marginLeft: "0.75rem", marginTop: "-0.5rem", paddingTop: "1.5rem", paddingBottom: "0.5rem", display: "flex", flexDirection: "column", gap: "1rem", position: "relative" }}>

                        <div style={{ position: "absolute", left: "-14px", top: "1rem", background: "white", border: "1px solid #e2e8f0", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: "4px", color: "#64748b" }}>YES</div>

                        <div style={{ position: "relative" }}>
                          <div style={{ background: "white", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "0.5rem 0.75rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.02)", fontWeight: 600, color: "var(--ink)", zIndex: 2, fontSize: "0.75rem" }}>
                            <span style={{ width: "8px", height: "8px", background: "#cbd5e1", transform: "rotate(45deg)" }}></span>
                            Does the model have a custom configuration?
                          </div>

                          {/* SUB-BRANCH YES (Override) */}
                          <div style={{ paddingLeft: "1.2rem", borderLeft: "2px solid var(--accent)", marginLeft: "0.75rem", marginTop: "-0.5rem", paddingTop: "1.5rem", paddingBottom: "0.5rem", position: "relative" }}>
                            <div style={{ position: "absolute", left: "-14px", top: "1.2rem", background: "var(--accent-t)", border: "1px solid var(--accent)", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: "4px", color: "var(--accent)" }}>YES</div>

                            <div style={{ background: "var(--accent)", border: "1px solid var(--accent)", borderRadius: "6px", padding: "0.6rem 0.8rem", display: "inline-flex", flexDirection: "column", alignItems: "flex-start", color: "white", boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)" }}>
                              <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>Runs on Custom Configuration</span>
                              <span style={{ fontSize: "0.6rem", letterSpacing: "0.3px", textTransform: "uppercase", opacity: 0.9, marginTop: "2px", fontWeight: 700 }}>Overrides Project Configuration</span>
                            </div>
                          </div>

                          {/* SUB-BRANCH NO */}
                          <div style={{ paddingLeft: "1.2rem", borderLeft: "2px solid #e2e8f0", marginLeft: "0.75rem", marginTop: "-0.5rem", paddingTop: "1rem", paddingBottom: "0.5rem", position: "relative" }}>
                            <div style={{ position: "absolute", left: "-12px", top: "0.8rem", background: "white", border: "1px solid #e2e8f0", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: "4px", color: "#64748b" }}>NO</div>

                            <div style={{ background: "white", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "0.5rem 0.75rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.02)", fontWeight: 600, color: "var(--ink)", fontSize: "0.75rem" }}>
                              <span style={{ width: "8px", height: "8px", background: "#cbd5e1", transform: "rotate(45deg)" }}></span>
                              Is the model excluded?
                            </div>

                            {/* SUB-SUB-BRANCH YES (Excluded) */}
                            <div style={{ paddingLeft: "1.2rem", borderLeft: "2px solid #e2e8f0", marginLeft: "0.75rem", marginTop: "-0.5rem", paddingTop: "1.5rem", position: "relative" }}>
                              <div style={{ position: "absolute", left: "-14px", top: "1.2rem", background: "white", border: "1px solid #e2e8f0", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: "4px", color: "#64748b" }}>YES</div>
                              <div style={{ background: "transparent", border: "1px dashed #cbd5e1", borderRadius: "6px", padding: "0.5rem 0.8rem", display: "inline-flex", fontWeight: 600, color: "#94a3b8", fontSize: "0.75rem" }}>
                                Excluded from Run
                              </div>
                            </div>

                            {/* SUB-SUB-BRANCH NO (Runs Project) */}
                            <div style={{ paddingLeft: "1.2rem", borderLeft: "2px solid #e2e8f0", marginLeft: "0.75rem", marginTop: "-0.5rem", paddingTop: "1rem", position: "relative" }}>
                              <div style={{ position: "absolute", left: "-12px", top: "0.8rem", background: "white", border: "1px solid #e2e8f0", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: "4px", color: "#64748b" }}>NO</div>
                              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "0.5rem 0.8rem", display: "inline-flex", fontWeight: 600, color: "#475569", fontSize: "0.75rem" }}>
                                Runs on Project Configuration
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      {/* BRANCH NO */}
                      <div style={{ paddingLeft: "1.2rem", borderLeft: "2px solid #e2e8f0", marginLeft: "0.75rem", marginTop: "-0.5rem", paddingTop: "1.5rem", paddingBottom: "0.5rem", position: "relative" }}>
                        <div style={{ position: "absolute", left: "-12px", top: "1rem", background: "white", border: "1px solid #e2e8f0", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: "4px", color: "#64748b" }}>NO</div>

                        <div style={{ background: "white", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "0.5rem 0.75rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.02)", fontWeight: 600, color: "var(--ink)", zIndex: 2, fontSize: "0.75rem" }}>
                          <span style={{ width: "8px", height: "8px", background: "#cbd5e1", transform: "rotate(45deg)" }}></span>
                          Does the model have a configuration?
                        </div>

                        {/* SUB-BRANCH YES */}
                        <div style={{ paddingLeft: "1.2rem", borderLeft: "2px solid #e2e8f0", marginLeft: "0.75rem", marginTop: "-0.5rem", paddingTop: "1.5rem", position: "relative" }}>
                          <div style={{ position: "absolute", left: "-14px", top: "1.2rem", background: "white", border: "1px solid #e2e8f0", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: "4px", color: "#64748b" }}>YES</div>
                          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "0.5rem 0.8rem", display: "inline-flex", fontWeight: 600, color: "#475569", fontSize: "0.75rem" }}>
                            Runs on Model Configuration
                          </div>
                        </div>

                        {/* SUB-BRANCH NO */}
                        <div style={{ paddingLeft: "1.2rem", borderLeft: "2px solid #e2e8f0", marginLeft: "0.75rem", marginTop: "-0.5rem", paddingTop: "1rem", position: "relative" }}>
                          <div style={{ position: "absolute", left: "-12px", top: "0.8rem", background: "white", border: "1px solid #e2e8f0", fontSize: "0.55rem", fontWeight: 700, padding: "2px 4px", borderRadius: "4px", color: "#64748b" }}>NO</div>
                          <div style={{ background: "transparent", border: "1px dashed #cbd5e1", borderRadius: "6px", padding: "0.5rem 0.8rem", display: "inline-flex", fontWeight: 600, color: "#94a3b8", fontSize: "0.75rem" }}>
                            Not Run
                          </div>
                        </div>

                      </div>

                    </div>

                    <div style={{ fontSize: "0.7rem", color: "var(--ink3)", lineHeight: "1.5", marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.05)", fontStyle: "italic", textAlign: "center", padding: "0 1rem" }}>
                      "Validation behavior depends on both project-level defaults and model-level overrides, making execution logic difficult to understand without clear visibility."
                    </div>

                  </div>
                </div>

                <div className="solution-block">
                  <div className="s-text">
                    <div style={{ textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>Core Pillar</div>
                    <h3>C. Results Exploration</h3>
                    <p>I built hierarchical exploration, filtering, and a right-side inspector so teams can fix or justify issues without losing context.</p>
                  </div>
                  <div className="s-graphic" style={{ backgroundColor: "#ffffff", padding: "1.5rem", border: "1px solid rgba(0, 0, 0, 0.06)", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.04)", height: "auto" }}>
                    <img
                      src="/hierarchy.png"
                      alt="Results Exploration Hierarchy"
                      style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 10. HOW THE SYSTEM WORKS IN PRACTICE */}
            <section id="in-practice" className="cs-section" style={{ paddingBottom: 0 }}>
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
                      <span className="wt-role">Project Manager / Lead</span>
                    </div>
                    <h3 className="wt-title">Entry into the system</h3>
                    <p className="wt-desc">Users initiate Project Advisor directly from the root of their Simulink Project, loading the entire hierarchical structure instantly without opening individual files.</p>
                  </div>
                  <div className="wt-visual">
                    <div className="wt-mockup">
                      {/* Fake header */}
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

                      {/* Annotations */}
                      <div className="wt-annotation" style={{ top: "40%", left: "10%" }}>
                        <span>Preserves project hierarchy context</span>
                      </div>
                      <div className="wt-annotation right" style={{ top: "50%", right: "20%" }}>
                        <span>Single entry point for all checks</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 2</span>
                      <span className="wt-role">Tooling Engineer / Lead</span>
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
                      background: "white",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.06)"
                    }}>
                      <div className="mock-header" style={{ padding: "0.85rem 1.25rem", borderBottom: "1px solid rgba(0,0,0,0.06)", fontWeight: 600, fontSize: "0.95rem", color: "var(--ink)" }}>
                        Setting configuration
                      </div>
                      <div style={{ width: "100%", aspectRatio: "1280 / 665", background: "var(--pa-surface)", position: "relative" }}>
                        {/* 
                          INSTRUCTIONS FOR VIDEO: 
                          1. Add your .mp4 file to the "public" folder of your React app.
                          2. Replace "/your-video-file.mp4" below with the actual filename.
                        */}
                        <ScrollVideo
                          src="/Config-video.mp4"
                          loop
                          muted
                          playsInline
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 3</span>
                      <span className="wt-role">System Engineer</span>
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
                      background: "white",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.06)"
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
                  </div>
                </div>

                {/* Step 4 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 4</span>
                      <span className="wt-role">Management & QA</span>
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
                  </div>
                </div>

                {/* Step 5 */}
                <div className="cs-pa-wt-step">
                  <div className="wt-content">
                    <div className="wt-meta">
                      <span className="wt-num">Step 5</span>
                      <span className="wt-role">Model Developer</span>
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
                  </div>
                </div>

              </div>
            </section>

            {/* 11. DESIGN DECISIONS & TRADE-OFFS */}
            <section className="cs-section">
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 className="cs-section-title" style={{ marginBottom: 0 }}>Design Decisions & Trade-Offs</h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
                <div className="cs-pa-principle-card">
                  <h4>Avoiding Tab-Based Views</h4>
                  <p>
                    <strong>I explored:</strong> tab-based views for project, models, and results.<br />
                    <strong>I saw:</strong> users lost spatial context after every switch.<br />
                    <strong>I chose:</strong> a filterable table and hierarchy-driven navigation.<br />
                    <strong>Why it worked:</strong> decisions stayed in one scannable workspace.
                  </p>
                </div>

                <div className="cs-pa-principle-card">
                  <h4>Rejecting Tree Map Visualization</h4>
                  <p>
                    <strong>I explored:</strong> tree maps for hierarchy exploration.<br />
                    <strong>I saw:</strong> dense blocks were hard to map to actionable failures.<br />
                    <strong>I chose:</strong> progressive drill-down with list + panel patterns.<br />
                    <strong>Why it worked:</strong> it preserved readability at enterprise scale.
                  </p>
                </div>

                <div className="cs-pa-principle-card">
                  <h4>Project vs Model Configuration Strategy</h4>
                  <p>
                    <strong>I explored:</strong> configuration screens that only understood model scope.<br />
                    <strong>I saw:</strong> overrides created hidden behavior when users forgot the baseline.<br />
                    <strong>I chose:</strong> a project-default layer with explicit inheritance indicators.<br />
                    <strong>Why it worked:</strong> users understood what would actually run.
                  </p>
                </div>

                <div className="cs-pa-principle-card">
                  <h4>Global vs Local Actions</h4>
                  <p>
                    <strong>I explored:</strong> one-action-per-row patterns that applied changes globally.<br />
                    <strong>I saw:</strong> side effects and uncertainty about scope.<br />
                    <strong>I chose:</strong> scope-aware actions with clear before/after behavior.<br />
                    <strong>Why it worked:</strong> it reduced accidental mistakes during triage.
                  </p>
                </div>

                <div className="cs-pa-principle-card" style={{ gridColumn: "1 / -1" }}>
                  <h4>Progressive Disclosure</h4>
                  <p>
                    <strong>I explored:</strong> showing raw diagnostic details upfront.<br />
                    <strong>I saw:</strong> overwhelming noise reduced trust in the system.<br />
                    <strong>I chose:</strong> start with aggregated health, then reveal failure context on demand.<br />
                    <strong>Why it worked:</strong> it matched how engineers triage under time pressure.
                  </p>
                </div>
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

          </main>

        </div>

      </div>

  );
}
