export type ProjectType = "site" | "outil" | "sur-mesure" | "autre";

export const projectTypes: { value: ProjectType; label: string }[] = [
  { value: "site", label: "Site internet" },
  { value: "outil", label: "Outil interne" },
  { value: "sur-mesure", label: "Projet sur mesure" },
  { value: "autre", label: "Autre" },
];

export type Service = {
  type: Exclude<ProjectType, "autre">;
  title: string;
  pitch: string;
  examples: string[];
};

export const services: Service[] = [
  {
    type: "site",
    title: "Sites internet",
    pitch:
      "Un site rapide, bien référencé et agréable sur mobile, pensé pour transformer les visiteurs en clients.",
    examples: [
      "Site vitrine pour artisan, hôtel, restaurant",
      "Boutique en ligne avec paiement",
      "Refonte d'un site existant",
    ],
  },
  {
    type: "outil",
    title: "Outils internes",
    pitch:
      "Des applications sur mesure qui remplacent les tableurs et les tâches répétitives de votre équipe.",
    examples: [
      "Tableau de bord et suivi d'activité",
      "Back-office, gestion de stock ou de planning",
      "Automatisation de documents",
    ],
  },
  {
    type: "sur-mesure",
    title: "Projets sur mesure",
    pitch:
      "Une extension, une application ou un SaaS : on part de votre idée et on construit la première version.",
    examples: [
      "Extension Chrome",
      "Application web ou mobile",
      "Prototype de SaaS",
    ],
  },
];

export const process = [
  {
    verb: "Concevoir",
    title: "Conception et stratégie",
    text: "Nous définissons ensemble vos objectifs et la meilleure approche pour concevoir un produit qui parle à votre audience.",
  },
  {
    verb: "Développer",
    title: "Développement sur mesure",
    text: "Je transforme le design en un site ou une application performante, responsive et optimisée, avec des technologies modernes.",
  },
  {
    verb: "Déployer",
    title: "Déploiement et suivi",
    text: "Je vous accompagne pour la mise en ligne et la prise en main, avec un suivi pour garantir votre autonomie.",
  },
];
