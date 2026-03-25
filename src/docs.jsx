import { useState } from "react";

const QIRAAT = [
  {
    qari: "Nafi' al-Madani",
    city: "Medina",
    period: "d. 169 AH",
    ruwat: ["Qalun", "Warsh"],
    description: "One of the most widely transmitted readings. Warsh is dominant across North Africa, while Qalun is used in Libya and Tunisia."
  },
  {
    qari: "Ibn Kathir al-Makki",
    city: "Mecca",
    period: "d. 120 AH",
    ruwat: ["Al-Bazzi", "Qunbul"],
    description: "The reading of Mecca. Known for Takbir between surahs in Juz' 'Amma and distinctive hamzah handling."
  },
  {
    qari: "Abu 'Amr ibn al-'Ala'",
    city: "Basra",
    period: "d. 154 AH",
    ruwat: ["Al-Duri", "Al-Susi"],
    description: "Characterized by partial imalah (taqlil) and idgham kabir. Al-Duri's narration is widely used in Sudan and parts of West Africa."
  },
  {
    qari: "Ibn 'Amir al-Dimashqi",
    city: "Damascus",
    period: "d. 118 AH",
    ruwat: ["Hisham", "Ibn Dhakwan"],
    description: "The reading of greater Syria. Hisham softens certain double-hamzahs while Ibn Dhakwan keeps them clear."
  },
  {
    qari: "'Asim ibn Abi al-Najud",
    city: "Kufa",
    period: "d. 127 AH",
    ruwat: ["Hafs", "Shu'bah"],
    description: "Hafs 'an 'Asim is the most widespread riwayah in the world today, used across Saudi Arabia, Egypt, South and Southeast Asia, and Turkey."
  },
  {
    qari: "Hamzah al-Zayyat",
    city: "Kufa",
    period: "d. 156 AH",
    ruwat: ["Khalaf", "Khallad"],
    description: "Known for heavy imalah and long madd. Distinguished by whether al-Sirat has ishmam (Khalaf) or pure Sad (Khallad)."
  },
  {
    qari: "Al-Kisa'i",
    city: "Kufa",
    period: "d. 189 AH",
    ruwat: ["Abu al-Harith", "Al-Duri"],
    description: "Also features heavy imalah like Hamzah but with basmalah between surahs. Al-Duri here is the same person who narrates from Abu 'Amr."
  },
  {
    qari: "Abu Ja'far al-Madani",
    city: "Medina",
    period: "d. 130 AH",
    ruwat: ["Ibn Wardan", "Ibn Jammaz"],
    description: "One of the three additional qurra' completing the ten. Known for extensive hamzah softening (tashil)."
  },
  {
    qari: "Ya'qub al-Hadrami",
    city: "Basra",
    period: "d. 205 AH",
    ruwat: ["Ruways", "Rawh"],
    description: "Distinguished by additional Ya' sounds at the end of certain words that other readings don't have."
  },
  {
    qari: "Khalaf al-'Ashir",
    city: "Baghdad",
    period: "d. 229 AH",
    ruwat: ["Ishaq", "Idris"],
    description: "The 10th Qari'. His own reading is distinct from his narration of Hamzah, and notably has no imalah."
  }
];

