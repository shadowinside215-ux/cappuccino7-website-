import { readFileSync, writeFileSync } from 'fs';

let path = 'src/lib/i18n.tsx';
let content = readFileSync(path, 'utf8');

// Update Hero Title in English
content = content.replace(
  /'hero\.title': 'The Best Coffee Experience in Salé el jadida',/,
  "'hero.title': 'The Best Coffee Experience in Sale el jadida',"
);

// Update Loyalty Description in English
content = content.replace(
  /'menu\.loyalty\.desc': 'Collect 11 Stamps on any drink or dish to unlock it for free! Every DH spent also earns you points for elite status gifts\.',/,
  "'menu.loyalty.desc': 'Collect 11 Stamps on any drink or dish to unlock it for free!',"
);

// Update Loyalty Description in French
content = content.replace(
  /'menu\.loyalty\.desc': 'Collectionnez 11 timbres sur n\\'importe quelle boisson ou plat pour le débloquer gratuitement ! Chaque DH dépensé vous rapporte également des points pour des cadeaux de statut élite\.',/,
  "'menu.loyalty.desc': 'Collectionnez 11 timbres sur n\\'importe quelle boisson ou plat pour le débloquer gratuitement !',"
);

// Update Loyalty Description in Arabic
content = content.replace(
  /'menu\.loyalty\.desc': 'اجمع 11 طابعاً على أي مشروب أو طبق للحصول عليه مجاناً! كل درهم تنفقه يمنحك أيضاً نقاطاً لهدايا النخبة\.',/,
  "'menu.loyalty.desc': 'اجمع 11 طابعاً على أي مشروب أو طبق للحصول عليه مجاناً!',"
);

writeFileSync(path, content);
