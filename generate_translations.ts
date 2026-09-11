import { readFileSync, writeFileSync } from 'fs';
import { MENU_ITEMS, REVIEWS } from './src/constants';

let i18nPath = 'src/lib/i18n.tsx';
let content = readFileSync(i18nPath, 'utf8');

// I will just add standard English keys and pseudo-translate or rely on some basic translations for FR/AR.
// Actually, they want them translated. I will inject a block into i18n.tsx.

let frMenuDict: Record<string, string> = {
  'Special hot drinks': 'Boissons chaudes spéciales',
  'Iced latté': 'Latte glacé',
  'Ice Tea': 'Thé glacé',
  'Jus': 'Jus',
  'Frappuccinos coffee': 'Frappuccinos café',
  'Milkshakes': 'Milkshakes',
  'Smoothies': 'Smoothies',
  'Mojitos': 'Mojitos',
  'Espresso': 'Espresso',
  'Coffee': 'Café',
  'citron, pomme, gingembre, feuilles de menthe': 'citron, pomme, gingembre, feuilles de menthe',
  'fruits rouges, fruits de saison, menthe': 'fruits rouges, fruits de saison, menthe',
  'mangue, banane, fruit de la passion': 'mangue, banane, fruit de la passion',
  'ananas, pêche, melon et yaourt': 'ananas, pêche, melon et yaourt'
};

let arMenuDict: Record<string, string> = {
  'Special hot drinks': 'مشروبات ساخنة خاصة',
  'Iced latté': 'لاتيه مثلج',
  'Ice Tea': 'شاي مثلج',
  'Jus': 'عصير',
  'Frappuccinos coffee': 'فرابوتشينو قهوة',
  'Milkshakes': 'ميلك شيك',
  'Smoothies': 'عصائر سموثي',
  'Mojitos': 'موهيتو',
  'Caramel & cream': 'كراميل وكريمة',
  'Noisette': 'بندق',
  'Happy moka': 'موكا سعيد',
  'Pêche': 'خوخ',
  'Citron': 'ليمون',
  'Framboise': 'توت العليق',
  'Orange': 'برتقال',
  'Carotte': 'جزر',
  'Pomme': 'تفاح',
  'Banane': 'موز',
  'Mangue': 'مانجو',
  'Fraise': 'فراولة',
  'Ananas': 'أناناس',
  'Kiwi': 'كيوي',
  'Panaché': 'باناشي',
  'Avocat fruits secs': 'أفوكادو وفواكه جافة',
  'Zaazaa': 'زعزع',
  'Caramel Beurre salé': 'كراميل بالزبدة المملحة',
  'Moka Chocolate': 'موكا شوكولاتة',
  'Amaretto': 'أماريتو',
  'Carmel Shake': 'ميلك شيك كراميل',
  'Orange shake': 'ميلك شيك برتقال',
  'Mixed berries (fruits rouges)': 'فواكه مشكلة (فواكه حمراء)',
  'Mango Alphonso': 'مانجو ألفونسو',
  'Chocolat Oreo': 'شوكولاتة أوريو',
  'Fruit de la passion': 'فاكهة العاطفة',
  'Detox Maison': 'ديتوكس منزلي',
  'Berry Explosion': 'انفجار التوت',
  'Mango Madness': 'جنون المانجو',
  'Tropical paradise': 'جنة استوائية',
  'Classique': 'كلاسيك',
  'Mango mojito': 'موهيتو مانجو',
  'Berries mojito': 'موهيتو التوت',
  'Passion mojito': 'موهيتو باشن فروت',
  'Ananas mojito': 'موهيتو أناناس',
  'Blue mojito': 'موهيتو أزرق',
  'Concombre mojito': 'موهيتو خيار',
  'Strawberry mojito': 'موهيتو فراولة',
  'citron, pomme, gingembre, feuilles de menthe': 'ليمون، تفاح، زنجبيل، أوراق نعناع',
  'fruits rouges, fruits de saison, menthe': 'فواكه حمراء، فواكه موسمية، نعناع',
  'mangue, banane, fruit de la passion': 'مانجو، موز، باشن فروت',
  'ananas, pêche, melon et yaourt': 'أناناس، خوخ، شمام وزبادي'
};

// Also let's extract reviews.
let enReviews: Record<string, string> = {};
let frReviews: Record<string, string> = {};
let arReviews: Record<string, string> = {};

REVIEWS.forEach((r, i) => {
  enReviews[`review.author.${i}`] = r.author;
  enReviews[`review.comment.${i}`] = r.comment;
  enReviews[`review.date.${i}`] = r.date;

  frReviews[`review.author.${i}`] = r.author;
  frReviews[`review.date.${i}`] = r.date.replace('month ago', 'mois').replace('months ago', 'mois');
  // I will just let Google Translate or simple strings handle comments, but I'll write some basic translations
});

frReviews[`review.comment.0`] = "J'ai visité ce restaurant plusieurs fois et c'est la meilleure expérience que je pouvais demander. La nourriture est fraîchement préparée avec une grande variété de plats. Le service est amical et rapide.";
arReviews[`review.comment.0`] = "لقد زرت هذا المطعم عدة مرات وهي أفضل تجربة يمكن أن أطلبها. يتم تحضير الطعام طازجًا مع مجموعة كبيرة ومتنوعة من الأطباق. الخدمة ودودة وسريعة.";

