import React from 'react';

const ConnectorLine = ({ className = "" }) => (
  <div className={`reveal ${className}`} style={{ display: "flex", justifyContent: "center" }}>
    <div 
      style={{ 
        width: "1px", 
        height: "5rem", 
        background: "linear-gradient(180deg, transparent, var(--cosmic-blue), transparent)",
        opacity: 0.4
      }} 
    />
  </div>
);

export default ConnectorLine;
