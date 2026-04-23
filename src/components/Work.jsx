import { useState } from "react";

export default function Work({ setActiveProject }) {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (projectId, isNDA) => {
    setActiveProject({ id: projectId, nda: isNDA });
  };

  const projects = [
    {
      id: "project-advisor",
      nda: true,
      impact: "42% faster debugging",
      description: "Designing validation workflows for complex Simulink models used in CI/CD pipelines.",
      title: "Project Advisor",
      tags: ["Workflow Systems", "Engineering UX", "Cognitive Load"],
      image: "/pa-hero-showcase.png",
      imgStyle: { objectFit: "cover", objectPosition: "45% 45%", backgroundColor: "#0f172a" },
      brandColor: "#0284c7", // Light Blue
      brandLight: "rgba(2, 132, 199, 0.08)"
    },
    {
      id: "gecko-ai",
      nda: true,
      impact: "10K bug reports → UX insights",
      description: "AI system transforming large bug report datasets into actionable UX intelligence.",
      title: "AI-Driven UX Mining",
      tags: ["AI Workflows", "UX Intelligence", "Data Mining"],
      image: "/gecko_analysis_thumbnail_hero.svg",
      imgStyle: { objectFit: "cover", objectPosition: "center", backgroundColor: "#060918" },
      brandColor: "#4338ca", // Indigo
      brandLight: "rgba(67, 56, 202, 0.08)"
    },
/*
    {
      id: "model-finder",
      nda: true,
      impact: "Search across 10K+ models",
      description: "Enterprise search experience for navigating large Simulink repositories.",
      title: "Model Finder for Enterprises",
      tags: ["Enterprise Search", "API Design", "Data Discovery"],
      image: "/images/navigation.jpg",
      brandColor: "#059669", // Emerald
      brandLight: "rgba(5, 150, 105, 0.08)"
    },
*/
    {
      id: "design-ledger",
      nda: false,
      impact: "3 weeks → 5 minutes",
      description: "A Figma plugin I designed and built end to end that eliminates weeks of manual documentation work, capturing design decisions as they happen and publishing them to Confluence in one click.",
      title: "Design Ledger",
      tags: ["Figma Plugin", "Documentation Automation", "Design + Engineering", "Self-Initiated"],
      image: null,
      brandColor: "#0076A8",
      brandLight: "rgba(0, 118, 168, 0.08)"
    },
    {
      id: "polyspace-copilot",
      nda: true,
      wip: true,
      impact: "3× faster debugging with AI",
      description: "Designing an agentic copilot that understands context, reasons through engineering workflows, and assists users in real-time.",
      title: "Polyspace Copilot",
      tags: ["AI Systems", "Agentic UX", "Human-AI Interaction", "Engineering UX"],
      image: "/copilot-hero.png",
      imgStyle: { objectFit: "cover", objectPosition: "center", backgroundColor: "#1E1B4B" },
      brandColor: "#4338ca",
      brandLight: "rgba(67, 56, 202, 0.08)"
    }
  ];

  return (
    <section id="work">
      <div className="wrap">

        {/* Section Header */}
        <div className="section-head">
          <div className="section-label">
            Enterprise Systems &amp; Product Design
          </div>
          <h2 className="section-title">Selected Work</h2>
        </div>

        {/* Stacked Impact Cards */}
        <div className="impact-stack">
          {projects.map((project, index) => {
            let stateClass = '';
            if (hoveredIndex === index) {
              stateClass = ' active';
            } else if (hoveredIndex !== null) {
              stateClass = index < hoveredIndex ? ' dimmed-before' : ' dimmed-after';
            }

            return (
              <div
                key={project.id}
                className={`impact-card${stateClass}`}
                style={{ 
                  '--card-index': index,
                  '--brand-color': project.brandColor,
                  '--brand-light': project.brandLight
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleClick(project.id, project.nda)}
              >
              {/* Left: Content */}
              <div className="impact-card-content">
                <div className="impact-headline">{project.impact}</div>
                <div className="impact-desc">{project.description}</div>

                <div className="impact-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="impact-tag">{tag}</span>
                  ))}
                </div>

                <div className="impact-footer">
                  <span className="impact-title">
                    {project.title}
                    {project.nda && <span className="impact-nda">🔒 NDA</span>}
                    {project.wip && (
                      <span className="impact-wip">
                        <span className="impact-wip-dot" />
                        Work in Progress
                      </span>
                    )}
                  </span>
                  <span className="impact-arrow">→</span>
                </div>
              </div>

              {/* Right: Image */}
              <div className="impact-card-visual">
                <div className="impact-image-wrap">
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={project.imgStyle || {}} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: '#0D1117', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', padding: '24px' }}>
                      {/* Mini plugin mockup */}
                      <div style={{ width: '100%', maxWidth: '220px', background: '#161B22', borderRadius: '8px', border: '1px solid #30363D', overflow: 'hidden', fontSize: '10px' }}>
                        <div style={{ padding: '8px 12px', borderBottom: '1px solid #30363D', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#F85149' }} />
                          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E3B341' }} />
                          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3FB950' }} />
                          <span style={{ color: '#6E7681', marginLeft: '4px', fontWeight: 600 }}>Design<span style={{ color: '#0076A8' }}>Ledger</span></span>
                        </div>
                        <div style={{ padding: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                          {['V1', 'V2'].map(v => (
                            <div key={v} style={{ background: '#0D1117', border: '1px solid #30363D', borderRadius: '4px', overflow: 'hidden' }}>
                              <div style={{ height: '36px', background: 'linear-gradient(135deg, #1a2535, #0f1c2c)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '8px', fontWeight: 800, color: '#0076A8' }}>{v}</span>
                              </div>
                              <div style={{ padding: '4px 6px', fontSize: '8px', color: '#6E7681' }}>Captured ✓</div>
                            </div>
                          ))}
                        </div>
                        <div style={{ padding: '6px 10px 10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          {['Decision', 'Rationale', 'Trade-off'].map(f => (
                            <div key={f} style={{ background: '#21262D', border: '1px solid #30363D', borderRadius: '3px', padding: '4px 8px', fontSize: '7.5px', color: '#6E7681' }}>{f}</div>
                          ))}
                          <div style={{ background: '#0076A8', borderRadius: '3px', padding: '5px', fontSize: '8px', fontWeight: 700, color: '#fff', textAlign: 'center', marginTop: '2px' }}>Commit Decision</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}