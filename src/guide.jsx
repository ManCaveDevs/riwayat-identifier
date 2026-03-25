import { useState } from "react";
import NavBar from "./NavBar.jsx";
import riwayatData from "../data/riwayat.json";

const QIRAAT = [
  { qari: "Nafi' al-Madani", city: "Medina", period: "d. 169 AH", description: "Called 'Imam of the People' by Imam Malik. Of Persian descent, he systemized his reading by comparing 70 tabi'in teachers." },
  { qari: "Ibn Kathir al-Makki", city: "Mecca", period: "d. 120 AH", description: "A hadith scholar and judge of Mecca who directly met companions including Ibn al-Zubayr and Anas ibn Malik." },
  { qari: "Abu 'Amr ibn al-'Ala'", city: "Basra", period: "d. 154 AH", description: "A native Arab from Banu Hanifa who traveled the most among the qurra' and had the largest number of teachers." },
  { qari: "Ibn 'Amir al-Dimashqi", city: "Damascus", period: "d. 118 AH", description: "A native Arab with the shortest isnad among all 10 qurra'. He learned directly from Abu al-Darda'." },
  { qari: "'Asim ibn Abi al-Najud", city: "Kufa", period: "d. 127 AH", description: "Was blind but had one of the finest voices of recitation. His reading was influenced by both Ibn Mas'ud and 'Ali." },
  { qari: "Hamzah al-Zayyat", city: "Kufa", period: "d. 156 AH", description: "An oil merchant who never accepted compensation for Quranic teaching. Known for heavy imalah and long madd." },
  { qari: "Al-Kisa'i", city: "Kufa", period: "d. 189 AH", description: "Of Persian descent, a leading grammarian who reviewed the Quran with Hamzah four times." },
  { qari: "Abu Ja'far al-Madani", city: "Medina", period: "d. 130 AH", description: "Nafi's teacher. Learned from Ibn 'Abbas and Abu Hurayrah. Known for extensive hamzah softening (tashil)." },
  { qari: "Ya'qub al-Hadrami", city: "Basra", period: "d. 205 AH", description: "An expert on the ahruf and their differences who authored books on qira'at. Known for extreme khushu' in prayer." },
  { qari: "Khalaf al-'Ashir", city: "Baghdad", period: "d. 229 AH", description: "A seed merchant who preferred to be called 'Quran teacher.' He is both the 10th independent qari and a rawi of Hamzah." }
];

const QARI_ORDER = [
  "Nafi' al-Madani",
  "'Abdullah ibn Kathir al-Makki",
  "Abu 'Amr ibn al-'Ala'",
  "'Abdullah ibn 'Amir al-Dimashqi",
  "'Asim ibn Abi al-Najud",
  "Hamzah al-Zayyat",
  "'Ali ibn Hamzah al-Kisa'i",
  "Yazid ibn al-Qa'qa' (Abu Ja'far)",
  "Ya'qub ibn Ishaq",
  "Khalaf ibn Hisham al-Bazzar"
];

