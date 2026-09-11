import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let content = readFileSync(heroPath, 'utf8');

const targetBlock = `<div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img 
            src={settings?.logoUrl || "/input_file_1.png"} 
            alt="Cappuccino 7" 
            className="h-32 md:h-48 w-auto mx-auto mb-6 drop-shadow-2xl" 
            referrerPolicy="no-referrer" 
          />
          <h2 className="font-serif text-2xl md:text-3xl text-white font-bold leading-tight mb-8 drop-shadow-2xl max-w-3xl mx-auto">
            {title === "The best experience in sale el jadida" ? "The Best Coffee Experience in Salé El Jadida" : title}
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">`;

const replaceBlock = `<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start mt-32 md:mt-40">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight mb-6 drop-shadow-2xl max-w-2xl text-left">
            {title === "The best experience in sale el jadida" ? "The Best Coffee Experience in Salé El Jadida" : title}
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed drop-shadow-md text-left">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">`;

content = content.replace(targetBlock, replaceBlock);
writeFileSync(heroPath, content);
