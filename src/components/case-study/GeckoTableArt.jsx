import React from "react";

export default function GeckoTableArt() {
  const tableData = [
    { id: "GCK-102", domain: "Simulink", prob: "Property Inspector context menu unfindable in nested subsystems.", verdict: "Yes", cat: "Discoverability", conf: "94%", sol: "Promote menu to top-level or add search-in-context." },
    { id: "GCK-341", domain: "Embedded Coder", prob: "Configuration parameters for AUTOSAR mapping are visually overlapping.", verdict: "Yes", cat: "Accessibility", conf: "89%", sol: "Implement dynamic spacing and responsive grid for params." },
    { id: "GCK-089", domain: "MATLAB", prob: "Exporting 50+ variables requires manual selection for each, causing fatigue.", verdict: "Yes", cat: "Efficiency", conf: "97%", sol: "Add 'Select All' and 'Batch Export' mechanisms." },
    { id: "GCK-512", domain: "App Designer", prob: "Drag-and-drop handles are too small for touch-interface laptops.", verdict: "Yes", cat: "Discoverability", conf: "91%", sol: "Increase hit-area padding and add visual hover state." }
  ];

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", background: "linear-gradient(to bottom right, #0F172A, #1E1B4B)", overflow: "hidden" }}>
      
      {/* Excel Window */}
      <div style={{ width: "120%", maxWidth: "850px", background: "#ffffff", borderRadius: "12px", boxShadow: "0 25px 50px rgba(0,0,0,0.5)", overflow: "hidden", transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1.05)", transformOrigin: "center left", transition: "transform 0.5s ease" }}>
        
        {/* Excel Green Header */}
        <div style={{ background: "#107C41", padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", fontSize: "12px", fontWeight: "600" }}>
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ background: "white", color: "#107C41", padding: "2px 8px", borderRadius: "4px" }}>File</div>
            <div>Home</div>
            <div>Insert</div>
            <div>Page Layout</div>
            <div>Data</div>
          </div>
          <div style={{ fontWeight: "400", opacity: 0.9 }}>Gecko_Archive_Q3_Insights.xlsx</div>
        </div>

        {/* Formula Bar */}
        <div style={{ background: "#F3F4F6", padding: "8px 16px", display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid #E5E7EB", fontSize: "12px", color: "#374151" }}>
          <div style={{ background: "white", padding: "2px 8px", border: "1px solid #D1D5DB", borderRadius: "2px" }}>A1</div>
          <div style={{ color: "#9CA3AF" }}>fx</div>
          <div style={{ background: "white", padding: "2px 8px", border: "1px solid #D1D5DB", borderRadius: "2px", flex: 1 }}>Geck Number</div>
        </div>

        {/* Table Content */}
        <div style={{ background: "white", width: "100%" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontFamily: "var(--font-sans, system-ui)", fontSize: "11px", color: "#374151" }}>
            <thead>
              <tr style={{ background: "#F9FAFB", borderBottom: "2px solid #E5E7EB" }}>
                <th style={{ padding: "10px", fontWeight: "600", color: "#6B7280", borderRight: "1px solid #E5E7EB", width: "8%" }}>Geck No.</th>
                <th style={{ padding: "10px", fontWeight: "600", color: "#6B7280", borderRight: "1px solid #E5E7EB", width: "12%" }}>Product Domain</th>
                <th style={{ padding: "10px", fontWeight: "600", color: "#6B7280", borderRight: "1px solid #E5E7EB", width: "25%" }}>Geck Problem Statement</th>
                <th style={{ padding: "10px", fontWeight: "600", color: "#6B7280", borderRight: "1px solid #E5E7EB", width: "8%" }}>Verdict</th>
                <th style={{ padding: "10px", fontWeight: "600", color: "#6B7280", borderRight: "1px solid #E5E7EB", width: "12%" }}>Category</th>
                <th style={{ padding: "10px", fontWeight: "600", color: "#6B7280", borderRight: "1px solid #E5E7EB", width: "10%" }}>AI Conf.</th>
                <th style={{ padding: "10px", fontWeight: "600", color: "#6B7280" }}>Solution Direction</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #E5E7EB" }}>
                  <td style={{ padding: "12px 10px", borderRight: "1px solid #E5E7EB", color: "#107C41", fontWeight: "700" }}>{row.id}</td>
                  <td style={{ padding: "12px 10px", borderRight: "1px solid #E5E7EB" }}>{row.domain}</td>
                  <td style={{ padding: "12px 10px", borderRight: "1px solid #E5E7EB", fontWeight: "500", color: "#111827", lineHeight: "1.4" }}>{row.prob}</td>
                  <td style={{ padding: "12px 10px", borderRight: "1px solid #E5E7EB", color: "#10B981", fontWeight: "700", background: "rgba(16, 185, 129, 0.05)" }}>{row.verdict}</td>
                  <td style={{ padding: "12px 10px", borderRight: "1px solid #E5E7EB" }}>
                    <span style={{ background: "#F3F4F6", padding: "4px 8px", borderRadius: "12px", fontWeight: "500" }}>{row.cat}</span>
                  </td>
                  <td style={{ padding: "12px 10px", borderRight: "1px solid #E5E7EB", fontWeight: "700", color: "#111827" }}>{row.conf}</td>
                  <td style={{ padding: "12px 10px", fontStyle: "italic", color: "#4B5563", lineHeight: "1.4" }}>{row.sol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
