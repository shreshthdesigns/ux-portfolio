import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FragmentedSystemVis = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    let timeoutId;
    if (isInView) {
      // The entire animation sequence takes roughly 6.5-7 seconds.
      // We wait for the animation to finish + a 3-second delay, then restart.
      timeoutId = setTimeout(() => {
        setAnimationKey(prev => prev + 1);
      }, 10000); // 7s (animation) + 3s (wait) = 10s
    }
    return () => clearTimeout(timeoutId);
  }, [isInView, animationKey]);

  // Main subsystems
  const subsystems = [
    { id: 'powertrain', label: 'Powertrain', angle: -60, icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> }, // lightning
    { id: 'adas', label: 'ADAS', angle: 0, icon: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" /> }, // radar
    { id: 'infotainment', label: 'Infotainment', angle: 60, icon: <path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8zm2 0v8h16V8H4zm4 2h8v4H8v-4z" /> }, // screen
    { id: 'body', label: 'Body Control', angle: 120, icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm0-18.1L18 6.4V12c0 4.6-6 7.9-6 7.9s-6-3.3-6-7.9V6.4l6-2.5z" /> }, // shield/controller
    { id: 'chassis', label: 'Chassis', angle: 180, icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-1.6 1.6z M6.3 14.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-1.6 1.6z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" /> }, // connectors
    { id: 'hvac', label: 'HVAC', angle: -120, icon: <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.41 11.41A2 2 0 1 0 11 16h9M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" /> }, // breezy
  ];

  // Disconnected tools - Evenly distributed on the ring
  const toolsList = [
    { name: 'Azure DevOps', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
    { name: 'Excel', logo: '/Excel.png' },
    { name: 'GitLab CI/CD', logo: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg' },
    { name: 'MATLAB', logo: '/Matlab.png' },
    { name: 'Jenkins', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg' },
    { name: 'CircleCI', logo: 'https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg' },
  ];
  const tools = toolsList.map((t, i) => ({ ...t, angle: i * (360 / toolsList.length) - 90 }));

  // Helper to get coordinates
  const getCoords = (angle, radius) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: 400 + radius * Math.cos(rad),
      y: 400 + radius * Math.sin(rad),
    };
  };

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: '800px', margin: '0 auto', aspectRatio: '1/1', position: 'relative', background: 'transparent' }}>
      <svg key={animationKey} viewBox="0 0 800 800" style={{ width: '100%', height: '100%' }}>
        {/* Outer dashed ring */}
        <motion.circle
          cx="400"
          cy="400"
          r="360"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
        />

        {/* Lines from center to subsystems */}
        {subsystems.map((s, i) => {
          const end = getCoords(s.angle, 160);
          return (
            <motion.line
              key={`line-${s.id}`}
              x1="400"
              y1="400"
              x2={end.x}
              y2={end.y}
              stroke="#e2e8f0"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
            />
          );
        })}

        {/* Sub-nodes / branching lines from subsystems */}
        {subsystems.map((s, i) => {
          const center = getCoords(s.angle, 160);
          const nodes = [
            { a: -20, r: 60 }, { a: 0, r: 70 }, { a: 20, r: 60 }
          ];
          return nodes.map((n, j) => {
            const end = getCoords(s.angle + n.a, 160 + n.r);
            return (
              <React.Fragment key={`branch-${s.id}-${j}`}>
                <motion.line
                  x1={center.x}
                  y1={center.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.1, duration: 0.6 }}
                />
                <motion.circle
                  cx={end.x}
                  cy={end.y}
                  r={4}
                  fill="#94a3b8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 + i * 0.1 + j * 0.1, duration: 0.4 }}
                />
              </React.Fragment>
            );
          });
        })}

        {/* Subsystem circular cards */}
        {subsystems.map((s, i) => {
          const pos = getCoords(s.angle, 160);
          return (
            <g key={`subsystem-${s.id}`}>
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="38"
                fill="white"
                stroke="#e2e8f0"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.1, type: 'spring', stiffness: 100 }}
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}
              />
              <motion.svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                x={pos.x - 11}
                y={pos.y - 11}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              >
                {s.icon}
              </motion.svg>
              {/* Labels BELOW the circles */}
              <motion.text
                x={pos.x}
                y={pos.y + 55}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill="#64748b"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
              >
                {s.label}
              </motion.text>
            </g>
          );
        })}

        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1.5, 1], opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <circle cx="400" cy="400" r="55" fill="white" stroke="#e2e8f0" strokeWidth="2" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
          <svg x="380" y="375" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
          <text x="400" y="480" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1e293b" letterSpacing="0.1em">AUTOMOTIVE</text>
        </motion.g>

        {/* Tool Icons on the outer ring - NO LABELS, CENTERED LOGOS */}
        {tools.map((t, i) => {
          const pos = getCoords(t.angle, 350);
          return (
            <motion.g key={`tool-${t.name}`} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 4 + i * 0.2, type: 'spring' }}>
              <circle cx={pos.x} cy={pos.y} r="35" fill="white" stroke="#e2e8f0" strokeWidth="1" style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.08))' }} />
              {/* Logo perfectly centered (SVG x,y is top-left) */}
              <image 
                href={t.logo} 
                x={pos.x - 21} 
                y={pos.y - 21} 
                height="42" 
                width="42" 
                preserveAspectRatio="xMidYMid meet"
              />
            </motion.g>
          );
        })}
      </svg>

      {/* Bottom Caption - Fixed Position & Alignment */}
      <motion.p
        key={`caption-${animationKey}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.5, duration: 0.8 }}
        style={{
          marginTop: '2rem',
          color: '#64748b',
          fontSize: '0.92rem',
          lineHeight: '1.6',
          textAlign: 'center',
          width: '100%',
          maxWidth: '550px',
          fontWeight: '500',
          margin: '2.5rem auto 0 auto' // Center align related to container
        }}
      >
        Enterprise systems span multiple subsystems, tools, and teams, but validation still happens in disconnected fragments.
      </motion.p>
    </div>
  );
};

export default FragmentedSystemVis;
