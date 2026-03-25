# nquran.com Source Verification — Complete Reference
Fetched 2026-03-25. All pages from https://www.nquran.com/ar/

This file contains ALL usul data extracted from nquran.com for every riwayah we use.
It is the local source of truth — all riwayat.json values must be traceable to this file.

---

## Individual Usul Pages

### 16681 — Warsh 'an Nafi' (ID 2)
- **Basmalah**: 3 options (basmalah, sakt, wasl) → `not_always`
- **Takbir**: No → `no`
- **Madd munfasil/muttasil**: 6 harakaat (ishba') → `long`
- **Madd badl**: 3 options (qasr, tawassut, tul)
- **Hamzah**: Softened — tashil on doubles, ibdal on singles, naql → `softened`
- **Imalah**: Taqlil on ya-origin alifs, 11 surah endings, 5 surah-opening letters → `partial`
- **Imalah scope**: Taqlil only (not kubra) → `none` (partial already captures this)
- **Sirat**: Not explicitly mentioned → `sad` (default)
- **Ra'**: Tarqiq when preceded by ya/kasrah → `thin`
- **Taghlith lam**: Yes (before sad, zaa, taa)
- **Naql**: Yes (transfers hamza vowel to preceding consonant)
- **Idgham**: Some limited (dal of qad into dal/zaa, dhal into ta, ta ta'nith into zaa) — NOT systematic idgham kabir → `no`
- **Maaliki**: maliki (Nafi reads Maliki per scholarly consensus) → `maliki`

### 16680 — Qalun 'an Nafi' (ID 3)
- **Basmalah**: Always (reads bismillah between surahs) → `always`
- **Takbir**: No → `no`
- **Madd munfasil**: Qasr (2) or tawassut (4) → `short`
- **Madd muttasil**: Tawassut (4) → `medium`
- **Hamzah**: Has tashil on double hamzahs (same-word: tashil 2nd with idkhal; cross-word: drops 1st when both fatha, tashil otherwise). Single hamzas mostly tahqiq with some ibdal → `softened`
- **Imalah**: None except هار with imalah kubra → `none`
- **Sirat**: sad → `sad`
- **Ra'**: standard → `standard`
- **Silat mim al-jam'**: Optional (with khulf)
- **Naql**: Very limited (3 words only)
- **Maaliki**: maliki (same qari as Warsh) → `maliki`

### 16679 — Al-Duri 'an Abu 'Amr (ID 4)
- Referenced via comparison page 16698 (see below)
- **Basmalah**: 3 options → `not_always`
- **Madd munfasil**: 4 harakaat → `medium`
- **Hamzah**: softened → `softened`
- **Imalah**: partial → `partial`
- **Idgham kabir**: NO — reads with clarity (idhar). Idgham kabir is Susi's distinction → `no`
- **Sirat**: sad → `sad`
- **Maaliki**: maliki → `maliki`

### 16678 — Khallad 'an Hamzah (ID 7)
- **Basmalah**: Omits between surahs (wasl only) → `not_always`
- **Takbir**: No → `no`
- **Madd munfasil/muttasil**: 6 harakaat (ishba') → `long`
- **Sirat**: "قرأ بالإشمام الصاد صوت الزاي في أم الكتاب فقط" — ishmam of sad with zay sound in Umm al-Kitab (Fatihah) ONLY, sad elsewhere → `ishmam`
- **Hamzah**: Full realization (tahqiq) of double hamzahs → `clear`
- **Idgham kabir**: YES — extensive (dhal of idh into sibilants, dal of qad into 8 letters, ta ta'nith into 6 letters, lam of hal/bal into ta/tha/sin, dal into dhal, dhal into ta, ba into mim, plus more) → `yes`
- **Imalah**: Heavy — all ya-origin alifs, feminine alif endings, alifs written as ya, 10 verbs, 11 surah endings, 5 surah-opening letters → `heavy`
- **Imalah scope**: Standard positions (same as Khalaf) → `standard`
- **Sakt**: Not mentioned for Khallad (sakt is Khalaf's distinction)
- **Maaliki**: maliki (Hamzah reads Maliki) → `maliki`

### 16677 — Ibn Dhakwan 'an Ibn 'Amir (ID 11)
- **Basmalah**: 3 options (bismillah, pause, connection) → `not_always`
- **Madd munfasil**: 4 harakaat → `medium`
- **Hamzah**: Full realization of doubles → `clear`
- **Imalah**: Extensive imalah kubra on limited positions via al-Suri tariq (specific words with final alif-raa, certain past-tense verbs like zada, khaba) — not systematic enough to be audibly distinctive but present → `partial`
- **Idgham**: Some (dhal into some letters) but less aggressive than Hisham → `no`
- **Sirat**: sad → `sad`
- **Maaliki**: maliki → `maliki`

### 16682 — Abu Ja'far al-Madani (IDs 15-16)
- **Basmalah**: Always ("قرأ بالبسملة بين السورتين") → `always`
- **Takbir**: No (from al-Durrah) → `no`
- **Madd**: Short (qasr) implied by context → `short`
- **Hamzah**: Extensive tashil — facilitates 2nd hamzah, converts static hamzahs → `softened`
- **Imalah**: None mentioned → `none`
- **Sirat**: sad → `sad`
- **Idgham**: Merges dhal into ta, thaa into ta — limited → `no`
- **Ibn Wardan vs Ibn Jammaz differences**: Ha' pronouns differ (lengthening vs shortening), some hamzah handling differs. Key: ha' al-kinayah — Ibn Wardan has sila, Ibn Jammaz standard.
- **Maaliki**: maliki → `maliki`

### 16683 — Khalaf al-'Ashir (IDs 19-20)
- **Basmalah**: Omits ("قرأ بترك البسملة بين السورتين") → `not_always`
- **Takbir**: No → `no`
- **Madd munfasil/muttasil**: Medium ("قرأ خلف بتوسط المنفصل والمتصل") → `medium`
- **Hamzah**: Full articulation of doubles → `clear`
- **Imalah**: Extensive — ya-origin words, feminine ending alifs, fuala/faala patterns, 5 surah-opening letters → `heavy`
- **Imalah scope**: standard → `standard`
- **Idgham**: Heavy assimilation (dhal of idh, dal of qad into 8 letters, ta ta'nith into 5 letters, etc.) → applies to reading overall
- **Ishaq vs Idris differences**: Not explicitly distinguished on nquran page. Per other sources: Ishaq has idgham kabir, Idris does not.
- **Sirat**: sad → `sad`
- **Maaliki**: maaliki ('Asim/Kisa'i/Khalaf al-Ashir are the 3 who read maaliki) → `maaliki`

---

## Comparison Pages

### 16696 — Shu'bah vs Hafs ('Asim's narrators, IDs 1 & 14)
Key differences:
- **Dhal-Ta assimilation**: Hafs exhibits dhal, Shu'bah assimilates
- **Hamzah in specific words**: Different handling (Hafs waw without hamzah, Shu'bah hamzah over waw)
- **Madd**: Different lengths (Hafs short/qasr, Shu'bah medium/tawassut)
- **Shared**: Both read maaliki (long), both have sad sirat, both clear hamzahs generally, both always basmalah, no imalah, no takbir
- **NOT listed as differences**: basmalah, imalah, sirat, takbir, ra, idghamKabir, haKinayah → these are shared

### 16698 — Al-Duri vs Al-Susi (Abu 'Amr's narrators, IDs 4 & 5)
Key differences:
- **Idgham kabir**: Susi = yes (extensive assimilation), Duri = no (reads with clarity/idhar)
- **Hamzah (single)**: Susi = substitutes static hamzah (ibdal), Duri = emphasizes (tahqiq) — but both classified as "softened" since both have tashil on doubles
- **Imalah variations**: Different words get different treatment
- **NOT listed as differences**: basmalah, sirat, maaliki, takbir, ra, haKinayah, madd → these are shared. **Basmalah NOT listed as difference** → both share Abu 'Amr's 3 options (not_always)

### 16692 — Al-Bazzi vs Qunbul (Ibn Kathir's narrators, IDs 12 & 13)
Key differences:
- **Sirat**: Bazzi = Sad, Qunbul = Sin
- **Takbir**: Bazzi = yes (Ad-Duha through An-Nas), Qunbul = NO takbir
- **Hamzah**: Different treatment methods
- **Ta doubling**: Bazzi doubles, Qunbul lightens
- **Shared**: Both maliki, both always basmalah, both no imalah, both silat mim al-jam'

### 16694 — Abu al-Harith vs Duri Kisai (Kisa'i's narrators, IDs 8 & 9)
Key differences:
- **Imalah scope**: Duri has broader imalah — imalah on additional words (hudaya, ansari, etc.), alif followed by final kasrah-marked ra, al-kafirun. Abu al-Harith does not imale these.
- **Idgham of lam into dal**: Abu al-Harith does this, Duri does not
- **NOT listed as differences**: basmalah, hamzah, madd, sirat → shared

### 16699 — Hisham vs Ibn Dhakwan (Ibn 'Amir's narrators, IDs 10 & 11)
Key differences:
- **Hamzah**: Hisham = tashil with idkhal on doubles; Ibn Dhakwan = tahqiq (no tashil)
- **Stopping on hamzah**: Hisham = alters final hamzah; Ibn Dhakwan = verifies
- **Idgham**: Hisham = assimilates dal of qad, lam of hal/bal aggressively; Ibn Dhakwan = exhibits (no systematic idgham)
- **Imalah patterns**: Hisham = selective imalah; Ibn Dhakwan = broader imalah
- **NOT listed as differences**: basmalah, sirat, maaliki, madd, takbir, ra → shared. **Basmalah not listed** → both share Ibn 'Amir's options (not_always)

### 16700 — Ruways vs Rawh (Ya'qub's narrators, IDs 17 & 18)
Key differences:
- **Idgham kabir**: Ruways = yes (assimilates), Rawh = no (clear pronunciation)
- **Ha' al-kinayah**: Ruways = shortened (with sila), Rawh = fully lengthened (standard)
- **Hamzah (same word)**: Ruways = eases 2nd hamzah, Rawh = full realization
- **Hamzah (between words)**: Ruways = systematic tashil/ibdal, Rawh = full tahqiq
- **Imalah**: Ruways inclines in al-Sirat and ya-seen; Rawh standard
- **Shared**: Both maliki, both always basmalah, both extra ya', both no takbir

---

## Maaliki/Maliki Reference (Farsh — Al-Fatihah 1:4)
This is farsh, not usul. Verified via scholarly consensus and web sources:
- **Maaliki (long, مَالِكِ)**: 'Asim (Hafs + Shu'bah), Al-Kisa'i (Abu al-Harith + Duri), Khalaf al-'Ashir (Ishaq + Idris) = **6 riwayat**
- **Maliki (short, مَلِكِ)**: Everyone else = **14 riwayat**

---

## Feature Value Summary — All 20 Riwayat

| ID | Name | imalah | maaliki | madd | basmalah | hamzah | takbir | sirat | ra | extraYa | imalahScope | idghamKabir | haKinayah |
|----|------|--------|---------|------|----------|--------|--------|-------|-----|---------|-------------|-------------|-----------|
| 1 | Hafs | none | maaliki | short | always | clear | no | sad | standard | no | none | no | standard |
| 2 | Warsh | partial | maliki | long | not_always | softened | no | sad | thin | no | none | no | standard |
| 3 | Qalun | none | maliki | short | always | softened | no | sad | standard | no | none | no | standard |
| 4 | Duri Abu Amr | partial | maliki | medium | not_always | softened | no | sad | standard | no | none | no | standard |
| 5 | Susi | partial | maliki | medium | not_always | softened | no | sad | standard | no | none | yes | standard |
| 6 | Khalaf Hamzah | heavy | maliki | long | not_always | clear | no | ishmam | standard | no | standard | no | standard |
| 7 | Khallad | heavy | maliki | long | not_always | clear | no | ishmam | standard | no | standard | yes | standard |
| 8 | Abu al-Harith | heavy | maaliki | medium | always | clear | no | sad | standard | no | standard | no | standard |
| 9 | Duri Kisai | heavy | maaliki | medium | always | clear | no | sad | standard | no | broad | no | standard |
| 10 | Hisham | partial | maliki | medium | not_always | softened | no | sad | standard | no | none | yes | standard |
| 11 | Ibn Dhakwan | partial | maliki | medium | not_always | clear | no | sad | standard | no | none | no | standard |
| 12 | Bazzi | none | maliki | medium | always | clear | yes | sad | standard | no | none | no | standard |
| 13 | Qunbul | none | maliki | medium | always | clear | no | sin | standard | no | none | no | standard |
| 14 | Shu'bah | none | maaliki | medium | always | clear | no | sad | standard | no | none | no | standard |
| 15 | Ibn Wardan | none | maliki | short | always | softened | no | sad | standard | no | none | no | with_sila |
| 16 | Ibn Jammaz | none | maliki | short | always | softened | no | sad | standard | no | none | no | standard |
| 17 | Ruways | none | maliki | medium | always | softened | no | sad | standard | yes | none | yes | with_sila |
| 18 | Rawh | none | maliki | medium | always | clear | no | sad | standard | yes | none | no | standard |
| 19 | Ishaq | heavy | maaliki | medium | not_always | clear | no | sad | standard | no | standard | yes | standard |
| 20 | Idris | heavy | maaliki | medium | not_always | clear | no | sad | standard | no | standard | no | standard |
