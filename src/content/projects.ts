export type Shot = { src: string; alt: string; caption?: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Couleur propre au projet, utilisée pour teinter la scène. */
  accent: string;
  /** Appareil mis en avant dans la section Projets. */
  device: "browser" | "phone";
  /** Adresse affichée dans la barre du navigateur. */
  url: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  links?: { site?: string; store?: string };
  /** Affiché quand il n'y a pas encore de lien public. */
  note?: string;
  /** Captures dans public/projets/<slug>/ : ordinateur 16:10, mobile 390x844. */
  cover: Shot;
  mobile: Shot;
  /** Texte de la barre d'état du téléphone : "light" si la capture mobile a un fond sombre. */
  statusBar?: "dark" | "light";
  gallery: Shot[];
};

const shot = (slug: string, name: string, alt: string, caption?: string): Shot => ({
  src: `/projets/${slug}/${name}.webp`,
  alt,
  caption,
});

export const projects: Project[] = [
  {
    slug: "zalonini",
    title: "Zalonini Coffee",
    category: "Boutique en ligne d'un torréfacteur",
    accent: "#b8642e",
    device: "browser",
    url: "zalonini-coffee-roasters-3.myshopify.com",
    summary:
      "La boutique Shopify d'un torréfacteur alsacien : un thème sur mesure, chaleureux et artisanal, fidèle à ses cafés.",
    problem:
      "Bruno torréfie en petites quantités et vend surtout sur les marchés. Il voulait une boutique en ligne qui lui ressemble : authentique et humble, loin des sites de café génériques.",
    solution:
      "Un thème Shopify écrit de zéro, ajusté au fil de plusieurs séries de retours du client : fiches détaillées pour chaque lot, comparateur café vert et torréfié, guide des méthodes douces.",
    features: [
      "Thème Shopify sur mesure, construit en sections",
      "Fiches café : origine, altitude, process, notes",
      "Comparateur glissant café vert et café torréfié",
      "Guide « Slow coffee » des méthodes d'extraction",
    ],
    stack: ["Shopify", "Liquid", "Tailwind CSS", "Alpine.js", "Vite"],
    note: "Boutique en cours d'ouverture : le lien public arrive bientôt.",
    cover: shot("zalonini", "accueil", "Page d'accueil de la boutique Zalonini Coffee Roasters"),
    mobile: shot("zalonini", "telephone", "Accueil de la boutique Zalonini sur mobile"),
    gallery: [
      shot("zalonini", "boutique", "Grille des cafés de la boutique Zalonini", "La boutique : un lot par origine, avec ses caractéristiques."),
      shot("zalonini", "comparateur", "Comparateur café vert et café torréfié", "Le comparateur à faire glisser, comme sur les marchés."),
      shot("zalonini", "signature", "Section signature avec photos du torréfacteur", "Les vraies photos du torréfacteur, mises en scène."),
      shot("zalonini", "slow-coffee", "Guide des méthodes douces", "Le guide des méthodes douces."),
    ],
  },
  {
    slug: "dressigo",
    title: "Dressigo",
    category: "Application web et mobile avec IA",
    accent: "#3d4ff5",
    device: "phone",
    url: "dressigo.app",
    summary:
      "Une app qui transforme la photo d'un vêtement en annonce prête pour Vinted, Leboncoin ou eBay : détourage, décor propre et texte rédigé.",
    problem:
      "Vendre ses vêtements d'occasion prend du temps : photos prises sur un fond chargé, annonce à réécrire pour chaque plateforme. Un article mal présenté se vend moins bien.",
    solution:
      "L'article est détouré directement dans le navigateur puis posé sur un décor au choix. Une IA rédige ensuite le titre et la description pour chaque plateforme, sans jamais inventer la marque ni la taille.",
    features: [
      "Détourage sur l'appareil, dans le navigateur (WebGPU)",
      "Douze décors, formats carré et 4:5",
      "Annonce Vinted, Leboncoin et eBay en quatre langues",
      "Crédits, paiement Stripe et suivi des ventes",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Stripe", "Mistral AI"],
    links: { site: "https://dressigo.app" },
    cover: shot("dressigo", "accueil", "Page d'accueil de Dressigo avec un comparatif avant et après détourage"),
    mobile: shot("dressigo", "telephone", "Dressigo sur mobile : un short détouré, avant et après"),
    gallery: [
      shot("dressigo", "etapes", "Les trois étapes de Dressigo", "Trois temps : la photo, le décor, l'annonce."),
      shot("dressigo", "annonce", "Exemple d'annonce générée", "L'annonce rédigée pour chaque plateforme, champ par champ."),
      shot("dressigo", "suivi", "Suivi des ventes", "Le suivi des ventes, sans tableur."),
    ],
  },
  {
    slug: "lumi-geo",
    title: "Lumi GEO",
    category: "Extension Chrome d'analyse SEO et GEO",
    accent: "#d6452b",
    device: "browser",
    url: "lumi-geo.pages.dev",
    summary:
      "Une extension Chrome qui montre une page telle que la voient ChatGPT, Perplexity ou Gemini, la note sur 100 et donne le code pour corriger.",
    problem:
      "La plupart des robots IA n'exécutent pas le JavaScript. Une page parfaite dans le navigateur peut être presque vide pour eux, et ses éditeurs ne le voient pas.",
    solution:
      "Lumi compare la page affichée au HTML brut et vérifie les données structurées, le llms.txt et l'accès des robots IA. Elle classe ensuite les corrections par points gagnés. Tout tourne dans le navigateur : aucun serveur, aucune donnée envoyée.",
    features: [
      "Note sur 100 et quatre piliers : SEO, GEO, AEO, Vue IA",
      "Vue robot : le texte invisible sans JavaScript, surligné",
      "Code JSON-LD prêt à copier, adapté au type de page",
      "Aperçu Google, rapport PDF, interface bilingue",
    ],
    stack: ["JavaScript", "Chrome Extension MV3", "Next.js", "Tailwind CSS", "Cloudflare Pages"],
    links: {
      site: "https://lumi-geo.pages.dev/",
      store: "https://chromewebstore.google.com/detail/lumi-geo/nodnlpecbohjikeljkdcmkpagokdhike",
    },
    cover: shot("lumi-geo", "accueil", "Page d'accueil de Lumi GEO"),
    mobile: shot("lumi-geo", "telephone", "Le site de Lumi GEO sur mobile"),
    gallery: [
      shot("lumi-geo", "vue-robot", "La vue robot de l'extension, zones invisibles hachurées", "La vue robot : ce que les IA ne lisent pas, hachuré sur la page."),
      shot("lumi-geo", "note", "Le panneau de l'extension avec la note sur 100", "La note globale et ses quatre piliers."),
      shot("lumi-geo", "code", "Le code JSON-LD généré par l'extension", "Le code à copier pour corriger."),
      shot("lumi-geo", "etapes", "Les trois étapes d'une analyse", "Le site de présentation : trois étapes, directement dans Chrome."),
    ],
  },
  {
    slug: "methodoskills",
    title: "MethodoSkills",
    category: "Boutique de packs de skills pour Claude",
    accent: "#f08a3c",
    device: "browser",
    url: "methodoskills-ai.app",
    summary:
      "Un site qui vend des packs de skills pour Claude : dix packs, 51 méthodes prêtes à installer, en français et en anglais.",
    problem:
      "Claude sait écrire, mais sans méthode il faut tout lui réexpliquer à chaque demande. Et la plupart des utilisateurs ne savent pas écrire leurs propres skills.",
    solution:
      "Des packs par besoin (clients, emploi, étudiants…) en paiement unique. Une démo montre chaque skill au travail, et la livraison est automatique : paiement Stripe, liens de téléchargement signés, e-mail de confirmation.",
    features: [
      "Démo interactive de chaque skill",
      "Paiement Stripe, prix calculé côté serveur",
      "Téléchargements par liens signés, valables 7 jours",
      "Site bilingue, 49 tests automatisés",
    ],
    stack: ["JavaScript", "Tailwind CSS", "Cloudflare Pages Functions", "Stripe"],
    links: { site: "https://methodoskills-ai.app" },
    cover: shot("methodoskills", "accueil", "Page d'accueil de MethodoSkills"),
    mobile: shot("methodoskills", "telephone", "MethodoSkills sur mobile"),
    statusBar: "light",
    gallery: [
      shot("methodoskills", "demo", "Démo d'un skill dans une conversation avec Claude", "La démo : chaque skill au travail, de la demande au résultat."),
      shot("methodoskills", "packs", "Choix des packs et achat", "Un pack par besoin, achat en un clic."),
    ],
  },
  {
    slug: "web-relive",
    title: "Web Relive",
    category: "Site vitrine d'un studio web",
    accent: "#13836a",
    device: "browser",
    url: "web-relive.webrelive.workers.dev",
    summary:
      "Le site d'un studio web strasbourgeois qui crée sites vitrines et outils de gestion pour les commerces, les indépendants et les PME.",
    problem:
      "Un commerçant hésite à confier son site : il veut voir le résultat, comprendre le déroulé et savoir à qui il parle avant d'écrire.",
    solution:
      "Une page qui montre au lieu d'expliquer : comparateur avant et après, maquettes de sites et d'outils internes, planning type et engagements écrits. Le tout noté entre 98 et 100 sur Lighthouse.",
    features: [
      "Comparateur avant et après à faire glisser",
      "Maquettes de sites et d'outils internes",
      "Demande de devis validée et enregistrée dans Supabase",
      "Lighthouse : 98 en performance, 100 ailleurs",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare Workers"],
    links: { site: "https://web-relive.webrelive.workers.dev/" },
    cover: shot("web-relive", "accueil", "Page d'accueil de Web Relive"),
    mobile: shot("web-relive", "telephone", "Web Relive sur mobile"),
    gallery: [
      shot("web-relive", "avant-apres", "Comparateur avant et après d'un site de restaurant", "Le comparateur : un site de restaurant, avant et après."),
      shot("web-relive", "offres", "Les offres du studio", "Les offres, chacune avec son aperçu."),
      shot("web-relive", "realisations", "Les réalisations du studio", "Des maquettes réalistes comme point de départ."),
    ],
  },
];
