import type { Localized } from "@/i18n/config";

// Informations identiques dans toutes les langues.
export const site = {
  name: "Mattéo Springmann",
  firstName: "Mattéo",
  url: "https://portfoliomatteospringmann.vercel.app",
  email: "matteo.springmann@epitech.eu",
  github: "https://github.com/matteospringmann",
  // Mettre à null pour masquer le lien LinkedIn dans le footer.
  linkedin: "https://www.linkedin.com/in/matt%C3%A9o-springmann-353536301/" as string | null,
  cv: "/cv.pdf",
  cvFileName: "matteo_springmann_cv.pdf",
  photo: "/profil.jpg",
  school: {
    name: "Epitech Strasbourg",
    url: "https://www.epitech.eu/ecole-informatique-strasbourg/",
  },
} as const;

// Textes du profil, dans les trois langues.
export const profile = {
  role: { fr: "Développeur front-end", en: "Front-end developer", de: "Frontend-Entwickler" } as Localized,
  schoolProgram: {
    fr: "Programme Grande École (PGE 2028)",
    en: "Grande École Programme (class of 2028)",
    de: "Programme Grande École (Abschluss 2028)",
  } as Localized,
  description: {
    fr: "Portfolio de Mattéo Springmann, développeur front-end formé à Epitech Strasbourg. Sites internet, outils internes et applications web sur mesure.",
    en: "Portfolio of Mattéo Springmann, front-end developer trained at Epitech Strasbourg. Websites, internal tools and custom web apps.",
    de: "Portfolio von Mattéo Springmann, Frontend-Entwickler, ausgebildet an der Epitech Strasbourg. Websites, interne Tools und individuelle Web-Apps.",
  } as Localized,
  qualities: [
    {
      name: { fr: "Créatif", en: "Creative", de: "Kreativ" },
      description: {
        fr: "J'aime imaginer des solutions élégantes et efficaces aux problèmes complexes.",
        en: "I like imagining elegant, effective solutions to complex problems.",
        de: "Ich entwickle gern elegante und wirksame Lösungen für komplexe Probleme.",
      },
    },
    {
      name: { fr: "Autonome", en: "Independent", de: "Selbstständig" },
      description: {
        fr: "Je suis capable de mener un projet de A à Z en faisant preuve d'initiative.",
        en: "I can run a project from start to finish and take the initiative.",
        de: "Ich kann ein Projekt von A bis Z leiten und ergreife dabei die Initiative.",
      },
    },
    {
      name: { fr: "Passionné", en: "Passionate", de: "Leidenschaftlich" },
      description: {
        fr: "Le code est plus qu'un travail, c'est un domaine qui me captive et me pousse à apprendre constamment.",
        en: "Code is more than a job: it's a field that fascinates me and keeps me learning.",
        de: "Code ist mehr als ein Job: Er fasziniert mich und treibt mich an, ständig dazuzulernen.",
      },
    },
  ] as { name: Localized; description: Localized }[],
};

export type SectionId =
  | "accueil"
  | "a-propos"
  | "projets"
  | "competences"
  | "parcours"
  | "services"
  | "contact";

/** Sections listed in the navigation, in page order. Labels live in the dictionaries. */
export const navSections = ["a-propos", "projets", "competences", "parcours", "services"] as const satisfies SectionId[];
