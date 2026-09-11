import { readFileSync, writeFileSync } from 'fs';

let loyaltyPath = 'src/components/LoyaltySection.tsx';
let loyaltyContent = readFileSync(loyaltyPath, 'utf8');

// Remove Elite points section
loyaltyContent = loyaltyContent.replace(/<div className="flex items-center gap-5 text-white bg-white\/5 p-4 rounded-2xl border border-white\/10 backdrop-blur-sm">[\s\S]*?<Gift size=\{24\} \/>[\s\S]*?<\/div>[\s\S]*?<div>[\s\S]*?<h4 className="font-bold text-lg mb-1">\{t\('loyalty\.points'\)\}<\/h4>[\s\S]*?<p className="text-gray-400 text-sm">\{t\('loyalty\.pointsDesc'\)\}<\/p>[\s\S]*?<\/div>[\s\S]*?<\/div>/, '');

// Also remove the gift icon floating behind phone
loyaltyContent = loyaltyContent.replace(/<motion\.div\s*animate=\{\{ y: \[0, 20, 0\] \}\}[\s\S]*?<Gift className="text-white w-8 h-8" \/>\s*<\/motion\.div>/, '');

writeFileSync(loyaltyPath, loyaltyContent);
