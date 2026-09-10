import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

// I replaced } catch (err: any) { alert(err.message); } finally { setIsUploading(false); }
// with } catch (err: any) { setIsUploading(false); alert(err.message); }

content = content.replace(
  /await setDoc\(doc\(db, 'settings', 'global'\), \{ \.\.\.settings, heroImage: url, heroVideo: '' \}, \{ merge: true \}\);\n\s*\}\n\s*\} catch \(err: any\) \{/g,
  `await setDoc(doc(db, 'settings', 'global'), { ...settings, heroImage: url, heroVideo: '' }, { merge: true });
      }
      setIsUploading(false);
    } catch (err: any) {`
);

writeFileSync(path, content);
