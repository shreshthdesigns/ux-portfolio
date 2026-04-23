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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add/remove dl-mode class on body for Design Ledger dark nav
  useEffect(() => {
    if (activeProject?.id === 'design-ledger') {
      document.body.classList.add('dl-mode');
    } else {
      document.body.classList.remove('dl-mode');
    }
    return () => document.body.classList.remove('dl-mode');
  }, [activeProject]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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

  // Scroll to top when activeProject changes (entering case study or NDA gate)
  useEffect(() => {
    if (activeProject) {
      window.scrollTo(0, 0);
    }
  }, [activeProject]);

  const getLogoColor = () => {
    if (!activeProject) return "";
    switch(activeProject.id) {
      case 'project-advisor': return 'var(--accent)';
      case 'gecko-ai': return '#3b82f6';
      case 'model-finder': return '#0284c7';
      case 'patent': return 'var(--patent-accent, #2b5440)';
      case 'polyspace-copilot': return '#4338ca';
      case 'design-ledger': return '#0076A8';
      default: return 'var(--ink)';
    }
  };

  return (
    <>
      <nav className={activeProject?.id === 'design-ledger' ? 'nav--dl' : undefined}>
        <div className="wrap nav-in">
          <a 
            href="#hero" 
            className="logo"
            style={activeProject ? { color: getLogoColor() } : {}}
            onClick={() => setActiveProject(null)}
          >
            Shubham Shreshth
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links">
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

          {/* Mobile Nav Top Bar Controls (only visible on mobile) */}
          <div className="mobile-nav-controls">
            <a href="#contact" className="mobile-nav-contact btn-resume-pill" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }} onClick={(e) => {
                  e.preventDefault();
                  setActiveProject(null);
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else window.location.hash = "contact";
                  }, 100);
            }}>Contact</a>
            
            <button 
              className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
               <span></span>
               <span></span>
               <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay Menu */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
           <ul className="mobile-menu-links">
            {activeProject ? (
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  setActiveProject(null);
                  setIsMobileMenuOpen(false);
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
                <li><a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                <li><a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</a></li>
                <li><a href="#patent" onClick={() => setIsMobileMenuOpen(false)}>Patent</a></li>
                <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                <li><a href="#notes" onClick={() => setIsMobileMenuOpen(false)}>Notes</a></li>
                <li><a href="#shapes" onClick={() => setIsMobileMenuOpen(false)}>Beyond Screen</a></li>
                <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
              </>
            )}
           </ul>
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