// ── Riwayat Identifier — Translations ─────────────────────────────────
// English and Arabic translations for the full app.

const translations = {
  // ═══════════════════════════════════════════════════════════════════════
  // ENGLISH
  // ═══════════════════════════════════════════════════════════════════════
  en: {
    // ── Common / Shared UI ──────────────────────────────────────────────
    common: {
      home: "Home",
      guide: "Guide",
      docs: "Docs",
      startOver: "Start Over",
      goBack: "← Go back",
      backToIdentifier: "Back to Identifier",
      switchLightMode: "Switch to light mode",
      switchDarkMode: "Switch to dark mode",
      switchToArabic: "التبديل إلى العربية",
      switchToEnglish: "Switch to English",
    },

    // ── Identifier Page ─────────────────────────────────────────────────
    identifier: {
      heroTitle: "Riwayah Identifier",
      heroP1: "The Qur'an is one Scripture, but it was revealed in multiple modes called ahruf, a divine concession to ease recitation for the ummah. Over time, these were preserved and systematized into recognized readings called qira'at, each transmitted through unbroken chains back to the Prophet \uFDFA.",
      heroP2: "Sometimes the differences are in pronunciation, like a vowel held longer or a letter softened, and sometimes even the words themselves differ slightly. All of these variations go back to authentic chains of transmission from the Prophet \uFDFA.",
      heroP3: "There are 10 recognized readers (qurra'), each with 2 narrators (ruwat), giving us 20 riwayat (transmissions) in total. This tool helps you figure out which one you're listening to.",
      startIdentifying: "Start Identifying",
      learnQiraat: "Learn about the Qira'at",
      identifiedRiwayah: "Identified Riwayah",
      qari: "Qari':",
      rawi: "Rawi:",
      region: "Region:",
      keyTraits: "Key Traits",
      possibleMatches: "Possible Matches",
      candidateDesc: "Based on your answers, these riwayat are still possible. Try listening again for the features you skipped to narrow it down further.",
      noMatch: "No exact match found. Try again and listen carefully to each feature.",
      narrowed: "% narrowed",
      remaining: "remaining",
      skipQuestion: "I'm not sure, skip this question",
      footer: "Covers the major riwayat from the 10 canonical Qira'at. Some rarer turuq or sub-transmissions may not be fully distinguished.",
      builtBy: "Built by Wasique Iqbal",
    },

    // ── Questions ───────────────────────────────────────────────────────
    questions: {
      imalah: {
        question: "Do you hear Imalah?",
        description: "Imalah is when the Alif sound (\"ah\") is tilted toward an \"eh\" sound. Listen carefully to words ending with Ha' al-Ta'nith or words like \u0647\u064F\u062F\u064B\u0649\u060C \u0645\u064F\u0648\u0633\u064E\u0649\u060C \u0639\u0650\u064A\u0633\u064E\u0649.",
        example: "e.g. \u0647\u064F\u062F\u064B\u0649 sounds like \"hude\" instead of \"huda\"",
        options: {
          heavy: "Yes — heavy & obvious tilt",
          partial: "Partial — subtle tilt (Taqlil)",
          none: "No — no tilting at all"
        }
      },
      maaliki: {
        question: "How is \u0645\u064E\u0627\u0644\u0650\u0643\u0650 \u064A\u064E\u0648\u0652\u0645\u0650 \u0627\u0644\u062F\u0651\u0650\u064A\u0646\u0650 read in Al-Fatihah?",
        description: "Listen to the 4th ayah of Al-Fatihah. Is it \u0645\u064E\u0627\u0644\u0650\u0643\u0650 (Maaliki — with a long Alif) or \u0645\u064E\u0644\u0650\u0643\u0650 (Maliki — short, no Alif)?",
        example: "Maaaaaliki vs. Maliki",
        options: {
          maaliki: "\u0645\u064E\u0627\u0644\u0650\u0643\u0650 — Maaliki (long Alif)",
          maliki: "\u0645\u064E\u0644\u0650\u0643\u0650 — Maliki (short, no Alif)"
        }
      },
      madd: {
        question: "How long is the Madd Munfasil?",
        description: "Madd Munfasil occurs when a madd letter (\u0627 \u0648 \u064A) is followed by a Hamzah in the next word, like \u0641\u0650\u064A \u0623\u064E\u0646\u0641\u064F\u0633\u0650\u0643\u064F\u0645\u0652. Count the beats.",
        example: "2 beats = short (qasr), 4 = medium, 5-6 = long",
        options: {
          short: "Short — 2 beats (Qasr)",
          medium: "Medium — 4 beats",
          long: "Long — 5 or 6 beats"
        }
      },
      basmalah: {
        question: "Is Basmalah always recited between surahs?",
        description: "Between any two consecutive surahs (other than Al-Anfal → At-Tawbah), does the reciter always say \u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645?",
        example: "Listen at a surah transition",
        options: {
          always: "Yes — Basmalah is always recited",
          not_always: "Not always — sometimes silence or connection"
        }
      },
      hamzah: {
        question: "How are Hamzahs (\u0621) treated?",
        description: "Listen for the Hamzah. Is it always pronounced clearly, or does it sometimes get softened (tashil), dropped, or replaced by a vowel sound (ibdal)?",
        example: "e.g. \u064A\u064F\u0624\u0652\u0645\u0650\u0646\u064F\u0648\u0646\u064E becomes \u064A\u064F\u0648\u0645\u0650\u0646\u064F\u0648\u0646\u064E",
        options: {
          clear: "Clear — all Hamzahs pronounced",
          softened: "Softened — frequent tashil or ibdal"
        }
      },
      takbir: {
        question: "Is there Takbir (\u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631) between surahs at the end of the Qur'an?",
        description: "From Surat al-Duha (93) to Surat al-Nas (114), does the reciter say \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 between surahs?",
        example: "...ending of surah → \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 → \u0628\u0633\u0645 \u0627\u0644\u0644\u0647 → next surah",
        options: {
          yes: "Yes — Takbir between surahs",
          no: "No — no Takbir"
        }
      },
      sirat: {
        question: "How is \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E pronounced in Al-Fatihah?",
        description: "Does \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E have a pure Sad, a Sin, or an Ishmam (Sad mixed with a buzzing Zay sound)?",
        example: "\u0627\u0644\u0633\u0651\u0650\u0631\u064E\u0627\u0637\u064E (Sin) vs \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E (Sad) vs Ishmam (buzzing)",
        options: {
          sad: "Pure Sad — \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E",
          sin: "Sin — \u0627\u0644\u0633\u0651\u0650\u0631\u064E\u0627\u0637\u064E",
          ishmam: "Ishmam — Sad mixed with Zay buzzing"
        }
      },
      ra: {
        question: "How is the letter Ra' (\u0631) treated?",
        description: "In words like \u0641\u0650\u0631\u0652\u0639\u064E\u0648\u0652\u0646\u064E, does the Ra' sound noticeably thin/light (tarqiq), or is it standard/thick (tafkhim)?",
        example: "Warsh: Ra' in \u0641\u0631\u0639\u0648\u0646 is thin; Hafs: it is thick",
        options: {
          thin: "Noticeably thin/light",
          standard: "Standard/thick"
        }
      },
      extraYa: {
        question: "Do you hear extra Ya' (\u064A) sounds at the end of certain words?",
        description: "Ya'qub's reading adds a Ya' at the end of certain words that other qurra' don't have.",
        example: "e.g. \u0641\u064E\u0623\u064E\u062E\u0652\u0634\u064E\u0648\u0652\u0646\u0650 becomes \u0641\u0623\u062E\u0634\u0648\u0646\u064A",
        options: {
          yes: "Yes — extra Ya' sounds",
          no: "No — standard word endings"
        }
      },
      imalahScope: {
        question: "How extensive is the imalah?",
        description: "Some readings apply imalah broadly to many words (including words like \u0623\u064E\u0646\u064E\u0627 and rare positions), while others limit it to the standard positions (ha' al-ta'nith, specific Alifs).",
        example: "Broad = imalah on almost every eligible word; Standard = only the common positions",
        options: {
          broad: "Broad — imalah on many extra words",
          standard: "Standard — common positions only",
          none: "None"
        }
      },
      idghamKabir: {
        question: "Do you hear Idgham Kabir (merging of identical adjacent letters across words)?",
        description: "Idgham kabir is when two identical or similar letters at a word boundary merge into one. For example, in \u064A\u064E\u0639\u0644\u064E\u0645\u064F \u0645\u064E\u0627, the two mims merge seamlessly.",
        example: "The letters flow together instead of being pronounced separately",
        options: {
          yes: "Yes — letters merge across words",
          no: "No — each letter pronounced separately"
        }
      },
      haKinayah: {
        question: "How is the Ha' al-Kinayah (\u0647) treated at the end of words like \u0644\u064E\u0647\u064F and \u0628\u0650\u0647\u0650?",
        description: "Some readings connect the Ha' al-Kinayah with a short vowel (sila), making it sound like \u0644\u064E\u0647\u064F\u0648 or \u0628\u0650\u0647\u0650\u064A. Others keep it short without the connecting vowel.",
        example: "\u0644\u064E\u0647\u064F\u0648 (with sila) vs \u0644\u064E\u0647\u064F (without)",
        options: {
          with_sila: "With sila — connecting vowel added",
          standard: "Standard — short, no connecting vowel"
        }
      },
      silatMim: {
        question: "Is the Mim of plural pronouns (\u0647\u064F\u0645\u0652 / \u0643\u064F\u0645\u0652) connected with a vowel before the next word?",
        description: "Silat Mim al-Jam' means the plural Mim is extended with a short Waw or Ya' when followed by a voweled letter, e.g. \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u064F\u0648 instead of \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652.",
        example: "\u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u064F\u0648 \u0623\u064E\u0646\u0652\u0639\u064E\u0645\u0652\u062A\u064E (with sila) vs \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652 \u0623\u064E\u0646\u0652\u0639\u064E\u0645\u0652\u062A\u064E (no sila)",
        options: {
          yes: "Yes — always connected",
          optional: "Sometimes — optional connection",
          no: "No — standard (no sila)"
        }
      },
      waqfHamzah: {
        question: "When stopping on a word ending with Hamzah, is the Hamzah changed?",
        description: "Some readings alter the final Hamzah when pausing — replacing it with a vowel letter, softening it (tashil), or dropping it entirely. Others keep the Hamzah as-is.",
        example: "e.g. \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0621 → \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627 (Hamzah dropped at pause)",
        options: {
          full: "Yes — extensive changes to Hamzah at pause",
          final_only: "Some — only certain final Hamzahs",
          no: "No — Hamzah kept as-is"
        }
      }
    },

    // ── Guide page ──────────────────────────────────────────────────────
    guide: {
      title: "Riwayah Guide",
      usul: "Usul",
      farsh: "Farsh",
      usulPerRiwayah: "Usul per Riwayah",
      compare: "Compare",
      exitCompare: "Exit Compare",
      feature: "Feature",
      selected: "selected",
      usulIntro: "Systematic rules applied throughout the entire Quran that define how each riwayah sounds: imalah, madd lengths, hamzah treatment, basmalah, and more.",
      usulIntroLink: "To learn what each term means, check out the",
      docs: "docs",
      compareIntro: "Select up to 4 riwayat to compare their usul side by side.",
      farshTitle: "Key Farsh Differences",
      farshIntro: "Unlike usul, farsh differences apply to specific verses, not the entire Quran. Only about 0.9% of the Qur'an's words have an alternative reading, but that still amounts to hundreds of individual differences across all 20 riwayat. Below are select examples showing how these word-level variations add layers of meaning.",
      farshSource: "Source: Sh. Yousef Wahb, \"Can the Qur'an Be Recited in Different Ways?\" (Yaqeen Institute, 2022)",
      dataNote: "All data follows Tariq al-Tayyibah, verified against nquran.com and An-Nashr fi al-Qira'at al-'Ashr.",
      featureValues: {
        imalah: { none: "None", partial: "Partial (taqlil)", heavy: "Full (imalah kubra)" },
        maaliki: { maaliki: "Māliki (long Alif)", maliki: "Maliki (short)" },
        madd: { short: "Short (2 harakaat)", medium: "Medium (4 harakaat)", long: "Long (6 harakaat)" },
        basmalah: { always: "Always between surahs", not_always: "Options (wasl/sakt)" },
        hamzah: { clear: "Clear (tahqiq)", softened: "Eased (tashil/ibdal)" },
        takbir: { yes: "Yes (Juz' 'Amma)", no: "No" },
        sirat: { sad: "Sad (ص)", sin: "Sin (س)", ishmam: "Ishmam (ص+ز)" },
        ra: { standard: "Standard rules", thin: "Light (tarqiq)" },
        extraYa: { yes: "Yes", no: "No" },
        imalahScope: { none: "None", standard: "Standard positions", broad: "Extended (extra words)" },
        idghamKabir: { yes: "Yes", no: "No" },
        haKinayah: { standard: "Standard", with_sila: "With sila" },
        silatMim: { yes: "Yes", optional: "Optional (with khulf)", no: "No" },
        waqfHamzah: { full: "Takhfif on all hamzahs", final_only: "Final hamzahs only", no: "No" },
        sakt: { yes: "Yes (pause before hamzah)", no: "No", four_places: "4 specific places" },
        naql: { yes: "Yes (transfers hamzah vowel)", no: "No" },
        taghlithLam: { yes: "Yes (lam before sad/taa/zhaa)", no: "No" },
        maddMuttasil: { medium: "Medium (4-5 harakaat)", long: "Long (6 harakaat)" },
        maddBadl: { short: "Short (2 harakaat)", three_options: "3 options (2, 4, or 6)" },
        imalahHaTanith: { yes: "Yes (imalah kubra)", no: "No" }
      },
      farshExamples: [
        { ref: "Al-Fatihah 1:4", type: "Word form", majorityLatin: "Maliki (King)", majorityReaders: "Nafi', Ibn Kathir, Abu 'Amr, Ibn 'Amir, Hamzah, Abu Ja'far, Ya'qub", variantLatin: "Maaliki (Owner/Master)", variantReaders: "'Asim, Al-Kisa'i, Khalaf al-'Ashir", note: "The most well-known farsh difference. Both meanings describe Allah — He is both the King and the Owner of the Day of Judgment." },
        { ref: "Al-Baqarah 2:219", type: "Consonant alternation", majorityLatin: "kabir (great)", majorityReaders: "8 of the 10 readers", variantLatin: "kathir (much)", variantReaders: "Hamzah & Al-Kisa'i", note: "About the sin of wine: 'great sin' vs 'much sin.' Both meanings are complementary." },
        { ref: "Al-Kahf 18:55", type: "Different vowels", majorityLatin: "qubula (in many types)", majorityReaders: "'Asim, Hamzah, Al-Kisa'i, Abu Ja'far, Khalaf al-'Ashir", variantLatin: "qibala (face to face)", variantReaders: "Nafi', Ibn Kathir, Abu 'Amr, Ibn 'Amir, Ya'qub", note: "Punishment coming 'in many forms' vs 'directly face to face.'" },
        { ref: "Al-Takwir 81:24", type: "Consonant alternation", majorityLatin: "bi-danin (stingy/withholding)", majorityReaders: "Majority of readers", variantLatin: "bi-zanin (accused)", variantReaders: "Ibn Kathir, Abu 'Amr, Al-Kisa'i, Ruways", note: "The Prophet is 'not stingy' with revelation vs 'not accused' regarding it." },
        { ref: "Al-Baqarah 2:229", type: "Active / passive verb", majorityLatin: "yakhafa (they both fear)", majorityReaders: "Majority of readers", variantLatin: "yukhafa (it is feared)", variantReaders: "Hamzah, Abu Ja'far, Ya'qub", note: "About khul' (divorce): the couple fears vs a third party (judge) fears they can't maintain limits." },
        { ref: "Al-Rum 30:39", type: "Verb conjugation", majorityLatin: "ataytum (you give)", majorityReaders: "Majority of readers", variantLatin: "ataytum (you engage with)", variantReaders: "Ibn Kathir", note: "About riba: 'whatever you give in riba' vs 'whatever type of riba you engage with.' Broader prohibition." },
        { ref: "Al-Rum 30:39", type: "Pronoun change", majorityLatin: "li-yarbuwa (so it increases)", majorityReaders: "Majority of readers", variantLatin: "li-turbu (so you increase it)", variantReaders: "Nafi', Abu Ja'far, Ya'qub", note: "The money itself increases vs you (the person) increase it. Links prohibition to intention." }
      ]
    },

    // ── Docs page ───────────────────────────────────────────────────────
    docs: {
      documentation: "Documentation",
      tabs: { about: "About", qiraat: "The 10 Qira'at", features: "Key Features", sources: "Sources" },
      about: {
        whatTitle: "What is this tool?",
        whatP1: "The Riwayah Identifier helps you figure out which riwayah (transmission) of the Qur'an you're listening to by asking a series of simple listening questions.",
        whatP2: "It covers all 20 riwayat from the 10 canonical qira'at, working through an elimination process. Each answer narrows down the possibilities until only one (or a few) remain.",
        riwayahTitle: "What is a Riwayah?",
        riwayahIntro: "The Qur'an was revealed and recited by the Prophet \uFDFA and transmitted through multiple chains of reciters. There are three levels in this transmission:",
        levelQiraah: "Qira'ah",
        levelQiraahDesc: "The method of recitation named after one of the 10 canonical Imams. Each reader's approach was agreed upon by their students.",
        levelRiwayah: "Riwayah",
        levelRiwayahDesc: "A specific transmission from one of the reader's two primary narrators. This is what our tool identifies.",
        levelTariq: "Tariq",
        levelTariqDesc: "A sub-transmission from the narrator's students onward. Multiple turuq can exist within one riwayah, with minor variations in detail.",
        riwayahP: "Sometimes the differences are in pronunciation, like a vowel held longer or a letter softened, and sometimes even the words themselves differ slightly. All of these variations are authentic and go back to the Prophet \uFDFA through verified chains of transmission.",
        whyTitle: "Why do multiple readings exist?",
        whyP1: "The Prophet \uFDFA asked Allah to ease the recitation of the Qur'an for his ummah. The result was the seven ahruf (modes), a divinely granted concession that allowed the Qur'an to be recited in multiple ways to accommodate different dialects, ages, and linguistic backgrounds.",
        whyHadith: "\"This Qur'an has been revealed to be recited in seven different ways, so recite it whichever way is easier for you.\"",
        whyHadithSource: "Sahih al-Bukhari, 5041",
        whyP2: "When 'Umar ibn al-Khattab heard Hisham ibn Hakim reciting Surah al-Furqan differently than he had learned it, he was startled and nearly confronted him. But when they went to the Prophet \uFDFA, he confirmed both recitations were correct, saying: \"This is how it was revealed.\" The companions understood from early on that the Qur'an carried multiple valid modes of recitation. Over time, these modes were preserved and systematized into the qira'at we know today.",
        whyP3: "Despite these variations, only about 0.9% of the Qur'an's words have an alternative reading. The vast majority of the text is recited identically across all readings.",
        canonTitle: "What makes a reading canonical?",
        canonIntro: "Scholars established three conditions for a qira'ah to be accepted:",
        canon1: "An authentic, unbroken chain of transmission (isnad) going back to the Prophet \uFDFA",
        canon2: "Conformity with the consonantal skeleton of the Uthmanic mushaf, compiled in 30 AH (650 CE)",
        canon3: "Consistency with the rules of Arabic grammar",
        canonP: "Ibn Mujahid (d. 324 AH) first canonized seven readers, selecting one per major city (Mecca, Medina, Damascus, Basra) and three from Kufa. Ibn al-Jazari (d. 833 AH) later added three more to form the ten we know today.",
        howTitle: "How does the tool work?",
        how1: "Questions are ordered by the most recognizable features first (imalah, Fatihah reading, madd length)",
        how2: "Each answer filters out riwayat that don't match",
        how3: "You can skip any question you're unsure about",
        how4: "Questions that don't help narrow things down are auto-skipped",
        how5: "When one riwayah remains, you get the result. If multiple remain, you see a list of candidates"
      },
      qiraatTitle: "The 10 Canonical Qira'at",
      qiraatIntro: "Each Qari' (reader) has two Ruwat (narrators), giving us 20 riwayat in total. The seven original readers were canonized by Ibn Mujahid, one per major city except Kufa which had three. Ibn al-Jazari later added Abu Ja'far, Ya'qub, and Khalaf to complete the ten.",
      companionTitle: "Companion Isnad Connections",
      companionText: "All 10 readers trace their chains back to the Prophet \uFDFA through the companions. Ubayy ibn Ka'b connects to 8 of the 10 readers. 'Uthman, 'Ali, and Ibn Mas'ud each connect to 5. Only 3 of the 10 qurra' were native Arabs; the rest were of diverse backgrounds, reflecting the universal nature of Quranic scholarship.",
      featuresTitle: "Key Distinguishing Features",
      featuresIntro: "The 14 usul (systematic rules) the identifier uses, plus 6 supplementary features found in the",
      supplementaryTitle: "Supplementary Features",
      supplementaryDesc: "These features appear in the Guide but are not used by the identifier quiz. They provide additional detail for distinguishing certain riwayat.",
      sourcesTitle: "Sources",
      sourcesIntro: "All data in this tool has been verified against primary scholarly sources. 20 out of 20 riwayat are verified.",
      articles: "Articles",
      primarySources: "Primary Data Sources",
      nquranPages: "nquran.com Pages Used",
      usulPages: "Usul Pages (per riwayah)",
      comparisonPages: "Comparison Pages (between narrators)",
      verificationStatus: "Verification status: 20/20 riwayat verified",
      verificationDetail: "against nquran.com usul pages and comparison pages. All feature values (imalah, madd, hamzah, basmalah, sirat, idgham kabir, etc.) have been cross-referenced with primary sources.",
      cities: { Medina: "Medina", Mecca: "Mecca", Basra: "Basra", Damascus: "Damascus", Kufa: "Kufa", Baghdad: "Baghdad" }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ARABIC
  // ═══════════════════════════════════════════════════════════════════════
  ar: {
    // ── Common / Shared UI ──────────────────────────────────────────────
    common: {
      home: "الرئيسية",
      guide: "الدليل",
      docs: "المراجع",
      startOver: "ابدأ من جديد",
      goBack: "ارجع →",
      backToIdentifier: "العودة إلى المُعرِّف",
      switchLightMode: "التبديل إلى الوضع الفاتح",
      switchDarkMode: "التبديل إلى الوضع الداكن",
      switchToArabic: "التبديل إلى العربية",
      switchToEnglish: "Switch to English",
    },

    // ── Identifier Page ─────────────────────────────────────────────────
    identifier: {
      heroTitle: "مُعرِّف الرواية",
      heroP1: "القرآن كتابٌ واحد، لكنه أُنزل على أحرف متعددة، تيسيرًا من الله على الأمة. وبمرور الزمن حُفظت هذه الأحرف ونُظِّمت في قراءات معترف بها، كلٌّ منها متواترة بسندٍ متصل إلى النبي \uFDFA.",
      heroP2: "أحيانًا تكون الاختلافات في النطق، كإطالة حرف مدّ أو تخفيف همزة، وأحيانًا تختلف الكلمات نفسها قليلًا. وكل هذه الاختلافات ثابتة بأسانيد صحيحة إلى النبي \uFDFA.",
      heroP3: "هناك ١٠ قرّاء معتمدين، لكلٍّ منهم راويان، مما يعطينا ٢٠ رواية. هذه الأداة تساعدك على معرفة أيّ رواية تستمع إليها.",
      startIdentifying: "ابدأ التعرُّف",
      learnQiraat: "تعرَّف على القراءات",
      identifiedRiwayah: "الرواية المُحدَّدة",
      qari: "القارئ:",
      rawi: "الراوي:",
      region: "المنطقة:",
      keyTraits: "السمات المميزة",
      possibleMatches: "التطابقات المحتملة",
      candidateDesc: "بناءً على إجاباتك، هذه الروايات لا تزال محتملة. حاول الاستماع مجددًا للسمات التي تخطيتها لتضييق النتائج.",
      noMatch: "لم يُعثر على تطابق. حاول مرة أخرى واستمع بعناية لكل سمة.",
      narrowed: "% تضييق",
      remaining: "متبقية",
      skipQuestion: "لست متأكدًا، تخطَّ هذا السؤال",
      footer: "يغطي الروايات الرئيسية من القراءات العشر المتواترة. بعض الطرق أو الروايات الفرعية النادرة قد لا تُميَّز بالكامل.",
      builtBy: "بناء وسيق إقبال",
    },

    // ── Questions ───────────────────────────────────────────────────────
    questions: {
      imalah: {
        question: "هل تسمع الإمالة؟",
        description: "الإمالة هي إمالة صوت الألف (\"آه\") نحو صوت (\"إيه\"). استمع جيدًا للكلمات المنتهية بهاء التأنيث أو مثل \u0647\u064F\u062F\u064B\u0649\u060C \u0645\u064F\u0648\u0633\u064E\u0649\u060C \u0639\u0650\u064A\u0633\u064E\u0649.",
        example: "مثال: \u0647\u064F\u062F\u064B\u0649 تُنطق \"هُدِي\" بدلًا من \"هُدَى\"",
        options: {
          heavy: "نعم — إمالة كبرى واضحة",
          partial: "جزئية — تقليل",
          none: "لا — بدون إمالة"
        }
      },
      maaliki: {
        question: "كيف تُقرأ \u0645\u064E\u0627\u0644\u0650\u0643\u0650 \u064A\u064E\u0648\u0652\u0645\u0650 \u0627\u0644\u062F\u0651\u0650\u064A\u0646\u0650 في الفاتحة؟",
        description: "استمع للآية الرابعة من الفاتحة. هل هي \u0645\u064E\u0627\u0644\u0650\u0643\u0650 (بألف ممدودة) أم \u0645\u064E\u0644\u0650\u0643\u0650 (بدون ألف)؟",
        example: "مَـــالِكِ مقابل مَلِكِ",
        options: {
          maaliki: "\u0645\u064E\u0627\u0644\u0650\u0643\u0650 — بألف ممدودة",
          maliki: "\u0645\u064E\u0644\u0650\u0643\u0650 — بدون ألف"
        }
      },
      madd: {
        question: "ما مقدار المد المنفصل؟",
        description: "المد المنفصل يحدث عندما يأتي حرف مد (ا و ي) قبل همزة في الكلمة التالية، مثل \u0641\u0650\u064A \u0623\u064E\u0646\u0641\u064F\u0633\u0650\u0643\u064F\u0645\u0652. عُدّ الحركات.",
        example: "حركتان = قصر، ٤ = توسط، ٥-٦ = إشباع",
        options: {
          short: "قصر — حركتان",
          medium: "توسط — ٤ حركات",
          long: "إشباع — ٥ أو ٦ حركات"
        }
      },
      basmalah: {
        question: "هل تُقرأ البسملة دائمًا بين السور؟",
        description: "بين أي سورتين متتاليتين (غير الأنفال والتوبة)، هل يقرأ القارئ \u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645 دائمًا؟",
        example: "استمع عند الانتقال بين السور",
        options: {
          always: "نعم — البسملة دائمًا",
          not_always: "ليس دائمًا — أحيانًا سكت أو وصل"
        }
      },
      hamzah: {
        question: "كيف تُعامَل الهمزات (ء)؟",
        description: "استمع للهمزة. هل تُنطق دائمًا بوضوح (تحقيق)، أم تُسهَّل أو تُبدَل أحيانًا؟",
        example: "مثال: \u064A\u064F\u0624\u0652\u0645\u0650\u0646\u064F\u0648\u0646\u064E تصبح \u064A\u064F\u0648\u0645\u0650\u0646\u064F\u0648\u0646\u064E",
        options: {
          clear: "تحقيق — كل الهمزات واضحة",
          softened: "تسهيل — تخفيف أو إبدال"
        }
      },
      takbir: {
        question: "هل يوجد تكبير (\u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631) بين السور في آخر القرآن؟",
        description: "من سورة الضحى (٩٣) إلى سورة الناس (١١٤)، هل يقول القارئ \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 بين السور؟",
        example: "...نهاية السورة → \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 → \u0628\u0633\u0645 \u0627\u0644\u0644\u0647 → السورة التالية",
        options: {
          yes: "نعم — تكبير بين السور",
          no: "لا — بدون تكبير"
        }
      },
      sirat: {
        question: "كيف يُنطق \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E في الفاتحة؟",
        description: "هل \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E بصاد خالصة، أم بسين، أم بإشمام (صاد ممزوجة بصوت الزاي)؟",
        example: "\u0627\u0644\u0633\u0651\u0650\u0631\u064E\u0627\u0637\u064E (سين) مقابل \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E (صاد) مقابل إشمام",
        options: {
          sad: "صاد خالصة — \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E",
          sin: "سين — \u0627\u0644\u0633\u0651\u0650\u0631\u064E\u0627\u0637\u064E",
          ishmam: "إشمام — صاد ممزوجة بالزاي"
        }
      },
      ra: {
        question: "كيف يُعامَل حرف الراء (ر)؟",
        description: "في كلمات مثل \u0641\u0650\u0631\u0652\u0639\u064E\u0648\u0652\u0646\u064E، هل صوت الراء رقيق بشكل ملحوظ (ترقيق) أم مفخّم (تفخيم)؟",
        example: "ورش: الراء في \u0641\u0631\u0639\u0648\u0646 رقيقة؛ حفص: مفخّمة",
        options: {
          thin: "رقيقة بشكل ملحوظ",
          standard: "مفخّمة (عادية)"
        }
      },
      extraYa: {
        question: "هل تسمع ياءات زائدة (ي) في آخر بعض الكلمات؟",
        description: "قراءة يعقوب تضيف ياءً في آخر بعض الكلمات التي لا يقرأها بها غيره.",
        example: "مثال: \u0641\u064E\u0623\u064E\u062E\u0652\u0634\u064E\u0648\u0652\u0646\u0650 تصبح \u0641\u0623\u062E\u0634\u0648\u0646\u064A",
        options: {
          yes: "نعم — ياءات زائدة",
          no: "لا — نهايات عادية"
        }
      },
      imalahScope: {
        question: "ما مدى اتساع الإمالة؟",
        description: "بعض القراءات تطبق الإمالة على كلمات كثيرة (مثل أَنَا ومواضع نادرة)، بينما يقتصر غيرهم على المواضع المعتادة.",
        example: "واسعة = إمالة في أغلب الكلمات المؤهلة؛ معتادة = المواضع الشائعة فقط",
        options: {
          broad: "واسعة — إمالة في كلمات إضافية",
          standard: "معتادة — المواضع الشائعة فقط",
          none: "لا يوجد"
        }
      },
      idghamKabir: {
        question: "هل تسمع الإدغام الكبير (دمج الحروف المتماثلة بين الكلمات)؟",
        description: "الإدغام الكبير هو دمج حرفين متماثلين أو متجانسين بين كلمتين في حرف واحد. مثلًا في \u064A\u064E\u0639\u0644\u064E\u0645\u064F \u0645\u064E\u0627، تُدمج الميمان معًا.",
        example: "الحروف تندمج معًا بدلًا من نطقها منفصلة",
        options: {
          yes: "نعم — الحروف تندمج بين الكلمات",
          no: "لا — كل حرف يُنطق منفردًا"
        }
      },
      haKinayah: {
        question: "كيف تُعامَل هاء الكناية (ه) في آخر كلمات مثل \u0644\u064E\u0647\u064F و\u0628\u0650\u0647\u0650؟",
        description: "بعض القراءات تصل هاء الكناية بحرف مد قصير (صلة)، فتصبح \u0644\u064E\u0647\u064F\u0648 أو \u0628\u0650\u0647\u0650\u064A. وغيرهم يبقيها قصيرة.",
        example: "\u0644\u064E\u0647\u064F\u0648 (بصلة) مقابل \u0644\u064E\u0647\u064F (بدون)",
        options: {
          with_sila: "بصلة — مع حرف مد",
          standard: "عادية — قصيرة بدون صلة"
        }
      },
      silatMim: {
        question: "هل تُوصل ميم الجمع (\u0647\u064F\u0645\u0652 / \u0643\u064F\u0645\u0652) بحرف مد قبل الكلمة التالية؟",
        description: "صلة ميم الجمع تعني مد الميم بواو أو ياء قصيرة عندما يليها حرف متحرك، مثل \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u064F\u0648 بدلًا من \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652.",
        example: "\u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u064F\u0648 \u0623\u064E\u0646\u0652\u0639\u064E\u0645\u0652\u062A\u064E (بصلة) مقابل \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652 \u0623\u064E\u0646\u0652\u0639\u064E\u0645\u0652\u062A\u064E (بدون)",
        options: {
          yes: "نعم — دائمًا بصلة",
          optional: "أحيانًا — بخلف",
          no: "لا — بدون صلة"
        }
      },
      waqfHamzah: {
        question: "عند الوقف على كلمة تنتهي بهمزة، هل تتغير الهمزة؟",
        description: "بعض القراءات تغيّر الهمزة الأخيرة عند الوقف — بإبدالها بحرف مد أو تسهيلها أو حذفها. وغيرهم يبقيها كما هي.",
        example: "مثال: \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0621 ← \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627 (حذف الهمزة عند الوقف)",
        options: {
          full: "نعم — تغييرات واسعة للهمزة عند الوقف",
          final_only: "بعضها — همزات أخيرة محددة فقط",
          no: "لا — الهمزة تبقى كما هي"
        }
      }
    },

    // ── Guide page ──────────────────────────────────────────────────────
    guide: {
      title: "دليل الروايات",
      usul: "الأصول",
      farsh: "الفرش",
      usulPerRiwayah: "الأصول لكل رواية",
      compare: "مقارنة",
      exitCompare: "إنهاء المقارنة",
      feature: "السمة",
      selected: "مختارة",
      usulIntro: "قواعد منهجية تُطبَّق في القرآن كله وتحدد صوت كل رواية: الإمالة، أطوال المد، معاملة الهمزة، البسملة، وغيرها.",
      usulIntroLink: "لمعرفة معنى كل مصطلح، راجع",
      docs: "المراجع",
      compareIntro: "اختر حتى ٤ روايات لمقارنة أصولها جنبًا إلى جنب.",
      farshTitle: "أهم فروق الفرش",
      farshIntro: "على عكس الأصول، فروق الفرش تتعلق بآيات محددة وليس القرآن كله. فقط حوالي ٠.٩٪ من كلمات القرآن لها قراءة بديلة، لكن ذلك يعني مئات الاختلافات عبر الروايات العشرين. فيما يلي أمثلة مختارة توضح كيف تضيف هذه الاختلافات طبقات من المعنى.",
      farshSource: "المصدر: الشيخ يوسف وهب، \"هل يمكن تلاوة القرآن بطرق مختلفة؟\" (معهد يقين، ٢٠٢٢)",
      dataNote: "جميع البيانات تتبع طريق الطيبة، موثقة من nquran.com والنشر في القراءات العشر.",
      featureValues: {
        imalah: { none: "لا يوجد", partial: "تقليل", heavy: "إمالة كبرى" },
        maaliki: { maaliki: "مالكِ (بألف)", maliki: "مَلِكِ (بدون ألف)" },
        madd: { short: "قصر (حركتان)", medium: "توسط (٤ حركات)", long: "إشباع (٦ حركات)" },
        basmalah: { always: "دائمًا بين السور", not_always: "خيارات (وصل/سكت)" },
        hamzah: { clear: "تحقيق", softened: "تسهيل/إبدال" },
        takbir: { yes: "نعم (جزء عمّ)", no: "لا" },
        sirat: { sad: "صاد (ص)", sin: "سين (س)", ishmam: "إشمام (ص+ز)" },
        ra: { standard: "القواعد المعتادة", thin: "ترقيق" },
        extraYa: { yes: "نعم", no: "لا" },
        imalahScope: { none: "لا يوجد", standard: "المواضع المعتادة", broad: "موسّعة (كلمات إضافية)" },
        idghamKabir: { yes: "نعم", no: "لا" },
        haKinayah: { standard: "عادية", with_sila: "بصلة" },
        silatMim: { yes: "نعم", optional: "اختيارية (بخلف)", no: "لا" },
        waqfHamzah: { full: "تخفيف جميع الهمزات", final_only: "الهمزات الأخيرة فقط", no: "لا" },
        sakt: { yes: "نعم (وقف قبل الهمزة)", no: "لا", four_places: "٤ مواضع محددة" },
        naql: { yes: "نعم (نقل حركة الهمزة)", no: "لا" },
        taghlithLam: { yes: "نعم (اللام بعد ص/ط/ظ)", no: "لا" },
        maddMuttasil: { medium: "توسط (٤-٥ حركات)", long: "إشباع (٦ حركات)" },
        maddBadl: { short: "قصر (حركتان)", three_options: "٣ خيارات (٢، ٤، أو ٦)" },
        imalahHaTanith: { yes: "نعم (إمالة كبرى)", no: "لا" }
      },
      farshExamples: [
        { ref: "الفاتحة ١:٤", type: "صيغة الكلمة", majorityLatin: "مَلِكِ (الملك)", majorityReaders: "نافع، ابن كثير، أبو عمرو، ابن عامر، حمزة، أبو جعفر، يعقوب", variantLatin: "مَالِكِ (المالك)", variantReaders: "عاصم، الكسائي، خلف العاشر", note: "أشهر فرق فرشي. كلا المعنيين يصفان الله — فهو الملك والمالك ليوم الدين." },
        { ref: "البقرة ٢:٢١٩", type: "تبادل حروف", majorityLatin: "كبير (عظيم)", majorityReaders: "٨ من القراء العشرة", variantLatin: "كثير (كثير)", variantReaders: "حمزة والكسائي", note: "عن إثم الخمر: 'إثم كبير' مقابل 'إثم كثير.' كلا المعنيين متكاملان." },
        { ref: "الكهف ١٨:٥٥", type: "اختلاف حركات", majorityLatin: "قُبُلًا (أنواعًا)", majorityReaders: "عاصم، حمزة، الكسائي، أبو جعفر، خلف العاشر", variantLatin: "قِبَلًا (مواجهة)", variantReaders: "نافع، ابن كثير، أبو عمرو، ابن عامر، يعقوب", note: "العذاب يأتي 'أنواعًا' مقابل 'مواجهة مباشرة.'" },
        { ref: "التكوير ٨١:٢٤", type: "تبادل حروف", majorityLatin: "بضنين (بخيل)", majorityReaders: "أغلب القراء", variantLatin: "بظنين (متهم)", variantReaders: "ابن كثير، أبو عمرو، الكسائي، رويس", note: "النبي 'ليس ببخيل' بالوحي مقابل 'ليس بمتهم' فيه." },
        { ref: "البقرة ٢:٢٢٩", type: "فعل مبني للمعلوم / مجهول", majorityLatin: "يَخَافَا (يخافا)", majorityReaders: "أغلب القراء", variantLatin: "يُخَافَا (يُخاف)", variantReaders: "حمزة، أبو جعفر، يعقوب", note: "في الخلع: الزوجان يخافان مقابل طرف ثالث (القاضي) يخاف ألا يقيما حدود الله." },
        { ref: "الروم ٣٠:٣٩", type: "تصريف الفعل", majorityLatin: "آتيتم (تعطون)", majorityReaders: "أغلب القراء", variantLatin: "أتيتم (تتعاملون)", variantReaders: "ابن كثير", note: "في الربا: 'ما تعطونه ربا' مقابل 'ما تتعاملون به من ربا.' تحريم أوسع." },
        { ref: "الروم ٣٠:٣٩", type: "تغيير الضمير", majorityLatin: "ليربو (ليزداد)", majorityReaders: "أغلب القراء", variantLatin: "لتربوا (لتزيدوه)", variantReaders: "نافع، أبو جعفر، يعقوب", note: "المال يزداد بنفسه مقابل أنتم تزيدونه. يربط التحريم بالنية." }
      ]
    },

    // ── Docs page ───────────────────────────────────────────────────────
    docs: {
      documentation: "المراجع",
      tabs: { about: "حول الأداة", qiraat: "القراءات العشر", features: "السمات المميزة", sources: "المصادر" },
      about: {
        whatTitle: "ما هذه الأداة؟",
        whatP1: "مُعرِّف الرواية يساعدك على معرفة أي رواية من روايات القرآن تستمع إليها عبر طرح سلسلة من أسئلة الاستماع البسيطة.",
        whatP2: "تغطي جميع الروايات العشرين من القراءات العشر المتواترة، وتعمل بآلية الاستبعاد. كل إجابة تُضيّق الاحتمالات حتى تبقى رواية واحدة (أو عدة روايات).",
        riwayahTitle: "ما هي الرواية؟",
        riwayahIntro: "القرآن الكريم أُنزل وتُلي من النبي \uFDFA ونُقل عبر سلاسل متعددة من القرّاء. هناك ثلاث مستويات في هذا النقل:",
        levelQiraah: "القراءة",
        levelQiraahDesc: "طريقة التلاوة المنسوبة إلى أحد الأئمة العشرة. اتفق طلابه على منهجه في القراءة.",
        levelRiwayah: "الرواية",
        levelRiwayahDesc: "نقل محدد عن أحد راوييه الأساسيين. هذا ما تحدده أداتنا.",
        levelTariq: "الطريق",
        levelTariqDesc: "نقل فرعي من طلاب الراوي فما بعدهم. قد توجد طرق متعددة في الرواية الواحدة مع اختلافات طفيفة.",
        riwayahP: "أحيانًا تكون الاختلافات في النطق، كإطالة حرف مد أو تخفيف همزة، وأحيانًا تختلف الكلمات نفسها قليلًا. كل هذه الاختلافات ثابتة بأسانيد صحيحة إلى النبي \uFDFA.",
        whyTitle: "لماذا توجد قراءات متعددة؟",
        whyP1: "سأل النبي \uFDFA الله أن يُيسّر تلاوة القرآن على أمته. فكانت النتيجة سبعة أحرف، رخصة إلهية سمحت بتلاوة القرآن بطرق متعددة لتناسب اللهجات والأعمار والخلفيات اللغوية المختلفة.",
        whyHadith: "\"إن هذا القرآن أُنزل على سبعة أحرف، فاقرؤوا ما تيسّر منه.\"",
        whyHadithSource: "صحيح البخاري، ٥٠٤١",
        whyP2: "عندما سمع عمر بن الخطاب هشام بن حكيم يقرأ سورة الفرقان بطريقة مختلفة عما تعلمه، تفاجأ وكاد أن يواجهه. لكن عندما ذهبا إلى النبي \uFDFA، أكّد صحة كلتا القراءتين قائلًا: \"هكذا أُنزلت.\" أدرك الصحابة منذ وقت مبكر أن القرآن يحمل أوجهًا متعددة صحيحة للتلاوة. ومع مرور الزمن حُفظت هذه الأوجه ونُظِّمت في القراءات التي نعرفها اليوم.",
        whyP3: "رغم هذه الاختلافات، فإن حوالي ٠.٩٪ فقط من كلمات القرآن لها قراءة بديلة. الغالبية العظمى من النص يُتلى بشكل متطابق في جميع القراءات.",
        canonTitle: "ما الذي يجعل القراءة متواترة؟",
        canonIntro: "وضع العلماء ثلاثة شروط لقبول القراءة:",
        canon1: "سند صحيح متصل إلى النبي \uFDFA",
        canon2: "موافقة الرسم العثماني للمصحف الذي جُمع سنة ٣٠ هـ (٦٥٠ م)",
        canon3: "موافقة قواعد اللغة العربية",
        canonP: "جمع ابن مجاهد (ت. ٣٢٤ هـ) سبعة قرّاء لأول مرة، واختار واحدًا من كل مدينة رئيسية (مكة والمدينة ودمشق والبصرة) وثلاثة من الكوفة. ثم أضاف ابن الجزري (ت. ٨٣٣ هـ) ثلاثة آخرين ليُتمّ العشرة.",
        howTitle: "كيف تعمل الأداة؟",
        how1: "تُرتَّب الأسئلة حسب السمات الأكثر وضوحًا (الإمالة، قراءة الفاتحة، طول المد)",
        how2: "كل إجابة تستبعد الروايات التي لا تتطابق",
        how3: "يمكنك تخطي أي سؤال لست متأكدًا منه",
        how4: "الأسئلة التي لا تساعد في التضييق تُتخطى تلقائيًا",
        how5: "عندما تبقى رواية واحدة تحصل على النتيجة. إذا بقيت عدة روايات ترى قائمة المرشحين"
      },
      qiraatTitle: "القراءات العشر المتواترة",
      qiraatIntro: "لكل قارئ راويان، مما يعطينا ٢٠ رواية. جمع ابن مجاهد سبعة قرّاء، واحدًا من كل مدينة رئيسية عدا الكوفة التي كان لها ثلاثة. ثم أضاف ابن الجزري أبا جعفر ويعقوب وخلفًا ليُتمّ العشرة.",
      companionTitle: "اتصال الأسانيد بالصحابة",
      companionText: "جميع القرّاء العشرة تعود أسانيدهم إلى النبي \uFDFA عبر الصحابة. أُبيّ بن كعب يتصل بـ٨ من ١٠ قرّاء. عثمان وعلي وابن مسعود يتصل كلٌّ منهم بـ٥. فقط ٣ من القرّاء العشرة كانوا عربًا أصليين؛ والباقون من خلفيات متنوعة، مما يعكس عالمية علم القرآن.",
      featuresTitle: "السمات المميزة",
      featuresIntro: "١٤ أصلًا (قواعد منهجية) يستخدمها المُعرِّف، بالإضافة إلى ٦ سمات إضافية في",
      supplementaryTitle: "سمات إضافية",
      supplementaryDesc: "هذه السمات تظهر في الدليل لكنها لا تُستخدم في اختبار المُعرِّف. وهي توفر تفصيلًا إضافيًا للتمييز بين بعض الروايات.",
      sourcesTitle: "المصادر",
      sourcesIntro: "جميع البيانات في هذه الأداة موثقة من مصادر علمية أصيلة. تم التحقق من ٢٠ رواية من أصل ٢٠.",
      articles: "المقالات",
      primarySources: "المصادر الأساسية",
      nquranPages: "صفحات nquran.com المستخدمة",
      usulPages: "صفحات الأصول (لكل رواية)",
      comparisonPages: "صفحات المقارنة (بين الرواة)",
      verificationStatus: "حالة التحقق: ٢٠/٢٠ رواية موثقة",
      verificationDetail: "من صفحات أصول وصفحات مقارنة nquran.com. جميع قيم السمات (إمالة، مد، همزة، بسملة، صراط، إدغام كبير، إلخ) تمت مراجعتها مع المصادر الأصلية.",
      cities: { Medina: "المدينة", Mecca: "مكة", Basra: "البصرة", Damascus: "دمشق", Kufa: "الكوفة", Baghdad: "بغداد" }
    }
  }
};

export function getTranslations(lang) {
  return translations[lang] || translations.en;
}

export default translations;
