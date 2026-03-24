import { useState, useEffect } from "react";

// ── All 20 riwayat with their feature values ──────────────────────────
const RIWAYAT = [
  {
    name: "Hafs 'an 'Asim",
    qari: "'Asim ibn Abi al-Najud",
    rawi: "Hafs ibn Sulayman",
    region: "Most of the Muslim world — Saudi Arabia, Egypt, South/Southeast Asia, Turkey",
    traits: ["Maaliki with long Alif", "Short madd munfasil (2 harakaat)", "No imalah", "Clear hamzahs", "The most widely used riwayah globally"],
    color: "#66BB6A",
    imalah: "none", maaliki: "maaliki", madd: "short", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Warsh 'an Nafi'",
    qari: "Nafi' al-Madani",
    rawi: "'Uthman ibn Sa'id (Warsh)",
    region: "North Africa — Morocco, Algeria, parts of Libya, West Africa",
    traits: ["Taqlil (partial imalah) on Alifs", "Frequent tashil and ibdal of Hamzahs", "Thin Ra' in specific positions", "Long madd munfasil (up to 6 harakaat)", "Naql — transferring Hamzah's vowel to preceding letter"],
    color: "#FF7043",
    imalah: "partial", maaliki: "maaliki", madd: "long", basmalah: "always", hamzah: "softened", takbir: "no", sirat: "sad", ra: "thin", extraYa: "no"
  },
  {
    name: "Qalun 'an Nafi'",
    qari: "Nafi' al-Madani",
    rawi: "'Isa ibn Mina (Qalun)",
    region: "Libya, Tunisia, parts of Qatar",
    traits: ["Maliki (short)", "Short madd munfasil (2 harakaat)", "No imalah", "Same Qari' as Warsh but very different sound", "Silat Mim al-Jam' (connecting plural mim with a short vowel)"],
    color: "#66BB6A",
    imalah: "none", maaliki: "maliki", madd: "short", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Al-Duri 'an Abu 'Amr",
    qari: "Abu 'Amr ibn al-'Ala'",
    rawi: "Hafs ibn 'Umar al-Duri",
    region: "Sudan, parts of West Africa, Somalia",
    traits: ["Partial imalah (taqlil) on some Alifs", "Idgham kabir — merging identical adjacent letters", "Some hamzah softening", "Medium madd munfasil (4-5 harakaat)"],
    color: "#42A5F5",
    imalah: "partial", maaliki: "maliki", madd: "medium", basmalah: "always", hamzah: "softened", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Al-Susi 'an Abu 'Amr",
    qari: "Abu 'Amr ibn al-'Ala'",
    rawi: "Abu Shu'ayb al-Susi",
    region: "Historically Basra (Iraq)",
    traits: ["Partial imalah (taqlil) on specific words", "Idgham kabir — key distinguishing feature", "Less hamzah changes than Al-Duri", "Medium madd munfasil"],
    color: "#26A69A",
    imalah: "partial", maaliki: "maliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Khalaf 'an Hamzah",
    qari: "Hamzah al-Zayyat",
    rawi: "Khalaf ibn Hisham",
    region: "Historically Kufa (Iraq)",
    traits: ["Heavy imalah on many words", "Ishmam on al-Sirat", "No basmalah option between surahs", "Sakt (pause) on certain hamzahs when stopping"],
    color: "#E8B931",
    imalah: "heavy", maaliki: "maaliki", madd: "long", basmalah: "not_always", hamzah: "clear", takbir: "no", sirat: "ishmam", ra: "standard", extraYa: "no"
  },
  {
    name: "Khallad 'an Hamzah",
    qari: "Hamzah al-Zayyat",
    rawi: "Khallad ibn Khalid",
    region: "Historically Kufa (Iraq)",
    traits: ["Heavy imalah on many words", "Pure Sad in al-Sirat", "No basmalah option between surahs", "Long madd munfasil (6 harakaat)"],
    color: "#4CAF50",
    imalah: "heavy", maaliki: "maaliki", madd: "long", basmalah: "not_always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Abu al-Harith 'an Al-Kisa'i",
    qari: "'Ali ibn Hamzah al-Kisa'i",
    rawi: "Al-Layth ibn Khalid (Abu al-Harith)",
    region: "Historically Kufa (Iraq)",
    traits: ["Heavy imalah on ha' al-ta'nith and Alifs", "Basmalah between surahs", "Idgham of specific letter pairs", "Known for elegant grammatical tradition"],
    color: "#5C6BC0",
    imalah: "heavy", maaliki: "maaliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Al-Duri 'an Al-Kisa'i",
    qari: "'Ali ibn Hamzah al-Kisa'i",
    rawi: "Hafs ibn 'Umar al-Duri",
    region: "Historically Kufa (Iraq)",
    traits: ["Heavy imalah — even broader than Abu al-Harith", "Basmalah between surahs", "Same Duri who also narrates from Abu 'Amr", "Extensive imalah system"],
    color: "#AB47BC",
    imalah: "heavy", maaliki: "maaliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Hisham 'an Ibn 'Amir",
    qari: "'Abdullah ibn 'Amir al-Dimashqi",
    rawi: "Hisham ibn 'Ammar",
    region: "Historically Damascus (Syria)",
    traits: ["Maliki (short)", "Medium madd munfasil", "Tashil on some double-Hamzahs", "Unique word choices in several ayat", "Ha' al-Kinayah treated distinctly"],
    color: "#FFA726",
    imalah: "none", maaliki: "maliki", madd: "medium", basmalah: "always", hamzah: "softened", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Ibn Dhakwan 'an Ibn 'Amir",
    qari: "'Abdullah ibn 'Amir al-Dimashqi",
    rawi: "'Abdullah ibn Ahmad (Ibn Dhakwan)",
    region: "Historically Damascus (Syria)",
    traits: ["Maliki (short)", "Medium madd munfasil", "Clear Hamzahs — no tashil", "Distinctive word forms shared with Hisham", "Closer to Hafs in many rulings"],
    color: "#42A5F5",
    imalah: "none", maaliki: "maliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Al-Bazzi 'an Ibn Kathir",
    qari: "'Abdullah ibn Kathir al-Makki",
    rawi: "Ahmad ibn Muhammad (Al-Bazzi)",
    region: "Historically Mecca",
    traits: ["Maliki (short)", "Takbir between surahs in Juz' 'Amma", "Standard Sad in al-Sirat", "Distinctive hamzah handling in some words"],
    color: "#42A5F5",
    imalah: "none", maaliki: "maliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "yes", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Qunbul 'an Ibn Kathir",
    qari: "'Abdullah ibn Kathir al-Makki",
    rawi: "Muhammad ibn 'Abd al-Rahman (Qunbul)",
    region: "Historically Mecca",
    traits: ["Maliki (short)", "Takbir between surahs in Juz' 'Amma", "al-Sirat with Sin", "Connects Hamzahs (reads certain double-hamzahs differently)"],
    color: "#FFEE58",
    imalah: "none", maaliki: "maliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "yes", sirat: "sin", ra: "standard", extraYa: "no"
  },
  {
    name: "Shu'bah 'an 'Asim",
    qari: "'Asim ibn Abi al-Najud",
    rawi: "Shu'bah ibn 'Ayyash",
    region: "Historically Kufa (Iraq) — less common today",
    traits: ["Maaliki with long Alif", "Medium madd munfasil (4 harakaat)", "No imalah", "Same Qari' as Hafs but different transmission", "Different word choices in several ayat"],
    color: "#FFA726",
    imalah: "none", maaliki: "maaliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Abu Ja'far al-Madani",
    qari: "Yazid ibn al-Qa'qa' (Abu Ja'far)",
    rawi: "Ibn Wardan or Ibn Jammaz",
    region: "Historically Medina",
    traits: ["Maliki (short)", "Short madd munfasil", "Tashil of many Hamzahs", "One of the 3 additional Qurra' (making 10)", "Hamzah treatment similar to but distinct from Warsh"],
    color: "#CE93D8",
    imalah: "none", maaliki: "maliki", madd: "short", basmalah: "always", hamzah: "softened", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Ya'qub al-Hadrami (Ruways)",
    qari: "Ya'qub ibn Ishaq",
    rawi: "Ruways",
    region: "Historically Basra (Iraq)",
    traits: ["Maaliki with long Alif", "Additional Ya' on certain words", "Medium madd", "One of the 10 Qurra'", "Distinctive word-endings"],
    color: "#7E57C2",
    imalah: "none", maaliki: "maaliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "yes"
  },
  {
    name: "Ya'qub al-Hadrami (Rawh)",
    qari: "Ya'qub ibn Ishaq",
    rawi: "Rawh",
    region: "Historically Basra (Iraq)",
    traits: ["Maaliki with long Alif", "Additional Ya' on certain words", "Medium madd", "One of the 10 Qurra'", "Distinctive word-endings"],
    color: "#9575CD",
    imalah: "none", maaliki: "maaliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "yes"
  },
  {
    name: "Khalaf al-'Ashir (Ishaq)",
    qari: "Khalaf ibn Hisham al-Bazzar",
    rawi: "Ishaq",
    region: "Historically Baghdad (Iraq)",
    traits: ["Maaliki with long Alif", "Long madd munfasil", "The 10th Qari'", "Distinct from Khalaf 'an Hamzah", "No imalah (unlike his narration from Hamzah)"],
    color: "#EF5350",
    imalah: "none", maaliki: "maaliki", madd: "long", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Khalaf al-'Ashir (Idris)",
    qari: "Khalaf ibn Hisham al-Bazzar",
    rawi: "Idris",
    region: "Historically Baghdad (Iraq)",
    traits: ["Maaliki with long Alif", "Long madd munfasil", "The 10th Qari'", "Distinct from Khalaf 'an Hamzah", "No imalah"],
    color: "#E57373",
    imalah: "none", maaliki: "maaliki", madd: "long", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  },
  {
    name: "Abu 'Amr al-Basri (via other turuq)",
    qari: "Abu 'Amr ibn al-'Ala'",
    rawi: "Various turuq",
    region: "Historically Basra (Iraq)",
    traits: ["Partial imalah possible", "Idgham kabir in some turuq", "Medium madd", "Academic / specialized recitation circles"],
    color: "#78909C",
    imalah: "partial", maaliki: "maliki", madd: "medium", basmalah: "always", hamzah: "clear", takbir: "no", sirat: "sad", ra: "standard", extraYa: "no"
  }
];

