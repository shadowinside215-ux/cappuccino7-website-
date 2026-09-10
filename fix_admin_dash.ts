import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /\} catch \(err: any\) \{ alert\(err\.message\); \}\n  \};/,
  `} catch (err: any) { alert(err.message); } finally { setIsUploading(false); }
  };`
);

writeFileSync(path, content);
