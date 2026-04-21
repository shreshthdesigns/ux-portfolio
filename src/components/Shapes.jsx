import { useState } from "react";

const cards = [
  { id: 1, src: "/1.jpeg", alt: "Challenging Myself", caption: "Challenging Myself", cls: "pc-1" },
  { id: 2, src: "/2.jpeg", alt: "Capturing Moments", caption: "Capturing Moments", cls: "pc-2" },
  { id: 3, src: "/3.jpeg", alt: "Exploring Cuisines", caption: "Exploring Cuisines", cls: "pc-3" },
  { id: 4, src: "/4.jpeg", alt: "Coloring Canvas", caption: "Coloring Canvas", cls: "pc-4" },
  { id: 5, src: "/5.jpeg", alt: "Trying New Things", caption: "Trying New Things.", cls: "pc-5" },
];

export default function Shapes() {
  const [activeCard, setActiveCard] = useState(null);

  const handleInteract = (id) => {
    // Toggle on tap (mobile), set on hover (desktop)
    setActiveCard(prev => prev === id ? null : id);
  };

  return (
    <section id="shapes">
      <div className="wrap">
        <div className="about-shapes-thinking">
          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label" style={{ margin: 0 }}>When I am not at work</div>
          </div>

          <div className="shapes-scatter-container">
            {cards.map((card) => (
              <div
                key={card.id}
                className={[
                  "postcard",
                  card.cls,
                  activeCard === card.id ? "active" : "",
                  activeCard !== null && activeCard !== card.id ? "inactive" : "",
                ].filter(Boolean).join(" ")}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={(e) => { e.preventDefault(); handleInteract(card.id); }}
                onClick={() => handleInteract(card.id)}
                role="button"
                tabIndex={0}
                aria-label={card.caption}
              >
                <div className="postcard-img">
                  <img src={card.src} alt={card.alt} loading="lazy" />
                </div>
                <p className="postcard-caption">{card.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
