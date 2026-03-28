import React, { useEffect, useRef } from "react";

const nodes = [
  { label: "Gecko Logs", x: 10, y: 50 },
  { label: "AI System", x: 37, y: 35 },
  { label: "UX Insights", x: 63, y: 55 },
  { label: "Product Decisions", x: 90, y: 40 },
];

const HeroSection = () => {
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
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: 0, y: 0,
        progress: Math.random(),
        speed: 0.001 + Math.random() * 0.002,
        path: Math.floor(Math.random() * 3),
      });
    }

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const paths = [
      (t) => ({ x: w() * (0.1 + t * 0.27), y: h() * (0.5 - Math.sin(t * Math.PI) * 0.15) }),
      (t) => ({ x: w() * (0.37 + t * 0.26), y: h() * (0.35 + Math.sin(t * Math.PI) * 0.2) }),
      (t) => ({ x: w() * (0.63 + t * 0.27), y: h() * (0.55 - Math.sin(t * Math.PI) * 0.15) }),
    ];

    const animate = () => {
      ctx.clearRect(0, 0, w(), h());

      // Draw connection lines
      ctx.strokeStyle = "rgba(100, 160, 255, 0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let t = 0; t <= 1; t += 0.02) {
          const p = paths[i](t);
          if (t === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Animate particles
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) { 
          p.progress = 0; 
          p.path = Math.floor(Math.random() * 3); 
        }
        const pos = paths[p.path](p.progress);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${0.6 * Math.sin(p.progress * Math.PI)})`;
        ctx.fill();
      });

      id = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section 
      className="gecko-dark-theme"
      style={{ 
        position: "relative", 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        overflow: "hidden" 
      }}
    >
      {/* Gradient orbs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ 
          position: "absolute", top: "25%", left: "25%", 
          width: "24rem", height: "24rem", borderRadius: "50%", 
          background: "var(--cosmic-glow-blue)", filter: "blur(120px)", opacity: 0.5 
        }} />
        <div style={{ 
          position: "absolute", bottom: "33%", right: "25%", 
          width: "20rem", height: "20rem", borderRadius: "50%", 
          background: "var(--cosmic-glow-purple)", filter: "blur(100px)", opacity: 0.5 
        }} />
      </div>

      <div className="cosmic-grid-overlay absolute inset-0 opacity-30" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ 
            fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.3em", 
            color: "var(--cosmic-blue)", opacity: 0.7, textTransform: "uppercase", marginBottom: "1.5rem" 
          }}>
            UX Case Study — MathWorks
          </p>
          <h1 style={{ 
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)", fontWeight: "800", 
            lineHeight: "1.1", letterSpacing: "-0.02em", marginBottom: "1.5rem", color: "var(--cosmic-fg)" 
          }}>
            Designing an AI System for<br />
            <span className="cosmic-text-gradient-blue">UX Intelligence</span>
          </h1>
          <p style={{ 
            fontSize: "1.25rem", color: "var(--cosmic-muted-fg)", maxWidth: "42rem", margin: "0 auto", lineHeight: "1.6" 
          }}>
            Transforming Gecko data into discoverability insights using LLMs.
          </p>
        </div>

        {/* Data flow visualization */}
        <div style={{ position: "relative", height: "12rem" }}>
          <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

          {nodes.map((node, i) => (
            <div
              key={node.label}
              className="cosmic-glass cosmic-glow-blue reveal animate-cosmic-float"
              style={{
                position: "absolute",
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${i * 0.5}s`,
                padding: "0.5rem 1rem",
                fontSize: "0.75rem",
                fontWeight: "600",
                whiteSpace: "nowrap"
              }}
            >
              {node.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        style={{ 
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem"
        }}
      >
        <div style={{ 
          width: "1.25rem", height: "2rem", border: "1px solid hsla(220, 20%, 88%, 0.2)", 
          borderRadius: "1rem", display: "flex", justifyContent: "center" 
        }}>
          <div style={{ 
            width: "0.25rem", height: "0.5rem", background: "var(--cosmic-blue)", 
            borderRadius: "1rem", marginTop: "0.4rem",
            animation: "cosmic-scroll 2s infinite"
          }} />
        </div>
      </div>
      
      <style>{`
        @keyframes cosmic-scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
