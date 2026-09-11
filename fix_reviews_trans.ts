import { readFileSync, writeFileSync } from 'fs';

let path = 'src/lib/i18n.tsx';
let content = readFileSync(path, 'utf8');

// en
content = content.replace(/'about\.stat2': 'Happy Guests',/g, "'about.stat2': 'Happy Guests',\n    'reviews.title': 'Voices of Salé',\n    'reviews.subtitle': 'Rated 4.8/5 by 2,800+ guests on Google',");
// fr
content = content.replace(/'about\.stat2': 'Clients heureux',/g, "'about.stat2': 'Clients heureux',\n    'reviews.title': 'Les Voix de Salé',\n    'reviews.subtitle': 'Noté 4.8/5 par plus de 2,800 clients sur Google',");
// ar
content = content.replace(/'about\.stat2': 'ضيوف سعداء',/g, "'about.stat2': 'ضيوف سعداء',\n    'reviews.title': 'أصوات من سلا',\n    'reviews.subtitle': 'تقييم 4.8/5 من أكثر من 2,800 ضيف على جوجل',");

writeFileSync(path, content);

let revPath = 'src/components/Reviews.tsx';
let revContent = readFileSync(revPath, 'utf8');
revContent = revContent.replace(/import \{ REVIEWS \} from '\.\.\/constants';/, "import { REVIEWS } from '../constants';\nimport { useTranslation } from '../lib/i18n';");
revContent = revContent.replace(/export default function Reviews\(\) \{/, "export default function Reviews() {\n  const { t } = useTranslation();");
revContent = revContent.replace(/Voices of Salé/, "{t('reviews.title')}");
revContent = revContent.replace(/Rated 4.8\/5 by 2,800\+ guests on Google/, "{t('reviews.subtitle')}");
writeFileSync(revPath, revContent);
