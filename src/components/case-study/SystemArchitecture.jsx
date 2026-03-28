import React, { useEffect, useRef } from 'react';
import SectionLabel from './SectionLabel';

const modules = [
  { label: "Gecko API", color: "blue" },
  { label: "Data Processing", color: "blue" },
  { label: "PII Masking", color: "cyan" },
  { label: "Context Enrichment", color: "purple" },
  { label: "LLM (ChatGPT API)", color: "purple" },
  { label: "UX Classification", color: "blue" },
  { label: "Pattern Detection", color: "blue" },
  { label: "Insight Engine", color: "cyan" },
];

const SystemArchitecture = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let id;
    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();

    const particles = [];
    for (let i = 0; i < 15; i++) {
      particles.push({ progress: Math.random(), speed: 0.002 + Math.random() * 0.003 });
    }

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w === 0 || h === 0) {
          id = requestAnimationFrame(animate);
          return;
      }
      ctx.clearRect(0, 0, w, h);

      const centerY = h / 2;

      // Draw connection line
      ctx.strokeStyle = "rgba(100, 160, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(w, centerY);
      ctx.stroke();

      // Particles
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;
        const x = p.progress * w;
        ctx.beginPath();
        ctx.arc(x, centerY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${Math.sin(p.progress * Math.PI) * 0.7})`;
        ctx.fill();
      });

      id = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <SectionLabel number="05" label="System Architecture" />

        <h2 className="reveal" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700", marginBottom: "1.5rem" }}>
          The <span className="cosmic-text-gradient-blue">Intelligence Pipeline</span>
        </h2>

        <p className="reveal" style={{ color: "var(--cosmic-muted-fg)", fontSize: "1.125rem", maxWidth: "36rem", marginBottom: "4rem" }}>
          A modular system where data flows from raw logs to actionable UX insights.
        </p>

        {/* Architecture diagram */}
        <div style={{ position: "relative" }}>
          <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
            {modules.map((mod, i) => {
              const glowClass = mod.color === "cyan" ? "cosmic-glow-cyan" : mod.color === "purple" ? "cosmic-glow-purple" : "cosmic-glow-blue";
              return (
                <div
                  key={mod.label}
                  className={`cosmic-glass ${glowClass} reveal`}
                  style={{
                    padding: "1.25rem",
                    textAlign: "center",
                    cursor: "default",
                    transition: "transform 0.3s ease",
                    animationDelay: `${i * 0.08}s`
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px) scale(1.05)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0) scale(1)"}
                >
                  <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--cosmic-muted-fg)", opacity: 0.5, marginBottom: "0.5rem" }}>0{i + 1}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "var(--cosmic-fg)" }}>{mod.label}</div>
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0", color: "rgba(100, 160, 255, 0.3)", fontSize: "1.5rem" }}>
            ↓
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
