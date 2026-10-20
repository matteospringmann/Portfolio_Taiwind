import type { Localized } from "@/i18n/config";

// Contenu de la section Parcours : Epitech en vedette, puis les stages.
// Objectifs et temps forts par année repris de la page officielle du Programme Grande École.

export const school = {
  name: "Epitech Strasbourg",
  program: { fr: "Programme Grande École", en: "Grande École Programme", de: "Programme Grande École" } as Localized,
  intro: {
    fr: "Je suis en 4e année du Programme Grande École d'Epitech, l'école de l'expertise informatique, en année à l'étranger à Barcelone. Cinq ans pour devenir expert en technologies de l'information.",
    en: "I'm in my 4th year of Epitech's Grande École Programme, the school of IT expertise, currently on my year abroad in Barcelona. Five years to become an expert in information technology.",
    de: "Ich bin im 4. Jahr des Programme Grande École der Epitech, der Schule für IT-Expertise, und verbringe gerade mein Auslandsjahr in Barcelona. Fünf Jahre, um Experte für Informationstechnologie zu werden.",
  } as Localized,
  url: "https://www.epitech.eu/ecole-informatique-strasbourg/",
  programUrl: "https://www.epitech.eu/programme-grande-ecole-informatique/",
  /** Index (0 à 4) de l'année en cours. */
  currentYear: 3,
};

export const schoolFacts: { value: Localized; label: Localized; text: Localized }[] = [
  {
    value: { fr: "Bac+5", en: "Master's level", de: "Master-Niveau" },
    label: { fr: "Un diplôme visé par l'État", en: "A state-recognised degree", de: "Ein staatlich anerkannter Abschluss" },
    text: {
      fr: "Le diplôme d'Expert en technologies de l'information, enregistré au RNCP niveau 7.",
      en: "The “Expert in Information Technology” degree, registered at RNCP level 7, the French master's level.",
      de: "Der Abschluss „Expert en technologies de l'information“, im französischen RNCP auf Stufe 7 eingetragen, dem Master-Niveau.",
    },
  },
  {
    value: { fr: "Projets", en: "Projects", de: "Projekte" },
    label: { fr: "Une pédagogie par la pratique", en: "Learning by doing", de: "Lernen durch Praxis" },
    text: {
      fr: "On apprend en construisant : autonomie, travail entre pairs, évaluation par compétences comme en entreprise.",
      en: "We learn by building: autonomy, peer learning and skills-based assessment, just like in a company.",
      de: "Wir lernen, indem wir bauen: Selbstständigkeit, Lernen unter Gleichen und Bewertung nach Kompetenzen wie im Unternehmen.",
    },
  },
  {
    value: { fr: "2028", en: "2028", de: "2028" },
    label: { fr: "Ma promotion", en: "My graduating class", de: "Mein Abschlussjahrgang" },
    text: {
      fr: "Cinq ans après le bac, du langage C au projet de fin d'études mené en équipe sur trois ans.",
      en: "Five years after high school, from the C language to a final-year project built as a team over three years.",
      de: "Fünf Jahre nach dem Abitur, von der Sprache C bis zum Abschlussprojekt, das drei Jahre lang im Team entsteht.",
    },
  },
];

