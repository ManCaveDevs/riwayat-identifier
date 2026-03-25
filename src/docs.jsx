import { useState } from "react";

const QIRAAT = [
  {
    qari: "Nafi' al-Madani",
    city: "Medina",
    period: "d. 169 AH",
    ruwat: ["Qalun (d. 220 AH)", "Warsh (d. 197 AH)"],
    description: "Called 'Imam of the People' by Imam Malik. Of Persian descent, he systemized his reading by comparing 70 tabi'in teachers, adopting what two or more agreed on. Warsh is dominant across North Africa, while Qalun is used in Libya and Tunisia.",
    note: "Abu Ja'far was his teacher."
  },
  {
    qari: "Ibn Kathir al-Makki",
    city: "Mecca",
    period: "d. 120 AH",
    ruwat: ["Al-Bazzi (d. 250 AH)", "Qunbul (d. 291 AH)"],
    description: "A hadith scholar and judge of Mecca who directly met companions including Ibn al-Zubayr and Anas ibn Malik. Known for Takbir between surahs in Juz' 'Amma. Imam al-Shafi'i said: 'Whoever seeks perfection in reciting, let them recite by Ibn Kathir's reading.'"
  },
  {
    qari: "Abu 'Amr ibn al-'Ala'",
    city: "Basra",
    period: "d. 154 AH",
    ruwat: ["Al-Duri (d. 246 AH)", "Al-Susi (d. 261 AH)"],
    description: "A native Arab from Banu Hanifa who traveled the most among the qurra' and had the largest number of teachers. Characterized by partial imalah (taqlil) and idgham kabir. Al-Duri's narration is widely used in Sudan and parts of West Africa."
  },
  {
    qari: "Ibn 'Amir al-Dimashqi",
    city: "Damascus",
    period: "d. 118 AH",
    ruwat: ["Hisham (d. 245 AH)", "Ibn Dhakwan (d. 202 AH)"],
    description: "A native Arab with the shortest isnad (chain) among all 10 qurra', only one link to the Prophet. He learned directly from Abu al-Darda' and became imam of the Umayyad Mosque. Hisham softens certain double-hamzahs while Ibn Dhakwan keeps them clear."
  },
  {
    qari: "'Asim ibn Abi al-Najud",
    city: "Kufa",
    period: "d. 127 AH",
    ruwat: ["Hafs (d. 180 AH)", "Shu'bah (d. 193 AH)"],
    description: "Was blind but had one of the finest voices of recitation. His reading was influenced by the readings of both Ibn Mas'ud and 'Ali through their students. Hafs 'an 'Asim is the most widespread riwayah in the world today."
  },
  {
    qari: "Hamzah al-Zayyat",
    city: "Kufa",
    period: "d. 156 AH",
    ruwat: ["Khalaf (d. 229 AH)", "Khallad (d. 220 AH)"],
    description: "An oil merchant ('al-Zayyat') who never accepted compensation for Quranic teaching. Abu Hanifa testified Hamzah was superior to him in qira'at. Known for heavy imalah and long madd."
  },
  {
    qari: "Al-Kisa'i",
    city: "Kufa",
    period: "d. 189 AH",
    ruwat: ["Abu al-Harith (d. 240 AH)", "Al-Duri"],
    description: "Of Persian descent, a leading grammarian who reviewed the Quran with Hamzah four times. Also features heavy imalah like Hamzah but with basmalah between surahs. Al-Duri here is the same person who narrates from Abu 'Amr."
  },
  {
    qari: "Abu Ja'far al-Madani",
    city: "Medina",
    period: "d. 130 AH",
    ruwat: ["Ibn Wardan", "Ibn Jammaz"],
    description: "Nafi's teacher. Learned from Ibn 'Abbas and Abu Hurayrah. As a child, he visited Umm Salamah (the Prophet's wife), who made du'a for him. Known for extensive hamzah softening (tashil)."
  },
  {
    qari: "Ya'qub al-Hadrami",
    city: "Basra",
    period: "d. 205 AH",
    ruwat: ["Ruways (d. 238 AH)", "Rawh (d. 254 AH)"],
    description: "An expert on the ahruf and their differences who authored books on qira'at. Known for extreme khushu' in prayer. Distinguished by additional Ya' sounds at the end of certain words."
  },
  {
    qari: "Khalaf al-'Ashir",
    city: "Baghdad",
    period: "d. 229 AH",
    ruwat: ["Ishaq (d. 286 AH)", "Idris (d. 292 AH)"],
    description: "A seed merchant (bazzar) who preferred to be called 'Quran teacher.' He is both the 10th independent qari and a rawi of Hamzah. His own reading retains heavy imalah and no basmalah between surahs."
  }
];

