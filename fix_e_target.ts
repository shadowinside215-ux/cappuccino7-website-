import { readFileSync, writeFileSync } from 'fs';

let path1 = 'src/components/Hero.tsx';
let content1 = readFileSync(path1, 'utf8');
content1 = content1.replace(
  /setIsUploading\(false\);\n\s*\} catch/g,
  `setIsUploading(false);
      if (e.target) e.target.value = '';
    } catch`
);
writeFileSync(path1, content1);

let path2 = 'src/components/Admin/AdminDashboard.tsx';
let content2 = readFileSync(path2, 'utf8');
content2 = content2.replace(
  /setIsUploading\(false\);\n\s*\} catch/g,
  `setIsUploading(false);
      if (e.target) e.target.value = '';
    } catch`
);
// Also for Admin catch block:
content2 = content2.replace(
  /\} catch \(err: any\) \{ setIsUploading\(false\); alert\(err\.message\); \}/,
  `} catch (err: any) { setIsUploading(false); if (e.target) e.target.value = ''; alert(err.message); }`
);
writeFileSync(path2, content2);

