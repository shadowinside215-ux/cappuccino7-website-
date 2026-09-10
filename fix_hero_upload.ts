import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Hero.tsx';
let content = readFileSync(path, 'utf8');

// The isAdmin section
const regexAdmin = /\{isAdmin && \(\n          <div className="absolute inset-0 bg-black\/40 flex flex-row items-center justify-center gap-8 opacity-0 hover:opacity-100 transition-all text-white z-10">/;
const replacementAdmin = `{isUploading && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white z-20">
             <div className="w-12 h-12 border-4 border-coffee-brown border-t-transparent rounded-full animate-spin mb-4" />
             <span className="text-sm font-bold uppercase tracking-widest text-coffee-brown">Uploading Media...</span>
          </div>
        )}
        {isAdmin && !isUploading && (
          <div className="absolute inset-0 bg-black/40 flex flex-row items-center justify-center gap-8 opacity-0 hover:opacity-100 transition-all text-white z-10">`;

content = content.replace(regexAdmin, replacementAdmin);

writeFileSync(path, content);
