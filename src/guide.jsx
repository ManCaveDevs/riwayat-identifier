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
    values: { none: "None", partial: "Partial (taqlil)", heavy: "Heavy (imalah kubra)" }
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
    values: { clear: "Clear (tahqiq)", softened: "Softened (tashil/ibdal)" }
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
    values: { standard: "Standard (tafkhim)", thin: "Thin (tarqiq)" }
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

function RiwayahCard({ r }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{
      background: "var(--card-bg)", border: "1.5px solid var(--border)",
      borderRadius: 12, padding: "16px 18px"
    }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "var(--heading)", marginBottom: 2 }}>
          {r.name}
        </div>
        <div style={{ fontSize: 12, color: "var(--sub)", marginBottom: 6 }}>{r.region}</div>
      </div>

      {/* Feature grid */}
      <div style={{ marginBottom: r.notes ? 8 : 0 }}>
        {Object.keys(FEATURE_LABELS).map(key => (
          <FeatureRow key={key} featureKey={key} value={r.features[key]} />
        ))}
      </div>

      {/* Notes toggle */}
      {r.notes && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none", border: "none", fontSize: 12, color: "var(--accent)",
              cursor: "pointer", padding: "6px 0", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600
            }}
          >
            {expanded ? "Hide notes" : "Show notes"}
          </button>
          {expanded && (
            <p style={{ fontSize: 12, color: "var(--sub)", margin: "4px 0 0 0", lineHeight: 1.6 }}>
              {r.notes}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default function GuidePage({ onHome, onDocs, onGuide, darkMode, toggleDark }) {
  // Group riwayat by qari
  const grouped = QARI_ORDER.map((qariName, idx) => ({
    ...QIRAAT[idx],
    riwayat: riwayatData.riwayat.filter(r => r.qari === qariName)
  }));

  // Also pull traits from the main RIWAYAT array in riwayat-identifier.jsx
  // Since we can't import that easily, we'll use the traits from riwayat.json notes instead
  // But riwayat.json doesn't have traits — let's work with what we have

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

        {/* Intro */}
        <div style={{
          background: "var(--card-bg)", border: "1.5px solid var(--border)",
          borderRadius: 12, padding: "16px 18px", marginBottom: 24
        }}>
          <p style={{ fontSize: 14, color: "var(--text)", margin: 0, lineHeight: 1.7 }}>
            A complete reference of the <strong>usul</strong> (foundational rules) for all <strong>20 riwayat</strong> from the 10 canonical qira'at. Each riwayah card shows all 12 distinguishing features used by the identifier tool. Data verified against nquran.com and An-Nashr fi al-Qira'at al-'Ashr.
          </p>
        </div>

        {/* Qari sections */}
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
                  <RiwayahCard key={r.id} r={r} />
                ))}
              </div>
            </div>
          ))}
        </div>

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
