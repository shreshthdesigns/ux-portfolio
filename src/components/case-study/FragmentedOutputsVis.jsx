import React from 'react';
import { motion } from 'framer-motion';

const FragmentedOutputsVis = () => {
  return (
    <div style={{
      background: "#ffffff",
      padding: "3rem",
      borderRadius: "32px",
      border: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "350px",
      justifyContent: "center",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.03)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Subtle Background Grid Pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.2,
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none'
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "450px" }}>
        {/* Nodes */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3rem" }}>
          
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ background: "#ffffff", padding: "0.75rem 1.25rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: "0.75rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--ink)" }}>CI Pipeline</span>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            style={{ background: "#ffffff", padding: "0.75rem 1.25rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: "0.75rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
            <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--ink)" }}>Report Files</span>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
            style={{ background: "#ffffff", padding: "0.75rem 1.25rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: "0.75rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3b82f6" }} />
            <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--ink)" }}>Logs</span>
          </motion.div>

        </div>

        {/* Animated SVGs Vectors connecting downwards into chaos */}
        <svg style={{ position: "absolute", top: "2rem", left: "-2rem", width: "calc(100% + 4rem)", height: "180px", pointerEvents: "none", zIndex: -1 }}>
          <motion.path 
            d="M 80,30 C 80,100 180,120 200,160" 
            stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path 
            d="M 250,30 C 250,110 270,130 230,160" 
            stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <motion.path 
            d="M 420,30 C 420,100 300,120 260,160" 
            stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>

        {/* Fragmented Output Target */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
          <div style={{ 
            background: "repeating-linear-gradient(45deg, #f8fafc, #f8fafc 10px, #ffffff 10px, #ffffff 20px)", 
            padding: "1rem 2.5rem", 
            borderRadius: "8px", 
            border: "1px dashed #cbd5e1",
            color: "#64748b",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: "700"
          }}>
            Fragmented Outputs
          </div>
        </div>
      </div>
    </div>
  );
};

export default FragmentedOutputsVis;
