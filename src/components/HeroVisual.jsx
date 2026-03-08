import { useState } from "react";

export default function HeroVisual() {
  const [solved, setSolved] = useState(false);

  const chaoticPositions = [
    { x: 60, y: 80 },
    { x: 180, y: 40 },
    { x: 320, y: 70 },
    { x: 460, y: 110 },
    { x: 140, y: 180 },
    { x: 280, y: 220 },
    { x: 420, y: 190 },
    { x: 520, y: 150 },
    { x: 100, y: 260 },
    { x: 240, y: 300 },
    { x: 380, y: 270 },
    { x: 500, y: 240 },
  ];

  const structuredPositions = [
    { x: 120, y: 80 },
    { x: 240, y: 80 },
    { x: 360, y: 80 },
    { x: 480, y: 80 },
    { x: 120, y: 180 },
    { x: 240, y: 180 },
    { x: 360, y: 180 },
    { x: 480, y: 180 },
    { x: 120, y: 280 },
    { x: 240, y: 280 },
    { x: 360, y: 280 },
    { x: 480, y: 280 },
  ];

  const positions = solved ? structuredPositions : chaoticPositions;

  return (
    <div
      className="hero-visual clickable"
      onClick={() => setSolved(true)}
      onMouseLeave={() => setSolved(false)}
    >
      <div className="hero-tooltip">
        Click to Solve Complexity
      </div>

      <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid meet">
        {positions.map((node, i) =>
          positions.map((target, j) =>
            i < j ? (
              <line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="var(--border)"
                strokeWidth="0.7"
                style={{ transition: "all .7s cubic-bezier(.4,0,.2,1)" }}
              />
            ) : null
          )
        )}

        {positions.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="6"
            fill="var(--accent)"
            style={{ transition: "all .7s cubic-bezier(.4,0,.2,1)" }}
          />
        ))}
      </svg>
    </div>
  );
}