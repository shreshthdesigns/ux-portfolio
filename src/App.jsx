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
  const [menuOpen, setMenuOpen] = useState(false);

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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (activeProject) return;

    const sections = ["hero", "work", "patent", "about", "notes", "shapes", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
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

  useEffect(() => {
    if (activeProject) {
      window.scrollTo(0, 0);
      setMenuOpen(false);
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

  const handleNavLinkClick = (targetId) => {
    setMenuOpen(false);
    if (activeProject) {
      setActiveProject(null);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
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
            onClick={() => { setActiveProject(null); setMenuOpen(false); }}
          >
            Shubham Shreshth
          </a>

          {/* Desktop nav links */}
          <ul className="nav-links">
            {activeProject ? (
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("contact");
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

          {/* Hamburger button — mobile only */}
          <button
            className={`hamburger-btn${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <ul className="mobile-nav-links">
          {activeProject ? (
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick("contact"); }}>
                Contact
              </a>
            </li>
          ) : (
            <>
              <li><a href="#work" className={activeSection === "work" ? "active" : ""} onClick={() => handleNavLinkClick("work")}>Work</a></li>
              <li><a href="#patent" className={activeSection === "patent" ? "active" : ""} onClick={() => handleNavLinkClick("patent")}>Patent</a></li>
              <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={() => handleNavLinkClick("about")}>About</a></li>
              <li><a href="#notes" className={activeSection === "notes" ? "active" : ""} onClick={() => handleNavLinkClick("notes")}>Notes</a></li>
              <li><a href="#shapes" className={activeSection === "shapes" ? "active" : ""} onClick={() => handleNavLinkClick("shapes")}>Beyond Screen</a></li>
              <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => handleNavLinkClick("contact")}>Contact</a></li>
            </>
          )}
        </ul>
        <p className="mobile-menu-close-hint">Tap outside to close</p>
      </div>

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
