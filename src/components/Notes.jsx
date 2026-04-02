import { useState, useEffect } from "react";

/* ─── Constants ────────────────────────────── */
const LINKEDIN_URL_01 =
  "https://www.linkedin.com/posts/shubham-shreshth_uxdesign-complexsystems-designthinking-activity-7386441507857231873-GChn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA3fbroBprA_tCWIXU7tCxhbVmgscvmcb58";

/* ═══════════════════════════════════════════════════════
   SHARED TYPOGRAPHY COMPONENTS
═══════════════════════════════════════════════════════ */
function Body({ children }) {
  return <p style={{ fontSize: "1.05rem", color: "#2d2d2d", lineHeight: "1.9", marginBottom: "1.5rem", fontWeight: "400" }}>{children}</p>;
}
function SectionLabel({ children }) {
  return <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.2rem", fontWeight: "400", color: "#0f0f0f", margin: "3rem 0 0.875rem", letterSpacing: "-0.01em" }}>{children}</h3>;
}
function Obs({ n, title, accent = "#C4614A" }) {
  return (
    <div style={{ margin: "3rem 0 1rem" }}>
      <div style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: accent, fontWeight: "700", marginBottom: "0.5rem" }}>Observation {n}</div>
      <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "1.5rem", fontWeight: "400", color: "#0f0f0f", lineHeight: "1.3", letterSpacing: "-0.01em", margin: "0 0 0.75rem" }}>{title}</h2>
      <div style={{ width: "28px", height: "2px", background: accent }} />
    </div>
  );
}
function Quote({ text, accent = "#C4614A" }) {
  return (
    <div style={{ margin: "2.5rem 0", padding: "1.75rem 2rem 1.75rem 1.75rem", borderLeft: `3px solid ${accent}`, background: "#fdf9f8" }}>
      <p style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "1.15rem", color: "#333", lineHeight: "1.65", margin: 0 }}>"{text}"</p>
    </div>
  );
}
function BulletList({ items }) {
  return (
    <ul style={{ margin: "0 0 1.5rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {items.map((item, i) => <li key={i} style={{ fontSize: "1.05rem", color: "#2d2d2d", lineHeight: "1.7" }}>{item}</li>)}
    </ul>
  );
}
function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2.5rem 0" }}>
      <div style={{ flex: 1, height: "1px", background: "#efefef" }} />
      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ddd" }} />
      <div style={{ flex: 1, height: "1px", background: "#efefef" }} />
    </div>
  );
}
function InsightCard({ icon, title, body, accent = "#C4614A" }) {
  return (
    <div style={{ border: "1px solid #efefef", borderRadius: "12px", padding: "1.5rem", background: "#fafafa" }}>
      <div style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{icon}</div>
      <div style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: accent, marginBottom: "0.5rem" }}>{title}</div>
      <div style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>{body}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   ARTICLE 01 — Weaving Clarity from Complexity
