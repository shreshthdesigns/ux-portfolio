import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleField from "./case-study/ParticleField";
import ConnectorLine from "./case-study/ConnectorLine";

// =============================================================
// SECTION 1 — HERO
// Full-bleed landing with animated pipeline node diagram.
// =============================================================
function GeckoHero() {
  const tags = ["AI Systems", "RAG", "APIs", "Prompt Engineering", "Privacy-first"];
  return (
    <section className="cosmic-section-padding" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div className="cosmic-grid-overlay" style={{ position: "absolute", inset: 0, opacity: 0.5, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", background: "radial-gradient(circle, var(--cosmic-glow-purple) 0%, transparent 60%)", opacity: 0.8, zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, var(--cosmic-glow-blue) 0%, transparent 70%)", opacity: 0.6, zIndex: 0, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "3.5rem" }}>
          {tags.map((tag, i) => (
            <motion.div key={tag} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ padding: "6px 16px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", background: "var(--cosmic-glass)", border: "1px solid var(--cosmic-border)", color: "var(--cosmic-fg)", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
              {tag}
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 6rem" }}>
          <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700", color: "#ffffff", marginBottom: "1.5rem" }}>
            Designing an AI-Powered <span className="cosmic-text-gradient-blue">UX Intelligence</span> System
          </h1>
          <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: "1.6", color: "var(--cosmic-muted-fg)", maxWidth: "700px", margin: "0 auto", fontWeight: "400" }}>
            Transforming raw issue logs into structured UX signals using context-aware AI pipelines, privacy-first processing, and retrieval-inspired reasoning.
          </p>
        </motion.div>
        {/* Abstract AI Pipeline Visual */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(3, 5, 10, 0.6)", backdropFilter: "blur(20px)", border: "1px solid var(--cosmic-border)", borderRadius: "24px", padding: "3rem 4rem", boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }}>
          <div style={{ textAlign: "center", width: "120px" }}>
            <div className="cosmic-glass" style={{ width: "70px", height: "70px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", border: "1px solid var(--cosmic-border)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-muted-fg)" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
            </div>
            <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}>Raw Logs</div>
          </div>
          <div className="animate-cosmic-data-flow" style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--cosmic-border) 0%, rgba(255,255,255,0.4) 50%, var(--cosmic-border) 100%)", opacity: 0.6, margin: "0 1rem" }} />
          <div style={{ textAlign: "center", position: "relative", width: "160px" }}>
            <div className="cosmic-glow-purple" style={{ position: "absolute", top: -30, left: -30, right: -30, bottom: -30, borderRadius: "50%", zIndex: 0 }} />
            <div className="cosmic-glass" style={{ position: "relative", zIndex: 1, width: "90px", height: "90px", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", background: "rgba(3,5,10,0.8)", border: "1px solid var(--cosmic-purple)" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-purple)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </div>
            <div style={{ color: "var(--cosmic-fg)", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}>AI Intelligence Pipeline</div>
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--cosmic-border) 0%, var(--cosmic-blue) 50%, var(--cosmic-border) 100%)", opacity: 0.6, margin: "0 1rem" }} />
          <div style={{ textAlign: "center", position: "relative", width: "120px" }}>
            <div className="cosmic-glow-blue" style={{ position: "absolute", top: -20, left: -20, right: -20, bottom: -20, borderRadius: "50%", zIndex: 0 }} />
            <div className="cosmic-glass" style={{ position: "relative", zIndex: 1, width: "70px", height: "70px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", background: "rgba(3,5,10,0.8)", border: "1px solid var(--cosmic-blue)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-blue)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
            <div style={{ color: "var(--cosmic-fg)", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}>UX Signals</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 2 — PROBLEM SPACE
// Infinite scrolling live log stream visualization.
// =============================================================
function GeckoProblem() {
  const generateLogs = () => {
    const logs = [];
    const types = ["ERR", "WARN", "INFO", "DEBUG"];
    const contexts = ["LayoutEngine", "DataGrid", "APIGateway", "AuthService", "RenderThread"];
    const msgs = [
      "Cannot read properties of undefined (reading 'length')",
      "Failed to load resource: the server responded with a status of 404",
      "Unhandled promise rejection: NetworkError",
      "Component remounted 42 times unnecessarily",
      "Memory leak detected in DOM node detachment",
      "Null reference exception in callback handler",
      "Maximum call stack size exceeded"
    ];
    for (let i = 0; i < 30; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const ctx = contexts[Math.floor(Math.random() * contexts.length)];
      const msg = msgs[Math.floor(Math.random() * msgs.length)];
      const ts = new Date(Date.now() - Math.random() * 10000000).toISOString();
      logs.push(`[${ts}] [${type}] [${ctx}] ${msg}`);
    }
    return logs;
  };
  const logs = generateLogs();
  return (
    <section id="problem" className="cosmic-section-padding" style={{ position: "relative", zIndex: 1, borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontFamily: "var(--serif)", fontWeight: "400", color: "var(--cosmic-fg)", lineHeight: "1.1", maxWidth: "900px", margin: "0 auto", letterSpacing: "-0.02em" }}>
            "We had data. <br /><span style={{ color: "var(--cosmic-muted-fg)" }}>We didn't have intelligence."</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div style={{ paddingRight: "2rem" }}>
            <div style={{ color: "var(--cosmic-purple)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>The Problem Space</div>
            <h3 style={{ fontSize: "2rem", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", lineHeight: "1.2" }}>A powerful system buried in noise.</h3>
            <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.7", marginBottom: "2.5rem" }}>
              Gecko is one of the richest sources of product truth—capturing every failure, workaround, and user struggle. Yet, without intelligence, it remained a system of records, not a system of understanding.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { title: "Thousands of issues per release", desc: "Engineers and designers were drowning in uncorrelated, fragmented diagnostic logs.", icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" /> },
                { title: "Weeks of manual effort", desc: "Categorizing and triaging usability friction points required painstaking, manual spreadsheet analysis.", icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
                { title: "No overarching pattern detection", desc: "Systemic UX flaws spanned multiple domains, making it impossible to see the holistic journey degradation.", icon: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></> }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ color: "var(--cosmic-purple)", marginTop: "4px" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg></div>
                  <div>
                    <h4 style={{ color: "var(--cosmic-fg)", fontWeight: "600", marginBottom: "4px" }}>{item.title}</h4>
                    <p style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Visual: Scrolling Log Stream */}
          <div style={{ position: "relative", height: "500px", background: "var(--cosmic-card)", borderRadius: "24px", border: "1px solid var(--cosmic-border)", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
            <div style={{ display: "flex", gap: "8px", padding: "16px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid var(--cosmic-border)" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", opacity: 0.5 }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b", opacity: 0.5 }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", opacity: 0.5 }} />
              <div style={{ marginLeft: "1rem", color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.05em" }}>gecko-telemetry-stream.log</div>
            </div>
            <div style={{ padding: "1rem", position: "relative", height: "calc(100% - 43px)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, transparent 20%, var(--cosmic-card) 95%)", zIndex: 2, pointerEvents: "none" }} />
              <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "monospace", fontSize: "0.65rem", color: "var(--cosmic-muted-fg)", opacity: 0.7 }}>
                {logs.concat(logs).map((log, i) => (
                  <div key={i} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: log.includes("ERR") ? "#ef4444" : log.includes("WARN") ? "#f59e0b" : "inherit", opacity: log.includes("ERR") ? 0.9 : 0.5 }}>{log}</div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 3 — USER RESEARCH
// Qualitative interview insight cards + manual analysis timeline.
// =============================================================
function GeckoResearch() {
  const quotes = [
    { text: "Takes me solid weeks just to manually tag issues and identify reliable patterns across the entire log dump.", role: "UX Researcher", icon: <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /> },
    { text: "We sometimes script AI manually to parse the CSVs, but the prompting isn't standardized so it's wildly inconsistent.", role: "UX Designer", icon: <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></> },
    { text: "It's extremely hard to trace a fragmented error log back to poor system design or complex cross-product interactions.", role: "UX Researcher", icon: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></> }
  ];
  return (
    <section id="research" className="cosmic-section-padding" style={{ background: "rgba(3, 5, 10, 0.4)", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{ color: "var(--cosmic-blue)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>Discovery &amp; Validation</div>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Validating the Fatigue</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            We interviewed <span style={{ color: "var(--cosmic-fg)", fontWeight: "600" }}>8 Lead Designers and Researchers</span> spanning three enterprise sub-domains to isolate exactly where the diagnostic pipeline was failing.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "6rem" }}>
          {quotes.map((q, i) => (
            <div key={i} className="cosmic-glass" style={{ padding: "2rem", borderRadius: "24px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "linear-gradient(90deg, transparent, var(--cosmic-blue), transparent)", opacity: 0.5 }} />
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--cosmic-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{q.icon}</svg>
              </div>
              <p style={{ color: "var(--cosmic-fg)", fontSize: "1.05rem", lineHeight: "1.6", fontWeight: "400", marginBottom: "2rem", fontStyle: "italic" }}>"{q.text}"</p>
              <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700" }}>— {q.role}</div>
            </div>
          ))}
        </div>
        {/* Journey Timeline */}
        <div style={{ background: "var(--cosmic-card)", border: "1px solid var(--cosmic-border)", borderRadius: "32px", padding: "4rem", position: "relative", overflow: "hidden" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h3 style={{ color: "var(--cosmic-fg)", fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>The Manual Analysis Journey</h3>
            <p style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.95rem" }}>Mapping the operational fatigue of conventional diagnostics.</p>
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ position: "absolute", top: "30%", left: "5%", right: "5%", height: "2px", background: "var(--cosmic-border)", zIndex: 0 }} />
            {[
              { label: "Manual Export", desc: "Download thousands of disjointed CSV rows.", color: "var(--cosmic-muted-fg)" },
              { label: "Cognitive Fatigue", desc: "Hours spent wrestling spreadsheets to map keywords.", color: "#f59e0b" },
              { label: "Fragmented Insights", desc: "Insights degrade; systemic architectural UX flaws go entirely unnoticed.", color: "#ef4444" }
            ].map((step, i) => (
              <div key={i} style={{ position: "relative", zIndex: 1, textAlign: "center", flex: 1 }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--cosmic-bg)", border: `4px solid ${step.color}`, margin: "0 auto 1.5rem", boxShadow: i > 0 ? `0 0 15px ${step.color}33` : "none" }} />
                <div style={{ color: step.color, fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.5rem" }}>{step.label}</div>
                <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.8rem", maxWidth: "160px", margin: "0 auto", lineHeight: "1.4" }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 4 — FAILED APPROACH
// Excel keyword-matching mockup showing false positives/negatives.
// =============================================================
function GeckoFailedApproach() {
  return (
    <section id="failed-approach" className="cosmic-section-padding" style={{ borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>Initial Prototype</div>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", lineHeight: "1.2", letterSpacing: "-0.02em" }}>The fragility of keyword detection.</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.7", marginBottom: "2rem" }}>
              Our first attempt at automating insights relied on strict keyword tracking formulas inside Excel strings ("missing", "not found", "broken"). This approach was brittle, completely lacked context, and ultimately failed to capture the true user intent.
            </p>
            <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#ef4444", lineHeight: "1" }}>&lt;30%</div>
                <div style={{ fontSize: "0.85rem", color: "var(--cosmic-muted-fg)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.5rem" }}>Accuracy Rate</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--cosmic-fg)", lineHeight: "1" }}>High</div>
                <div style={{ fontSize: "0.85rem", color: "var(--cosmic-muted-fg)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.5rem" }}>False Positives</div>
              </div>
            </div>
            <div className="cosmic-glass" style={{ padding: "1.5rem", borderRadius: "16px", borderLeft: "3px solid var(--cosmic-blue)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ color: "var(--cosmic-muted-fg)", fontWeight: "600", fontSize: "0.95rem" }}>Manual Logic</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                <span style={{ color: "#ef4444", fontWeight: "600", fontSize: "0.95rem" }}>Low Intelligence</span>
              </div>
              <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.05)", margin: "1rem 0" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "var(--cosmic-fg)", fontWeight: "700", fontSize: "1rem" }}>AI Understanding</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-blue)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                <span style={{ color: "var(--cosmic-blue)", fontWeight: "700", fontSize: "1rem" }}>Context-aware Reasoning</span>
              </div>
            </div>
          </div>
          {/* Visual: Excel Mockup */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--cosmic-border)", borderRadius: "24px", overflow: "hidden", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            <div style={{ background: "rgba(3, 5, 10, 0.9)", padding: "1rem 1.5rem", borderBottom: "1px solid var(--cosmic-border)", display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "24px", height: "24px", background: "#107c41", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.7rem", fontWeight: "bold" }}>X</div>
              <div style={{ color: "var(--cosmic-fg)", fontSize: "0.85rem", fontWeight: "600" }}>Raw_Feedback_Q3.xlsx</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "40px 1.5fr 1fr", borderBottom: "1px solid var(--cosmic-border)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ padding: "0.75rem", borderRight: "1px solid var(--cosmic-border)", color: "var(--cosmic-muted-fg)", fontSize: "0.75rem" }}></div>
              <div style={{ padding: "0.75rem", borderRight: "1px solid var(--cosmic-border)", color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", fontWeight: "600" }}>System Log Description</div>
              <div style={{ padding: "0.75rem", color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", fontWeight: "600" }}>=ISNUMBER(SEARCH("missing", B2))</div>
            </div>
            {[
              { row: "1", text: "The user profile image is missing entirely from the header.", result: "TRUE (Hit)", color: "#10b981", bg: "transparent", chip: null },
              { row: "2", text: "I can't seem to locate the configuration panel anywhere.", result: "FALSE (Miss)", color: "#ef4444", bg: "rgba(239, 68, 68, 0.05)", chip: "False Negative" },
              { row: "3", text: "No issues found, everything works perfectly.", result: "TRUE (Hit)", color: "#ef4444", bg: "rgba(239, 68, 68, 0.05)", chip: "False Positive" }
            ].map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "40px 1.5fr 1fr", borderBottom: i < 2 ? "1px solid var(--cosmic-border)" : "none", background: r.bg }}>
                <div style={{ padding: "0.75rem", borderRight: "1px solid var(--cosmic-border)", color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", textAlign: "center" }}>{r.row}</div>
                <div style={{ padding: "0.75rem", borderRight: "1px solid var(--cosmic-border)", color: "var(--cosmic-fg)", fontSize: "0.85rem" }}>{r.text}</div>
                <div style={{ padding: "0.75rem", color: r.color, fontSize: "0.85rem", fontWeight: "600", display: "flex", gap: "8px", alignItems: "center" }}>
                  <span>{r.result}</span>
                  {r.chip && <span style={{ padding: "2px 6px", background: "rgba(239,68,68,0.2)", borderRadius: "4px", fontSize: "0.6rem" }}>{r.chip}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 5 — OPPORTUNITY REFRAME
// Full-bleed HMW statement in large typography.
// =============================================================
function GeckoOpportunity() {
  return (
    <section id="opportunity" style={{ padding: "12rem 2rem", background: "var(--cosmic-card)", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: "var(--cosmic-cyan)", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", fontWeight: "700", marginBottom: "3rem" }}>The Opportunity</div>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontFamily: "var(--serif)", fontWeight: "400", color: "var(--cosmic-fg)", lineHeight: "1.1", letterSpacing: "-0.02em", margin: "0 auto" }}>
          How might we design a system that continuously converts issue logs into <span className="cosmic-text-gradient-blue">structured UX intelligence</span>?
        </h2>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 6 — SOLUTION OVERVIEW
// Animated modular pipeline diagram with energy flow connector.
// =============================================================
function GeckoSolution() {
  const nodes = [
    { label: "Gecko APIs", type: "Extraction", icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /> },
    { label: "Data Cleaning", type: "Sanitization", icon: <><polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></> },
    { label: "PII Masking", type: "Security", highlight: true, icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
    { label: "AI Analysis", type: "Processing", icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /> },
    { label: "Categorization", type: "Structuring", icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></> },
    { label: "Reports", type: "Outcome", color: "var(--cosmic-cyan)", icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></> }
  ];
  return (
    <section id="solution-overview" className="cosmic-section-padding" style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "1000px", height: "400px", background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.08) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{ color: "var(--cosmic-blue)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>Solution Overview</div>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>AI-Powered Gecko Mining Agent</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            A modular pipeline designed explicitly to inject intelligence into an existing raw feedback infrastructure safely and autonomously.
          </p>
        </div>
        <div style={{ background: "rgba(3, 5, 10, 0.8)", backdropFilter: "blur(20px)", border: "1px solid var(--cosmic-border)", borderRadius: "32px", padding: "5rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
          <div style={{ position: "absolute", top: "50%", left: "100px", right: "100px", height: "2px", background: "rgba(255,255,255,0.05)", zIndex: 0 }} />
          <motion.div animate={{ backgroundPosition: ["100% 0", "-100% 0"] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            style={{ position: "absolute", top: "50%", left: "100px", right: "100px", height: "2px", background: "linear-gradient(90deg, transparent 0%, var(--cosmic-blue) 50%, transparent 100%)", backgroundSize: "200% 100%", zIndex: 1, opacity: 0.7 }} />
          {nodes.map((node, i) => (
            <div key={i} style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              {node.highlight && <div className="cosmic-glow-purple" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100px", height: "100px", borderRadius: "50%", zIndex: -1, opacity: 0.6 }} />}
              {node.color && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100px", height: "100px", background: `radial-gradient(circle, ${node.color}44 0%, transparent 70%)`, borderRadius: "50%", zIndex: -1, opacity: 0.6 }} />}
              <div className="cosmic-glass" style={{ width: "60px", height: "60px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", border: `1px solid ${node.highlight ? "var(--cosmic-purple)" : node.color ? node.color : "var(--cosmic-border)"}`, background: "var(--cosmic-card)", position: "relative" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={node.highlight ? "var(--cosmic-purple)" : node.color ? node.color : "var(--cosmic-fg)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{node.icon}</svg>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: node.highlight ? "var(--cosmic-purple)" : node.color ? node.color : "var(--cosmic-fg)", fontSize: "0.85rem", fontWeight: "700", marginBottom: "4px" }}>{node.label}</div>
                <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600" }}>{node.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 7 — SYSTEM ARCHITECTURE
// 5-layer stack diagram with depth perspective illusion.
// =============================================================
function GeckoArchitecture() {
  const layers = [
    { id: "L5", name: "UX Interface", color: "var(--cosmic-cyan)", desc: "Interactive dashboards and query interfaces", items: ["Gecko Filter Module", "Insight Dashboard"] },
    { id: "L4", name: "Insight Generation", color: "var(--cosmic-fg)", desc: "Structuring outputs into actionable signals", items: ["JSON Structuring", "Confidence Scoring", "UX Taxonomy Mapping"] },
    { id: "L3", name: "AI Processing Layer", color: "var(--cosmic-blue)", desc: "Context-aware reasoning and analysis", items: ["OpenAI API", "Prompt Engine", "Multimodal Analysis (Text + Image)"] },
    { id: "L2", name: "Privacy Layer", color: "var(--cosmic-purple)", desc: "Enterprise-grade data sanitization", items: ["Microsoft Presidio (PII Masking)", "Regex Redaction", "Image OCR Blurring"], isHero: true },
    { id: "L1", name: "Data Extraction", color: "var(--cosmic-muted-fg)", desc: "Raw system telemetry ingress", items: ["Gecko REST APIs", "Log Aggregation", "Batch Processing"] }
  ];
  return (
    <section id="architecture" className="cosmic-section-padding" style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div className="cosmic-grid-overlay" style={{ position: "absolute", inset: 0, opacity: 0.3, zIndex: 0 }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <div style={{ color: "var(--cosmic-blue)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>System Architecture</div>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>A Hybrid Engineering &amp; UX System</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
            This solution was designed as a robust five-layer architecture, ensuring computational scalability while strictly enforcing enterprise data privacy.
          </p>
        </div>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {layers.map((layer, i) => (
            <div key={layer.id} style={{ display: "grid", gridTemplateColumns: "180px 1fr", background: layer.isHero ? "rgba(255,255,255,0.03)" : "rgba(3, 5, 10, 0.6)", border: "1px solid", borderColor: layer.isHero ? "var(--cosmic-purple)" : "var(--cosmic-border)", borderRadius: "16px", padding: "2rem", position: "relative", overflow: "hidden", boxShadow: layer.isHero ? "0 0 30px rgba(168, 85, 247, 0.15)" : "0 10px 30px rgba(0,0,0,0.2)", transform: `scale(${1 - i * 0.02})`, transformOrigin: "bottom center", zIndex: 10 - i }}>
              {layer.isHero && <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "200px", background: "linear-gradient(90deg, rgba(168, 85, 247, 0.15), transparent)", zIndex: 0 }} />}
              <div style={{ position: "relative", zIndex: 1, borderRight: "1px solid rgba(255,255,255,0.05)", paddingRight: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{layer.id}</div>
                <div style={{ color: layer.color, fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem" }}>{layer.name}</div>
                <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.85rem", lineHeight: "1.4" }}>{layer.desc}</div>
              </div>
              <div style={{ position: "relative", zIndex: 1, paddingLeft: "3rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                {layer.items.map((item, idx) => (
                  <div key={idx} style={{ background: layer.isHero ? "rgba(168, 85, 247, 0.1)" : "rgba(255,255,255,0.03)", border: "1px solid", borderColor: layer.isHero ? "rgba(168, 85, 247, 0.3)" : "var(--cosmic-border)", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.85rem", color: layer.isHero ? "#ffffff" : "var(--cosmic-fg)", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px" }}>
                    {item.includes("Presidio") && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-purple)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>}
                    {item.includes("OpenAI") && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-blue)" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /></svg>}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-muted-fg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="4" /><polyline points="5 13 12 4 19 13" /></svg>
          </div>
          <div style={{ textAlign: "center", color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: "700" }}>Raw Telemetry Flow</div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 8 — PRIVACY-FIRST DESIGN
// PII masking flow + animated OCR redaction scanner.
// =============================================================
function GeckoPrivacy() {
  return (
    <section id="privacy" className="cosmic-section-padding" style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ position: "absolute", top: "20%", right: "-10%", width: "1200px", height: "1200px", background: "radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <div style={{ color: "var(--cosmic-purple)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>The Absolute Constraint</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Privacy-First by Design</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
            Enterprise issue logs contain highly sensitive payloads. Before a single string of text reaches the LLM inference layer, it must be completely sanitized. <span style={{ color: "var(--cosmic-fg)", fontWeight: "600" }}>Zero PII exposure.</span>
          </p>
        </div>
        {/* PII Masking Transformation Flow */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: "1.5rem", alignItems: "center", marginBottom: "4rem" }}>
          <div className="cosmic-glass" style={{ padding: "2rem", borderRadius: "24px", textAlign: "center" }}>
            <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Raw Data</div>
            <div style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "var(--cosmic-fg)", textAlign: "left", opacity: 0.8 }}>
              [ERR] Session <span style={{ color: "#ef4444" }}>john.doe@mathworks.com</span> failed to auth at IP <span style={{ color: "#ef4444" }}>192.168.1.4</span>
            </div>
          </div>
          <div style={{ color: "var(--cosmic-border)" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
          <div className="cosmic-glass" style={{ padding: "2rem", borderRadius: "24px", textAlign: "center", border: "1px solid var(--cosmic-purple)", boxShadow: "0 0 30px rgba(168, 85, 247, 0.1)" }}>
            <div style={{ color: "var(--cosmic-purple)", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Masked (Presidio)</div>
            <div style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "var(--cosmic-fg)", textAlign: "left" }}>
              [ERR] Session <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ background: "var(--cosmic-purple)", color: "white", padding: "2px 6px", borderRadius: "4px" }}>&lt;EMAIL_ADDRESS&gt;</motion.span> failed to auth at IP <span style={{ background: "var(--cosmic-purple)", color: "white", padding: "2px 6px", borderRadius: "4px" }}>&lt;IP_ADDRESS&gt;</span>
            </div>
          </div>
          <div style={{ color: "var(--cosmic-purple)" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
          <div className="cosmic-glass" style={{ padding: "2rem", borderRadius: "24px", textAlign: "center", border: "1px solid var(--cosmic-blue)", boxShadow: "0 0 30px rgba(37, 99, 235, 0.1)" }}>
            <div style={{ color: "var(--cosmic-blue)", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>AI-Safe Payload</div>
            <div style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "var(--cosmic-blue)", textAlign: "left" }}>
              &#123; "intent": "analyze", "payload": "[ERR] Session &lt;EMAIL_ADDRESS&gt; failed..." &#125;
            </div>
          </div>
        </div>
        {/* Multimodal OCR Redaction Visual */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--cosmic-border)", borderRadius: "32px", padding: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1rem" }}>Multimodal OCR Redaction</h3>
            <p style={{ color: "var(--cosmic-muted-fg)", lineHeight: "1.6", fontSize: "1rem" }}>
              Bug reports often contain screenshots. We implemented an OCR pass that detects strings shaped like emails, IPs, or proprietary path names, applying a destructive gaussian blur before the image matrix is converted for multimodal analysis.
            </p>
          </div>
          <div style={{ position: "relative", background: "var(--cosmic-card)", border: "1px solid var(--cosmic-border)", borderRadius: "16px", height: "200px", overflow: "hidden" }}>
            <div style={{ height: "40px", borderBottom: "1px solid var(--cosmic-border)", display: "flex", alignItems: "center", padding: "0 1rem", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: "6px" }}><div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} /><div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} /></div>
              <div style={{ width: "100px", height: "12px", background: "rgba(255,255,255,0.05)", borderRadius: "4px" }} />
            </div>
            <div style={{ padding: "1.5rem" }}>
              <div style={{ width: "40%", height: "24px", background: "rgba(255,255,255,0.1)", borderRadius: "6px", marginBottom: "1rem" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
                <motion.div animate={{ filter: ["blur(0px)", "blur(6px)", "blur(6px)"] }} transition={{ repeat: Infinity, duration: 4 }}
                  style={{ width: "180px", height: "16px", background: "rgba(255,255,255,0.8)", borderRadius: "4px", color: "#000", fontSize: "10px", display: "flex", alignItems: "center", paddingLeft: "4px", overflow: "hidden" }}>
                  john.doe@mathworks.com
                </motion.div>
              </div>
            </div>
            <motion.div animate={{ left: ["-10%", "110%"] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              style={{ position: "absolute", top: 0, bottom: 0, width: "2px", background: "var(--cosmic-purple)", boxShadow: "0 0 20px 2px var(--cosmic-purple)", zIndex: 10, opacity: 0.5 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 9 — AI INTELLIGENCE LAYER
// Structured signal DB table with LLM output + confidence scores.
// =============================================================
function GeckoIntelligenceLayer() {
  const tableData = [
    { id: "LOG-0192A", issue: "The 'Advanced Model Properties' context menu fails to appear on right-click within nested subsystems.", category: "Discoverability", mechanism: "Context Menu Propagation", confidence: 94 },
    { id: "LOG-0814C", issue: "Cannot distinguish between active and disabled simulation flags on ultra-wide monitors due to low contrast constraints.", category: "Accessibility", mechanism: "State Indication", confidence: 88 },
    { id: "LOG-1102X", issue: "Required 14 clicks to export variable data. Users repeatedly abandon the flow at step 4.", category: "Ease of Use", mechanism: "Task Efficiency", confidence: 97 }
  ];
  return (
    <section id="intelligence-layer" className="cosmic-section-padding" style={{ position: "relative", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ color: "var(--cosmic-blue)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>The Intelligence Layer</div>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", lineHeight: "1.2", letterSpacing: "-0.02em" }}>Structuring the unstructured.</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.7", marginBottom: "2rem" }}>
              The AI layer is prompted strictly as a UX Researcher. Using few-shot learning and RAG via our internal UX taxonomies, it analyzes the sanitized logs to explicitly isolate actionable signals.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { n: "1", title: "Detect Usability Issues", desc: "Parsing rants and noise for genuine friction points." },
                { n: "2", title: "Categorize Intelligently", desc: "Mapping to Discoverability, Accessibility, or Ease of Use." },
                { n: "3", title: "Identify Missing Mechanisms", desc: "Locating exactly what interaction paradigm failed." },
                { n: "4", title: "Assign Confidence Scores", desc: "Calibrating trust against historical model certainty." }
              ].map(item => (
                <div key={item.n} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--cosmic-blue)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: "bold", flexShrink: 0 }}>{item.n}</div>
                  <div>
                    <div style={{ color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "0.95rem" }}>{item.title}</div>
                    <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.85rem", lineHeight: "1.4" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cosmic-glass" style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--cosmic-border)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
            <div style={{ padding: "1.5rem 2rem", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid var(--cosmic-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "1rem" }}>Structured Signals DB</div>
              <div style={{ padding: "4px 12px", background: "var(--cosmic-glow-blue)", color: "var(--cosmic-blue)", borderRadius: "100px", fontSize: "0.75rem", fontWeight: "600" }}>3 New Signals</div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "rgba(0,0,0,0.2)", borderBottom: "1px solid var(--cosmic-border)" }}>
                    {["Issue Payload", "Category", "Mechanism", "Confidence"].map((h, i) => (
                      <th key={h} style={{ padding: "1rem 1.5rem", color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600", textAlign: i === 3 ? "right" : "left" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i !== tableData.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                      <td style={{ padding: "1.25rem 1.5rem", maxWidth: "250px" }}>
                        <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "4px" }}>{row.id}</div>
                        <div style={{ color: "var(--cosmic-fg)", fontSize: "0.85rem", lineHeight: "1.4" }}>{row.issue}</div>
                      </td>
                      <td style={{ padding: "1.25rem 1.5rem" }}><span style={{ padding: "4px 8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", fontSize: "0.75rem", color: "var(--cosmic-fg)" }}>{row.category}</span></td>
                      <td style={{ padding: "1.25rem 1.5rem", color: "var(--cosmic-muted-fg)", fontSize: "0.85rem" }}>{row.mechanism}</td>
                      <td style={{ padding: "1.25rem 1.5rem", textAlign: "right" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: row.confidence > 90 ? "#10b981" : "#f59e0b", boxShadow: `0 0 10px ${row.confidence > 90 ? "#10b981" : "#f59e0b"}` }} />
                          <span style={{ color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "0.9rem", fontFamily: "monospace" }}>{row.confidence}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 10 — HUMAN-IN-THE-LOOP
// SVG infinity-loop diagram with animated energy path + checkpoint cards.
// =============================================================
function GeckoHumanLoop() {
  return (
    <section id="human-in-the-loop" className="cosmic-section-padding" style={{ position: "relative", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "800px", height: "800px", background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.05) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ marginBottom: "6rem" }}>
          <div style={{ color: "var(--cosmic-cyan)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>The Guardrails</div>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Human-in-the-Loop by Design.</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
            This system was never intended to be fully autonomous. To ensure trust, accuracy, and absolute compliance, we built rigid human checkpoints directly into the deployment pipeline.
          </p>
        </div>
        {/* Loop Diagram */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", height: "450px", maxWidth: "900px", margin: "0 auto" }}>
          <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }} viewBox="0 0 900 450">
            <motion.path d="M 250,225 C 250,100 650,100 650,225 C 650,350 250,350 250,225 Z" fill="none" stroke="var(--cosmic-border)" strokeWidth="2" strokeDasharray="10 10" />
            <motion.path d="M 250,225 C 250,100 650,100 650,225 C 650,350 250,350 250,225 Z" fill="none" stroke="url(#blue-gradient)" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
            <defs>
              <linearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="var(--cosmic-blue)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{ position: "absolute", left: "150px", top: "50%", transform: "translateY(-50%)", zIndex: 1, textAlign: "center" }}>
            <div className="cosmic-glass" style={{ width: "100px", height: "100px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", border: "1px solid var(--cosmic-cyan)", boxShadow: "0 0 30px rgba(6, 182, 212, 0.15)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-cyan)" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </div>
            <div style={{ color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "1.1rem", marginBottom: "4px" }}>Human</div>
            <div style={{ color: "var(--cosmic-cyan)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700" }}>UX Researcher</div>
          </div>
          <div style={{ position: "absolute", right: "150px", top: "50%", transform: "translateY(-50%)", zIndex: 1, textAlign: "center" }}>
            <div className="cosmic-glass" style={{ width: "100px", height: "100px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", border: "1px solid var(--cosmic-blue)", boxShadow: "0 0 30px rgba(37, 99, 235, 0.15)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-blue)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </div>
            <div style={{ color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "1.1rem", marginBottom: "4px" }}>AI Agent</div>
            <div style={{ color: "var(--cosmic-blue)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700" }}>Inference Engine</div>
          </div>
          {[
            { style: { top: "60px", right: "300px" }, color: "var(--cosmic-purple)", label: "PII Confirmation" },
            { style: { top: "10px", left: "380px" }, color: "var(--cosmic-cyan)", label: "Prompt Tuning" },
            { style: { bottom: "10px", right: "380px" }, color: "#10b981", label: "Confidence Validation" }
          ].map((cp, i) => (
            <div key={i} className="cosmic-glass" style={{ position: "absolute", ...cp.style, padding: "12px 16px", borderRadius: "12px", border: `1px solid ${cp.color}`, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "0.85rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cp.color }} />
                {cp.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", marginTop: "3rem", textAlign: "left" }}>
          {[
            { title: "1. Pre-Flight PII Check", desc: "Before the payload enters the inference layer, humans sample the masked regex outputs to ensure zero proprietary terminology slipped through the Presidio bounds." },
            { title: "2. Context Engineering", desc: "UX Leads continually adjust the RAG vectors and prompt guardrails to focus the AI on specific releases (e.g., \"Weight accessibility issues strongly for version R2024b\")." },
            { title: "3. Output Triage", desc: "Any insight scored below an 85% confidence threshold is flagged for human review, preventing LLM hallucinations from diluting the integrity of the product roadmap." }
          ].map((item, i) => (
            <div key={i}>
              <div style={{ color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</div>
              <p style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.95rem", lineHeight: "1.6" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 11 — UX INTERFACE DESIGN
// 3-panel SaaS UI: Query Filters, Prompt Engine, Insight Dashboard.
// =============================================================
function GeckoInterface() {
  return (
    <section id="interface-design" className="cosmic-section-padding" style={{ position: "relative", borderBottom: "1px solid var(--cosmic-border)", background: "var(--cosmic-card)" }}>
      <div className="cosmic-grid-overlay" style={{ position: "absolute", inset: 0, opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "1000px", height: "1000px", background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.04) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <div style={{ color: "var(--cosmic-cyan)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>The Interface</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Query, Tune, Discover.</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
            The intelligence pipeline required a sophisticated frontier. We abstracted the complexity of RAG and Vector DB queries behind familiar, highly polished SaaS paradigms.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Query Filters Card */}
            <motion.div whileHover={{ y: -5 }} className="cosmic-glass" style={{ padding: "2rem", borderRadius: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", alignItems: "center" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--cosmic-bg)", border: "1px solid var(--cosmic-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-muted-fg)" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                </div>
                <div>
                  <h3 style={{ color: "var(--cosmic-fg)", fontSize: "1.1rem", fontWeight: "600" }}>Query Filters</h3>
                  <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.85rem" }}>Isolating target release telemetry.</div>
                </div>
              </div>
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "12px", padding: "1rem", border: "1px solid var(--cosmic-border)" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                  {["Release: R2024b", "Domain: Simulink"].map(tag => (
                    <div key={tag} style={{ padding: "6px 12px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", fontSize: "0.8rem", color: "var(--cosmic-fg)", border: "1px solid var(--cosmic-border)" }}>
                      {tag} <span style={{ opacity: 0.5, marginLeft: "4px" }}>x</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "var(--cosmic-bg)", borderRadius: "6px", border: "1px solid var(--cosmic-border)" }}>
                  <span style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.8rem" }}>Add filter...</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-muted-fg)"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
            </motion.div>
            {/* Prompt Engine Card */}
            <motion.div whileHover={{ y: -5 }} className="cosmic-glass" style={{ padding: "2rem", borderRadius: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", alignItems: "center" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--cosmic-bg)", border: "1px solid var(--cosmic-purple)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 15px rgba(168, 85, 247, 0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-purple)" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                </div>
                <div>
                  <h3 style={{ color: "var(--cosmic-fg)", fontSize: "1.1rem", fontWeight: "600" }}>Prompt Engine</h3>
                  <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.85rem" }}>Injecting domain-specific tuning vectors.</div>
                </div>
              </div>
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "12px", border: "1px solid var(--cosmic-border)", overflow: "hidden" }}>
                <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--cosmic-border)", background: "rgba(255,255,255,0.02)", fontSize: "0.75rem", color: "var(--cosmic-purple)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>System Prompt Array</div>
                <div style={{ padding: "1rem", fontFamily: "monospace", fontSize: "0.8rem", color: "var(--cosmic-fg)", lineHeight: "1.6" }}>
                  Identify any references strictly related to <span style={{ color: "var(--cosmic-purple)" }}>"Property Inspector"</span> abandonment.<br /><br />
                  Categorize output utilizing the <span style={{ color: "var(--cosmic-cyan)" }}>Gecko Global Taxonomy v2.4</span>.<br /><br />
                  Ignore standard compiler timeouts.
                </div>
                <div style={{ padding: "1rem", background: "var(--cosmic-bg)", borderTop: "1px solid var(--cosmic-border)", display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ padding: "6px 16px", background: "var(--cosmic-purple)", color: "white", fontSize: "0.8rem", fontWeight: "600", borderRadius: "6px" }}>Save Tuning Layer</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Intelligence Dashboard Card */}
          <motion.div whileHover={{ y: -5 }} className="cosmic-glass" style={{ padding: "2rem", borderRadius: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)", height: "100%" }}>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", alignItems: "center" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--cosmic-bg)", border: "1px solid var(--cosmic-blue)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 15px rgba(37, 99, 235, 0.2)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-blue)" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
              </div>
              <div>
                <h3 style={{ color: "var(--cosmic-fg)", fontSize: "1.1rem", fontWeight: "600" }}>Intelligence Dashboard</h3>
                <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.85rem" }}>Aggregating signals for strategic prioritization.</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "12px", padding: "1.5rem", border: "1px solid var(--cosmic-border)", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "700", color: "var(--cosmic-blue)", marginBottom: "4px" }}>248</div>
                <div style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>Signals Extracted</div>
              </div>
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "12px", padding: "1.5rem", border: "1px solid var(--cosmic-border)", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "700", color: "#f59e0b", marginBottom: "4px" }}>32</div>
                <div style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>Critical Friction</div>
              </div>
            </div>
            <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "12px", border: "1px solid var(--cosmic-border)", overflow: "hidden" }}>
              <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--cosmic-border)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--cosmic-fg)", fontWeight: "600" }}>Clustered Themes</div>
                <div style={{ fontSize: "0.75rem", color: "var(--cosmic-blue)" }}>View All &rarr;</div>
              </div>
              {[
                { color: "#ef4444", label: "Discoverability (Property Panel)", pct: "16%" },
                { color: "#f59e0b", label: "Ease of Use (Data Mapping)", pct: "12%" },
                { color: "var(--cosmic-cyan)", label: "Accessibility (Contrast)", pct: "8%" }
              ].map((row, i) => (
                <div key={i} style={{ padding: "1rem", borderBottom: i < 2 ? "1px solid var(--cosmic-border)" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: row.color }} />
                    <div style={{ color: "var(--cosmic-fg)", fontSize: "0.85rem" }}>{row.label}</div>
                  </div>
                  <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.85rem" }}>{row.pct}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 12 — QUALITATIVE IMPACT (Before / After)
// Before/After comparison cards including systemic results.
// =============================================================
function GeckoImpact() {
  return (
    <section id="impact" className="cosmic-section-padding" style={{ background: "rgba(3, 5, 10, 0.4)", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{ color: "var(--cosmic-cyan)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>The Impact</div>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Scaling Intelligence.</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            Moving away from raw spreadsheets enabled product leaders to actually govern their ecosystem's trajectory based on explicitly organized UX signals.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {/* BEFORE */}
          <div className="cosmic-glass" style={{ padding: "3rem", borderRadius: "24px", borderTop: "3px solid #ef4444" }}>
            <h3 style={{ color: "var(--cosmic-fg)", fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Status Quo</h3>
            <div style={{ color: "#ef4444", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", marginBottom: "2rem" }}>Before AI Integration</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { title: "Weeks of Effort", desc: "Diagnostic parsing relied entirely on brute-force human labor, turning UX researchers into data clerks." },
                { title: "No Scalable Insights", desc: "Findings lived entirely inside siloed Excel files and quickly deteriorated the moment a new release shipped." },
                { title: "Reactive Problem Fixing", desc: "Teams only fixed individual complaints; they couldn't see the massive systemic flaws spanning the platform." }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <svg style={{ marginTop: "4px" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                  <div>
                    <div style={{ color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "1.05rem", marginBottom: "4px" }}>{item.title}</div>
                    <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.95rem", lineHeight: "1.5" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* AFTER */}
          <div className="cosmic-glass" style={{ padding: "3rem", borderRadius: "24px", borderTop: "3px solid var(--cosmic-blue)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(37,99,235,0.1), transparent 70%)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ color: "var(--cosmic-fg)", fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Mining Agent</h3>
              <div style={{ color: "var(--cosmic-blue)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700", marginBottom: "2rem" }}>After AI Integration</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { title: "Automated Classification", desc: "Hundreds of overlapping raw feedback strings are condensed autonomously into validated UX buckets." },
                  { title: "Structured UX Signals", desc: "Data outputs are completely formatted using JSON templates strictly adhering to standard HCI taxonomy." },
                  { title: "Proactive Insight Discovery", desc: "Teams now see root-cause meta-patterns appearing across dozens of localized issues." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <svg style={{ marginTop: "4px" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-blue)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    <div>
                      <div style={{ color: "var(--cosmic-fg)", fontWeight: "600", fontSize: "1.05rem", marginBottom: "4px" }}>{item.title}</div>
                      <div style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.95rem", lineHeight: "1.5" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 13 — STRATEGIC OUTCOME
// 3 pillars: Release Dashboards, Pattern Detection, Data-Driven Prioritization.
// =============================================================
function GeckoStrategic() {
  const pillars = [
    { icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></>, color: "var(--cosmic-fg)", title: "Release-Level Dashboards", desc: "Teams no longer dig through CSVs. Each major release automatically generates a systemic health dashboard highlighting dominant friction categories and localized regressions." },
    { icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />, color: "var(--cosmic-blue)", borderColor: "var(--cosmic-blue)", title: "Pattern Detection Across Time", desc: "The persistence of structured data enables cross-version intelligence. Product leads can trace whether a specific navigation flaw has diminished or intensified over a 3-year timeline." },
    { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />, color: "var(--cosmic-purple)", borderColor: "var(--cosmic-purple)", title: "Data-Driven Prioritization", desc: "The Intelligence Layer replaces anecdotal product requests with verified system volume. Resourcing is now dynamically allocated to the interaction models proving to cause the highest cognitive load." }
  ];
  return (
    <section id="strategic-outcome" className="cosmic-section-padding" style={{ position: "relative", borderBottom: "1px solid var(--cosmic-border)" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", background: "radial-gradient(ellipse, rgba(168, 85, 247, 0.05) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ marginBottom: "6rem" }}>
          <div style={{ color: "var(--cosmic-cyan)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: "700", marginBottom: "1rem" }}>The Horizon</div>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Moving from Reactive to Proactive.</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--cosmic-muted-fg)", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
            By converting raw text logs into a structured qualitative database, the organization unlocked compounding value across the product lifecycle.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", textAlign: "left" }}>
          {pillars.map((p, i) => (
            <div key={i} className="cosmic-glass" style={{ padding: "3rem", borderRadius: "24px", transition: "transform 0.3s ease" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid", borderColor: p.borderColor || "var(--cosmic-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem", boxShadow: p.borderColor ? `0 0 20px ${p.borderColor}33` : "none" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2">{p.icon}</svg>
              </div>
              <h3 style={{ color: "var(--cosmic-fg)", fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>{p.title}</h3>
              <p style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.95rem", lineHeight: "1.6" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================
// SECTION 14 — REFLECTION
// Closing quote centered in large serif typography.
// =============================================================
function GeckoReflection() {
  return (
    <section id="reflection" className="cosmic-section-padding" style={{ position: "relative" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: "var(--cosmic-purple)", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", fontWeight: "700", marginBottom: "3rem" }}>Reflection</div>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontFamily: "var(--serif)", fontWeight: "400", color: "var(--cosmic-fg)", lineHeight: "1.2", letterSpacing: "-0.01em", margin: "0 auto", position: "relative" }}>
          <span style={{ color: "var(--cosmic-muted-fg)", position: "absolute", top: "-2rem", left: "-2rem", fontSize: "6rem", opacity: 0.1, fontFamily: "sans-serif" }}>"</span>
          This project transformed my role from a UX designer to a <span style={{ color: "var(--cosmic-blue)" }}>systems thinker</span> — designing intelligence pipelines that scale user understanding.
          <span style={{ color: "var(--cosmic-muted-fg)", position: "absolute", bottom: "-4rem", right: "-1rem", fontSize: "6rem", opacity: 0.1, fontFamily: "sans-serif" }}>"</span>
        </h2>
      </div>
    </section>
  );
}

// =============================================================
// INTERACTIVE PROTOTYPE — GECKO DEMO
// Animated 4-phase Mac-window simulation of the full AI pipeline.
// Phases: 0=Ingress, 1=Privacy (Presidio), 2=Inference (LLM), 3=Insights
// =============================================================
const GeckoDemo = () => {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const cycle = setInterval(() => setPhase((p) => (p + 1) % 4), 5000);
    return () => clearInterval(cycle);
  }, []);
  return (
    <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto", marginTop: "2rem" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top, rgba(37, 99, 235, 0.15) 0%, transparent 70%)", zIndex: 0, filter: "blur(40px)" }} />
      <div className="cosmic-glass" style={{ position: "relative", zIndex: 1, borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", background: "rgba(3, 5, 10, 0.7)", backdropFilter: "blur(24px)", height: "500px", display: "flex", flexDirection: "column" }}>
        {/* Window Header */}
        <div style={{ height: "40px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", padding: "0 1rem", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--cosmic-muted-fg)", fontWeight: "600", letterSpacing: "0.05em" }}>Gecko AI Dashboard</div>
          <div style={{ width: "52px" }} />
        </div>
        {/* Phase Content */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden", padding: "2rem" }}>
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div key="phase0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", border: "1px solid var(--cosmic-border)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-muted-fg)" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--cosmic-fg)", fontWeight: "600", marginBottom: "0.5rem" }}>Initializing Data Ingress</h3>
                <p style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.95rem", maxWidth: "400px" }}>Pulling raw telemetry logs from centralized APIs (R2024b)...</p>
                <div style={{ marginTop: "3rem", width: "300px", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                  <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4.8, ease: "linear" }} style={{ height: "100%", background: "var(--cosmic-muted-fg)" }} />
                </div>
              </motion.div>
            )}
            {phase === 1 && (
              <motion.div key="phase1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ position: "relative", marginBottom: "2rem" }}>
                  <div className="cosmic-glow-purple" style={{ position: "absolute", inset: "-20px", borderRadius: "50%", opacity: 0.5, zIndex: 0 }} />
                  <div style={{ position: "relative", zIndex: 1, width: "60px", height: "60px", borderRadius: "50%", background: "var(--cosmic-card)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--cosmic-purple)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-purple)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--cosmic-fg)", fontWeight: "600", marginBottom: "0.5rem" }}>Presidio Sanitization Engine Active</h3>
                <p style={{ color: "var(--cosmic-muted-fg)", fontSize: "0.95rem", maxWidth: "450px", textAlign: "center", marginBottom: "2rem" }}>Detecting and redacting proprietary keywords, emails, and IPv6 strings.</p>
                <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid var(--cosmic-purple)", borderRadius: "8px", padding: "1rem", width: "100%", maxWidth: "500px", fontFamily: "monospace", fontSize: "0.85rem", color: "var(--cosmic-muted-fg)", textAlign: "left" }}>
                  <div>[SCAN] Row 1492: Found Email -&gt; <span style={{ color: "var(--cosmic-purple)" }}>&lt;REDACTED&gt;</span></div>
                  <div>[SCAN] Row 319B: Found Internal Path -&gt; <span style={{ color: "var(--cosmic-purple)" }}>&lt;REDACTED&gt;</span></div>
                  <div>[SYS]  4,102 records successfully cleaned. Handing off to AI...</div>
                </div>
              </motion.div>
            )}
            {phase === 2 && (
              <motion.div key="phase2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ position: "relative", marginBottom: "2rem" }}>
                  <div className="cosmic-glow-blue" style={{ position: "absolute", inset: "-20px", borderRadius: "50%", opacity: 0.5, zIndex: 0 }} />
                  <div style={{ position: "relative", zIndex: 1, width: "60px", height: "60px", borderRadius: "50%", background: "var(--cosmic-card)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--cosmic-blue)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cosmic-blue)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--cosmic-fg)", fontWeight: "600", marginBottom: "1rem" }}>LLM Inference Layer Processing</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", width: "100%", maxWidth: "600px" }}>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "8px", border: "1px solid var(--cosmic-border)" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", textTransform: "uppercase", marginBottom: "4px" }}>Input Text (Sanitized)</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--cosmic-fg)" }}>"I really can't figure out how to export these scopes to a high-res PDF."</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} style={{ background: "rgba(37,99,235,0.1)", padding: "1rem", borderRadius: "8px", border: "1px solid var(--cosmic-blue)" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--cosmic-blue)", textTransform: "uppercase", marginBottom: "4px" }}>Structured Output</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--cosmic-fg)", fontFamily: "monospace" }}>
                      &#123;<br />
                      &nbsp;&nbsp;"category": "Discoverability",<br />
                      &nbsp;&nbsp;"issue": "Export UI hidden",<br />
                      &nbsp;&nbsp;"confidence": 0.96<br />
                      &#125;
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            {phase === 3 && (
              <motion.div key="phase3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", color: "var(--cosmic-fg)", fontWeight: "600" }}>System Insights: R2024b</h3>
                    <div style={{ fontSize: "0.85rem", color: "var(--cosmic-muted-fg)" }}>4,102 reports synthesized into core UX friction areas.</div>
                  </div>
                  <div style={{ padding: "6px 12px", background: "#10b981", color: "white", fontSize: "0.8rem", fontWeight: "600", borderRadius: "20px" }}>Analysis Complete</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--cosmic-border)", padding: "1rem", borderRadius: "12px" }}>
                    <div style={{ fontSize: "2rem", color: "var(--cosmic-fg)", fontWeight: "700" }}>142</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Total Signals</div>
                  </div>
                  <div style={{ background: "rgba(37, 99, 235, 0.1)", border: "1px solid var(--cosmic-blue)", padding: "1rem", borderRadius: "12px" }}>
                    <div style={{ fontSize: "1.2rem", color: "var(--cosmic-blue)", fontWeight: "700" }}>Discoverability</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Top Friction Category</div>
                  </div>
                  <div style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid #ef4444", padding: "1rem", borderRadius: "12px" }}>
                    <div style={{ fontSize: "2rem", color: "#ef4444", fontWeight: "700", fontFamily: "monospace" }}>94%</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Avg AI Confidence</div>
                  </div>
                </div>
                <div style={{ flex: 1, background: "rgba(0,0,0,0.3)", border: "1px solid var(--cosmic-border)", borderRadius: "12px", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--cosmic-fg)", fontWeight: "600", marginBottom: "1rem" }}>Trending Issues</div>
                  <div style={{ padding: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--cosmic-muted-fg)" }}>Property Inspector context menu unfindable</span>
                    <span style={{ fontSize: "0.85rem", color: "#f59e0b", fontWeight: "600" }}>High Priority</span>
                  </div>
                  <div style={{ padding: "0.75rem", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--cosmic-muted-fg)" }}>Graph Export flow requires 8+ clicks</span>
                    <span style={{ fontSize: "0.85rem", color: "var(--cosmic-blue)", fontWeight: "600" }}>Medium Priority</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Phase Progress Indicators */}
        <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: "1rem", justifyContent: "center" }}>
          {[0, 1, 2, 3].map((step) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: phase >= step ? "var(--cosmic-blue)" : "rgba(255,255,255,0.1)", boxShadow: phase === step ? "0 0 10px var(--cosmic-blue)" : "none" }} />
              <div style={{ fontSize: "0.7rem", color: phase >= step ? "var(--cosmic-fg)" : "rgba(255,255,255,0.3)", fontWeight: "600", textTransform: "uppercase" }}>
                {step === 0 ? "Ingress" : step === 1 ? "Privacy" : step === 2 ? "Inference" : "Insights"}
              </div>
              {step < 3 && <div style={{ width: "30px", height: "1px", background: "rgba(255,255,255,0.1)", marginLeft: "8px" }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// =============================================================
// MAIN EXPORT — CaseStudyGeckoAI
// Renders sticky nav + all 14 sections in order + demo prototype.
// All component logic lives in this single file for easy maintenance.
// =============================================================
export default function CaseStudyGeckoAI({ onBack, displaySections, project }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));
    window.scrollTo(0, 0);
    return () => revealElements.forEach((el) => observer.unobserve(el));
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
              <a key={section.id} href={`#${section.id}`} style={{ color: "var(--cosmic-muted-fg)", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="cs-content" style={{ position: "relative", zIndex: 1 }}>
        {/* Section 1 */}
        <div id="overview"><GeckoHero /></div>
        <ConnectorLine />
        {/* Section 2 */}
        <div id="problem"><GeckoProblem /></div>
        <ConnectorLine />
        {/* Section 3 */}
        <div id="research"><GeckoResearch /></div>
        <ConnectorLine />
        {/* Section 4 */}
        <div id="failed-approach"><GeckoFailedApproach /></div>
        <ConnectorLine />
        {/* Section 5 */}
        <div id="opportunity"><GeckoOpportunity /></div>
        {/* Section 6 */}
        <div id="solution"><GeckoSolution /></div>
        <ConnectorLine />
        {/* Section 7 */}
        <div id="architecture"><GeckoArchitecture /></div>
        {/* Section 8 */}
        <div id="privacy"><GeckoPrivacy /></div>
        <ConnectorLine />
        {/* Section 9 */}
        <div id="intelligence"><GeckoIntelligenceLayer /></div>
        <ConnectorLine />
        {/* Section 10 */}
        <div id="human-loop"><GeckoHumanLoop /></div>
        <ConnectorLine />
        {/* Section 11 */}
        <div id="interface"><GeckoInterface /></div>
        <ConnectorLine />
        {/* Section 12 */}
        <div id="impact"><GeckoImpact /></div>
        <ConnectorLine />
        {/* Section 13 */}
        <div id="strategic"><GeckoStrategic /></div>
        {/* Section 14 */}
        <div id="reflection"><GeckoReflection /></div>
        <ConnectorLine />
        {/* Interactive Prototype */}
        <div id="demo" className="cosmic-section-padding" style={{ maxWidth: "64rem", margin: "0 auto", textAlign: "center" }}>
          <h2 className="reveal" style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", color: "var(--cosmic-fg)" }}>Interactive Prototype</h2>
          <p className="reveal" style={{ color: "var(--cosmic-muted-fg)", marginBottom: "4rem" }}>Conceptualized flow simulating the user journey through the Gecko AI workspace.</p>
          <div className="reveal"><GeckoDemo /></div>
        </div>
        <div style={{ height: "10rem" }} />
      </main>
    </div>
  );
}