frReviews[`review.comment.1`] = "Magnifique endroit pour prendre un café avec une ambiance très relaxante. L'endroit est propre, le café est délicieux et c'est parfait pour se détendre ou travailler un peu.";
arReviews[`review.comment.1`] = "مكان جميل لتناول القهوة مع جو مريح للغاية. المكان نظيف والقهوة طعمها رائع، وهو مثالي للاسترخاء أو العمل قليلاً.";

frReviews[`review.comment.2`] = "Première visite, et l'expérience a été surprenante. Bel endroit mais un peu différent de ce à quoi je m'attendais d'après les autres avis. Vaut quand même le détour pour le café.";
arReviews[`review.comment.2`] = "الزيارة الأولى، وكانت التجربة مفاجئة. مكان جميل ولكنه يختلف قليلاً عما توقعته بناءً على مراجعات أخرى. لا يزال يستحق الزيارة من أجل القهوة.";

frReviews[`review.comment.3`] = "Excellent service avec une nourriture incroyable ❤️❤️";
arReviews[`review.comment.3`] = "خدمة ممتازة بالإضافة إلى طعام مذهل ❤️❤️";

frReviews[`review.comment.4`] = "C'est la première fois que je visite ce café après avoir vu leurs notes élevées sur Google. L'expérience s'est avérée être exactement comme décrite par de nombreux clients. L'endroit est absolument incroyable!";
arReviews[`review.comment.4`] = "هذه هي المرة الأولى التي أزور فيها هذا المقهى بعد رؤية تقييماتهم العالية على جوجل. التجربة كانت تمامًا كما وصفها العديد من العملاء. المكان مذهل تمامًا!";

frReviews[`review.comment.5`] = "L'un des meilleurs endroits à Sala Al Jadida, le propriétaire est très axé sur le client. Nous adorons être ici!";
arReviews[`review.comment.5`] = "من أفضل الأماكن في سلا الجديدة، المالك مهتم جدًا بالعملاء. نحن نحب هذا المكان!";

frReviews[`review.comment.6`] = "Excellent service et grande variété d'options au menu. Youssef était particulièrement amical et attentif, il mérite une bonne augmentation :)";
arReviews[`review.comment.6`] = "خدمة رائعة ومجموعة متنوعة واسعة من خيارات القائمة. يوسف كان ودودًا ومنتبهًا بشكل خاص، ويستحق زيادة جيدة :)";

frReviews[`review.comment.7`] = "Le meilleur endroit de tous les temps ❤️😫";
arReviews[`review.comment.7`] = "أفضل مكان على الإطلاق ❤️😫";

frReviews[`review.comment.8`] = "J'ai passé un excellent moment dans ce merveilleux café à cet endroit magnifique. Je ne saurais trop en dire sur la qualité de la nourriture, l'ambiance et la gentillesse du personnel.";
arReviews[`review.comment.8`] = "لقد قضيت وقتًا رائعًا في هذا المقهى الرائع في هذا المكان الرائع. لا أستطيع أن أقول ما يكفي عن جودة الطعام والجو العام ولطف الموظفين.";

frReviews[`review.comment.9`] = "Ambiance calme et excellent service";
arReviews[`review.comment.9`] = "جو هادئ وخدمة رائعة";

frReviews[`review.comment.10`] = "Un grand merci à toute l'équipe pour l'excellent service et la nourriture de haute qualité. L'accueil est chaleureux et le service est rapide et professionnel.";
arReviews[`review.comment.10`] = "شكر كبير للفريق بأكمله على الخدمة الممتازة والطعام عالي الجودة. الترحيب حار والخدمة سريعة ومهنية.";

frReviews[`review.comment.11`] = "La nourriture était vraiment fraîche, bien présentée et copieuse. Notre serveur m'a vu avoir des difficultés à utiliser la Darija et est passé à l'anglais, ce qui était très attentionné.";
arReviews[`review.comment.11`] = "كان الطعام طازجًا جدًا ومقدمًا بشكل جيد ووفيرًا. رأى النادل أنني أواجه صعوبة في استخدام الدارجة وتحول إلى اللغة الإنجليزية، وهو ما كان تفكيرًا جيدًا.";

frReviews[`review.comment.12`] = "Service incroyable et rapide au top ❤️🔥";
arReviews[`review.comment.12`] = "خدمة مذهلة وسريعة للغاية ❤️🔥";

frReviews[`review.comment.13`] = "Endroit incroyable et nourriture délicieuse. Par-dessus tout, l'ambiance est envoûtante !!";
arReviews[`review.comment.13`] = "مكان مذهل وطعام لذيذ. وفوق كل شيء، الأجواء ساحرة !!";

function injectTranslations(content: string, lang: string, transDict: Record<string, string>) {
  let block = "";
  for (const [k, v] of Object.entries(transDict)) {
    block += `    '${k}': \`${v.replace(/'/g, "\\'")}\`,\n`;
  }
  return content.replace(new RegExp(`(${lang}: \\{\\n)`), `$1${block}`);
}

content = injectTranslations(content, 'en', enReviews);
content = injectTranslations(content, 'fr', { ...frMenuDict, ...frReviews });
content = injectTranslations(content, 'ar', { ...arMenuDict, ...arReviews });

writeFileSync(i18nPath, content);
