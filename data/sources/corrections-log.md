# Riwayat Identifier — Data Sources & Verification

## Primary Sources

### 1. nquran.com — أصول وتراجم القراء
- **URL**: https://www.nquran.com/ar/categories/650/
- **Type**: Digital, structured HTML tables per riwayah
- **Coverage**: 8 riwayat with individual usul pages
- **Strengths**: Consistent categories across all pages, modern, maintained

#### Pages used:
| Page ID | Riwayah | URL |
|---------|---------|-----|
| 16681 | Warsh 'an Nafi' | /ar/view/16681 |
| 16680 | Qalun 'an Nafi' | /ar/view/16680 |
| 16679 | Al-Duri 'an Abu 'Amr | /ar/view/16679 |
| 16678 | Khallad 'an Hamzah | /ar/view/16678 |
| 16677 | Ibn Dhakwan 'an Ibn 'Amir | /ar/view/16677 |
| 16682 | Abu Ja'far | /ar/view/16682 |
| 16683 | Khalaf al-'Ashir | /ar/view/16683 |
| 16684 | Warsh via al-Asbahani | /ar/view/16684 |

### 2. An-Nashr fi al-Qira'at al-'Ashr — Ibn al-Jazari
- **URL**: https://www.islamweb.net/ar/library/index.php?page=bookcontents&bk_no=70
- **Type**: Classical text, digitized
- **Coverage**: All 20 riwayat, all usul categories
- **Strengths**: The ultimate scholarly authority; every ruling is sourced

### 3. Archive.org — Comparison Tables
- **جدول أصول القراءات والقراء العشر**: https://archive.org/details/20211118_20211118_2313
- **جداول اصول احكام القراءات العشر المتواترة** (Dr. Madiha Saleh): https://archive.org/details/dr_191

## Verification Status

### Verified against nquran.com (primary source):
- Warsh 'an Nafi' (view/16681)
- Qalun 'an Nafi' (view/16680)
- Al-Duri 'an Abu 'Amr (view/16679)
- Khallad 'an Hamzah (view/16678)
- Ibn Dhakwan 'an Ibn 'Amir (view/16677)
- Abu Ja'far (view/16682)
- Khalaf al-'Ashir (view/16683)

### Verified against An-Nashr (imalah chapter):
- Hamzah, Al-Kisa'i, Khalaf al-'Ashir: confirmed heavy imalah