const FEATURE_LABELS = {
  imalah: {
    label: "Imalah", arabic: "\u0625\u0645\u0627\u0644\u0629",
    values: { none: "None", partial: "Partial (taqlil)", heavy: "Full (imalah kubra)" }
  },
  maaliki: {
    label: "Maaliki / Maliki", arabic: "\u0645\u064E\u0627\u0644\u0650\u0643\u0650 / \u0645\u064E\u0644\u0650\u0643\u0650",
    values: { maaliki: "Maaliki (\u0645\u064E\u0627\u0644\u0650\u0643\u0650 long)", maliki: "Maliki (\u0645\u064E\u0644\u0650\u0643\u0650 short)" }
  },
  madd: {
    label: "Madd Munfasil", arabic: "\u0645\u062F \u0645\u0646\u0641\u0635\u0644",
    values: { short: "Short (2 harakaat)", medium: "Medium (4 harakaat)", long: "Long (6 harakaat)" }
  },
  basmalah: {
    label: "Basmalah", arabic: "\u0627\u0644\u0628\u0633\u0645\u0644\u0629",
    values: { always: "Always between surahs", not_always: "Options (wasl/sakt)" }
  },
  hamzah: {
    label: "Hamzah", arabic: "\u0627\u0644\u0647\u0645\u0632\u0629",
    values: { clear: "Clear (tahqiq)", softened: "Eased (tashil/ibdal)" }
  },
  takbir: {
    label: "Takbir", arabic: "\u0627\u0644\u062A\u0643\u0628\u064A\u0631",
    values: { yes: "Yes (Juz' 'Amma)", no: "No" }
  },
  sirat: {
    label: "Al-Sirat", arabic: "\u0627\u0644\u0635\u0631\u0627\u0637",
    values: { sad: "Sad (\u0635)", sin: "Sin (\u0633)", ishmam: "Ishmam (\u0635+\u0632)" }
  },
  ra: {
    label: "Ra'", arabic: "\u0627\u0644\u0631\u0627\u0621",
    values: { standard: "Standard rules", thin: "Light (tarqiq)" }
  },
  extraYa: {
    label: "Extra Ya'", arabic: "\u064A\u0627\u0621\u0627\u062A \u0627\u0644\u0632\u0648\u0627\u0626\u062F",
    values: { yes: "Yes", no: "No" }
  },
  imalahScope: {
    label: "Imalah Scope", arabic: "\u0646\u0637\u0627\u0642 \u0627\u0644\u0625\u0645\u0627\u0644\u0629",
    values: { none: "None", standard: "Standard positions", broad: "Extended (extra words)" }
  },
  idghamKabir: {
    label: "Idgham Kabir", arabic: "\u0627\u0644\u0625\u062F\u063A\u0627\u0645 \u0627\u0644\u0643\u0628\u064A\u0631",
    values: { yes: "Yes", no: "No" }
  },
  haKinayah: {
    label: "Ha' al-Kinayah", arabic: "\u0647\u0627\u0621 \u0627\u0644\u0643\u0646\u0627\u064A\u0629",
    values: { standard: "Standard", with_sila: "With sila" }
  }
};

// Additional usul not used by the identifier but important for a complete guide
const EXTRA_FEATURE_LABELS = {
  sakt: {
    label: "Sakt", arabic: "\u0627\u0644\u0633\u0643\u062A",
    values: { yes: "Yes (pause before hamzah)", no: "No", four_places: "4 specific places" }
  },
  naql: {
    label: "Naql", arabic: "\u0627\u0644\u0646\u0642\u0644",
    values: { yes: "Yes (transfers hamzah vowel)", no: "No" }
  },
  silatMim: {
    label: "Silat Mim al-Jam'", arabic: "\u0635\u0644\u0629 \u0645\u064A\u0645 \u0627\u0644\u062C\u0645\u0639",
    values: { yes: "Yes", optional: "Optional (with khulf)", no: "No" }
  },
  taghlithLam: {
    label: "Taghlith al-Lam", arabic: "\u062A\u063A\u0644\u064A\u0638 \u0627\u0644\u0644\u0627\u0645",
    values: { yes: "Yes (after sad/ta'/tha')", no: "No" }
  },
  waqfHamzah: {
    label: "Waqf on Hamzah", arabic: "\u0648\u0642\u0641 \u0627\u0644\u0647\u0645\u0632\u0629",
    values: { full: "Takhfif on all hamzahs", final_only: "Final hamzahs only", no: "No" }
  },
  maddMuttasil: {
    label: "Madd Muttasil", arabic: "\u0645\u062F \u0645\u062A\u0635\u0644",
    values: { medium: "Medium (4-5 harakaat)", long: "Long (6 harakaat)" }
  },
  maddBadl: {
    label: "Madd Badl", arabic: "\u0645\u062F \u0628\u062F\u0644",
    values: { short: "Short (2 harakaat)", three_options: "3 options (2, 4, or 6)" }
  },
  imalahHaTanith: {
    label: "Imalah Ha' al-Ta'nith", arabic: "\u0625\u0645\u0627\u0644\u0629 \u0647\u0627\u0621 \u0627\u0644\u062A\u0623\u0646\u064A\u062B",
    values: { yes: "Yes (imalah kubra)", no: "No" }
  }
};

