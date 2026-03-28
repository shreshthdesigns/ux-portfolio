import React from 'react';

const GlowCard = ({ children, className = "", glowColor = "blue", delay = 0 }) => {
  const glowClasses = {
    blue: "cosmic-glow-blue",
    purple: "cosmic-glow-purple",
    cyan: "cosmic-glow-cyan",
  };

  return (
    <div 
      className={`cosmic-glass ${glowClasses[glowColor]} reveal ${className}`}
      style={{ 
        padding: "1.5rem", 
        borderRadius: "0.75rem", 
        transition: "all 0.3s ease",
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default GlowCard;
