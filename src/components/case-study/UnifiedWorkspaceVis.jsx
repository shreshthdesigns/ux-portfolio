import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const UnifiedWorkspaceVis = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    let timeoutId;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setAnimationKey(prev => prev + 1);
      }, 10000); // 7s active + 3s wait
    }
    return () => clearTimeout(timeoutId);
  }, [isInView, animationKey]);

  const fragmentData = [
    { id: 'ci', label: 'CI Pipeline', color: '#3b82f6', icon: <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 14" /> },
    { id: 'reports', label: 'Report Files', color: '#14b8a6', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /> },
    { id: 'logs', label: 'Logs & Trace', color: '#6366f1', icon: <path d="M4 6h16M4 12h16M4 18h7" /> },
    { id: 'config', label: 'Configs', color: '#f59e0b', icon: <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> }
  ];

  const particles = Array.from({ length: 8 });

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '320px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <svg key={animationKey} viewBox="0 0 600 400" style={{ width: '100%', height: '100%' }}>
        {/* BACKGROUND BLOOM */}
        <motion.circle
          cx="300"
          cy="180"
          r="0"
          fill="var(--accent)"
          initial={{ r: 0, opacity: 0 }}
          animate={{ r: [0, 180, 160], opacity: [0, 0.05, 0.03] }}
          transition={{ delay: 3, duration: 2 }}
        />

        {/* DATA PARTICLES FLOWING */}
        {particles.map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="2"
            fill="var(--accent)"
            initial={{ opacity: 0 }}
            animate={{ 
              cx: [100 + (i * 50), 300],
              cy: [50 + (i * 30), 180],
              opacity: [0, 0.4, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ delay: 3.2 + i * 0.1, duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
          />
        ))}

        {/* WORKSPACE FRAME (Large enough to cover cards) */}
        <motion.rect
          x="145"
          y="70"
          width="310"
          height="190"
          rx="32"
          fill="#f8fafc"
          fillOpacity="0.5"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="8 6"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 3, duration: 1.2, type: 'spring' }}
        />
        <motion.text
          x="300"
          y="50"
          textAnchor="middle"
          fontSize="11"
          fontWeight="900"
          fill="var(--accent)"
          letterSpacing="0.15em"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
          style={{ textTransform: 'uppercase' }}
        >
          Project Advisor Unified Hub
        </motion.text>

        {/* FRAGMENT CARDS (Randomized wandering then binding) */}
        {fragmentData.map((f, i) => {
          const start = [
            { x: 30, y: 20 }, { x: 470, y: 40 }, { x: 50, y: 300 }, { x: 490, y: 280 }
          ][i];

          const wander = [
            { x: start.x + 40, y: start.y + 60 },
            { x: start.x - 30, y: start.y + 40 },
            { x: start.x + 20, y: start.y - 30 },
            { x: start.x - 40, y: start.y - 20 }
          ][i];

          const target = { x: 175 + (i % 2) * 135, y: 105 + Math.floor(i / 2) * 80 };

          return (
            <motion.g key={f.id}>
              {/* CONNECTING THREADS */}
              <motion.path
                d={`M ${start.x + 55} ${start.y + 35} Q ${300} ${200} ${target.x + 60} ${target.y + 35}`}
                fill="none"
                stroke={f.color}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
                transition={{ delay: 3.2 + i * 0.1, duration: 1.5 }}
              />

              <motion.g
                initial={{ x: start.x, y: start.y, opacity: 0, rotate: i * 15 - 30 }}
                animate={{ 
                  x: [start.x, wander.x, target.x],
                  y: [start.y, wander.y, target.y],
                  opacity: 1,
                  rotate: [i * 15 - 30, i * 5, 0],
                  scale: [0.85, 1, 1]
                }}
                transition={{ 
                  x: { duration: 4.5, times: [0, 0.7, 1], ease: "easeInOut" },
                  y: { duration: 4.5, times: [0, 0.7, 1], ease: "easeInOut" },
                  rotate: { duration: 4.5, times: [0, 0.7, 1] },
                  opacity: { duration: 1 }
                }}
              >
                {/* CARD BODY WITH COLOR ACCENT */}
                <rect width="120" height="70" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="1" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))' }} />
                <rect width="120" height="4" rx="2" fill={f.color} opacity="0.8" />
                
                <motion.svg 
                  x="48" y="15" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke={f.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  animate={{ scale: [1, 1.1, 1] }} 
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                >
                  {f.icon}
                </motion.svg>
                
                <text x="60" y="55" textAnchor="middle" fontSize="10" fontWeight="800" fill={f.color} opacity="0.9" letterSpacing="0.02em">
                  {f.label}
                </text>
              </motion.g>
            </motion.g>
          );
        })}

        {/* SUCCESS HUD */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 6, type: 'spring', damping: 12 }}
        >
          <circle cx="300" cy="315" r="30" fill="white" stroke="#22c55e20" strokeWidth="8" />
          <motion.circle 
            cx="300" cy="315" r="24" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <path d="M292 315l6 6 12-12" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="300" y="370" textAnchor="middle" fontSize="13" fontWeight="800" fill="#15803d" letterSpacing="0.05em">
            UNIFIED & TRACEABLE
          </text>
        </motion.g>
      </svg>

      {/* FOOTER LABEL */}
      <motion.div
        key={`label-${animationKey}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.5 }}
        style={{
          marginTop: '1rem',
          color: '#94a3b8',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: '700'
        }}
      >
        Structured Solution
      </motion.div>
    </div>
  );
};

export default UnifiedWorkspaceVis;
