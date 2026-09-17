const fs = require('fs');
let text = fs.readFileSync('src/components/Menu.tsx', 'utf-8');

const regex = /\{settings\?\.menuPdfUrl\s*&&\s*\(\s*<div.*?<\/div>\s*\)\s*\}/gs;
text = text.replace(regex, '');

const pdfButton = `
          {settings?.menuPdfUrl && (
            <div className="flex justify-center mb-12">
              <a
                href={settings.menuPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-espresso-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-coffee-brown transition-colors shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
              >
                <Download size={16} /> {t('menu.download_pdf') || 'Download Menu PDF'}
              </a>
            </div>
          )}
`;

text = text.replace(
  "<AnimatePresence mode=\"wait\">",
  pdfButton + "\n        <AnimatePresence mode=\"wait\">"
);

fs.writeFileSync('src/components/Menu.tsx', text);