// Map riwayah ID to extra feature values
const EXTRA_FEATURES = {
  1:  { sakt: "four_places", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },   // Hafs
  2:  { sakt: "no", naql: "yes", silatMim: "no", taghlithLam: "yes", waqfHamzah: "no", maddMuttasil: "long", maddBadl: "three_options", imalahHaTanith: "no" },    // Warsh
  3:  { sakt: "no", naql: "no", silatMim: "optional", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },      // Qalun
  4:  { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Duri Abu Amr
  5:  { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Susi
  6:  { sakt: "yes", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "full", maddMuttasil: "long", maddBadl: "short", imalahHaTanith: "no" },           // Khalaf an Hamzah
  7:  { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "full", maddMuttasil: "long", maddBadl: "short", imalahHaTanith: "no" },            // Khallad
  8:  { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "yes" },           // Abu al-Harith
  9:  { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "yes" },           // Duri Kisai
  10: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "final_only", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },    // Hisham
  11: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Ibn Dhakwan
  12: { sakt: "no", naql: "no", silatMim: "yes", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },           // Bazzi
  13: { sakt: "no", naql: "no", silatMim: "yes", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },           // Qunbul
  14: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Shubah
  15: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Ibn Wardan
  16: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Ibn Jammaz
  17: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Ruways
  18: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Rawh
  19: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Ishaq
  20: { sakt: "no", naql: "no", silatMim: "no", taghlithLam: "no", waqfHamzah: "no", maddMuttasil: "medium", maddBadl: "short", imalahHaTanith: "no" },            // Idris
};

function FeatureRow({ featureKey, value }) {
  const f = FEATURE_LABELS[featureKey];
  if (!f) return null;
  const displayValue = f.values[value] || value;
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      padding: "6px 0", borderBottom: "1px solid var(--border)", gap: 8
    }}>
      <span style={{ fontSize: 13, color: "var(--sub)", flexShrink: 0 }}>
        {f.label}
      </span>
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", textAlign: "right" }}>
        {displayValue}
      </span>
    </div>
  );
}

