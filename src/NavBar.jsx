export default function NavBar({ activePage, onHome, onDocs, onGuide, darkMode, toggleDark }) {
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
          {onGuide && <button
            onClick={onGuide}
            style={linkStyle(activePage === "guide")}
            onMouseEnter={e => { if (activePage !== "guide") e.target.style.color = "var(--text)"; }}
            onMouseLeave={e => { if (activePage !== "guide") e.target.style.color = "var(--sub)"; }}
          >Guide</button>}
          <button
            onClick={onDocs}
            style={linkStyle(activePage === "docs")}
            onMouseEnter={e => { if (activePage !== "docs") e.target.style.color = "var(--text)"; }}
            onMouseLeave={e => { if (activePage !== "docs") e.target.style.color = "var(--sub)"; }}
          >Docs</button>
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
  );
}