const FEATURES = [
  {
    name: "Imalah",
    arabic: "\u0625\u0645\u0627\u0644\u0629",
    description: "Tilting the Alif sound ('ah') toward an 'eh' sound. Rooted in the dialects of certain Arabian tribes. Heavy imalah is very noticeable, while taqlil (partial imalah) is a subtler tilt. Most readings have no imalah at all."
  },
  {
    name: "Maaliki vs Maliki",
    arabic: "\u0645\u064E\u0627\u0644\u0650\u0643\u0650 / \u0645\u064E\u0644\u0650\u0643\u0650",
    description: "In the 4th ayah of Al-Fatihah, some readings use Maaliki (with a long Alif, meaning 'Master/Owner') while others use Maliki (short, meaning 'King'). Both are valid, authentic, and describe Allah."
  },
  {
    name: "Madd Munfasil",
    arabic: "\u0645\u062F \u0645\u0646\u0641\u0635\u0644",
    description: "The lengthening that occurs when a madd letter is followed by a hamzah in the next word. Different readings stretch this for 2 beats (short), 4 beats (medium), or 5-6 beats (long). The exact duration may vary by tariq."
  },
  {
    name: "Hamzah Treatment",
    arabic: "\u062A\u062E\u0641\u064A\u0641 \u0627\u0644\u0647\u0645\u0632\u0629",
    description: "Some readings pronounce every hamzah clearly (tahqiq), while others soften them (tashil), replace them with vowel sounds (ibdal), or transfer their sound to the preceding letter (naql). This is one of the most audibly distinctive differences."
  },
  {
    name: "Basmalah Between Surahs",
    arabic: "\u0627\u0644\u0628\u0633\u0645\u0644\u0629 \u0628\u064A\u0646 \u0627\u0644\u0633\u0648\u0631",
    description: "Most readings always recite Bismillah between consecutive surahs. Hamzah and Khalaf al-'Ashir's readings allow silence or connection without basmalah. Warsh and some others offer all three options."
  },
  {
    name: "Takbir",
    arabic: "\u0627\u0644\u062A\u0643\u0628\u064A\u0631",
    description: "Saying 'Allahu Akbar' between surahs from Al-Duha (93) to Al-Nas (114). This is a distinctive feature of Ibn Kathir's reading."
  },
  {
    name: "Al-Sirat Pronunciation",
    arabic: "\u0627\u0644\u0635\u0631\u0627\u0637",
    description: "The word al-Sirat in Al-Fatihah can be read with a pure Sad, a Sin, or with ishmam (mixing the Sad with a buzzing Zay sound). This is a purely dialectal difference with no change in meaning."
  },
  {
    name: "Ra' Thinning (Tarqiq)",
    arabic: "\u062A\u0631\u0642\u064A\u0642 \u0627\u0644\u0631\u0627\u0621",
    description: "Warsh thins the Ra' in certain positions where other readings would make it thick. This gives a noticeably lighter sound to words like Fir'awn."
  },
  {
    name: "Idgham Kabir",
    arabic: "\u0627\u0644\u0625\u062F\u063A\u0627\u0645 \u0627\u0644\u0643\u0628\u064A\u0631",
    description: "Merging identical or similar letters across word boundaries so they flow together as one sound. Al-Susi, Ruways, and Hisham are among those known for this. It gives the recitation a distinctly smooth, connected quality."
  }
];

function InfoCard({ children, style }) {
  return (
    <div style={{
      background: "var(--card-bg)",
      border: "1.5px solid var(--border)",
      borderRadius: 12,
      padding: "16px 18px",
      marginBottom: 16,
      ...style
    }}>{children}</div>
  );
}

