import { useState, useRef, useEffect } from "react";

export default function NavBar({ activePage, onHome, onLearn, onExplore, darkMode, toggleDark }) {
  const [turuqOpen, setTuruqOpen] = useState(false);
  const turuqRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (turuqRef.current && !turuqRef.current.contains(e.target)) setTuruqOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const linkStyle = (isActive) => ({
    background: "none",
    border: "none",
    fontSize: 13,
    fontWeight: isActive ? 700 : 500,
    color: isActive ? "var(--heading)" : "var(--sub)",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    padding: "4px 0",
    borderBottom: isActive ? "2px solid var(--heading)" : "2px solid transparent",
    transition: "all 0.2s ease"
  });

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "var(--card-bg)",
      borderBottom: "1px solid var(--border)",
      backdropFilter: "blur(8px)"
    }}>
      <div style={{
        maxWidth: 620,
        margin: "0 auto",
        padding: "0 20px",
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", gap: 20 }}>
          <button
            onClick={onHome}
            style={linkStyle(activePage === "home")}
            onMouseEnter={e => { if (activePage !== "home") e.target.style.color = "var(--text)"; }}
            onMouseLeave={e => { if (activePage !== "home") e.target.style.color = "var(--sub)"; }}
          >Home</button>
          <button
            onClick={() => onLearn()}
            style={linkStyle(activePage === "learn")}
            onMouseEnter={e => { if (activePage !== "learn") e.target.style.color = "var(--text)"; }}
            onMouseLeave={e => { if (activePage !== "learn") e.target.style.color = "var(--sub)"; }}
          >Learn</button>
          <button
            onClick={onExplore}
            style={linkStyle(activePage === "explore")}
            onMouseEnter={e => { if (activePage !== "explore") e.target.style.color = "var(--text)"; }}
            onMouseLeave={e => { if (activePage !== "explore") e.target.style.color = "var(--sub)"; }}
          >Explore</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, color: "var(--sub)", fontFamily: "'DM Sans', sans-serif" }}>Tariq:</span>
          <div ref={turuqRef} style={{ position: "relative" }}>
            <button
              onClick={() => setTuruqOpen(o => !o)}
              aria-label="Select tariq"
              aria-expanded={turuqOpen}
              style={{
                background: "none",
                border: `1px solid ${turuqOpen ? "var(--accent)" : "var(--border)"}`,
                borderRadius: 6,
                height: 30,
                padding: "0 8px",
                fontSize: 11,
                color: turuqOpen ? "var(--text)" : "var(--sub)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text)"; }}
              onMouseLeave={e => { if (!turuqOpen) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--sub)"; } }}
            >
              Tayyibah <span style={{ fontSize: 9 }}>{turuqOpen ? "\u25B2" : "\u25BC"}</span>
            </button>
            {turuqOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 4px)",
                right: 0,
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: 4,
                minWidth: 160,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                zIndex: 200
              }}>
                <div
                  onClick={() => setTuruqOpen(false)}
                  style={{
                    padding: "6px 10px",
                    fontSize: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "var(--accent)",
                    fontWeight: 600,
                    borderRadius: 4,
                    background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                    cursor: "pointer"
                  }}
                >
                  Tayyibah
                </div>
                <div style={{
                  padding: "6px 10px",
                  fontSize: 12,
                  fontFamily: "'DM Sans', sans-serif",
                  color: "var(--sub)",
                  opacity: 0.5,
                  cursor: "not-allowed",
                  marginTop: 2
                }}>
                  Shatibiyyah <span style={{ fontSize: 10, fontStyle: "italic" }}>(coming soon)</span>
                </div>
              </div>
            )}
          </div>
          {toggleDark && (
            <button
              onClick={toggleDark}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: "50%",
                width: 30,
                height: 30,
                fontSize: 14,
                color: "var(--sub)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--sub)"; }}
            >
              {darkMode ? "\u2600" : "\u263E"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
