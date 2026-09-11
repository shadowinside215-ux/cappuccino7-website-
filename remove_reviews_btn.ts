import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Reviews.tsx';
let content = readFileSync(path, 'utf8');

const target = `        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 text-latte-cream hover:text-white transition-colors group"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Read All Google Reviews</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              →
            </motion.span>
          </a>
        </div>`;

content = content.replace(target, "");

writeFileSync(path, content);
