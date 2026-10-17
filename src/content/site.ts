export const site = {
  name: "Mattéo Springmann",
  firstName: "Mattéo",
  role: "Développeur front-end",
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
    program: "Programme Grande École (PGE 2028)",
    url: "https://www.epitech.eu/ecole-informatique-strasbourg/",
  },
  description:
    "Portfolio de Mattéo Springmann, développeur front-end formé à Epitech Strasbourg. Sites internet, outils internes et applications web sur mesure.",
} as const;

export type SectionId =
  | "accueil"
  | "a-propos"
  | "projets"
  | "competences"
  | "parcours"
  | "services"
  | "contact";

export const navLinks: { id: SectionId; label: string }[] = [
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "parcours", label: "Parcours" },
  { id: "services", label: "Services" },
];

export const qualities = [
  {
    name: "Créatif",
    description:
      "J'aime imaginer des solutions élégantes et efficaces aux problèmes complexes.",
  },
  {
    name: "Autonome",
    description:
      "Je suis capable de mener un projet de A à Z en faisant preuve d'initiative.",
  },
  {
    name: "Passionné",
    description:
      "Le code est plus qu'un travail, c'est un domaine qui me captive et me pousse à apprendre constamment.",
  },
] as const;
