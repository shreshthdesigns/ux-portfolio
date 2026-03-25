import { useEffect, useState } from "react";
import CaseStudyProjectAdvisor from "./CaseStudyProjectAdvisor";
import CaseStudyModelFinder from "./CaseStudyModelFinder";
import CaseStudyGeckoAI from "./CaseStudyGeckoAI";
import CaseStudyPatent from "./CaseStudyPatent";

export default function CaseStudy({ project, onBack }) {

  // IntersectionObserver to handle the scrolling highlight animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, { threshold: 0.5, rootMargin: "0px 0px -10% 0px" });

    const highlights = document.querySelectorAll('.cs-pa-text-highlight');
    highlights.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [project]);

  let sections = [];
  let displaySections = [];

  if (project === "project-advisor") {
    sections = ["overview", "system-scale", "significance", "stakeholders", "workflow", "configuration", "insights", "principles", "solution", "in-practice", "impact", "reflection"];
    displaySections = [
      { id: "overview", label: "Overview" },
      { id: "system-scale", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "impact", label: "Impact" }
    ];
  } else if (project === "model-finder") {
    sections = ["overview", "problem", "system", "strategy", "exploration", "solution", "reflection"];
    displaySections = sections.map(s => ({ id: s, label: s.charAt(0).toUpperCase() + s.slice(1) }));
  } else if (project === "gecko-ai") {
    sections = ["overview", "problem", "validation", "opportunity", "data", "privacy", "architecture", "agents", "reasoning", "taxonomy", "prompts", "human", "insights", "impact", "future", "demo"];
    displaySections = [
      { id: "overview", label: "Context" },
      { id: "data", label: "Systems & Data" },
      { id: "reasoning", label: "AI Reasoning" },
      { id: "insights", label: "Outcomes" }
    ];
  } else if (project === "patent") {
    sections = ["overview", "snapshot", "timeline", "problem", "research", "market", "requirements", "experiments", "concepts", "tradeoffs", "architecture", "prototype", "impact", "report"];
    displaySections = [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Discovery" },
      { id: "experiments", label: "Engineering" },
      { id: "architecture", label: "Solution" },
      { id: "impact", label: "Impact" }
    ];
  }

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {

        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  if (project === "project-advisor") {
    return <CaseStudyProjectAdvisor onBack={onBack} activeSection={activeSection} displaySections={displaySections} />;
  }

  if (project === "model-finder") {
    return <CaseStudyModelFinder onBack={onBack} activeSection={activeSection} displaySections={displaySections} />;
  }

  if (project === "gecko-ai") {
    return <CaseStudyGeckoAI onBack={onBack} activeSection={activeSection} displaySections={displaySections} project={project} />;
  }

  if (project === "patent") {
    return <CaseStudyPatent onBack={onBack} activeSection={activeSection} displaySections={displaySections} />;
  }

  return null;
}