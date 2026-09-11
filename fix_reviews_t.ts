import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Reviews.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(/"\{review\.comment\}"/, '"{t(`review.comment.${idx}`) || review.comment}"');
content = content.replace(/\{review\.author\}/, '{t(`review.author.${idx}`) || review.author}');
content = content.replace(/\{review\.date\}/, '{t(`review.date.${idx}`) || review.date}');

writeFileSync(path, content);
