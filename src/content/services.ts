import type { Localized } from "@/i18n/config";

export type ProjectType = "site" | "outil" | "sur-mesure" | "autre";

export const projectTypes: { value: ProjectType; label: Localized }[] = [
  { value: "site", label: { fr: "Site internet", en: "Website", de: "Website" } },
  { value: "outil", label: { fr: "Outil interne", en: "Internal tool", de: "Internes Tool" } },
  { value: "sur-mesure", label: { fr: "Projet sur mesure", en: "Custom project", de: "Individuelles Projekt" } },
  { value: "autre", label: { fr: "Autre", en: "Other", de: "Sonstiges" } },
];

export const services: {
  type: Exclude<ProjectType, "autre">;
  title: Localized;
  pitch: Localized;
  examples: Localized[];
}[] = [
  {
    type: "site",
    title: { fr: "Sites internet", en: "Websites", de: "Websites" },
    pitch: {
      fr: "Un site rapide, bien référencé et agréable sur mobile, pensé pour transformer les visiteurs en clients.",
      en: "A fast website, easy to find and pleasant on mobile, designed to turn visitors into customers.",
      de: "Eine schnelle Website, gut auffindbar und angenehm auf dem Smartphone, gemacht, um Besucher zu Kunden zu machen.",
    },
    examples: [
      {
        fr: "Site vitrine pour artisan, hôtel, restaurant",
        en: "Showcase website for a craftsman, hotel or restaurant",
        de: "Website für Handwerksbetrieb, Hotel oder Restaurant",
      },
      { fr: "Boutique en ligne avec paiement", en: "Online shop with payments", de: "Onlineshop mit Bezahlfunktion" },
      { fr: "Refonte d'un site existant", en: "Redesign of an existing website", de: "Relaunch einer bestehenden Website" },
    ],
  },
  {
    type: "outil",
    title: { fr: "Outils internes", en: "Internal tools", de: "Interne Tools" },
    pitch: {
      fr: "Des applications sur mesure qui remplacent les tableurs et les tâches répétitives de votre équipe.",
      en: "Custom applications that replace your team's spreadsheets and repetitive tasks.",
      de: "Maßgeschneiderte Anwendungen, die Tabellen und wiederkehrende Aufgaben Ihres Teams ersetzen.",
    },
    examples: [
      {
        fr: "Tableau de bord et suivi d'activité",
        en: "Dashboards and activity tracking",
        de: "Dashboards und Aktivitätsübersicht",
      },
      {
        fr: "Back-office, gestion de stock ou de planning",
        en: "Back office, inventory or scheduling",
        de: "Backoffice, Lager- oder Einsatzplanung",
      },
      { fr: "Automatisation de documents", en: "Document automation", de: "Automatisierte Dokumente" },
    ],
  },
  {
    type: "sur-mesure",
    title: { fr: "Projets sur mesure", en: "Custom projects", de: "Individuelle Projekte" },
    pitch: {
      fr: "Une extension, une application ou un SaaS : on part de votre idée et on construit la première version.",
      en: "An extension, an app or a SaaS: we start from your idea and build the first version.",
      de: "Eine Erweiterung, eine App oder ein SaaS: Wir starten bei Ihrer Idee und bauen die erste Version.",
    },
    examples: [
      { fr: "Extension Chrome", en: "Chrome extension", de: "Chrome-Erweiterung" },
      { fr: "Application web ou mobile", en: "Web or mobile app", de: "Web- oder Mobile-App" },
      { fr: "Prototype de SaaS", en: "SaaS prototype", de: "SaaS-Prototyp" },
    ],
  },
];

export const process: { verb: Localized; title: Localized; text: Localized }[] = [
  {
    verb: { fr: "Concevoir", en: "Design", de: "Konzipieren" },
    title: { fr: "Conception et stratégie", en: "Design and strategy", de: "Konzept und Strategie" },
    text: {
      fr: "Nous définissons ensemble vos objectifs et la meilleure approche pour concevoir un produit qui parle à votre audience.",
      en: "Together we define your goals and the best approach to design a product that speaks to your audience.",
      de: "Gemeinsam legen wir Ihre Ziele fest und den besten Weg zu einem Produkt, das Ihre Zielgruppe anspricht.",
    },
  },
  {
    verb: { fr: "Développer", en: "Build", de: "Entwickeln" },
    title: { fr: "Développement sur mesure", en: "Custom development", de: "Individuelle Entwicklung" },
    text: {
      fr: "Je transforme le design en un site ou une application performante, responsive et optimisée, avec des technologies modernes.",
      en: "I turn the design into a fast, responsive and optimised website or app, built with modern technologies.",
      de: "Ich setze das Design in eine schnelle, responsive und optimierte Website oder App um, mit modernen Technologien.",
    },
  },
  {
    verb: { fr: "Déployer", en: "Launch", de: "Veröffentlichen" },
    title: { fr: "Déploiement et suivi", en: "Launch and follow-up", de: "Launch und Betreuung" },
    text: {
      fr: "Je vous accompagne pour la mise en ligne et la prise en main, avec un suivi pour garantir votre autonomie.",
      en: "I guide you through the launch and the handover, with follow-up so you can run things on your own.",
      de: "Ich begleite Sie beim Launch und bei der Einarbeitung, mit Betreuung, damit Sie danach selbstständig weiterarbeiten.",
    },
  },
];
