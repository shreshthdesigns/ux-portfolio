import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SimulinkIcon = ({ x, y, color = "#3B82F6", scale = 1, opacity = 1 }) => (
  <motion.g
    initial={{ x, y, scale, opacity }}
    animate={{ x, y, scale, opacity }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
  >
    {/* Block Body */}
    <rect x="-20" y="-15" width="40" height="30" rx="4" fill="white" stroke={color} strokeWidth="2" />
    {/* Ports */}
    <rect x="-24" y="-5" width="4" height="4" fill={color} />
    <rect x="-24" y="5" width="4" height="4" fill={color} />
    <rect x="20" y="0" width="4" height="4" fill={color} />
    {/* Internal schematic lines */}
    <line x1="-12" y1="0" x2="12" y2="0" stroke={color} strokeWidth="1" strokeDasharray="2 1" />
    <circle cx="0" cy="0" r="3" fill="none" stroke={color} strokeWidth="1" />
  </motion.g>
);

const MagnifyingGlass = ({ x, y }) => (
  <motion.g
    animate={{ x, y }}
    transition={{ type: "spring", stiffness: 50, damping: 20 }}
    style={{ pointerEvents: 'none', zIndex: 10 }}
  >
    {/* Handle */}
    <rect x="25" y="25" width="30" height="8" rx="4" transform="rotate(45 25 25)" fill="#475569" />
    {/* Lens Frame */}
    <circle cx="0" cy="0" r="35" fill="none" stroke="#64748B" strokeWidth="4" />
    {/* Glass with glow */}
    <circle cx="0" cy="0" r="33" fill="rgba(255, 255, 255, 0.2)" style={{ backdropFilter: 'blur(2px)' }} />
    <circle cx="-10" cy="-10" r="15" fill="url(#glassGradient)" opacity="0.5" />
    
    <defs>
      <radialGradient id="glassGradient">
        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
  </motion.g>
);

export default function ModelFinderProblemVis() {
  const [phase, setPhase] = useState(0); // 0: random, 1: focus1, 2: focus2, 3: focus3, 4: final
  
  // Static icon positions for random drift
  const [icons, setIcons] = useState([]);
  
  useEffect(() => {
    // Initialize 25 icons with random positions
    const initialIcons = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 400 + 50,
      y: Math.random() * 400 + 50,
      baseX: Math.random() * 400 + 50,
      baseY: Math.random() * 400 + 50,
      driftX: (Math.random() - 0.5) * 40,
      driftY: (Math.random() - 0.5) * 40,
    }));
    setIcons(initialIcons);

    // Animation phases
    const timers = [
      setTimeout(() => setPhase(1), 3000),  // Focus 1
      setTimeout(() => setPhase(2), 6000),  // Focus 2
      setTimeout(() => setPhase(3), 9000),  // Focus 3
      setTimeout(() => setPhase(4), 12000), // Final
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Indices for special icons
  const targetIndices = [4, 12, 22];
  
  const getIconProps = (index, icon) => {
    // Default movement (random drift)
    let x = icon.baseX + (phase === 0 ? Math.sin(Date.now() / 1000 + index) * icon.driftX : 0);
    let y = icon.baseY + (phase === 0 ? Math.cos(Date.now() / 1000 + index) * icon.driftY : 0);
    let color = "#3B82F6";
    let scale = 1;
    let opacity = 1;
    let label = null;
    let showCross = false;

    // Focus Phase 1: Icon at targetIndices[0]
    if (phase >= 1 && index === targetIndices[0]) {
      x = 150; y = 150;
      scale = phase === 1 ? 2 : 1;
      color = phase >= 1 ? "#EF4444" : "#3B82F6";
      showCross = phase >= 1;
      if (phase === 1) label = "Wrong Model (Duplicated Name)";
    }
    
    // Focus Phase 2: Icon at targetIndices[1]
    if (phase >= 2 && index === targetIndices[1]) {
      x = 350; y = 200;
      scale = phase === 2 ? 2 : 1;
      color = phase >= 2 ? "#EF4444" : "#3B82F6";
      showCross = phase >= 2;
      if (phase === 2) label = "Wrong Path/Model";
    }

    // Focus Phase 3: Icon at targetIndices[2]
    if (phase >= 3 && index === targetIndices[2]) {
      x = 250; y = 350;
      scale = phase >= 3 ? 2 : 1;
      color = phase >= 3 ? "#10B981" : "#3B82F6";
      if (phase === 3) label = "Correct Model Found!";
    }

    // Fade out others when focused
    if (phase > 0 && phase < 4 && !targetIndices.includes(index)) {
      opacity = 0.3;
    }

    return { x, y, color, scale, opacity, label, showCross };
  };

  const getGlassPos = () => {
    switch (phase) {
      case 1: return { x: 150, y: 150 };
      case 2: return { x: 350, y: 200 };
      case 3: return { x: 250, y: 350 };
      case 0: return { x: -100, y: -100 }; // Out of view
      default: return { x: 250, y: 250, scale: 0, opacity: 0 }; // Final
    }
  };

  return (
    <div className="model-finder-animation-container" style={{ 
      width: '100%', 
      maxWidth: '500px', 
      aspectRatio: '1/1', 
      margin: '2rem auto',
      background: '#F8FAFC',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid #E2E8F0'
    }}>
      <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Icons */}
        {icons.map((icon, index) => {
          const props = getIconProps(index, icon);
          return (
            <React.Fragment key={icon.id}>
              <SimulinkIcon {...props} />
              {props.showCross && (
                <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transform={`translate(${props.x}, ${props.y})`} style={{ pointerEvents: 'none' }}>
                   <line x1="-10" y1="-10" x2="10" y2="10" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                   <line x1="10" y1="-10" x2="-10" y2="10" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                </motion.g>
              )}
              <AnimatePresence>
                {props.label && (
                  <motion.text
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    x={props.x}
                    y={props.y + 50}
                    textAnchor="middle"
                    fill={props.color}
                    style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'sans-serif' }}
                  >
                    {props.label}
                  </motion.text>
                )}
              </AnimatePresence>
            </React.Fragment>
          );
        })}

        {/* Magnifying Glass */}
        <MagnifyingGlass {...getGlassPos()} />
      </svg>

      {/* Final Overlay */}
      <AnimatePresence>
        {phase === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(43, 84, 64, 0.9)', // Forest Green from theme
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              textAlign: 'center',
              color: 'white',
              zIndex: 20
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'serif' }}>The Discovery Gap</h3>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                "Too much time wasted in finding the correct simulink model"
              </p>
              <motion.button
                onClick={() => setPhase(0)}
                style={{
                  marginTop: '2rem',
                  background: 'rgba(255,255,255,0.2)',
                  border: '1px solid white',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '100px',
                  cursor: 'pointer'
                }}
              >
                Replay Animation
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
