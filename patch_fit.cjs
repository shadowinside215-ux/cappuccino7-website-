const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

const fitToggle = `
          <div className="pt-6 border-t border-beige-light">
            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Mobile Video Display Mode</label>
            <select name="mobileVideoFit" defaultValue={settings?.mobileVideoFit || 'cover'} className="w-full border border-beige-light rounded-xl px-4 py-3 bg-white">
              <option value="cover">Fill Screen (Cropped, no borders)</option>
              <option value="contain">Show Entire Video (Adds black bars)</option>
            </select>
          </div>
`;

text = text.replace(
  '<div className="pt-6 border-t border-beige-light">\n            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Mobile Video Alignment (Left/Right)</label>',
  fitToggle + '\n          <div className="pt-6 border-t border-beige-light">\n            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Mobile Video Alignment (Left/Right)</label>'
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