### Verified via nquran.com comparison pages (الفروق بين القراءات):
| Page ID | Comparison | Riwayat verified |
|---------|-----------|-----------------|
| 16696 | Shu'bah vs Hafs | Hafs, Shu'bah |
| 16698 | Al-Duri vs Al-Susi | Al-Susi |
| 16694 | Abu al-Harith vs Duri (Kisa'i) | Abu al-Harith, Al-Duri 'an Al-Kisa'i |
| 16692 | Al-Bazzi vs Qunbul | Al-Bazzi, Qunbul |
| 16699 | Hisham vs Ibn Dhakwan | Hisham |
| 16700 | Ruways vs Rawh | Ruways, Rawh |

### Verification status: 20/20 verified

## Corrections Log

| Date | Riwayah | Field | Old Value | New Value | Source |
|------|---------|-------|-----------|-----------|--------|
| 2026-03-24 | Warsh | basmalah | always | not_always | nquran 16681 |
| 2026-03-24 | Khalaf al-'Ashir (Ishaq) | basmalah | always | not_always | nquran 16683 |
| 2026-03-24 | Khalaf al-'Ashir (Ishaq) | imalah | none | heavy | nquran 16683 |
| 2026-03-24 | Khalaf al-'Ashir (Ishaq) | madd | long | medium | nquran 16683 |
| 2026-03-24 | Khalaf al-'Ashir (Idris) | basmalah | always | not_always | nquran 16683 |
| 2026-03-24 | Khalaf al-'Ashir (Idris) | imalah | none | heavy | nquran 16683 |
| 2026-03-24 | Khalaf al-'Ashir (Idris) | madd | long | medium | nquran 16683 |
| 2026-03-24 | Al-Susi | hamzah | clear | softened | nquran 16698 (Susi does ibdal) |
| 2026-03-24 | Hisham | idghamKabir | no | yes | nquran 16699 (dhal/dal idgham) |
| 2026-03-24 | Ruways | hamzah | clear | softened | nquran 16700 (tashil + naql) |
| 2026-03-24 | Ruways | idghamKabir | no | yes | nquran 16700 (idgham in specific positions) |
| 2026-03-25 | Warsh | maaliki | maaliki | maliki | Nafi' reads Maliki (short) — this is farsh, not usul |
| 2026-03-25 | Khalaf 'an Hamzah | maaliki | maaliki | maliki | Hamzah reads Maliki (short) |
| 2026-03-25 | Khallad 'an Hamzah | maaliki | maaliki | maliki | Hamzah reads Maliki (short) |
| 2026-03-25 | Ruways | maaliki | maaliki | maliki | Ya'qub reads Maliki (short) |
| 2026-03-25 | Rawh | maaliki | maaliki | maliki | Ya'qub reads Maliki (short) |
| 2026-03-25 | Al-Susi | basmalah | always | not_always | nquran 16698: basmalah not listed as Duri/Susi difference, both share Abu 'Amr's 3 options |
| 2026-03-25 | Qunbul | takbir | yes | no | nquran 16692: only Bazzi transmits takbir, not Qunbul |
| 2026-03-25 | Qalun | hamzah | clear | softened | nquran 16680: has tashil on double hamzahs (same-word and cross-word) |
| 2026-03-25 | Ibn Dhakwan | basmalah | always | not_always | nquran 16677: 3 options (bismillah, pause, connection) |
| 2026-03-25 | Khallad | sirat | sad | ishmam | nquran 16678: ishmam in Umm al-Kitab (Fatihah), consistent with Khalaf |
| 2026-03-25 | Ibn Dhakwan | notes | Shatibiyyah reasoning | Tayyibah data | Removed Shatibiyyah reference, documented Tayyibah imalah positions |
| 2026-03-25 | Al-Duri Abu Amr | idghamKabir | yes | no | nquran 16698: "Duri = reads with clarity", idgham kabir is Susi's distinction |
| 2026-03-25 | Hisham | basmalah | always | not_always | nquran 16699: not listed as difference from Ibn Dhakwan, shared qari rule |
| 2026-03-25 | Hisham | imalah | none | partial | nquran 16699: selective imalah on specific words per Tayyibah |
| 2026-03-25 | Ibn Dhakwan | imalah | none | partial | nquran 16677: extensive imalah kubra on limited positions via al-Suri tariq |
| 2026-03-26 | Al-Bazzi | madd | medium | short | An-Nashr (باب المد والقصر): Ibn Kathir has qasr without disagreement; confirmed by Wikipedia (Bazzi article): "يقرأ بقصر المنفصل" |
| 2026-03-26 | Qunbul | madd | medium | short | An-Nashr (باب المد والقصر): Ibn Kathir has qasr without disagreement; same qari-level rule as Bazzi |
| 2026-03-26 | Ruways | basmalah | always | not_always | An-Nashr (باب البسملة): Ya'qub explicitly grouped with Abu 'Amr and Ibn 'Amir as having 3 options (basmalah, sakt, wasl). nquran says "always" but An-Nashr (Tayyibah authority) overrides. |
| 2026-03-26 | Rawh | basmalah | always | not_always | An-Nashr (باب البسملة): same qari-level rule as Ruways; Ya'qub has 3 basmalah options per An-Nashr |
| 2026-03-27 | Al-Bazzi | notes | (added) | — | Documented hamzah='clear' classification: idkhal on double hamzahs is a narrow exception within tahqiq, not systemic softening like Qalun/Hisham. Deliberate choice for identifier accuracy. |
| 2026-03-27 | Qunbul | notes | (added) | — | Same hamzah='clear' rationale as Bazzi: idkhal on doubles only, dominant approach is tahqiq. Explicitly noted to prevent future reclassification. |
| 2026-03-29 | Hafs 'an 'Asim | traits text | reverted | "Short madd munfasil (2 harakaat)" | Reverted: qasr = 2 harakaat is correct per Tayyibah (nquran 16696 confirms Hafs = qasr) |
| 2026-03-29 | Qalun 'an Nafi' | traits text | reverted | "Short madd munfasil (2 harakaat)" | Reverted: same reason, qasr = 2 per nquran 16680 |
| 2026-03-29 | Duri Abu 'Amr | traits text | "Medium madd munfasil (4-5 harakaat)" | "Medium madd munfasil (4 harakaat)" | Tawassut = 4 harakaat per sources, not 4-5 |
| 2026-03-29 | (quiz question) | madd long label | "Long — 5 or 6 beats" | "Long — 6 beats" | All long riwayat are ishba' (6); no Tayyibah tariq uses 5 alone |
| 2026-03-29 | (quiz question) | madd example | "5-6 = long" | "6 = long" | Same — consistent with label fix |