export default function DocsPage({ onBack, darkMode, toggleDark }) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "qiraat", label: "The 10 Qira'at" },
    { id: "features", label: "Key Features" },
    { id: "sources", label: "Sources" }
  ];

  const h2Style = { fontSize: 20, fontWeight: 800, color: "var(--heading)", margin: "0 0 12px 0" };
  const h3Style = { fontSize: 17, fontWeight: 700, color: "var(--heading)", margin: "24px 0 10px 0" };
  const pStyle = { fontSize: 15, color: "var(--text)", lineHeight: 1.7, marginBottom: 16 };
  const subStyle = { fontSize: 14, color: "var(--sub)", lineHeight: 1.6 };

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

      {toggleDark && (
        <button
          onClick={toggleDark}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            position: "fixed", top: 16, right: 16, width: 36, height: 36,
            borderRadius: "50%", border: "1.5px solid var(--border)",
            background: "var(--card-bg)", color: "var(--sub)", fontSize: 16,
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", zIndex: 100, transition: "all 0.2s ease"
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--sub)"; }}
        >
          {darkMode ? "\u2600" : "\u263E"}
        </button>
      )}

      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28, animation: "fadeSlideUp 0.4s ease-out" }}>
          <div onClick={onBack} style={{
            fontSize: 28, fontFamily: "'Amiri', serif", fontWeight: 700,
            color: "var(--heading)", marginBottom: 2, direction: "rtl", cursor: "pointer"
          }}>{"\u0628\u0650\u0623\u064E\u064A\u0651\u0650 \u0631\u0650\u0648\u064E\u0627\u064A\u064E\u0629\u064D\u061F"}</div>
          <p style={{ fontSize: 13, color: "var(--sub)", margin: 0 }}>Documentation</p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: 4, marginBottom: 24,
          background: "var(--card-bg)", borderRadius: 10, padding: 4,
          border: "1.5px solid var(--border)"
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              flex: 1, padding: "10px 12px",
              background: activeTab === tab.id ? "var(--accent)" : "transparent",
              color: activeTab === tab.id ? "var(--accent-fg)" : "var(--sub)",
              border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600,
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s ease"
            }}>{tab.label}</button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ animation: "fadeSlideUp 0.4s ease-out" }}>

          {/* ── ABOUT TAB ── */}
          {activeTab === "about" && (
            <div>
              <h2 style={h2Style}>What is this tool?</h2>
              <p style={pStyle}>
                The Riwayah Identifier helps you figure out which riwayah (transmission) of the Qur'an you're listening to by asking a series of simple listening questions.
              </p>
              <p style={pStyle}>
                It covers all <strong>20 riwayat</strong> from the <strong>10 canonical qira'at</strong>, working through an elimination process. Each answer narrows down the possibilities until only one (or a few) remain.
              </p>

              <h3 style={h3Style}>What is a Riwayah?</h3>
              <p style={pStyle}>
                The Qur'an was revealed and recited by the Prophet &#xFDFA; and transmitted through multiple chains of reciters. There are three levels in this transmission:
              </p>
              <InfoCard>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    ["Qira'ah (reading)", "The method of recitation named after one of the 10 canonical Imams (readers). Each reader's approach was agreed upon by their students."],
                    ["Riwayah (narration)", "A specific transmission from one of the reader's two primary narrators (ruwat). This is what our tool identifies."],
                    ["Tariq (path)", "A sub-transmission from the narrator's students onward. Multiple turuq can exist within one riwayah, with minor variations in detail."]
                  ].map(([title, desc], i) => (
                    <div key={i} style={{ padding: "8px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--heading)", marginBottom: 2 }}>{title}</div>
                      <div style={{ fontSize: 13, color: "var(--sub)", lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </InfoCard>
              <p style={pStyle}>
                Sometimes the differences are in pronunciation, like a vowel held longer or a letter softened, and sometimes even the words themselves differ slightly. All of these variations are authentic and go back to the Prophet &#xFDFA; through verified chains of transmission.
              </p>

              <h3 style={h3Style}>Why do multiple readings exist?</h3>
              <p style={pStyle}>
                The Prophet &#xFDFA; asked Allah to ease the recitation of the Qur'an for his ummah. The result was the seven <em>ahruf</em> (modes), a divinely granted concession that allowed the Qur'an to be recited in multiple ways to accommodate different dialects, ages, and linguistic backgrounds.
              </p>
              <InfoCard style={{ borderLeft: "3px solid var(--accent)", background: "var(--accent-bg)" }}>
                <p style={{ fontSize: 14, color: "var(--text)", margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>
                  "This Qur'an has been revealed to be recited in seven different ways, so recite it whichever way is easier for you."
                </p>
                <p style={{ fontSize: 12, color: "var(--sub)", margin: "6px 0 0 0" }}>Sahih al-Bukhari, 5041</p>
              </InfoCard>
              <p style={pStyle}>
                When 'Umar ibn al-Khattab heard Hisham ibn Hakim reciting Surah al-Furqan differently than he had learned it, he was startled and nearly confronted him. But when they went to the Prophet &#xFDFA;, he confirmed both recitations were correct, saying: "This is how it was revealed." The companions understood from early on that the Qur'an carried multiple valid modes of recitation.
              </p>
              <p style={pStyle}>
                Despite these variations, only about <strong>0.9%</strong> of the Qur'an's words have an alternative reading. The vast majority of the text is recited identically across all readings.
              </p>

              <h3 style={h3Style}>What makes a reading canonical?</h3>
              <p style={pStyle}>
                Scholars established three conditions for a qira'ah to be accepted:
              </p>
              <InfoCard>
                {[
                  "An authentic, unbroken chain of transmission (isnad) going back to the Prophet \uFDFA",
                  "Conformity with the consonantal skeleton of the Uthmanic mushaf, compiled in 30 AH (650 CE)",
                  "Consistency with the rules of Arabic grammar"
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 10, padding: "8px 0",
                    borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                    fontSize: 14, color: "var(--text)", lineHeight: 1.6
                  }}>
                    <span style={{
                      flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                      background: "var(--accent)", color: "var(--accent-fg)",
                      fontSize: 12, fontWeight: 700, display: "flex",
                      alignItems: "center", justifyContent: "center", marginTop: 2
                    }}>{i + 1}</span>
                    {item}
                  </div>
                ))}
              </InfoCard>
              <p style={{ ...subStyle, marginBottom: 16 }}>
                Ibn Mujahid (d. 324 AH) first canonized seven readers, selecting one per major city (Mecca, Medina, Damascus, Basra) and three from Kufa. Ibn al-Jazari (d. 833 AH) later added three more to form the ten we know today.
              </p>

              <h3 style={h3Style}>How does the tool work?</h3>
              <InfoCard>
                {[
                  "Questions are ordered by the most recognizable features first (imalah, Fatihah reading, madd length)",
                  "Each answer filters out riwayat that don't match",
                  "You can skip any question you're unsure about",
                  "Questions that don't help narrow things down are auto-skipped",
                  "When one riwayah remains, you get the result. If multiple remain, you see a list of candidates"
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 10, padding: "8px 0",
                    borderBottom: i < 4 ? "1px solid var(--border)" : "none",
                    fontSize: 14, color: "var(--text)", lineHeight: 1.6
                  }}>
                    <span style={{
                      flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                      background: "var(--accent)", color: "var(--accent-fg)",
                      fontSize: 12, fontWeight: 700, display: "flex",
                      alignItems: "center", justifyContent: "center", marginTop: 2
                    }}>{i + 1}</span>
                    {item}
                  </div>
                ))}
              </InfoCard>
            </div>
          )}

          {/* ── QIRA'AT TAB ── */}
          {activeTab === "qiraat" && (
            <div>
              <h2 style={h2Style}>The 10 Canonical Qira'at</h2>
              <p style={{ ...subStyle, marginBottom: 12 }}>
                Each Qari' (reader) has two Ruwat (narrators), giving us 20 riwayat in total. The seven original readers were canonized by Ibn Mujahid, one per major city except Kufa which had three. Ibn al-Jazari later added Abu Ja'far, Ya'qub, and Khalaf to complete the ten.
              </p>

              <InfoCard style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--heading)", marginBottom: 8 }}>Companion Isnad Connections</div>
                <p style={{ fontSize: 13, color: "var(--sub)", margin: 0, lineHeight: 1.6 }}>
                  All 10 readers trace their chains back to the Prophet &#xFDFA; through the companions. Ubayy ibn Ka'b connects to 8 of the 10 readers. 'Uthman, 'Ali, and Ibn Mas'ud each connect to 5. Only 3 of the 10 qurra' were native Arabs; the rest were of diverse backgrounds, reflecting the universal nature of Quranic scholarship.
                </p>
              </InfoCard>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {QIRAAT.map((q, i) => (
                  <div key={i} style={{
                    background: "var(--card-bg)", border: "1.5px solid var(--border)",
                    borderRadius: 12, padding: "16px 18px"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "var(--heading)", fontFamily: "'DM Sans', sans-serif" }}>
                        {i + 1}. {q.qari}
                      </span>
                      <span style={{ fontSize: 12, color: "var(--sub)", fontWeight: 600 }}>
                        {q.city} &middot; {q.period}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
                      {q.ruwat.map((r, j) => (
                        <span key={j} style={{
                          fontSize: 12, color: "var(--accent)", background: "var(--accent-bg)",
                          padding: "3px 10px", borderRadius: 6, fontWeight: 600
                        }}>{r}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 13, color: "var(--sub)", margin: 0, lineHeight: 1.6 }}>{q.description}</p>
                    {q.note && (
                      <p style={{ fontSize: 12, color: "var(--accent)", margin: "6px 0 0 0", fontStyle: "italic" }}>{q.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── FEATURES TAB ── */}
          {activeTab === "features" && (
            <div>
              <h2 style={h2Style}>Key Distinguishing Features</h2>
              <p style={{ ...subStyle, marginBottom: 12 }}>
                These are the audible differences the tool listens for. Understanding them helps you identify riwayat on your own.
              </p>

              <InfoCard style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--heading)", marginBottom: 8 }}>Usul vs. Farsh</div>
                <p style={{ fontSize: 13, color: "var(--sub)", margin: 0, lineHeight: 1.6 }}>
                  Differences between readings fall into two categories. <strong style={{ color: "var(--text)" }}>Usul</strong> are general rules that apply systematically across the entire Qur'an, like imalah, madd lengths, and hamzah treatment. <strong style={{ color: "var(--text)" }}>Farsh</strong> are differences in the vowelization or letters of particular words in individual passages. This tool focuses on usul, since they are what you can hear consistently throughout a recitation.
                </p>
              </InfoCard>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {FEATURES.map((f, i) => (
                  <div key={i} style={{
                    background: "var(--card-bg)", border: "1.5px solid var(--border)",
                    borderRadius: 12, padding: "16px 18px"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "var(--heading)" }}>{f.name}</span>
                      <span style={{ fontSize: 16, fontFamily: "'Amiri', serif", color: "var(--accent)", direction: "rtl" }}>{f.arabic}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--text)", margin: 0, lineHeight: 1.7 }}>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── SOURCES TAB ── */}
          {activeTab === "sources" && (
            <div>
              <h2 style={h2Style}>Sources</h2>
              <p style={{ ...subStyle, marginBottom: 20 }}>
                All data in this tool has been verified against primary scholarly sources. 20 out of 20 riwayat are verified.
              </p>

              <h3 style={h3Style}>Articles</h3>
              {[
                {
                  title: "The Origins of the Variant Readings of the Qur'an",
                  authors: "Ammar Khatib, Dr. Nazir Khan",
                  description: "Comprehensive scholarly article on the history, theology, and transmission of Quranic variant readings. Used for historical context, the ahruf framework, and the three conditions for canonical readings."
                },
                {
                  title: "Can the Qur'an Be Recited in Different Ways? The Meaning and Wisdom of Qira'at",
                  authors: "Sh. Yousef Wahb",
                  description: "Detailed overview of the 10 qira'at with biographical data on each reader and narrator, death dates, isnad connections, and the wisdom behind multiple readings."
                }
              ].map((s, i) => (
                <InfoCard key={i}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--heading)", marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "var(--accent)", marginBottom: 6 }}>{s.authors}</div>
                  <p style={{ fontSize: 13, color: "var(--sub)", margin: 0, lineHeight: 1.6 }}>{s.description}</p>
                </InfoCard>
              ))}

              <h3 style={h3Style}>Primary Data Sources</h3>
              {[
                {
                  title: "An-Nashr fi al-Qira'at al-'Ashr",
                  arabic: "\u0627\u0644\u0646\u0634\u0631 \u0641\u064A \u0627\u0644\u0642\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0639\u0634\u0631",
                  authors: "Ibn al-Jazari (d. 833 AH)",
                  url: "https://www.islamweb.net/ar/library/index.php?page=bookcontents&bk_no=70",
                  description: "The classical authority on the ten qira'at. Covers every usul category for all 20 riwayat. Digitized on islamweb.net."
                },
                {
                  title: "nquran.com: Usul and Biographies of the Readers",
                  arabic: "\u0623\u0635\u0648\u0644 \u0648\u062A\u0631\u0627\u062C\u0645 \u0627\u0644\u0642\u0631\u0627\u0621",
                  authors: "nquran.com",
                  url: "https://www.nquran.com/ar/categories/650/",
                  description: "Structured digital tables of usul per riwayah, plus comparison pages between narrators of the same reader. Primary source for verifying all 20 riwayat feature values."
                },
                {
                  title: "Tables of Usul of the Ten Readings",
                  arabic: "\u062C\u062F\u0648\u0644 \u0623\u0635\u0648\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0627\u062A \u0648\u0627\u0644\u0642\u0631\u0627\u0621 \u0627\u0644\u0639\u0634\u0631",
                  authors: "Archive.org",
                  url: "https://archive.org/details/20211118_20211118_2313",
                  description: "Downloadable comparison table of the usul of the ten readings in grid format."
                },
                {
                  title: "Tables of Usul from the Shatibiyyah and Durrah",
                  arabic: "\u062C\u062F\u0627\u0648\u0644 \u0627\u0635\u0648\u0644 \u0627\u062D\u0643\u0627\u0645 \u0627\u0644\u0642\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0639\u0634\u0631 \u0627\u0644\u0645\u062A\u0648\u0627\u062A\u0631\u0629",
                  authors: "Dr. Madiha Saleh Mahdi",
                  url: "https://archive.org/details/dr_191",
                  description: "Comprehensive tables of the usul of the ten mutawatir readings organized by collection and individually."
                }
              ].map((s, i) => (
                <InfoCard key={i}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--heading)", marginBottom: 2 }}>{s.title}</div>
                  <div style={{ fontSize: 14, fontFamily: "'Amiri', serif", color: "var(--sub)", direction: "rtl", marginBottom: 4 }}>{s.arabic}</div>
                  <div style={{ fontSize: 13, color: "var(--accent)", marginBottom: 6 }}>{s.authors}</div>
                  <p style={{ fontSize: 13, color: "var(--sub)", margin: 0, lineHeight: 1.6 }}>{s.description}</p>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-block", marginTop: 8, fontSize: 12, color: "var(--accent)",
                    textDecoration: "none", borderBottom: "1px solid var(--border)"
                  }}>{s.url.replace(/https?:\/\/(www\.)?/, '').split('/').slice(0, 2).join('/')} &rarr;</a>
                </InfoCard>
              ))}

              <h3 style={h3Style}>nquran.com Pages Used</h3>
              <InfoCard>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--heading)", marginBottom: 10 }}>Usul Pages (per riwayah)</div>
                {[
                  ["Warsh 'an Nafi'", "view/16681"],
                  ["Qalun 'an Nafi'", "view/16680"],
                  ["Al-Duri 'an Abu 'Amr", "view/16679"],
                  ["Khallad 'an Hamzah", "view/16678"],
                  ["Ibn Dhakwan 'an Ibn 'Amir", "view/16677"],
                  ["Abu Ja'far", "view/16682"],
                  ["Khalaf al-'Ashir", "view/16683"]
                ].map(([name, path], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", padding: "5px 0",
                    borderBottom: i < 6 ? "1px solid var(--border)" : "none",
                    fontSize: 13
                  }}>
                    <span style={{ color: "var(--text)" }}>{name}</span>
                    <a href={`https://www.nquran.com/ar/${path}`} target="_blank" rel="noopener noreferrer"
                      style={{ color: "var(--sub)", textDecoration: "none" }}>{path}</a>
                  </div>
                ))}
              </InfoCard>

              <InfoCard>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--heading)", marginBottom: 10 }}>Comparison Pages (between narrators)</div>
                {[
                  ["Shu'bah vs Hafs", "view/16696"],
                  ["Al-Duri vs Al-Susi", "view/16698"],
                  ["Abu al-Harith vs Duri (Kisa'i)", "view/16694"],
                  ["Al-Bazzi vs Qunbul", "view/16692"],
                  ["Hisham vs Ibn Dhakwan", "view/16699"],
                  ["Ruways vs Rawh", "view/16700"]
                ].map(([name, path], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", padding: "5px 0",
                    borderBottom: i < 5 ? "1px solid var(--border)" : "none",
                    fontSize: 13
                  }}>
                    <span style={{ color: "var(--text)" }}>{name}</span>
                    <a href={`https://www.nquran.com/ar/${path}`} target="_blank" rel="noopener noreferrer"
                      style={{ color: "var(--sub)", textDecoration: "none" }}>{path}</a>
                  </div>
                ))}
              </InfoCard>

              <InfoCard style={{ background: "var(--accent-bg)", borderColor: "var(--accent)" }}>
                <p style={{ fontSize: 13, color: "var(--text)", margin: 0, lineHeight: 1.6 }}>
                  <strong>Verification status: 20/20 riwayat verified</strong> against nquran.com usul pages and comparison pages. All feature values (imalah, madd, hamzah, basmalah, sirat, idgham kabir, etc.) have been cross-referenced with primary sources.
                </p>
              </InfoCard>
            </div>
          )}
        </div>

        {/* Back to tool */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button onClick={onBack} style={{
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
