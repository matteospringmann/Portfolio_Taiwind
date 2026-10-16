export type MockupKey = "geo" | "coffee" | "hotel" | "cutout" | "ranking";

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Couleur propre au projet, utilisée pour teinter la scène. */
  accent: string;
  /**
   * "demo" : maquette codée, affichée avec le badge « Projet de démonstration ».
   * "live" : vrai projet ; si `images` est renseigné, les captures remplacent la maquette.
   */
  status: "demo" | "live";
  device: "browser" | "phone";
  mockup: MockupKey;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  links?: { demo?: string; code?: string };
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "citable",
    title: "Citable",
    category: "Extension Chrome d'analyse GEO",
    accent: "#16a37a",
    status: "demo",
    device: "browser",
    mockup: "geo",
    summary:
      "Une extension qui mesure si une page a des chances d'être reprise par ChatGPT, Perplexity ou Gemini, et explique quoi corriger.",
    problem:
      "Les réponses des IA génératives remplacent une partie des recherches Google. Les éditeurs ne savent pas si leurs pages sont lisibles et citables par ces moteurs.",
    solution:
      "En un clic, l'extension analyse la page ouverte : structure, données structurées, réponses directes, sources. Elle produit un score et une liste d'actions classées par impact.",
    features: [
      "Score de visibilité IA sur 100, détaillé par critère",
      "Détection des données structurées JSON-LD manquantes",
      "Recommandations concrètes, cochables au fil des corrections",
      "Historique des analyses par domaine",
    ],
    stack: ["TypeScript", "React", "Chrome Extension MV3", "Tailwind CSS"],
  },
  {
    slug: "atelier-moka",
    title: "Atelier Moka",
    category: "Boutique en ligne de café",
    accent: "#e2631f",
    status: "demo",
    device: "browser",
    mockup: "coffee",
    summary:
      "Une boutique de torréfacteur où l'on choisit son café, sa mouture et son abonnement en quelques secondes.",
    problem:
      "Un torréfacteur indépendant vendait surtout en boutique. Son ancien site était lent et le choix de la mouture se faisait par e-mail.",
    solution:
      "Une boutique rapide, centrée sur le produit : notes de dégustation, mouture choisie directement sur la fiche, panier toujours visible.",
    features: [
      "Sélecteur de mouture intégré à chaque produit",
      "Panier persistant et ajout sans rechargement",
      "Abonnement mensuel avec livraison programmée",
      "Pages produit optimisées pour le référencement",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    slug: "sapin-blanc",
    title: "Sapin Blanc",
    category: "Site d'hôtel et spa",
    accent: "#3d7fa8",
    status: "demo",
    device: "browser",
    mockup: "hotel",
    summary:
      "Le site d'un hôtel-spa dans les Vosges, avec une réservation directe qui évite les commissions des plateformes.",
    problem:
      "L'hôtel dépendait des plateformes de réservation, qui prennent une commission sur chaque nuit vendue.",
    solution:
      "Un site qui donne envie dès la première image, avec un module de réservation clair : dates, nombre de personnes, disponibilités en direct.",
    features: [
      "Sélection des dates avec calcul des nuits en direct",
      "Présentation des chambres et des soins du spa",
      "Site bilingue, pensé d'abord pour le mobile",
      "Formulaire de demande pour les séminaires",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Motion"],
  },
  {
    slug: "pli",
    title: "Pli",
    category: "Application mobile de détourage de vêtements",
    accent: "#7b5cf0",
    status: "demo",
    device: "phone",
    mockup: "cutout",
    summary:
      "Une app qui détoure un vêtement à partir d'une simple photo, pour vendre en ligne ou ranger sa garde-robe.",
    problem:
      "Photographier un vêtement proprement demande un fond neutre, de la lumière et du temps. Les annonces bâclées se vendent moins bien.",
    solution:
      "On prend la photo n'importe où, l'app isole le vêtement, reconnaît son type et exporte une image propre sur fond transparent.",
    features: [
      "Détourage automatique en quelques secondes",
      "Comparaison avant/après au doigt",
      "Reconnaissance du type de vêtement et de la couleur",
      "Export PNG transparent ou sur fond uni",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Python"],
  },
  {
    slug: "palmares",
    title: "Palmarès",
    category: "SaaS de classement de jeux mobiles",
    accent: "#e2386f",
    status: "demo",
    device: "browser",
    mockup: "ranking",
    summary:
      "Un tableau de bord qui suit le classement des jeux mobiles sur les stores, heure par heure.",
    problem:
      "Les studios de jeux suivent leurs positions et celles des concurrents à la main, store par store, pays par pays.",
    solution:
      "Palmarès collecte les classements, détecte les mouvements importants et les affiche dans un tableau de bord lisible en un coup d'œil.",
    features: [
      "Classements gratuits, payants et revenus",
      "Évolution sur 7 jours pour chaque jeu",
      "Alertes quand un concurrent gagne des places",
      "Export des données pour les équipes marketing",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
  },
];