// ── Questions ordered by most recognizable features ───────────────────
const QUESTIONS = [
  {
    id: "imalah",
    question: "Do you hear Imalah?",
    description: "Imalah is when the Alif sound (\"ah\") is tilted toward an \"eh\" sound. Listen carefully to words ending with Ha' al-Ta'nith or words like \u0647\u064F\u062F\u064B\u0649\u060C \u0645\u064F\u0648\u0633\u064E\u0649\u060C \u0639\u0650\u064A\u0633\u064E\u0649.",
    example: "e.g. \u0647\u064F\u062F\u064B\u0649 sounds like \"hude\" instead of \"huda\"",
    feature: "imalah",
    options: [
      { label: "Yes \u2014 heavy & obvious tilt", value: "heavy" },
      { label: "Partial \u2014 subtle tilt (Taqlil)", value: "partial" },
      { label: "No \u2014 no tilting at all", value: "none" }
    ]
  },
  {
    id: "maaliki",
    question: "How is \u0645\u064E\u0627\u0644\u0650\u0643\u0650 \u064A\u064E\u0648\u0652\u0645\u0650 \u0627\u0644\u062F\u0651\u0650\u064A\u0646\u0650 read in Al-Fatihah?",
    description: "Listen to the 4th ayah of Al-Fatihah. Is it \u0645\u064E\u0627\u0644\u0650\u0643\u0650 (Maaliki \u2014 with a long Alif) or \u0645\u064E\u0644\u0650\u0643\u0650 (Maliki \u2014 short, no Alif)?",
    example: "Maaaaaliki vs. Maliki",
    feature: "maaliki",
    options: [
      { label: "\u0645\u064E\u0627\u0644\u0650\u0643\u0650 \u2014 Maaliki (long Alif)", value: "maaliki" },
      { label: "\u0645\u064E\u0644\u0650\u0643\u0650 \u2014 Maliki (short, no Alif)", value: "maliki" }
    ]
  },
  {
    id: "madd",
    question: "How long is the Madd Munfasil?",
    description: "Madd Munfasil occurs when a madd letter (\u0627 \u0648 \u064A) is followed by a Hamzah in the next word, like \u0641\u0650\u064A \u0623\u064E\u0646\u0641\u064F\u0633\u0650\u0643\u064F\u0645\u0652. Count the beats.",
    example: "2 beats = short (qasr), 4 = medium, 5-6 = long",
    feature: "madd",
    options: [
      { label: "Short \u2014 2 beats (Qasr)", value: "short" },
      { label: "Medium \u2014 4 beats", value: "medium" },
      { label: "Long \u2014 5 or 6 beats", value: "long" }
    ]
  },
  {
    id: "basmalah",
    question: "Is Basmalah always recited between surahs?",
    description: "Between any two consecutive surahs (other than Al-Anfal \u2192 At-Tawbah), does the reciter always say \u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645?",
    example: "Listen at a surah transition",
    feature: "basmalah",
    options: [
      { label: "Yes \u2014 Basmalah is always recited", value: "always" },
      { label: "Not always \u2014 sometimes silence or connection", value: "not_always" }
    ]
  },
  {
    id: "hamzah",
    question: "How are Hamzahs (\u0621) treated?",
    description: "Listen for the Hamzah. Is it always pronounced clearly, or does it sometimes get softened (tashil), dropped, or replaced by a vowel sound (ibdal)?",
    example: "e.g. \u064A\u064F\u0624\u0652\u0645\u0650\u0646\u064F\u0648\u0646\u064E becomes \u064A\u064F\u0648\u0645\u0650\u0646\u064F\u0648\u0646\u064E",
    feature: "hamzah",
    options: [
      { label: "Clear \u2014 all Hamzahs pronounced", value: "clear" },
      { label: "Softened \u2014 frequent tashil or ibdal", value: "softened" }
    ]
  },
  {
    id: "takbir",
    question: "Is there Takbir (\u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631) between surahs at the end of the Qur'an?",
    description: "From Surat al-Duha (93) to Surat al-Nas (114), does the reciter say \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 between surahs?",
    example: "...ending of surah \u2192 \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 \u2192 \u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u2192 next surah",
    feature: "takbir",
    options: [
      { label: "Yes \u2014 Takbir between surahs", value: "yes" },
      { label: "No \u2014 no Takbir", value: "no" }
    ]
  },
  {
    id: "sirat",
    question: "How is \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E pronounced in Al-Fatihah?",
    description: "Does \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E have a pure Sad, a Sin, or an Ishmam (Sad mixed with a buzzing Zay sound)?",
    example: "\u0627\u0644\u0633\u0651\u0650\u0631\u064E\u0627\u0637\u064E (Sin) vs \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E (Sad) vs Ishmam (buzzing)",
    feature: "sirat",
    options: [
      { label: "Pure Sad \u2014 \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E", value: "sad" },
      { label: "Sin \u2014 \u0627\u0644\u0633\u0651\u0650\u0631\u064E\u0627\u0637\u064E", value: "sin" },
      { label: "Ishmam \u2014 Sad mixed with Zay buzzing", value: "ishmam" }
    ]
  },
  {
    id: "ra",
    question: "How is the letter Ra' (\u0631) treated?",
    description: "In words like \u0641\u0650\u0631\u0652\u0639\u064E\u0648\u0652\u0646\u064E, does the Ra' sound noticeably thin/light (tarqiq), or is it standard/thick (tafkhim)?",
    example: "Warsh: Ra' in \u0641\u0631\u0639\u0648\u0646 is thin; Hafs: it is thick",
    feature: "ra",
    options: [
      { label: "Noticeably thin/light", value: "thin" },
      { label: "Standard/thick", value: "standard" }
    ]
  },
  {
    id: "extraYa",
    question: "Do you hear extra Ya' (\u064A) sounds at the end of certain words?",
    description: "Ya'qub's reading adds a Ya' at the end of certain words that other qurra' don't have.",
    example: "e.g. \u0641\u064E\u0623\u064E\u062E\u0652\u0634\u064E\u0648\u0652\u0646\u0650 becomes \u0641\u0623\u062E\u0634\u0648\u0646\u064A",
    feature: "extraYa",
    options: [
      { label: "Yes \u2014 extra Ya' sounds", value: "yes" },
      { label: "No \u2014 standard word endings", value: "no" }
    ]
  }
];

