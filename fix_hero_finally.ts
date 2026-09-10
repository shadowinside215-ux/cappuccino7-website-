import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Hero.tsx';
let content = readFileSync(path, 'utf8');

// I replaced catch and finally with just catch. I need to ensure success also sets isUploading(false).
// Wait, the new code looks like:
// await setDoc(doc(db, 'settings', 'global'), newSettings, { merge: true });
// } catch (err: any) { ... }

content = content.replace(
  /await setDoc\(doc\(db, 'settings', 'global'\), newSettings, \{ merge: true \}\);\n\s*\} catch \(err: any\) \{/g,
  `await setDoc(doc(db, 'settings', 'global'), newSettings, { merge: true });
      setIsUploading(false);
    } catch (err: any) {`
);

writeFileSync(path, content);
