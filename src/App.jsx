import { useState } from "react";

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

  return (
    <>
      <nav>
        <div className="wrap nav-in">
          <a href="#hero" className="logo">
            Shubham Shreshth
          </a>

          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#patent">Patent</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#notes">Notes</a></li>
            <li><a href="#shapes">Beyond Screen</a></li>
            <li><a href="#contact">Contact</a></li>
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