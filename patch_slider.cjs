const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

text = text.replace(
  /onChange=\{\(e\) => \{\n\s*document\.getElementById\('posVal'\)\.innerText = e\.target\.value \+ '%';\n\s*\}\}/g,
  `onChange={(e) => {
                  document.getElementById('posVal')!.innerText = e.target.value + '%';
                }}
                onMouseUp={async (e: any) => {
                  await setDoc(doc(db, 'settings', 'global'), { ...settings, mobileVideoPositionX: Number(e.target.value) }, { merge: true });
                }}
                onTouchEnd={async (e: any) => {
                  await setDoc(doc(db, 'settings', 'global'), { ...settings, mobileVideoPositionX: Number(e.target.value) }, { merge: true });
                }}`
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
