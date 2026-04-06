import { useState } from "react";
import GeckoTableArt from "./case-study/GeckoTableArt";

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
      customArt: <GeckoTableArt />,
      brandColor: "#4338ca", // Indigo
      brandLight: "rgba(67, 56, 202, 0.08)"
    },
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
                  </span>
                  <span className="impact-arrow">→</span>
                </div>
              </div>

              {/* Right: Image */}
              <div className="impact-card-visual">
                <div className="impact-image-wrap">
                  {project.customArt ? (
                    project.customArt
                  ) : (
                    <img src={project.image} alt={project.title} style={project.imgStyle || {}} />
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