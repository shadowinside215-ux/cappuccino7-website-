import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Hero.tsx';
let content = readFileSync(path, 'utf8');

const regex = /\} catch \(err: any\) \{\n\s*alert\(err\.message\);\n\s*\} finally \{\n\s*setIsUploading\(false\);\n\s*if \(e\.target\) e\.target\.value = '';\n\s*\}/;
const replacement = `} catch (err: any) {
      setIsUploading(false);
      if (e.target) e.target.value = '';
      alert(err.message);
    }`;

content = content.replace(regex, replacement);

writeFileSync(path, content);
