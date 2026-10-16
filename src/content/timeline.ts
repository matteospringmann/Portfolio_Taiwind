export type TimelineEntry = {
  type: "work" | "education";
  date: string;
  title: string;
  location: string;
  link: string;
};

// Du plus ancien au plus récent : la frise se lit de gauche à droite.
export const timeline: TimelineEntry[] = [
  {
    type: "education",
    date: "2016 - 2020",
    title: "Brevet des Collèges, mention Très Bien",
    location: "Collège Marcel Pagnol, Wasselonne",
    link: "https://clg-pagnol-wasselonne.monbureaunumerique.fr/",
  },
  {
    type: "work",
    date: "Décembre 2019",
    title: "Stage d'observation (3ème)",
    location: "Hexagone Immobilier",
    link: "http://www.hexagonediag.fr/",
  },
  {
    type: "education",
    date: "2020 - 2023",
    title: "Baccalauréat, mention Assez Bien",
    location: "Lycée du Haut-Barr, Saverne",
    link: "https://www.hautbarr.net/",
  },
  {
    type: "work",
    date: "Étés 2022 et 2024",
    title: "Job d'été, agent technique",
    location: "Mairie de Wangenbourg",
    link: "http://www.wangenbourg-engenthal.fr/",
  },
  {
    type: "education",
    date: "2023 - aujourd'hui",
    title: "Programme Grande École (PGE 2028)",
    location: "Epitech, Strasbourg",
    link: "https://www.epitech.eu/ecole-informatique-strasbourg/",
  },
  {
    type: "work",
    date: "Août - novembre 2024",
    title: "Stage développeur",
    location: "Sogeti, Schiltigheim",
    link: "https://www.linkedin.com/company/sogeti/posts/?feedView=all",
  },
  {
    type: "work",
    date: "Juillet - août 2025",
    title: "Secrétaire remplaçant",
    location: "Office notarial Criqui, Saverne",
    link: "https://www.criqui-braun-saverne.notaires.fr/",
  },
];