═══════════════════════════════════════════════════════ */
function Article01({ onClose }) {
  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, []);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = document.getElementById("a1-scroll");
    if (!el) return;
    const fn = () => { const { scrollTop, scrollHeight, clientHeight } = el; setProgress((scrollTop / (scrollHeight - clientHeight)) * 100); };
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#fff", display: "flex", flexDirection: "column", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Progress */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", background: "#f0ede8", zIndex: 10001 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#C4614A,#e8845e)", transition: "width .1s linear" }} />
      </div>
      {/* Nav */}
      <ArticleNav onClose={onClose} label="Design Notes" readTime="8 min read" />
      {/* Scroll */}
      <div id="a1-scroll" style={{ flex: 1, overflowY: "auto", background: "#fff" }}>
        {/* Hero band */}
        <div style={{ background: "#faf9f7", borderBottom: "1px solid #f0ede8", padding: "5rem 1.5rem 4rem" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem", flexWrap: "wrap" }}>
              <span style={{ padding: "4px 12px", background: "#C4614A", color: "#fff", fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "100px" }}>Systems Thinking</span>
              <span style={{ padding: "4px 12px", background: "transparent", border: "1px solid #ddd", color: "#888", fontSize: "0.65rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: "100px" }}>Enterprise UX</span>
              <a href={LINKEDIN_URL_01} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", background: "#0A66C2", color: "#fff", fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: "100px", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.background = "#084f99"} onMouseLeave={e => e.currentTarget.style.background = "#0A66C2"}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                View on LinkedIn
              </a>
            </div>
            <h1 style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: "clamp(2.4rem,5vw,3.6rem)", fontWeight: "400", lineHeight: "1.12", color: "#0f0f0f", letterSpacing: "-0.025em", margin: "0 0 1.5rem" }}>Weaving Clarity<br />from Complexity</h1>
            <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: "1.15rem", color: "#666", lineHeight: "1.7", margin: "0 0 2.5rem", maxWidth: "540px" }}>Notes from designing for system-heavy digital environments — where users don't just use the product, they reason through it.</p>
            <AuthorRow date="April 2026" />
          </div>
        </div>
        {/* Hero image */}
        <div style={{ background: "#faf9f7", padding: "0 1.5rem 4rem" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #efefef", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              <img src="/article-hero.png" alt="Loose threads weaving into a single rope" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#aaa", marginTop: "0.875rem", fontStyle: "italic" }}>Complexity isn't chaos — it's structure waiting to be understood.</p>
          </div>
        </div>
        {/* Body */}
        <div style={{ padding: "0 1.5rem 8rem" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <Divider />
            <SectionLabel>What do I mean by "complex systems"?</SectionLabel>
            <Body>Not systems with too many features. But systems where <em>things depend on each other</em>.</Body>
            <BulletList items={["One action affects multiple outcomes", "Workflows are not linear", "Users think in cause → effect, not screens → clicks"]} />
            <Body>These are environments where users don't just use the product — they <strong>reason through it</strong>.</Body>
            <Divider />
            <Obs n="01" title="Complexity is not the problem. Ambiguity is." />
            <Body>Users working in complex systems don't expect simplicity. They expect <em>clarity</em>.</Body>
            <Body>They're comfortable with depth, parameters, and layered workflows — but only when they understand what's happening, why it's happening, and what changed.</Body>
            <Quote text="The real friction is not 'too much.' It's unclear relationships." />
            <Obs n="02" title="Everything is connected — even when UI doesn't show it." />
            <Body>In simpler products, interactions are isolated. In complex systems, they're interdependent. A single change can cascade into multiple states, affect unseen configurations, or break downstream workflows.</Body>
            <Body>Designing here means thinking beyond screens — <strong>every UI element is part of a larger system conversation.</strong></Body>
            <Obs n="03" title="Users don't think in UI. They think in systems." />
            <Body>Expert users don't navigate interfaces. They navigate mental models — hierarchies, dependencies, cause and effect, and sequences over time.</Body>
            <Quote text="Good design doesn't simplify their thinking. It aligns with it." />
            <Obs n="04" title="Simplicity is not reduction — it's organization." />
            <Body>The instinct is to reduce: hide, collapse, minimize. But removing visible complexity can also remove control, traceability, and confidence. What works better is <em>structured exposure</em>: show what matters now, reveal depth when needed.</Body>
            <Obs n="05" title="Usability is not speed — it's confidence." />
            <Body>A task completed quickly doesn't always mean it was well designed. In complex environments, the real question is: did the user feel confident about what they just did?</Body>
            <Quote text="Did the user feel confident about what they just did?" />
            <Obs n="06" title="Design becomes translation." />
            <Body>At this level, design is less about screens and more about meaning-making — translating system logic into human understanding, technical behavior into visible feedback, hidden dependencies into perceivable structure.</Body>
            {/* Puzzle illustration */}
            <div style={{ margin: "3.5rem 0" }}>
              <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #efefef", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", background: "#fff" }}>
                <div style={{ padding: "1.25rem 2rem 0.5rem", borderBottom: "1px solid #f5f5f5" }}>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4614A", fontWeight: "700" }}>The Puzzle Analogy</div>
                </div>
                <img src="/article-puzzle.png" alt="Scattered puzzle pieces becoming a complete assembled puzzle" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#aaa", marginTop: "0.875rem", fontStyle: "italic" }}>Simplicity isn't about fewer pieces — it's about how they come together to create meaning.</p>
            </div>
            <SectionLabel>A pattern I keep coming back to</SectionLabel>
            <Body>Designing for complex systems feels like working on a puzzle. At first, pieces exist and are structured — but don't make sense. Then gradually, patterns emerge and relationships become visible.</Body>
            <Quote text="The goal of design is not to reduce the number of pieces. It's to help users see how they fit together." />
            <SectionLabel>What this changed for me as a designer</SectionLabel>
            <BulletList items={["I stopped chasing 'clean' interfaces", "I started prioritizing clarity over minimalism", "I began designing flows as systems, not screens", "I focused more on explanation than interaction"]} />
            {/* Closing card */}
            <div style={{ margin: "3rem 0 2rem", padding: "2.5rem", background: "#faf9f7", borderRadius: "12px", border: "1px solid #f0ede8" }}>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4614A", fontWeight: "700", marginBottom: "1.25rem" }}>Closing Thought</div>
              <p style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", lineHeight: "1.75", color: "#222", margin: 0 }}>Complex systems are like strong ropes — made of many independent threads. Individually, they feel scattered. Together, they create strength.</p>
              <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: "1.7", color: "#555", margin: "1.25rem 0 0" }}>Design is the act of weaving those threads into something cohesive, navigable, and meaningful — not by removing complexity, but by making it make sense.</p>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#bbb", lineHeight: "1.7", fontStyle: "italic", marginBottom: "3rem" }}>These are ongoing reflections from working on system-heavy products. Still learning, still refining — but increasingly convinced that clarity is the most underrated design skill.</p>
            <ClosingDots />
            <LinkedInCTA url={LINKEDIN_URL_01} />
            <AuthorCard />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   ARTICLE 02 — Metaverse Real Estate Isn't About Land
═══════════════════════════════════════════════════════ */
const ACCENT_02 = "#4A90D9"; // blue accent matching the digital world

function Article02({ onClose }) {
  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, []);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = document.getElementById("a2-scroll");
    if (!el) return;
    const fn = () => { const { scrollTop, scrollHeight, clientHeight } = el; setProgress((scrollTop / (scrollHeight - clientHeight)) * 100); };
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#fff", display: "flex", flexDirection: "column", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Progress */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", background: "#eef4fb", zIndex: 10001 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg,${ACCENT_02},#7ab3e8)`, transition: "width .1s linear" }} />
      </div>
      {/* Nav */}
      <ArticleNav onClose={onClose} label="Design Notes" readTime="6 min read" />
      {/* Scroll */}
      <div id="a2-scroll" style={{ flex: 1, overflowY: "auto", background: "#fff" }}>
        {/* Hero band */}
        <div style={{ background: "#f6f9fd", borderBottom: "1px solid #e8f0f9", padding: "5rem 1.5rem 4rem" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem", flexWrap: "wrap" }}>
              <span style={{ padding: "4px 12px", background: ACCENT_02, color: "#fff", fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "100px" }}>Design Research</span>
              <span style={{ padding: "4px 12px", background: "transparent", border: "1px solid #ddd", color: "#888", fontSize: "0.65rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: "100px" }}>Virtual Economies</span>
            </div>
            <h1 style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: "clamp(2.2rem,5vw,3.4rem)", fontWeight: "400", lineHeight: "1.12", color: "#0f0f0f", letterSpacing: "-0.025em", margin: "0 0 1.5rem" }}>Metaverse Real Estate<br />Isn't About Land.<br />It's About Behavior.</h1>
            <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: "1.15rem", color: "#666", lineHeight: "1.7", margin: "0 0 2.5rem", maxWidth: "540px" }}>How we are unknowingly carrying real-world logic into virtual economies — and what it reveals about how humans assign value.</p>
            <AuthorRow date="April 2026" />
          </div>
        </div>
        {/* Hero image */}
        <div style={{ background: "#f6f9fd", padding: "0 1.5rem 4rem" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e8f0f9", boxShadow: "0 4px 24px rgba(74,144,217,0.1)" }}>
              <img src="/article02-hero.png" alt="Isometric city grid split — physical on left, digital metaverse on right" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#aaa", marginTop: "0.875rem", fontStyle: "italic" }}>Same patterns, different medium. The physical city and its virtual twin.</p>
          </div>
        </div>
        {/* Body */}
        <div style={{ padding: "0 1.5rem 8rem" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>

            <Divider />
            <SectionLabel>We're asking the wrong question</SectionLabel>
            <Body>Most conversations around metaverse real estate start here: <em>"Is this like buying land in the real world?"</em></Body>
            <Body>But after studying platforms, investors, and behaviors, one thing became clear:</Body>
            <Quote text="Virtual land is not valuable because of space. It's valuable because of how people behave within it." accent={ACCENT_02} />

            <SectionLabel>The insight that changed everything</SectionLabel>
            <Body>While comparing physical and virtual real estate, I expected differences. Instead, I found <strong>patterns repeating across both worlds</strong>.</Body>
            {/* Comparison card */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "2rem 0 2.5rem" }}>
              <div style={{ border: "1px solid #efefef", borderRadius: "12px", padding: "1.5rem", background: "#fafafa" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>Physical World</div>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {["Location", "Infrastructure", "Legal systems", "Demand & supply"].map((i, k) => <li key={k} style={{ fontSize: "0.9rem", color: "#444" }}>{i}</li>)}
                </ul>
              </div>
              <div style={{ border: `1px solid ${ACCENT_02}30`, borderRadius: "12px", padding: "1.5rem", background: `${ACCENT_02}06` }}>
                <div style={{ fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT_02, marginBottom: "1rem" }}>Metaverse</div>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {["Proximity to popular zones", "Platform rules (smart contracts)", "Expected visitor density", "Crypto & social trends"].map((i, k) => <li key={k} style={{ fontSize: "0.9rem", color: "#444" }}>{i}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ padding: "1rem 1.25rem", background: `${ACCENT_02}08`, border: `1px solid ${ACCENT_02}20`, borderRadius: "8px", marginBottom: "2rem", fontSize: "0.9rem", fontWeight: "600", color: ACCENT_02 }}>
              📌 Different systems. Same human logic.
            </div>

            <SectionLabel>Why does virtual land feel so familiar?</SectionLabel>
            <Body>Even without physical constraints, virtual worlds look like cities — roads, districts, plazas, land parcels. This is intentional. Designers replicate the real world so users can understand value faster.</Body>
            <Body>This phenomenon — <em>familiarity-driven design</em> — is what makes the metaverse usable and investable.</Body>

            <Obs n="01" title="Location still matters… but not for the reason you think." accent={ACCENT_02} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.5rem 0 2rem" }}>
              <InsightCard icon="🏙️" title="Physical world" body="Location reduces travel time" accent="#888" />
              <InsightCard icon="⚡" title="Metaverse" body="You can teleport anywhere — yet, location still drives value." accent={ACCENT_02} />
            </div>
            <Quote text="It's not about distance anymore. It's about density." accent={ACCENT_02} />

            {/* Attention visual */}
            <div style={{ margin: "3rem 0" }}>
              <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e8f0f9", boxShadow: "0 4px 24px rgba(74,144,217,0.08)", background: "#fff" }}>
                <div style={{ padding: "1.25rem 2rem 0.5rem", borderBottom: "1px solid #f0f6fc" }}>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT_02, fontWeight: "700" }}>Attention = Location</div>
                </div>
                <img src="/article02-attention.png" alt="Concentric rings with people clustering densely near the center point of attention" style={{ width: "100%", height: "auto", display: "block", padding: "1rem" }} />
              </div>
              <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#aaa", marginTop: "0.875rem", fontStyle: "italic" }}>Visibility and density cluster around points of attention — not geography.</p>
            </div>

            <Obs n="02" title="The biggest shift: Value = Experience." accent={ACCENT_02} />
            <Body>People don't buy virtual land for ownership. They buy it for events, experiences, visibility, and monetization.</Body>
            <Quote text="Land is just the stage. Experience is the product." accent={ACCENT_02} />

            <Obs n="03" title="The uncomfortable truth." accent={ACCENT_02} />
            <Body>Metaverse land isn't constrained by physics. Yet it <em>behaves</em> like it is. Why? Because users bring real-world mental models into virtual spaces — and designers reinforce it.</Body>

            <SectionLabel>What this means for design</SectionLabel>
            <Body>This research started as real estate analysis. It ended as a design insight:</Body>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.5rem 0 2.5rem" }}>
              <InsightCard icon="🏗️" title="Design shapes economies" body="Platforms control scarcity, interaction, and value perception." accent={ACCENT_02} />
              <InsightCard icon="🤝" title="Familiarity builds trust" body="Users need known patterns before adopting new systems." accent={ACCENT_02} />
              <InsightCard icon="👁️" title="Attention is the new location" body="Visibility > Geography" accent={ACCENT_02} />
              <InsightCard icon="✨" title="Experience > Ownership" body="Static land has no value. Interaction does." accent={ACCENT_02} />
            </div>

            {/* Closing card */}
            <div style={{ margin: "3rem 0 2rem", padding: "2.5rem", background: "#f6f9fd", borderRadius: "12px", border: `1px solid ${ACCENT_02}20` }}>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT_02, fontWeight: "700", marginBottom: "1.25rem" }}>Final Thought</div>
              <p style={{ fontFamily: "'Georgia',serif", fontSize: "1.15rem", lineHeight: "1.75", color: "#222", margin: 0 }}>We are not designing virtual land. We are designing how humans assign value in new realities.</p>
              <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: "1.7", color: "#555", margin: "1.25rem 0 0" }}>And right now… we're still thinking like the physical world.</p>
            </div>

            <ClosingDots />

            {/* Research CTA */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.75rem 2rem", border: "1px solid #efefef", borderRadius: "12px", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#111", marginBottom: "4px" }}>📄 Full Research</div>
                <div style={{ fontSize: "0.78rem", color: "#aaa" }}>Complete study, methodology, and validation</div>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "#f0f0f0", color: "#888", fontSize: "0.8rem", fontWeight: "600", borderRadius: "8px", cursor: "default" }}>
                Coming soon
              </span>
            </div>

            <AuthorCard />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SHARED UI HELPERS
