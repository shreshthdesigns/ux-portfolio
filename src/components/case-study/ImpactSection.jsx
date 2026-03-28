import React, { useRef, useEffect, useState } from 'react';
import SectionLabel from './SectionLabel';

const AnimatedCounter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [isVisible, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ImpactSection = () => (
  <section className="cosmic-section-padding gecko-dark-theme" style={{ position: "relative", overflow: "hidden" }}>
    {/* Background drama */}
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40rem", height: "40rem", borderRadius: "50%", background: "rgba(100, 160, 255, 0.03)", filter: "blur(150px)" }} />
    </div>

    <div style={{ position: "relative", maxWidth: "64rem", margin: "0 auto", textAlign: "center" }}>
      <SectionLabel number="11" label="Impact" />

      <h2 className="reveal" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", fontWeight: "800", marginBottom: "2rem", lineHeight: "1.1" }}>
        From <span style={{ color: "var(--cosmic-muted-fg)" }}>Weeks</span> to<br />
        <span className="cosmic-text-gradient-blue">Minutes</span>
      </h2>

      <p className="reveal" style={{ fontSize: "1.25rem", color: "var(--cosmic-muted-fg)", maxWidth: "42rem", margin: "0 auto 5rem", lineHeight: "1.6" }}>
        From manual analysis to real-time UX intelligence.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
        {[
          { value: 95, suffix: "%", label: "Time Reduction", desc: "In analysis workflow" },
          { value: 10, suffix: "K+", label: "Logs Processed", desc: "Per analysis cycle" },
          { value: 42, suffix: "x", label: "Faster Insights", desc: "Compared to manual review" },
        ].map((metric, i) => (
          <div
            key={metric.label}
            className="cosmic-glass cosmic-glow-blue reveal"
            style={{ padding: "2.5rem 1.5rem", textAlign: "center" }}
          >
            <div style={{ fontSize: "clamp(3rem, 6vw, 4rem)", fontWeight: "800", marginBottom: "0.5rem" }} className="cosmic-text-gradient-blue">
              <AnimatedCounter end={metric.value} suffix={metric.suffix} />
            </div>
            <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--cosmic-fg)", marginBottom: "0.25rem" }}>{metric.label}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--cosmic-muted-fg)" }}>{metric.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
