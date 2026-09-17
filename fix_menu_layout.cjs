const fs = require('fs');
let text = fs.readFileSync('src/components/Menu.tsx', 'utf-8');

// Remove the old PDF button
const oldPdfRegex = /\{settings\?\.menuPdfUrl\s*&&\s*\(\s*<div className="flex justify-center mb-12">[\s\S]*?<\/div>\s*\)\s*\}/gs;
text = text.replace(oldPdfRegex, '');

// Add the new section at the end of the max-w-7xl container, below the menu grid
const newPdfSection = `
        {settings?.menuPdfUrl && (
          <div className="mt-20 pt-16 border-t border-coffee-brown/20 flex flex-col items-center text-center">
            <h3 className="font-serif text-3xl font-bold text-espresso-dark mb-4">
              {t('menu.download_pdf_title') || 'Download Our Full Menu'}
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl text-lg font-light">
              {t('menu.download_pdf_desc') || 'Want to keep a copy? Download our complete menu in PDF format to view all our offerings at your convenience.'}
            </p>
            <a
              href={settings.menuPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-espresso-dark text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-coffee-brown transition-all shadow-xl hover:shadow-coffee-brown/40 flex items-center gap-3 transform hover:-translate-y-1"
            >
              <Download size={20} /> {t('menu.download_pdf') || 'Download Menu PDF'}
            </a>
          </div>
        )}
      </div>
    </section>
`;

text = text.replace(
  "      </div>\n    </section>",
  newPdfSection
);

fs.writeFileSync('src/components/Menu.tsx', text);
