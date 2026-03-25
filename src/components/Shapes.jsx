import { useState } from "react";

export default function Shapes() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="shapes">
      <div className="wrap">
        <div className="about-shapes-thinking">
          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label" style={{ margin: 0 }}>When I am not at work</div>
          </div>

          <div className="shapes-scatter-container">
            <div
              className={`postcard pc-1 ${hoveredCard === 1 ? 'active' : ''} ${hoveredCard !== null && hoveredCard !== 1 ? 'inactive' : ''}`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="postcard-img"><img src="/1.jpeg" alt="Challenging Myself" /></div>
              <p className="postcard-caption">Challenging Myself</p>
            </div>

            <div
              className={`postcard pc-2 ${hoveredCard === 2 ? 'active' : ''} ${hoveredCard !== null && hoveredCard !== 2 ? 'inactive' : ''}`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="postcard-img"><img src="/2.jpeg" alt="Capturing Moments" /></div>
              <p className="postcard-caption">Capturing Moments</p>
            </div>

            <div
              className={`postcard pc-3 ${hoveredCard === 3 ? 'active' : ''} ${hoveredCard !== null && hoveredCard !== 3 ? 'inactive' : ''}`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="postcard-img"><img src="/3.jpeg" alt="Exploring Cusines" /></div>
              <p className="postcard-caption">Exploring Cusines</p>
            </div>

            <div
              className={`postcard pc-4 ${hoveredCard === 4 ? 'active' : ''} ${hoveredCard !== null && hoveredCard !== 4 ? 'inactive' : ''}`}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="postcard-img"><img src="/4.jpeg" alt="Coloring Canvas" /></div>
              <p className="postcard-caption">Coloring Canvas</p>
            </div>

            <div
              className={`postcard pc-5 ${hoveredCard === 5 ? 'active' : ''} ${hoveredCard !== null && hoveredCard !== 5 ? 'inactive' : ''}`}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="postcard-img"><img src="/5.jpeg" alt="Trying New Things" /></div>
              <p className="postcard-caption">Trying New Things.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