const FEATURES = [
  {
    name: "Imalah",
    arabic: "\u0625\u0645\u0627\u0644\u0629",
    description: "Tilting the Alif sound (\"ah\") toward an \"eh\" sound. Heavy imalah is very noticeable, while taqlil (partial imalah) is a subtler tilt. Most readings have no imalah at all."
  },
  {
    name: "Maaliki vs Maliki",
    arabic: "\u0645\u064E\u0627\u0644\u0650\u0643\u0650 / \u0645\u064E\u0644\u0650\u0643\u0650",
    description: "In the 4th ayah of Al-Fatihah, some readings use Maaliki (with a long Alif, meaning 'Master') while others use Maliki (short, meaning 'King'). Both are valid and authentic."
  },
  {
    name: "Madd Munfasil",
    arabic: "\u0645\u062F \u0645\u0646\u0641\u0635\u0644",
    description: "The lengthening that occurs when a madd letter is followed by a hamzah in the next word. Different readings stretch this for 2 beats (short), 4 beats (medium), or 5-6 beats (long)."
  },
  {
    name: "Hamzah Treatment",
    arabic: "\u062A\u062E\u0641\u064A\u0641 \u0627\u0644\u0647\u0645\u0632\u0629",
    description: "Some readings pronounce every hamzah clearly, while others soften them (tashil), replace them with vowel sounds (ibdal), or transfer their sound to the preceding letter (naql)."
  },
  {
    name: "Basmalah Between Surahs",
    arabic: "\u0627\u0644\u0628\u0633\u0645\u0644\u0629 \u0628\u064A\u0646 \u0627\u0644\u0633\u0648\u0631",
    description: "Most readings always recite Bismillah between consecutive surahs. Hamzah's reading allows silence or connection without basmalah as an option."
  },
  {
    name: "Takbir",
    arabic: "\u0627\u0644\u062A\u0643\u0628\u064A\u0631",
    description: "Saying 'Allahu Akbar' between surahs from Al-Duha (93) to Al-Nas (114). This is a distinctive feature of Ibn Kathir's reading."
  },
  {
    name: "Al-Sirat Pronunciation",
    arabic: "\u0627\u0644\u0635\u0631\u0627\u0637",
    description: "The word al-Sirat in Al-Fatihah can be read with a pure Sad, a Sin, or with ishmam (mixing the Sad with a buzzing Zay sound)."
  },
  {
    name: "Ra' Thinning (Tarqiq)",
    arabic: "\u062A\u0631\u0642\u064A\u0642 \u0627\u0644\u0631\u0627\u0621",
    description: "Warsh thins the Ra' in certain positions where other readings would make it thick. This gives a noticeably lighter sound to words like Fir'awn."
  }
];

