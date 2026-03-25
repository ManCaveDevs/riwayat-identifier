# nquran.com Source Verification
Fetched 2026-03-25. All pages from https://www.nquran.com/ar/

## Individual Usul Pages

### 16681 — Warsh 'an Nafi'
- Basmalah: 3 options (basmalah, sakt, wasl) → **not_always**
- Takbir: No
- Madd munfasil/muttasil: 6 harakaat (ishba') → **long**
- Madd badl: 3 options (qasr, tawassut, tul)
- Hamzah: Softened (tashil on doubles, ibdal on singles, naql)
- Imalah: Taqlil on ya-origin alifs, 11 surah endings → **partial**
- Ra': Tarqiq when preceded by ya/kasrah → **thin**
- Taghlith lam: Yes (before sad, zaa, taa)
- Naql: Yes (transfers hamza vowel to preceding consonant)
- Sirat: Not explicitly mentioned → assumed **sad** (default)
- Idgham: Some (dal of qad into dal/zaa, dhal into ta, ta ta'nith into zaa) — limited, not systematic idgham kabir

### 16680 — Qalun 'an Nafi'
- Basmalah: Always (reads bismillah between surahs)
- Takbir: No
- Madd munfasil: Qasr (2) or tawassut (4) → **short**
- Madd muttasil: Tawassut (4)
- **Hamzah: Has tashil on double hamzahs** (same word: tashil 2nd with idkhal; two words: drops 1st when both fatha, tashil otherwise) → should be **softened**
- Single hamza: Mostly tahqiq (clear) with some ibdal
- Imalah: None except هار with imalah kubra
- Silat mim al-jam': Optional (with khulf)
- Naql: Very limited (3 words only)

### 16679 — Al-Duri 'an Abu 'Amr
- (Referenced but not re-fetched — see comparison page 16698)

### 16678 — Khallad 'an Hamzah
- Basmalah: Omits between surahs → **not_always**
- Takbir: No
- Madd munfasil/muttasil: 6 harakaat → **long**
- **Sirat: Ishmam of sad with zay sound in Umm al-Kitab (Fatihah) ONLY; sad elsewhere**
- Hamzah: Full realization (tahqiq) of double hamzahs → **clear**
- **Idgham kabir: YES — extensive** (dhal of idh into sibilants, dal of qad into 8 letters, ta ta'nith into 6 letters, lam of hal/bal into ta/tha/sin, plus more)
- Imalah: Heavy — all ya-origin alifs, feminine alif endings, alifs written as ya, 10 verbs, 11 surah endings, 5 surah-opening letters → **heavy**
- Imalah scope: **standard** (same positions as Khalaf, not as broad as Duri Kisai)
- Sakt: Not mentioned for Khallad (sakt is Khalaf's distinction)

### 16677 — Ibn Dhakwan 'an Ibn 'Amir
- **Basmalah: 3 options** (bismillah, pause, connection) → should be **not_always**
- Madd munfasil: 4 harakaat → **medium**
- Hamzah: Full realization of doubles → **clear**
- **Imalah: Extensive use** — words with fatha before final alif-raa, alif of past-tense verbs, specific documented words → should NOT be **none**
- Idgham: Dhal into some letters; less aggressive than Hisham

### 16682 — Abu Ja'far
- (Not re-fetched this session)

### 16683 — Khalaf al-'Ashir
- (Not re-fetched this session)

## Comparison Pages

### 16698 — Al-Duri vs Al-Susi (Abu 'Amr)
Key differences:
- **Idgham Kabir**: Susi = yes (extensive), Duri = no (reads with clarity)
- **Hamzah (single)**: Susi = substitutes static hamzah (ibdal), Duri = emphasizes (tahqiq)
- **Imalah variations**: Different words get different treatment between the two
- **Basmalah: NOT mentioned as a difference** → both share same rule. Since Duri = not_always, **Susi should also be not_always**

### 16692 — Al-Bazzi vs Qunbul (Ibn Kathir)
Key differences:
- **Sirat**: Bazzi = **Sad**, Qunbul = **Sin** (confirmed)
- **Takbir**: Bazzi = yes (Ad-Duha through An-Nas), Qunbul = no
- **Hamzah**: Different treatment methods between the two
- **Ta' doubling**: Bazzi doubles, Qunbul lightens

**NOTE on Takbir**: nquran says Bazzi transmits takbir but Qunbul does NOT. Our data has both as "yes" — **Qunbul's takbir needs verification**.

### 16694 — Abu al-Harith vs Duri (Kisa'i)
- (Not re-fetched this session — previously verified)

### 16699 — Hisham vs Ibn Dhakwan (Ibn 'Amir)
Key differences:
- **Hamzah**: Hisham = tashil with idkhal; Ibn Dhakwan = tahqiq
- **Stopping on hamzah**: Hisham = alters final hamzah; Ibn Dhakwan = verifies
- **Idgham**: Hisham = assimilates dal of qad, lam of hal/bal aggressively; Ibn Dhakwan = exhibits
- **Imalah**: Hisham = selective imalah; **Ibn Dhakwan = broader imalah**
- **Basmalah**: Not mentioned as a difference between them

### 16700 — Ruways vs Rawh (Ya'qub)
- (Not re-fetched this session — previously verified)

---

## Issues Resolved

### Issue 1: Al-Susi basmalah
**Finding**: Duri vs Susi comparison page does NOT list basmalah as a difference.
**Resolution**: Both share Abu 'Amr's basmalah rule. Since Duri = not_always, **Susi should be not_always**.

### Issue 2: Al-Bazzi sirat
**Finding**: Confirmed Bazzi = Sad, Qunbul = Sin.
**Resolution**: Our data is correct. No change needed.

### Issue 2b: Qunbul takbir (NEW)
**Finding**: nquran says Bazzi transmits takbir, Qunbul does NOT.
**Resolution**: **Qunbul takbir should be "no"**, not "yes".

### Issue 3: Khallad idghamKabir
**Finding**: nquran shows extensive idgham — dhal, dal, ta, lam, and more across many positions.
**Resolution**: This IS legitimate idgham kabir. Our "yes" is correct.

### Issue 4: Khallad sirat
**Finding**: nquran explicitly says "ishmam of sad with zay sound in Umm al-Kitab only."
**Resolution**: Value "sad" is a simplification. Could be "ishmam" since it does occur in Fatihah. Current approach (sad with note) is defensible but inconsistent with Khalaf who gets "ishmam". **Consider changing to "ishmam"** for consistency since both narrators have ishmam in Fatihah.

### Issue 5: Ibn Dhakwan basmalah + imalah
**Finding**: nquran says basmalah has 3 options (not always). Also shows extensive imalah use.
**Resolution**: **basmalah should be "not_always"**. **imalah needs investigation** — if it's extensive imalah, it shouldn't be "none".

### Issue 6: Qalun hamzah
**Finding**: nquran confirms tashil on double hamzahs (both same-word and cross-word).
**Resolution**: **Should be "softened"** for consistency with Hisham who gets "softened" for same reason.