// ── Components ────────────────────────────────────────────────────────

function ResultCard({ result, onReset }) {
  return (
    <div style={{
      animation: "fadeSlideUp 0.6s ease-out",
      background: `linear-gradient(135deg, ${result.color}18, ${result.color}08)`,
      border: `2px solid ${result.color}55`,
      borderRadius: 16,
      padding: 28,
      maxWidth: 560,
      margin: "0 auto"
    }}>
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: result.color,
        marginBottom: 8,
        fontFamily: "'DM Sans', sans-serif"
      }}>Identified Riwayah</div>

      <h2 style={{
        fontSize: 26,
        fontWeight: 800,
        color: "var(--heading)",
        margin: "0 0 6px 0",
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: 1.2
      }}>{result.name}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 18 }}>
        <div style={{ fontSize: 14, color: "var(--sub)" }}>
          <span style={{ fontWeight: 600, color: "var(--text)" }}>Qari':</span> {result.qari}
        </div>
        <div style={{ fontSize: 14, color: "var(--sub)" }}>
          <span style={{ fontWeight: 600, color: "var(--text)" }}>Rawi:</span> {result.rawi}
        </div>
        <div style={{ fontSize: 14, color: "var(--sub)" }}>
          <span style={{ fontWeight: 600, color: "var(--text)" }}>Region:</span> {result.region}
        </div>
      </div>

      <div style={{
        background: "var(--card-bg)",
        borderRadius: 10,
        padding: 16,
        marginBottom: 20
      }}>
        <div style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--sub)",
          marginBottom: 10,
          fontFamily: "'DM Sans', sans-serif"
        }}>Key Traits</div>
        {result.traits.map((t, i) => (
          <div key={i} style={{
            fontSize: 14,
            color: "var(--text)",
            padding: "5px 0",
            borderBottom: i < result.traits.length - 1 ? "1px solid var(--border)" : "none",
            lineHeight: 1.5
          }}>
            <span style={{ color: result.color, marginRight: 8, fontWeight: 700 }}>&rsaquo;</span>{t}
          </div>
        ))}
      </div>

      <button onClick={onReset} style={{
        width: "100%",
        padding: "12px 20px",
        background: result.color,
        color: "#fff",
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
        Start Over
      </button>
    </div>
  );
}