export default function DocsPage({ onBack, darkMode, toggleDark }) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "qiraat", label: "The 10 Qira'at" },
    { id: "features", label: "Key Features" }
  ];

  return (
    <div className={`riwayat-root${darkMode ? " dark" : ""}`} style={{
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      padding: "32px 20px",
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
      `}</style>

      {/* Dark mode toggle */}
      {toggleDark && (
        <button
          onClick={toggleDark}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1.5px solid var(--border)",
            background: "var(--card-bg)",
            color: "var(--sub)",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            transition: "all 0.2s ease"
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--sub)"; }}
        >
          {darkMode ? "\u2600" : "\u263E"}
        </button>
      )}

      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: 28,
          animation: "fadeSlideUp 0.4s ease-out"
        }}>
          <div
            onClick={onBack}
            style={{
              fontSize: 28,
              fontFamily: "'Amiri', serif",
              fontWeight: 700,
              color: "var(--heading)",
              marginBottom: 2,
              direction: "rtl",
              cursor: "pointer"
            }}
          >{"\u0628\u0650\u0623\u064E\u064A\u0651\u0650 \u0631\u0650\u0648\u064E\u0627\u064A\u064E\u0629\u064D\u061F"}</div>
          <p style={{ fontSize: 13, color: "var(--sub)", margin: 0 }}>Documentation</p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex",
          gap: 4,
          marginBottom: 24,
          background: "var(--card-bg)",
          borderRadius: 10,
          padding: 4,
          border: "1.5px solid var(--border)"
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: "10px 12px",
                background: activeTab === tab.id ? "var(--accent)" : "transparent",
                color: activeTab === tab.id ? "var(--accent-fg)" : "var(--sub)",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s ease"
              }}
            >{tab.label}</button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ animation: "fadeSlideUp 0.4s ease-out" }}>
          {activeTab === "about" && (
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--heading)", margin: "0 0 12px 0" }}>What is this tool?</h2>
              <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.7, marginBottom: 16 }}>
                The Riwayah Identifier helps you figure out which riwayah (transmission) of the Qur'an you're listening to by asking you a series of simple listening questions.
              </p>
              <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.7, marginBottom: 16 }}>
                It covers all <strong>20 riwayat</strong> from the <strong>10 canonical qira'at</strong>, working through an elimination process. Each answer narrows down the possibilities until only one (or a few) remain.
              </p>

              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--heading)", margin: "24px 0 10px 0" }}>What is a Riwayah?</h3>
              <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.7, marginBottom: 16 }}>
                The Qur'an was revealed and recited by the Prophet &#xFDFA; and transmitted through multiple chains of reciters. A <strong>qira'ah</strong> (reading) refers to the method of recitation attributed to a particular Imam (reader). Each reader had students who transmitted his reading, and these transmissions are called <strong>riwayat</strong>.
              </p>
              <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.7, marginBottom: 16 }}>
                Sometimes the differences are in pronunciation, like a vowel held longer or a letter softened, and sometimes even the words themselves differ slightly. All of these variations are authentic and go back to the Prophet &#xFDFA; through verified chains of transmission.
              </p>

              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--heading)", margin: "24px 0 10px 0" }}>How does it work?</h3>
              <div style={{
                background: "var(--card-bg)",
                border: "1.5px solid var(--border)",
                borderRadius: 12,
                padding: 16
              }}>
                {[
                  "Questions are ordered by the most recognizable features first (imalah, Fatihah reading, madd length)",
                  "Each answer filters out riwayat that don't match",
                  "You can skip any question you're unsure about",
                  "Questions that don't help narrow things down are auto-skipped",
                  "When one riwayah remains, you get the result. If multiple remain, you see a list of candidates"
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    gap: 10,
                    padding: "8px 0",
                    borderBottom: i < 4 ? "1px solid var(--border)" : "none",
                    fontSize: 14,
                    color: "var(--text)",
                    lineHeight: 1.6
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      color: "var(--accent-fg)",
                      fontSize: 12,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2
                    }}>{i + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "qiraat" && (
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--heading)", margin: "0 0 8px 0" }}>The 10 Canonical Qira'at</h2>
              <p style={{ fontSize: 14, color: "var(--sub)", marginBottom: 20, lineHeight: 1.6 }}>
                Each Qari' (reader) has two Ruwat (narrators), giving us 20 riwayat in total.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {QIRAAT.map((q, i) => (
                  <div key={i} style={{
                    background: "var(--card-bg)",
                    border: "1.5px solid var(--border)",
                    borderRadius: 12,
                    padding: "16px 18px"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                      <span style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "var(--heading)",
                        fontFamily: "'DM Sans', sans-serif"
                      }}>{i + 1}. {q.qari}</span>
                      <span style={{
                        fontSize: 12,
                        color: "var(--sub)",
                        fontWeight: 600
                      }}>{q.city} &middot; {q.period}</span>
                    </div>
                    <div style={{
                      display: "flex",
                      gap: 6,
                      marginBottom: 8
                    }}>
                      {q.ruwat.map((r, j) => (
                        <span key={j} style={{
                          fontSize: 12,
                          color: "var(--accent)",
                          background: "var(--accent-bg)",
                          padding: "3px 10px",
                          borderRadius: 6,
                          fontWeight: 600
                        }}>{r}</span>
                      ))}
                    </div>
                    <p style={{
                      fontSize: 13,
                      color: "var(--sub)",
                      margin: 0,
                      lineHeight: 1.6
                    }}>{q.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--heading)", margin: "0 0 8px 0" }}>Key Distinguishing Features</h2>
              <p style={{ fontSize: 14, color: "var(--sub)", marginBottom: 20, lineHeight: 1.6 }}>
                These are the audible differences the tool listens for. Understanding them helps you identify riwayat on your own.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {FEATURES.map((f, i) => (
                  <div key={i} style={{
                    background: "var(--card-bg)",
                    border: "1.5px solid var(--border)",
                    borderRadius: 12,
                    padding: "16px 18px"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <span style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "var(--heading)"
                      }}>{f.name}</span>
                      <span style={{
                        fontSize: 16,
                        fontFamily: "'Amiri', serif",
                        color: "var(--accent)",
                        direction: "rtl"
                      }}>{f.arabic}</span>
                    </div>
                    <p style={{
                      fontSize: 14,
                      color: "var(--text)",
                      margin: 0,
                      lineHeight: 1.7
                    }}>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back to tool */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button
            onClick={onBack}
            style={{
              padding: "12px 28px",
              background: "var(--accent)",
              color: "var(--accent-fg)",
              border: "none",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "opacity 0.2s"
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