function RiwayahCard({ r, compareMode, isSelected, onToggleSelect }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "var(--card-bg)",
      border: isSelected ? "2px solid var(--accent)" : "1.5px solid var(--border)",
      borderRadius: 12, overflow: "hidden"
    }}>
      {/* Accordion header — always visible */}
      <div style={{
        display: "flex", alignItems: "center",
        padding: compareMode ? "0 18px 0 0" : 0
      }}>
        {compareMode && (
          <button
            onClick={(e) => { e.stopPropagation(); onToggleSelect(r.id); }}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "14px 4px 14px 14px", display: "flex", alignItems: "center", flexShrink: 0
            }}
          >
            <div style={{
              width: 20, height: 20, borderRadius: 4,
              border: isSelected ? "none" : "2px solid var(--border)",
              background: isSelected ? "var(--accent)" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.15s ease"
            }}>
              {isSelected && <span style={{ color: "var(--accent-fg)", fontSize: 13, fontWeight: 700 }}>&#10003;</span>}
            </div>
          </button>
        )}
        <button
          onClick={() => setOpen(!open)}
          style={{
            flex: 1, background: "none", border: "none",
            padding: compareMode ? "14px 0 14px 6px" : "14px 18px",
            cursor: "pointer", textAlign: "left",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            fontFamily: "'DM Sans', sans-serif"
          }}
        >
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--heading)", marginBottom: 2 }}>
              {r.name}
            </div>
            <div style={{ fontSize: 12, color: "var(--sub)" }}>{r.region}</div>
          </div>
          <span style={{
            fontSize: 18, color: "var(--sub)", transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0, marginLeft: 12
          }}>&#9662;</span>
        </button>
      </div>

      {/* Accordion body */}
      {open && (
        <div style={{ padding: "0 18px 16px" }}>
          {/* Feature grid */}
          <div>
            {Object.keys(FEATURE_LABELS).map(key => (
              <FeatureRow key={key} featureKey={key} value={r.features[key]} />
            ))}
            {EXTRA_FEATURES[r.id] && Object.keys(EXTRA_FEATURE_LABELS).map(key => {
              const val = EXTRA_FEATURES[r.id][key];
              if (!val) return null;
              const alwaysShow = ["maddMuttasil", "maddBadl", "imalahHaTanith"];
              if (!alwaysShow.includes(key) && val === "no") return null;
              const f = EXTRA_FEATURE_LABELS[key];
              return (
                <div key={key} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  padding: "6px 0", borderBottom: "1px solid var(--border)", gap: 8
                }}>
                  <span style={{ fontSize: 13, color: "var(--sub)", flexShrink: 0 }}>{f.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", textAlign: "right" }}>
                    {f.values[val] || val}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Notes */}
          {r.notes && (
            <p style={{ fontSize: 12, color: "var(--sub)", margin: "12px 0 0 0", lineHeight: 1.6, fontStyle: "italic" }}>
              {r.notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function GuidePage({ onHome, onDocs, onGuide, darkMode, toggleDark }) {
  const [activeTab, setActiveTab] = useState("usul");
  const [compareMode, setCompareMode] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  };

  const grouped = QARI_ORDER.map((qariName, idx) => ({
    ...QIRAAT[idx],
    riwayat: riwayatData.riwayat.filter(r => r.qari === qariName)
  }));

  return (
    <div className={`riwayat-root${darkMode ? " dark" : ""}`} style={{
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      padding: "60px 20px 32px",
      background: "linear-gradient(180deg, var(--bg-top), var(--bg-bottom))",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&family=Amiri:wght@400;700&display=swap');
        .riwayat-root {
          --heading: #1a1a1f;
          --text: #2d2d35;
          --sub: #71717a;
          --border: #e4e4e7;
          --card-bg: #f4f4f5;
          --hover-bg: #ebebed;
          --accent: #3f3f46;
          --accent-fg: #fff;
          --accent-bg: rgba(63, 63, 70, 0.06);
          --bg-top: #fafafa;
          --bg-bottom: #f0f0f2;
        }
        .riwayat-root.dark {
          --heading: #e4e4e7;
          --text: #d4d4d8;
          --sub: #a1a1aa;
          --border: #2e2e33;
          --card-bg: #1c1c21;
          --hover-bg: #252529;
          --accent: #e4e4e7;
          --accent-fg: #111114;
          --accent-bg: rgba(212, 212, 216, 0.08);
          --bg-top: #111114;
          --bg-bottom: #18181b;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .riwayat-root { padding: 60px 14px 20px !important; }
        }
      `}</style>

      <NavBar activePage="guide" onHome={onHome} onDocs={onDocs} onGuide={onGuide} darkMode={darkMode} toggleDark={toggleDark} />

      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28, animation: "fadeSlideUp 0.4s ease-out" }}>
          <div onClick={onHome} style={{
            fontSize: 28, fontFamily: "'Amiri', serif", fontWeight: 700,
            color: "var(--heading)", marginBottom: 2, direction: "rtl", cursor: "pointer"
          }}>{"\u0628\u0650\u0623\u064E\u064A\u0651\u0650 \u0631\u0650\u0648\u064E\u0627\u064A\u064E\u0629\u064D\u061F"}</div>
          <p style={{ fontSize: 13, color: "var(--sub)", margin: 0 }}>Riwayah Guide</p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: 4, marginBottom: 24,
          background: "var(--card-bg)", borderRadius: 10, padding: 4,
          border: "1.5px solid var(--border)"
        }}>
          {[{ id: "usul", label: "Usul" }, { id: "farsh", label: "Farsh" }].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              flex: 1, padding: "10px 12px",
              background: activeTab === tab.id ? "var(--accent)" : "transparent",
              color: activeTab === tab.id ? "var(--accent-fg)" : "var(--sub)",
              border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600,
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s ease"
            }}>{tab.label}</button>
          ))}
        </div>

        {activeTab === "usul" && <>
        {/* Usul intro */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--heading)", margin: 0 }}>Usul per Riwayah</h2>
          <button
            onClick={() => { setCompareMode(!compareMode); if (compareMode) setSelected([]); }}
            style={{
              padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif", cursor: "pointer", transition: "all 0.2s",
              background: compareMode ? "var(--accent)" : "var(--accent)",
              color: "var(--accent-fg)",
              border: "none",
              boxShadow: compareMode ? "none" : "0 2px 8px rgba(0,0,0,0.12)"
            }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >{compareMode ? "Exit Compare" : "Compare"}</button>
        </div>
        <p style={{ fontSize: 13, color: "var(--sub)", margin: "0 0 36px 0", lineHeight: 1.6 }}>
          {compareMode
            ? <>Select up to <strong>4 riwayat</strong> to compare their usul side by side. {selected.length > 0 && `(${selected.length} selected)`}</>
            : <>Systematic rules applied <strong>throughout the entire Quran</strong> that define how each riwayah sounds: imalah, madd lengths, hamzah treatment, basmalah, and more.</>
          }
        </p>

        {/* Comparison table */}
        {compareMode && selected.length >= 2 && (() => {
          const selData = selected.map(id => riwayatData.riwayat.find(r => r.id === id));
          const allFeatures = [
            ...Object.keys(FEATURE_LABELS).map(k => ({ key: k, ...FEATURE_LABELS[k], source: "main" })),
            ...Object.keys(EXTRA_FEATURE_LABELS).map(k => ({ key: k, ...EXTRA_FEATURE_LABELS[k], source: "extra" }))
          ];
          const getVal = (r, key, source) => {
            if (source === "main") return r.features[key];
            return EXTRA_FEATURES[r.id] ? EXTRA_FEATURES[r.id][key] : null;
          };
          const getDisplay = (val, feat) => feat.values[val] || val || "—";

          return (
            <div style={{
              background: "var(--card-bg)", border: "1.5px solid var(--border)",
              borderRadius: 12, padding: "16px 0", marginBottom: 20, overflowX: "auto"
            }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "6px 14px", color: "var(--sub)", fontWeight: 600, fontSize: 12, position: "sticky", left: 0, background: "var(--card-bg)" }}>Feature</th>
                    {selData.map(r => (
                      <th key={r.id} style={{ textAlign: "center", padding: "6px 10px", color: "var(--heading)", fontWeight: 700, fontSize: 12, minWidth: 100 }}>
                        {r.name.split("'an")[0].split("(")[0].trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map(feat => {
                    const vals = selData.map(r => getVal(r, feat.key, feat.source));
                    const allSame = vals.every(v => v === vals[0]);
                    const allNo = vals.every(v => !v || v === "no");
                    if (feat.source === "extra" && allNo) return null;
                    return (
                      <tr key={feat.key} style={{
                        background: allSame ? "transparent" : "var(--accent-bg)"
                      }}>
                        <td style={{ padding: "7px 14px", color: "var(--sub)", fontWeight: 500, borderTop: "1px solid var(--border)", position: "sticky", left: 0, background: allSame ? "var(--card-bg)" : "var(--accent-bg)" }}>
                          {feat.label}
                        </td>
                        {selData.map(r => {
                          const val = getVal(r, feat.key, feat.source);
                          return (
                            <td key={r.id} style={{
                              padding: "7px 10px", textAlign: "center", borderTop: "1px solid var(--border)",
                              color: allSame ? "var(--sub)" : "var(--heading)", fontWeight: allSame ? 400 : 600
                            }}>
                              {getDisplay(val, feat)}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })()}

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {grouped.map((group, i) => (
            <div key={i} style={{ animation: "fadeSlideUp 0.4s ease-out" }}>
              {/* Qari header */}
              <div style={{
                marginBottom: 10,
                paddingBottom: 8,
                borderBottom: "2px solid var(--border)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--heading)" }}>
                    {i + 1}. {group.qari}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--sub)", fontWeight: 600 }}>
                    {group.city} &middot; {group.period}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "var(--sub)", margin: 0, lineHeight: 1.5 }}>
                  {group.description}
                </p>
              </div>

              {/* Riwayah cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {group.riwayat.map(r => (
                  <RiwayahCard key={r.id} r={r} compareMode={compareMode} isSelected={selected.includes(r.id)} onToggleSelect={toggleSelect} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 12, color: "var(--sub)", margin: "16px 0 0 0", lineHeight: 1.6, fontStyle: "italic" }}>
          All data follows Tariq al-Tayyibah, verified against nquran.com and An-Nashr fi al-Qira'at al-'Ashr.
        </p>
        </>}

        {activeTab === "farsh" && <>
        {/* Farsh Examples */}
        <div style={{ animation: "fadeSlideUp 0.4s ease-out" }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--heading)", margin: "0 0 8px 0" }}>Key Farsh Differences</h2>
          <p style={{ fontSize: 13, color: "var(--sub)", margin: "0 0 16px 0", lineHeight: 1.6 }}>
            Unlike usul, farsh differences apply to specific verses, not the entire Quran. Only about <strong>0.9%</strong> of the Quran's words have an alternative reading, but that still amounts to hundreds of individual differences across all 20 riwayat. Below are select examples showing how these word-level variations add layers of meaning.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              {
                ref: "Al-Baqarah 2:219",
                type: "Consonant alternation",
                majority: "\u0643\u064E\u0628\u0650\u064A\u0631\u064C",
                majorityLatin: "kabir (great)",
                majorityReaders: "8 of the 10 readers",
                variant: "\u0643\u064E\u062B\u0650\u064A\u0631\u064C",
                variantLatin: "kathir (much)",
                variantReaders: "Hamzah & Al-Kisa'i",
                note: "About the sin of wine: 'great sin' vs 'much sin.' Both meanings are complementary."
              },
              {
                ref: "Al-Kahf 18:55",
                type: "Different vowels",
                majority: "\u0642\u064F\u0628\u064F\u0644\u064B\u0627",
                majorityLatin: "qubula (in many types)",
                majorityReaders: "'Asim, Hamzah, Al-Kisa'i, Abu Ja'far",
                variant: "\u0642\u0650\u0628\u064E\u0644\u064B\u0627",
                variantLatin: "qibala (face to face)",
                variantReaders: "Nafi', Ibn Kathir, Abu 'Amr, Ibn 'Amir, Ya'qub",
                note: "Punishment coming 'in many forms' vs 'directly face to face.'"
              },
              {
                ref: "Al-Takwir 81:24",
                type: "Consonant alternation",
                majority: "\u0628\u0650\u0636\u064E\u0646\u0650\u064A\u0646\u064D",
                majorityLatin: "bi-danin (stingy/withholding)",
                majorityReaders: "Majority of readers",
                variant: "\u0628\u0650\u0638\u064E\u0646\u0650\u064A\u0646\u064D",
                variantLatin: "bi-zanin (accused)",
                variantReaders: "Ibn Kathir, Abu 'Amr, Al-Kisa'i, Ruways",
                note: "The Prophet is 'not stingy' with revelation vs 'not accused' regarding it."
              },
              {
                ref: "Al-Baqarah 2:229",
                type: "Active / passive verb",
                majority: "\u064A\u064E\u062E\u064E\u0627\u0641\u064E\u0627",
                majorityLatin: "yakhafa (they both fear)",
                majorityReaders: "Majority of readers",
                variant: "\u064A\u064F\u062E\u064E\u0627\u0641\u064E\u0627",
                variantLatin: "yukhafa (it is feared)",
                variantReaders: "Hamzah, Abu Ja'far, Ya'qub",
                note: "About khul' (divorce): the couple fears vs a third party (judge) fears they can't maintain limits."
              },
              {
                ref: "Al-Rum 30:39",
                type: "Verb conjugation",
                majority: "\u0621\u064E\u0627\u062A\u064E\u064A\u0652\u062A\u064F\u0645",
                majorityLatin: "ataytum (you give)",
                majorityReaders: "Majority of readers",
                variant: "\u0623\u064E\u062A\u064E\u064A\u0652\u062A\u064F\u0645\u0652",
                variantLatin: "ataytum (you engage with)",
                variantReaders: "Ibn Kathir",
                note: "About riba: 'whatever you give in riba' vs 'whatever type of riba you engage with.' Broader prohibition."
              },
              {
                ref: "Al-Rum 30:39",
                type: "Pronoun change",
                majority: "\u0644\u0650\u064A\u064E\u0631\u0652\u0628\u064F\u0648\u064E\u0627",
                majorityLatin: "li-yarbuwa (so it increases)",
                majorityReaders: "Majority of readers",
                variant: "\u0644\u0650\u062A\u064F\u0631\u0652\u0628\u064F\u0648\u0627",
                variantLatin: "li-turbu (so you increase it)",
                variantReaders: "Nafi', Abu Ja'far, Ya'qub",
                note: "The money itself increases vs you (the person) increase it. Links prohibition to intention."
              }
            ].map((ex, i) => (
              <div key={i} style={{
                background: "var(--card-bg)", border: "1.5px solid var(--border)",
                borderRadius: 12, padding: "14px 18px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--heading)" }}>{ex.ref}</span>
                  <span style={{ fontSize: 11, color: "var(--accent)", background: "var(--accent-bg)", padding: "2px 8px", borderRadius: 6, fontWeight: 600 }}>{ex.type}</span>
                </div>
                <div style={{ display: "flex", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 140 }}>
                    <div style={{ fontSize: 20, fontFamily: "'Amiri', serif", color: "var(--heading)", direction: "rtl", marginBottom: 2 }}>{ex.majority}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>{ex.majorityLatin}</div>
                    <div style={{ fontSize: 11, color: "var(--sub)" }}>{ex.majorityReaders}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 140 }}>
                    <div style={{ fontSize: 20, fontFamily: "'Amiri', serif", color: "var(--heading)", direction: "rtl", marginBottom: 2 }}>{ex.variant}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>{ex.variantLatin}</div>
                    <div style={{ fontSize: 11, color: "var(--sub)" }}>{ex.variantReaders}</div>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "var(--sub)", margin: 0, lineHeight: 1.6 }}>{ex.note}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 12, color: "var(--sub)", margin: "12px 0 0 0", lineHeight: 1.6, fontStyle: "italic" }}>
            Source: Sh. Yousef Wahb, "Can the Qur'an Be Recited in Different Ways?" (Yaqeen Institute, 2022)
          </p>
        </div>
        </>}

        {/* Back to tool */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button onClick={onHome} style={{
            padding: "12px 28px", background: "var(--accent)", color: "var(--accent-fg)",
            border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "opacity 0.2s"
          }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >
            Back to Identifier
          </button>
        </div>
      </div>
    </div>
  );
}
