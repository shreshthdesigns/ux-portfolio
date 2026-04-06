import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Work from "./components/Work";
import Patent from "./components/Patent";
import About from "./components/About";
import Notes from "./components/Notes";
import Shapes from "./components/Shapes";
import Contact from "./components/Contact";
import CaseStudy from "./components/CaseStudy";
import NDAGate from "./components/NDAGate";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (activeProject) return; // Don't track scroll if in case study

    const sections = ["hero", "work", "patent", "about", "notes", "shapes", "contact"];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is mostly in upper-middle view
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeProject]);

  const getLogoColor = () => {
    if (!activeProject) return "";
    switch(activeProject.id) {
      case 'project-advisor': return 'var(--accent)';
      case 'gecko-ai': return '#3b82f6';
      case 'model-finder': return '#0284c7';
      case 'patent': return 'var(--patent-accent, #2b5440)';
      default: return 'var(--ink)';
    }
  };

  return (
    <>
      <nav>
        <div className="wrap nav-in">
          <a 
            href="#hero" 
            className="logo"
            style={activeProject ? { color: getLogoColor() } : {}}
            onClick={() => setActiveProject(null)}
          >
            Shubham Shreshth
          </a>

          <ul className="nav-links desktop-only">
            {activeProject ? (
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  setActiveProject(null);
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else window.location.hash = "contact";
                  }, 100);
                }}>
                  Contact
                </a>
              </li>
            ) : (
              <>
                <li><a href="#work" className={activeSection === "work" ? "active" : ""}>Work</a></li>
                <li><a href="#patent" className={activeSection === "patent" ? "active" : ""}>Patent</a></li>
                <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
                <li><a href="#notes" className={activeSection === "notes" ? "active" : ""}>Notes</a></li>
                <li><a href="#shapes" className={activeSection === "shapes" ? "active" : ""}>Beyond Screen</a></li>
                <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
              </>
            )}
          </ul>

          <div className="mobile-nav-ref mobile-only">
            <div className="mobile-name">Shubham Shreshth</div>
            <ul className="mobile-nav-row">
              <li><a href="#work" onClick={() => setActiveProject(null)}>Works</a></li>
              <li><a href="#patent" onClick={() => setActiveProject(null)}>Patent</a></li>
              <li><a href="#about" onClick={() => setActiveProject(null)}>About</a></li>
              <li><a href="#notes" onClick={() => setActiveProject(null)}>Notes</a></li>
              <li><a href="#shapes" onClick={() => setActiveProject(null)}>Beyond Scr..</a></li>
              <li><a href="#contact" onClick={() => setActiveProject(null)}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {activeProject ? (
        activeProject.nda ? (
          <NDAGate
            projectId={activeProject.id}
            onSuccess={(id) =>
              setActiveProject({ id, nda: false })
            }
            onBack={() => setActiveProject(null)}
          />
        ) : (
          <CaseStudy
            project={activeProject.id}
            onBack={() => setActiveProject(null)}
          />
        )
      ) : (
        <>
          <Hero />
          <Work setActiveProject={setActiveProject} />
          <Patent setActiveProject={setActiveProject} />
          <About />
          <Notes />
          <Shapes />
          <Contact />
        </>
      )}
    </>
  );
}