═══════════════════════════════════════════════════════ */
function ArticleNav({ onClose, label, readTime }) {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10000, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #efefef", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: "52px" }}>
      <button onClick={onClose}
        style={{ display: "flex", alignItems: "center", gap: "7px", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "0.82rem", fontWeight: "500", color: "#888", padding: "4px 0", transition: "color 0.15s" }}
        onMouseEnter={e => e.currentTarget.style.color = "#111"} onMouseLeave={e => e.currentTarget.style.color = "#888"}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
        Back
      </button>
      <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", fontWeight: "600" }}>{label}</div>
      <div style={{ fontSize: "0.75rem", color: "#bbb" }}>{readTime}</div>
    </div>
  );
}
function AuthorRow({ date }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#0f0f0f", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: "700" }}>S</div>
      <div>
        <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#111" }}>Shubham Shreshth</div>
        <div style={{ fontSize: "0.75rem", color: "#aaa" }}>{date}</div>
      </div>
    </div>
  );
}
function AuthorCard() {
  return (
    <div style={{ display: "flex", gap: "1.25rem", padding: "2rem", borderRadius: "12px", background: "#faf9f7", border: "1px solid #f0ede8", marginTop: "2rem" }}>
      <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#0f0f0f", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1rem", fontWeight: "700" }}>S</div>
      <div>
        <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#111", marginBottom: "4px" }}>Shubham Shreshth</div>
        <div style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.6" }}>UX Designer working at the intersection of complexity, systems thinking, and enterprise tools.</div>
      </div>
    </div>
  );
}
function ClosingDots() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "8px", margin: "1rem 0 3rem" }}>
      {[0, 1, 2].map(i => <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#ddd" }} />)}
    </div>
  );
}
function LinkedInCTA({ url }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.75rem 2rem", border: "1px solid #efefef", borderRadius: "12px", flexWrap: "wrap", gap: "1rem" }}>
      <div>
        <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#111", marginBottom: "4px" }}>Read the full post on LinkedIn</div>
        <div style={{ fontSize: "0.78rem", color: "#aaa" }}>Discussion, comments, and more context</div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "#0A66C2", color: "#fff", fontSize: "0.8rem", fontWeight: "600", borderRadius: "8px", textDecoration: "none", transition: "background 0.2s", whiteSpace: "nowrap" }}
        onMouseEnter={e => e.currentTarget.style.background = "#084f99"} onMouseLeave={e => e.currentTarget.style.background = "#0A66C2"}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        View on LinkedIn
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN NOTES SECTION
═══════════════════════════════════════════════════════ */
export default function Notes() {
  const [openArticle, setOpenArticle] = useState(null); // null | 1 | 2

  return (
    <>
      {openArticle === 1 && <Article01 onClose={() => setOpenArticle(null)} />}
      {openArticle === 2 && <Article02 onClose={() => setOpenArticle(null)} />}

      <section id="notes">
        <div className="wrap">

          <div className="section-block">
            <div className="section-label">Design Notes</div>
          </div>

          <h2 className="sec-title">
            Thinking out loud,<br />with structure.
          </h2>

          <p className="sec-sub">Short essays on design systems, cognition and enterprise UX.</p>

          <div className="notes-grid">

            {/* Card 01 */}
            <div className="note-card note-card--clickable" onClick={() => setOpenArticle(1)} role="button" aria-label="Read: Weaving Clarity from Complexity" tabIndex={0} onKeyDown={e => e.key === "Enter" && setOpenArticle(1)}>
              <div className="note-num">01</div>
              <div className="note-title">Weaving Clarity from Complexity</div>
              <div className="note-excerpt">Notes from designing for system-heavy digital environments.</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "1.25rem" }}>
                <span className="note-tag">Systems Thinking</span>
                <span className="note-read-cta">Read →</span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="note-card note-card--clickable" onClick={() => setOpenArticle(2)} role="button" aria-label="Read: Metaverse Real Estate Isn't About Land. It's About Behavior." tabIndex={0} onKeyDown={e => e.key === "Enter" && setOpenArticle(2)}>
              <div className="note-num">02</div>
              <div className="note-title">Metaverse Real Estate Isn't About Land. It's About Behavior.</div>
              <div className="note-excerpt">How we unknowingly carry real-world logic into virtual economies.</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "1.25rem" }}>
                <span className="note-tag">Design Research</span>
                <span className="note-read-cta">Read →</span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="note-card">
              <div className="note-num">03</div>
              <div className="note-title">Emotional Friction in Technical Tools</div>
              <div className="note-excerpt">The hesitation before clicking is the real UX problem.</div>
              <span className="note-tag">Enterprise UX</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}