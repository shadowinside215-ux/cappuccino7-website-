const fs = require('fs');

let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

const positionSlider = `
          <div className="pt-6 border-t border-beige-light">
            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Mobile Video Alignment (Left/Right)</label>
            <p className="text-[10px] text-gray-500 mb-3">Adjust how the video is positioned on mobile devices. (0 = Left, 50 = Center, 100 = Right)</p>
            <div className="flex items-center gap-4">
              <input 
                type="range" 
                min="0" 
                max="100" 
                name="mobileVideoPositionX" 
                defaultValue={settings?.mobileVideoPositionX ?? 15}
                className="w-full accent-coffee-brown"
                onChange={(e) => {
                  document.getElementById('posVal').innerText = e.target.value + '%';
                }}
              />
              <span id="posVal" className="text-xs font-bold text-coffee-brown w-10">{settings?.mobileVideoPositionX ?? 15}%</span>
            </div>
          </div>
`;

text = text.replace(
  '<textarea name="heroSubtitle" defaultValue={settings?.heroSubtitle} className="w-full border border-beige-light rounded-xl px-4 py-3 h-24" />\n          </div>',
  '<textarea name="heroSubtitle" defaultValue={settings?.heroSubtitle} className="w-full border border-beige-light rounded-xl px-4 py-3 h-24" />\n          </div>' + positionSlider
);

text = text.replace(
  'const data = Object.fromEntries(new FormData(e.target));',
  'const data = Object.fromEntries(new FormData(e.target));\n    if (data.mobileVideoPositionX) data.mobileVideoPositionX = Number(data.mobileVideoPositionX);'
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