function CandidateList({ candidates, onReset }) {
  return (
    <div style={{
      animation: "fadeSlideUp 0.6s ease-out",
      maxWidth: 560,
      margin: "0 auto"
    }}>
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: 8,
        fontFamily: "'DM Sans', sans-serif"
      }}>Possible Matches ({candidates.length})</div>

      <p style={{
        fontSize: 14,
        color: "var(--sub)",
        margin: "0 0 16px 0",
        lineHeight: 1.5
      }}>
        Based on your answers, these riwayat are still possible. Try listening again for the features you skipped to narrow it down further.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {candidates.map((r, i) => (
          <div key={i} style={{
            background: `linear-gradient(135deg, ${r.color}12, ${r.color}06)`,
            border: `1.5px solid ${r.color}40`,
            borderRadius: 12,
            padding: "16px 18px"
          }}>
            <div style={{
              fontSize: 17,
              fontWeight: 700,
              color: "var(--heading)",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: 4
            }}>{r.name}</div>
            <div style={{ fontSize: 13, color: "var(--sub)", marginBottom: 8 }}>
              {r.qari} &middot; {r.region}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {r.traits.slice(0, 3).map((t, j) => (
                <span key={j} style={{
                  fontSize: 11,
                  color: r.color,
                  background: `${r.color}15`,
                  padding: "3px 8px",
                  borderRadius: 6,
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif"
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={onReset} style={{
        width: "100%",
        padding: "12px 20px",
        background: "var(--accent)",
        color: "#fff",
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
        Start Over
      </button>
    </div>
  );
}

function RemainingBadge({ candidates }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginBottom: 16, textAlign: "center" }}>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 12px",
          background: "var(--accent-bg)",
          border: "1.5px solid var(--accent)",
          borderRadius: 20,
          cursor: "pointer",
          fontSize: 13,
          color: "var(--accent)",
          fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.2s ease"
        }}
      >
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "var(--accent)",
          color: "#fff",
          fontSize: 12,
          fontWeight: 700
        }}>{candidates.length}</span>
        remaining {expanded ? "\u25B4" : "\u25BE"}
      </button>

      {expanded && (
        <div style={{
          marginTop: 8,
          background: "var(--card-bg)",
          border: "1.5px solid var(--border)",
          borderRadius: 10,
          padding: "8px 0",
          maxHeight: 200,
          overflowY: "auto"
        }}>
          {candidates.map((r, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderBottom: i < candidates.length - 1 ? "1px solid var(--border)" : "none"
            }}>
              <span style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: r.color,
                flexShrink: 0
              }} />
              <span style={{
                fontSize: 13,
                color: "var(--text)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500
              }}>{r.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function QuestionCard({ question, onSelect, onSkip, questionIndex, totalQuestions, canGoBack, onBack, candidates }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [question.id]);

  return (
    <div style={{
      animation: "fadeSlideUp 0.5s ease-out",
      maxWidth: 560,
      margin: "0 auto"
    }}>
      {/* Progress */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <div style={{
          flex: 1,
          height: 4,
          background: "var(--border)",
          borderRadius: 2,
          overflow: "hidden"
        }}>
          <div style={{
            width: `${((questionIndex) / totalQuestions) * 100}%`,
            height: "100%",
            background: "linear-gradient(90deg, #4A90D9, #7C5CFC)",
            borderRadius: 2,
            transition: "width 0.4s ease"
          }} />
        </div>
        <span style={{ fontSize: 12, color: "var(--sub)", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
          {questionIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Remaining candidates */}
      <RemainingBadge candidates={candidates} />

      {/* Question */}
      <h2 style={{
        fontSize: 22,
        fontWeight: 800,
        color: "var(--heading)",
        margin: "0 0 8px 0",
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: 1.3
      }}>{question.question}</h2>

      <p style={{
        fontSize: 14,
        color: "var(--sub)",
        margin: "0 0 6px 0",
        lineHeight: 1.6
      }}>{question.description}</p>

      {question.example && (
        <div style={{
          fontSize: 13,
          color: "var(--accent)",
          fontStyle: "italic",
          marginBottom: 18,
          padding: "8px 12px",
          background: "var(--accent-bg)",
          borderRadius: 8,
          borderLeft: "3px solid var(--accent)"
        }}>{question.example}</div>
      )}

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 10 }}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => {
              setSelected(i);
              setTimeout(() => onSelect(opt.value), 300);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 16px",
              background: selected === i ? "var(--accent-bg)" : "var(--card-bg)",
              border: selected === i ? "2px solid var(--accent)" : "2px solid var(--border)",
              borderRadius: 12,
              cursor: "pointer",
              textAlign: "left",
              fontSize: 15,
              color: "var(--text)",
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s ease",
              transform: selected === i ? "scale(0.98)" : "scale(1)"
            }}
            onMouseEnter={e => {
              if (selected !== i) {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "var(--hover-bg)";
              }
            }}
            onMouseLeave={e => {
              if (selected !== i) {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--card-bg)";
              }
            }}
          >
            <span>{opt.label}</span>
          </button>
        ))}
      </div>

      {/* I'm not sure */}
      <button
        onClick={onSkip}
        style={{
          width: "100%",
          padding: "10px 16px",
          background: "none",
          border: "1.5px dashed var(--border)",
          borderRadius: 10,
          cursor: "pointer",
          textAlign: "center",
          fontSize: 14,
          color: "var(--sub)",
          fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.2s ease",
          marginBottom: 12
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "var(--sub)";
          e.currentTarget.style.color = "var(--text)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.color = "var(--sub)";
        }}
      >
        I'm not sure &mdash; skip this question
      </button>

      {/* Back */}
      {canGoBack && (
        <button onClick={onBack} style={{
          background: "none",
          border: "none",
          color: "var(--sub)",
          fontSize: 13,
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          padding: "6px 0",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: 4
        }}
          onMouseEnter={e => e.target.style.color = "var(--text)"}
          onMouseLeave={e => e.target.style.color = "var(--sub)"}
        >
          &larr; Go back
        </button>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────

export default function RiwayatIdentifier() {
  const [started, setStarted] = useState(false);
  const [candidates, setCandidates] = useState(RIWAYAT);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [history, setHistory] = useState([]); // [{candidates, questionIndex}]
  const [finished, setFinished] = useState(false);

  // Find next relevant question starting from a given index
  const findNextQuestion = (startIndex, currentCandidates) => {
    for (let i = startIndex; i < QUESTIONS.length; i++) {
      const q = QUESTIONS[i];
      const values = new Set(currentCandidates.map(r => r[q.feature]));
      // Skip if all remaining candidates have the same value (question is irrelevant)
      if (values.size > 1) return i;
    }
    return -1; // no more relevant questions
  };

  // Advance to next question or finish
  const advance = (newCandidates, fromIndex) => {
    if (newCandidates.length <= 1) {
      setCandidates(newCandidates);
      setFinished(true);
      return;
    }
    const nextIdx = findNextQuestion(fromIndex + 1, newCandidates);
    if (nextIdx === -1) {
      setCandidates(newCandidates);
      setFinished(true);
    } else {
      setCandidates(newCandidates);
      setQuestionIndex(nextIdx);
    }
  };

  const handleSelect = (value) => {
    const q = QUESTIONS[questionIndex];
    const filtered = candidates.filter(r => r[q.feature] === value);
    setHistory(prev => [...prev, { candidates, questionIndex }]);
    advance(filtered.length > 0 ? filtered : candidates, questionIndex);
  };

  const handleSkip = () => {
    setHistory(prev => [...prev, { candidates, questionIndex }]);
    advance(candidates, questionIndex);
  };

  const handleBack = () => {
    const prev = [...history];
    const last = prev.pop();
    setHistory(prev);
    setCandidates(last.candidates);
    setQuestionIndex(last.questionIndex);
    setFinished(false);
  };

  const handleReset = () => {
    setCandidates(RIWAYAT);
    setQuestionIndex(findNextQuestion(0, RIWAYAT));
    setHistory([]);
    setFinished(false);
    setStarted(false);
  };

  // Initialize to first relevant question
  useEffect(() => {
    setQuestionIndex(findNextQuestion(0, RIWAYAT));
  }, []);

  const currentQuestion = QUESTIONS[questionIndex];

  return (
    <div className="riwayat-root" style={{
      "--heading": "#1a1a2e",
      "--text": "#2d2d44",
      "--sub": "#6b7094",
      "--border": "#e2e4ef",
      "--card-bg": "#f5f6fb",
      "--hover-bg": "#eef0f8",
      "--accent": "#5C6BC0",
      "--accent-bg": "#5C6BC015",
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      padding: "32px 20px",
      background: "linear-gradient(180deg, #fafbff 0%, #f0f1f8 100%)",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&family=Amiri:wght@400;700&display=swap');
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .riwayat-root { padding: 20px 14px !important; }
          .hero-arabic { font-size: 32px !important; }
          .hero-title { font-size: 20px !important; }
          .hero-card { padding: 16px 16px !important; }
          .hero-card p { font-size: 14px !important; }
          .hero-btn { padding: 12px 28px !important; font-size: 15px !important; }
          .compact-arabic { font-size: 20px !important; }
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --heading: #e8eaf6;
            --text: #c5cae9;
            --sub: #9499b7;
            --border: #2a2d45;
            --card-bg: #1e2038;
            --hover-bg: #252845;
            --accent: #7C8ADB;
            --accent-bg: #7C8ADB18;
          }
        }
      `}</style>

      {/* Hero / Header */}
      {!started ? (
        <div style={{
          textAlign: "center",
          maxWidth: 520,
          margin: "0 auto",
          animation: "fadeSlideUp 0.5s ease-out",
          paddingTop: 40
        }}>
          <div className="hero-arabic" style={{
            fontSize: 42,
            fontFamily: "'Amiri', serif",
            fontWeight: 700,
            color: "var(--heading)",
            marginBottom: 6,
            lineHeight: 1.4,
            direction: "rtl"
          }}>{"\u0628\u0650\u0623\u064E\u064A\u0651\u0650 \u0631\u0650\u0648\u064E\u0627\u064A\u064E\u0629\u064D\u061F"}</div>
          <h1 className="hero-title" style={{
            fontSize: 24,
            fontWeight: 800,
            color: "var(--heading)",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em"
          }}>Riwayah Identifier</h1>

          <div className="hero-card" style={{
            background: "var(--card-bg)",
            borderRadius: 14,
            padding: "20px 24px",
            textAlign: "left",
            marginBottom: 24,
            border: "1.5px solid var(--border)"
          }}>
            <p style={{
              fontSize: 15,
              color: "var(--text)",
              margin: "0 0 12px 0",
              lineHeight: 1.7
            }}>
              The Qur'an was revealed in one text, but it has been passed down through <strong>multiple chains of recitation</strong> called <em>riwayat</em>. Each riwayah sounds slightly different &mdash; a vowel might be longer, a letter pronounced differently, or a word read with a subtle tilt in the voice.
            </p>
            <p style={{
              fontSize: 15,
              color: "var(--text)",
              margin: "0 0 12px 0",
              lineHeight: 1.7
            }}>
              Sometimes the differences are in pronunciation &mdash; a vowel held longer, a letter softened &mdash; and sometimes even the words themselves differ slightly. All of these variations go back to authentic transmission chains from the Prophet &#xFDFA;.
            </p>
            <p style={{
              fontSize: 14,
              color: "var(--sub)",
              margin: 0,
              lineHeight: 1.6
            }}>
              There are <strong>10 recognized readers</strong> (qurra'), each with <strong>2 narrators</strong> (ruwat), giving us <strong>20 riwayat</strong> in total. This tool helps you figure out which one you're listening to.
            </p>
          </div>

          <button
            className="hero-btn"
            onClick={() => setStarted(true)}
            style={{
              padding: "14px 36px",
              background: "linear-gradient(135deg, #5C6BC0, #7C5CFC)",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "opacity 0.2s, transform 0.2s",
              boxShadow: "0 4px 14px rgba(92, 107, 192, 0.35)"
            }}
            onMouseEnter={e => { e.target.style.opacity = "0.9"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
          >
            Start Identifying
          </button>
        </div>
      ) : (
        <>
          {/* Compact header during quiz — clickable to go home */}
          <div
            onClick={handleReset}
            style={{
              textAlign: "center",
              maxWidth: 560,
              margin: "0 auto 24px",
              animation: "fadeSlideUp 0.3s ease-out",
              cursor: "pointer"
            }}
          >
            <div className="compact-arabic" style={{
              fontSize: 24,
              fontFamily: "'Amiri', serif",
              fontWeight: 700,
              color: "var(--heading)",
              marginBottom: 2,
              direction: "rtl"
            }}>{"\u0628\u0650\u0623\u064E\u064A\u0651\u0650 \u0631\u0650\u0648\u064E\u0627\u064A\u064E\u0629\u064D\u061F"}</div>
            <p style={{
              fontSize: 13,
              color: "var(--sub)",
              margin: 0
            }}>Riwayah Identifier</p>
          </div>

          {/* Content */}
          {finished ? (
        candidates.length === 1 ? (
          <ResultCard result={candidates[0]} onReset={handleReset} />
        ) : candidates.length === 0 ? (
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto", animation: "fadeSlideUp 0.5s ease-out" }}>
            <p style={{ fontSize: 16, color: "var(--sub)", marginBottom: 16 }}>No exact match found. Try again and listen carefully to each feature.</p>
            <button onClick={handleReset} style={{
              padding: "12px 24px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: 10,
              fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif"
            }}>Start Over</button>
          </div>
        ) : (
          <CandidateList candidates={candidates} onReset={handleReset} />
        )
      ) : currentQuestion ? (
        <QuestionCard
          key={`${questionIndex}-${candidates.length}`}
          question={currentQuestion}
          onSelect={handleSelect}
          onSkip={handleSkip}
          questionIndex={questionIndex}
          totalQuestions={QUESTIONS.length}
          canGoBack={history.length > 0}
          onBack={handleBack}
          candidates={candidates}
        />
      ) : null}
        </>
      )}

      {/* Footer */}
      <div style={{
        textAlign: "center",
        marginTop: 40,
        fontSize: 11,
        color: "var(--sub)",
        opacity: 0.6,
        maxWidth: 400,
        margin: "40px auto 0",
        lineHeight: 1.5
      }}>
        Covers the major riwayat from the 10 canonical Qira'at. Some rarer turuq or sub-transmissions may not be fully distinguished.
      </div>
    </div>
  );
}
