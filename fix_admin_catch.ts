import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

const regex = /\} catch \(err: any\) \{ alert\(err\.message\); \} finally \{ setIsUploading\(false\); \}/g;
const replacement = `} catch (err: any) { setIsUploading(false); alert(err.message); }`;

content = content.replace(regex, replacement);

writeFileSync(path, content);
