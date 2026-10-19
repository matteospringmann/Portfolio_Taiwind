// Contenu de la section Parcours : Epitech en vedette, puis les stages.
// Objectifs et temps forts par année repris de la page officielle du Programme Grande École.

export const school = {
  name: "Epitech Strasbourg",
  program: "Programme Grande École",
  url: "https://www.epitech.eu/ecole-informatique-strasbourg/",
  programUrl: "https://www.epitech.eu/programme-grande-ecole-informatique/",
  /** Index (0 à 4) de l'année en cours. */
  currentYear: 3,
};

export const schoolFacts = [
  {
    value: "Bac+5",
    label: "Un diplôme visé par l'État",
    text: "Le diplôme d'Expert en technologies de l'information, enregistré au RNCP niveau 7.",
  },
  {
    value: "Projets",
    label: "Une pédagogie par la pratique",
    text: "On apprend en construisant : autonomie, travail entre pairs, évaluation par compétences comme en entreprise.",
  },
  {
    value: "2028",
    label: "Ma promotion",
    text: "Cinq ans après le bac, du langage C au projet de fin d'études mené en équipe sur trois ans.",
  },
];

export type SchoolYear = {
  year: string;
  dates: string;
  goal: string;
  highlights: string;
  /** Stage effectué pendant cette année. */
  internship?: string;
  /** Ville de l'année à l'étranger. */
  abroad?: string;
};

export const schoolYears: SchoolYear[] = [
  {
    year: "1re année",
    dates: "2023 - 2024",
    goal: "Fondamentaux et autonomie",
    highlights: "La Piscine : cinq semaines intensives en C, algorithmique et systèmes. Puis les premiers projets.",
  },
  {
    year: "2e année",
    dates: "2024 - 2025",
    goal: "Conception et travail d'équipe",
    highlights: "C++, Haskell, Rust et des projets en équipe, avec un premier stage en entreprise.",
    internship: "Sogeti",
  },
  {
    year: "3e année",
    dates: "2025 - 2026",
    goal: "Se spécialiser et innover",
    highlights: "Lancement de l'EIP, le projet de fin d'études mené en équipe sur trois ans, et un stage long.",
    internship: "CEN Lorraine",
  },
  {
    year: "4e année",
    dates: "2026 - 2027",
    goal: "S'ouvrir à l'international",
    highlights: "L'année à l'étranger, en cours, avec la suite de l'EIP.",
    abroad: "Barcelone",
  },
  {
    year: "5e année",
    dates: "2027 - 2028",
    goal: "Le diplôme",
    highlights: "Une majeure (IA, cybersécurité ou ingénierie logicielle) et le stage de fin d'études.",
  },
];

export type Experience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  link: string;
  missions: string[];
};

export const experiences: Experience[] = [
  {
    company: "Sogeti",
    role: "Stage développeur",
    dates: "Août - novembre 2024",
    location: "Schiltigheim",
    link: "https://www.linkedin.com/company/sogeti/posts/?feedView=all",
    missions: ["Premier stage en entreprise, dans une ESN"],
  },
  {
    company: "Conservatoire d'espaces naturels de Lorraine",
    role: "Stage développeur",
    dates: "2026",
    location: "Sarrebourg",
    link: "https://www.cen-lorraine.fr/",
    missions: [
      "Outils internes de facturation et de devis",
      "Outil de gestion de tickets",
      "Corrections de bugs sur l'intranet",
    ],
  },
];
