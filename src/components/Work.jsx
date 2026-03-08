import ProjectCard from "./ProjectCard";

export default function Work({ setActiveProject }) {

  const handleClick = (projectId, isNDA) => {
    if (isNDA) {
      setActiveProject({ id: projectId, nda: true });
    } else {
      setActiveProject({ id: projectId, nda: false });
    }
  };

  return (
    <section id="work">
      <div className="wrap">

        {/* ================= SECTION HEADING ================= */}
        <div className="section-head">
          <div className="section-label">
            Enterprise Systems & Product Design
          </div>
        </div>

        {/* ====================== SECTION A ====================== */}
        <div className="cluster">

          <div className="cluster-hd">
            <div className="cluster-idx">A.</div>
            <div>
              <div className="cluster-title">
                Workflow Optimization & Discoverability
              </div>
              <div className="cluster-desc">
                Bridging the gap between what users look for and what the system offers.
              </div>
            </div>
          </div>

          <div className="cards">

            {/* NDA CARD 1 */}
            <ProjectCard
                onClick={() => handleClick("project-advisor", true)}
                type="Flagship Case Study"
                title="Project Advisor"
                excerpt="Designing clarity in complex engineering workflows by enabling engineers to run validation checks across multiple models and manage failures inside CI/CD pipelines."
                tags={[
                "Workflow Systems",
                "Engineering UX",
                "Cognitive Load"
            ]}
                isNDA={true}
                image="/images/discoverability.jpg"
/>

            {/* NDA CARD 2 */}
            <ProjectCard
              onClick={() => handleClick("navigation", true)}
              type="Case Study"
              title="Navigation Mental Models in Simulink"
              excerpt="Understanding nested block diagram cognition."
              tags={["Mental Models", "Navigation"]}
              isNDA={true}
              image="/images/navigation.jpg"
            />

            {/* NON-NDA CARD */}
            <ProjectCard
              onClick={() => handleClick("usability-audit", false)}
              type="Case Study"
              title="Enterprise Usability Audit Framework"
              excerpt="Structured heuristic system for evaluating complex engineering tools."
              tags={["Heuristics", "Systems UX"]}
              isNDA={false}
              image="/images/usability-audit.jpg"
            />

          </div>
        </div>

        {/* ====================== SECTION B ====================== */}
        <div className="cluster">

          <div className="cluster-hd">
            <div className="cluster-idx">B.</div>
            <div>
              <div className="cluster-title">
                Problem Solving in Complex Workflows
              </div>
              <div className="cluster-desc">
                Reducing friction in multi-layered enterprise task flows.
              </div>
            </div>
          </div>

          <div className="cards">

            {/* NON-NDA CARD */}
            <ProjectCard
              onClick={() => handleClick("workflow-redesign", false)}
              type="Case Study"
              title="Cross-Team Workflow Redesign"
              excerpt="Improving collaboration efficiency across distributed product teams."
              tags={["Workflow Systems", "Enterprise UX"]}
              isNDA={false}
              image="/images/workflow-redesign.jpg"
            />

            {/* NON-NDA CARD */}
            <ProjectCard
              onClick={() => handleClick("design-system", false)}
              type="Case Study"
              title="Enterprise Design System Rationalization"
              excerpt="Aligning product consistency across internal platforms."
              tags={["Design Systems", "Scalability"]}
              isNDA={false}
              image="/images/design-system.jpg"
            />

            {/* NON-NDA CARD */}
            <ProjectCard
              onClick={() => handleClick("data-visualization", false)}
              type="Case Study"
              title="Complex Data Visualization Simplification"
              excerpt="Reducing cognitive overload in engineering dashboards."
              tags={["Data UX", "Cognitive Load"]}
              isNDA={false}
              image="/images/data-visualization.jpg"
            />

          </div>
        </div>

      </div>
    </section>
  );
}