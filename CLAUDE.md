# Riwayat Identifier — Project Rules

## Data Integrity Rules

### When changing any riwayah feature value:
1. **Always update both files**: `data/riwayat.json` AND `riwayat-identifier.jsx` — they must stay in sync
2. **Check the other narrator**: Both narrators of the same qari share qari-level usul. If you change a value for one narrator, ask: "Is this a qari-level rule or a rawi-level distinction?" If qari-level, change both.
3. **Check comparison pages**: If a comparison page (nquran) does NOT list a feature as a difference between two narrators, they must have the same value.
4. **Log every correction**: Add a row to `data/sources.md` corrections log with date, riwayah, field, old value, new value, and source.
5. **Update traits array**: If a feature value changes, check if the traits array in `riwayat-identifier.jsx` needs updating to match.
6. **Run narrator-pair check**: After any data change, run the consistency check:
   ```
   node -e "const d=require('./data/riwayat.json');const q={};d.riwayat.forEach(r=>{if(!q[r.qari])q[r.qari]=[];q[r.qari].push(r)});Object.entries(q).forEach(([k,v])=>{if(v.length!==2)return;const[a,b]=v;Object.keys(a.features).forEach(f=>{if(a.features[f]!==b.features[f])console.log(k+': '+f+': '+a.name+'='+a.features[f]+' vs '+b.name+'='+b.features[f])})})"
   ```
   Every difference shown must be a known rawi-level distinction, not a missed shared rule.

### Source of truth hierarchy:
1. `data/sources/nquran-verification.md` — fetched nquran.com page data (local, deterministic)
2. `data/riwayat.json` — canonical app data (must match sources)
3. `riwayat-identifier.jsx` — must exactly mirror riwayat.json features
4. `src/guide.jsx` EXTRA_FEATURES — supplementary features not in the identifier

### Known rawi-level distinctions (these SHOULD differ between narrators):
- Nafi': Warsh has imalah/long madd/thin ra'/basmalah options; Qalun does not
- Abu 'Amr: Susi has idgham kabir; Duri does not
- Ibn 'Amir: Hisham has idgham kabir + softened hamzah; Ibn Dhakwan does not
- Ibn Kathir: Bazzi has takbir + sad sirat; Qunbul has no takbir + sin sirat
- Kisa'i: Duri has broad imalah scope; Abu al-Harith has standard
- Abu Ja'far: Ibn Wardan has ha' kinayah with sila; Ibn Jammaz does not
- Ya'qub: Ruways has idgham kabir + softened hamzah + ha' kinayah sila; Rawh does not
- Khalaf al-'Ashir: Ishaq has idgham kabir; Idris does not
- 'Asim: Hafs has short madd munfasil; Shu'bah has medium
- Hamzah: Khalaf has sakt before hamzah + no idgham kabir; Khallad has no sakt + idgham kabir

## All data follows Tariq al-Tayyibah
Verified against nquran.com and An-Nashr fi al-Qira'at al-'Ashr. Do not mix in Shatibiyyah-specific values. The Shatibiyyah PDF is for cross-referencing only — discrepancies are tariq differences, not errors.