export const schoolYears: {
  year: Localized;
  dates: string;
  goal: Localized;
  highlights: Localized;
  /** Stage effectué pendant cette année. */
  internship?: string;
  /** Ville de l'année à l'étranger. */
  abroad?: Localized;
}[] = [
  {
    year: { fr: "1re année", en: "1st year", de: "1. Jahr" },
    dates: "2023 - 2024",
    goal: { fr: "Fondamentaux et autonomie", en: "Fundamentals and autonomy", de: "Grundlagen und Selbstständigkeit" },
    highlights: {
      fr: "La Piscine : cinq semaines intensives en C, algorithmique et systèmes. Puis les premiers projets.",
      en: "The “Piscine”: five intensive weeks of C, algorithms and systems. Then the first projects.",
      de: "Die „Piscine“: fünf intensive Wochen C, Algorithmik und Systeme. Danach die ersten Projekte.",
    },
  },
  {
    year: { fr: "2e année", en: "2nd year", de: "2. Jahr" },
    dates: "2024 - 2025",
    goal: { fr: "Conception et travail d'équipe", en: "Design and teamwork", de: "Konzeption und Teamarbeit" },
    highlights: {
      fr: "C++, Haskell, Rust et des projets en équipe, avec un premier stage en entreprise.",
      en: "C++, Haskell, Rust and team projects, with a first internship in a company.",
      de: "C++, Haskell, Rust und Teamprojekte, mit einem ersten Praktikum im Unternehmen.",
    },
    internship: "Sogeti",
  },
  {
    year: { fr: "3e année", en: "3rd year", de: "3. Jahr" },
    dates: "2025 - 2026",
    goal: { fr: "Se spécialiser et innover", en: "Specialise and innovate", de: "Spezialisieren und innovieren" },
    highlights: {
      fr: "Lancement de l'EIP, le projet de fin d'études mené en équipe sur trois ans, et un stage long.",
      en: "Launch of the EIP, the final-year project built as a team over three years, and a long internship.",
      de: "Start des EIP, des Abschlussprojekts, das drei Jahre lang im Team entsteht, und ein langes Praktikum.",
    },
    internship: "CEN Lorraine",
  },
  {
    year: { fr: "4e année", en: "4th year", de: "4. Jahr" },
    dates: "2026 - 2027",
    goal: { fr: "S'ouvrir à l'international", en: "Going international", de: "Internationale Erfahrung" },
    highlights: {
      fr: "L'année à l'étranger, en cours, avec la suite de l'EIP.",
      en: "My year abroad, in progress, while the EIP continues.",
      de: "Mein Auslandsjahr, gerade im Gange, während das EIP weiterläuft.",
    },
    abroad: { fr: "Barcelone", en: "Barcelona", de: "Barcelona" },
  },
  {
    year: { fr: "5e année", en: "5th year", de: "5. Jahr" },
    dates: "2027 - 2028",
    goal: { fr: "Le diplôme", en: "The degree", de: "Der Abschluss" },
    highlights: {
      fr: "Une majeure (IA, cybersécurité ou ingénierie logicielle) et le stage de fin d'études.",
      en: "A major (AI, cybersecurity or software engineering) and the final internship.",
      de: "Ein Schwerpunkt (KI, Cybersicherheit oder Softwareentwicklung) und das Abschlusspraktikum.",
    },
  },
];

export const experiences: {
  company: string;
  role: Localized;
  dates: Localized;
  location: string;
  link: string;
  missions: Localized[];
}[] = [
  {
    company: "Sogeti",
    role: { fr: "Stage développeur", en: "Developer intern", de: "Praktikum als Entwickler" },
    dates: { fr: "Août - novembre 2024", en: "August - November 2024", de: "August - November 2024" },
    location: "Schiltigheim",
    link: "https://www.linkedin.com/company/sogeti/posts/?feedView=all",
    missions: [
      {
        fr: "Premier stage en entreprise, dans une ESN",
        en: "First internship, at an IT services company",
        de: "Erstes Praktikum, bei einem IT-Dienstleister",
      },
    ],
  },
  {
    company: "Conservatoire d'espaces naturels de Lorraine",
    role: { fr: "Stage développeur", en: "Developer intern", de: "Praktikum als Entwickler" },
    dates: { fr: "Avril - août 2026", en: "April - August 2026", de: "April - August 2026" },
    location: "Sarrebourg",
    link: "https://www.cen-lorraine.fr/",
    missions: [
      {
        fr: "Outils internes de facturation et de devis",
        en: "Internal invoicing and quoting tools",
        de: "Interne Tools für Rechnungen und Angebote",
      },
      { fr: "Outil de gestion de tickets", en: "Ticket management tool", de: "Ticketsystem" },
      { fr: "Corrections de bugs sur l'intranet", en: "Bug fixes on the intranet", de: "Fehlerbehebungen im Intranet" },
    ],
  },
];
