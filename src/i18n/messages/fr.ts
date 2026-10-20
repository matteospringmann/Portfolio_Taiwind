// Textes de l'interface en français. Ce fichier sert de modèle : en.ts et de.ts suivent la même forme.
// Les espaces insécables avant « : ; ? ! » sont ajoutés automatiquement.

export const fr = {
  meta: {
    title: "Mattéo Springmann, développeur front-end",
    keywords: [
      "Mattéo Springmann",
      "développeur front-end",
      "développeur Next.js",
      "création de site internet",
      "outil interne",
      "Epitech Strasbourg",
      "portfolio",
    ],
    ogHeadline: ["Des interfaces", "qui se ressentent."],
    ogTagline: "Sites internet, outils internes et projets sur mesure",
  },
  a11y: {
    skip: "Aller au contenu",
    mainNav: "Navigation principale",
    footerNav: "Pied de page",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    openCommand: "Ouvrir la palette de commandes",
    language: "Langue",
  },
  nav: {
    links: {
      "a-propos": "À propos",
      projets: "Projets",
      competences: "Compétences",
      parcours: "Parcours",
      services: "Services",
    },
    home: "Accueil",
    contact: "Contact",
    cta: "Me contacter",
  },
  command: {
    label: "Palette de commandes",
    placeholder: "Aller à une section, télécharger le CV...",
    search: "Rechercher une commande",
    escape: "Échap",
    empty: "Aucun résultat",
    goTo: "Aller à",
    actions: "Actions",
    language: "Langue",
    cv: "Télécharger le CV",
    copyEmail: "Copier l'adresse e-mail",
    copied: "Adresse copiée",
    github: "Ouvrir GitHub",
  },
  hero: {
    headline: "Des interfaces qui se ressentent.",
    intro:
      "Développeur front-end formé à Epitech. Je conçois des sites et des outils web rapides, précis et agréables à utiliser.",
    projects: "Voir les projets",
    services: "Mes services",
  },
  about: {
    manifesto:
      "Je suis Mattéo, étudiant à Epitech Strasbourg et développeur front-end. Je crée des interfaces intuitives et performantes, du premier croquis à la mise en ligne. J'aime quand un détail bien réglé rend un produit évident.",
    photoAlt: "Photo de",
    cv: "Télécharger mon CV",
  },
  projects: {
    title: "Cinq projets. Cinq terrains de jeu.",
    intro:
      "Une boutique pour un torréfacteur, une app d'IA, une extension Chrome, une boutique de skills et un studio web. Des projets réels : ouvrez-en un pour voir les coulisses.",
    open: "Découvrir le projet",
    close: "Fermer",
    problem: "Le problème",
    solution: "La solution",
    features: "Fonctionnalités",
    stack: "Technologies",
    gallery: "En images",
    site: "Voir le site",
    store: "Chrome Web Store",
  },
  skills: {
    title: "Une boîte à outils, en marche.",
    intro: "Chaque tuile fait tourner un vrai bout de code. Cliquez, changez d'onglet, regardez-les travailler.",
    react: {
      caption: "Des composants qui réagissent. Cliquez sur le cœur et regardez le code.",
      card: "Coucher de soleil",
      likes: "j'aime",
      like: "Aimer",
      unlike: "Retirer le j'aime",
      renders: "rendus :",
      code: { component: "Carte", state: "aime", setter: "setAime", button: "Bouton", handler: "basculer" },
    },
    typescript: {
      caption: "Des types précis, des bugs attrapés avant la mise en ligne.",
      ok: "0 erreur",
      code: `type Projet = {
  titre: string;
  stack: Techno[];
  enLigne: boolean;
};

const dressigo: Projet = {
  titre: "Dressigo",
  stack: ["React Native", "Supabase"],
  enLigne: true,
};`,
    },
    tailwind: { caption: "Le style, directement dans le balisage.", button: "Changer de style" },
    next: {
      caption: "Le framework de ce site, justement.",
      lines: ["✓ Compilé", "○ /  page statique", "✓ Prêt pour Vercel"],
    },
    terminal: {
      title: "Node.js et Python",
      caption: "Des API, des scripts, des données qui circulent.",
      node: {
        command: "curl localhost:3000/api/projets?enLigne=true",
        output: [
          "HTTP/1.1 200 OK",
          "[",
          '  { "titre": "Dressigo", "type": "app" },',
          '  { "titre": "Lumi GEO", "type": "extension" },',
          '  { "titre": "MethodoSkills", "type": "e-commerce" }',
          "]",
        ],
      },
      python: {
        command: "python detourage.py veste.jpg --decor marbre",
        output: [
          "Photo redressée : 2048 x 2560",
          "Masque calculé en 0,8 s",
          "Décor appliqué : marbre blanc, format 4:5",
          "Rendu enregistré : veste-marbre.webp",
        ],
      },
    },
    git: {
      title: "Git et GitHub",
      caption: "Des branches propres, un historique lisible.",
      graph: "Graphe de commits avec une branche fusionnée",
      commits: ["init", "accueil", "feat: panier", "fix: mouture", "hotfix", "merge", "v1.0"],
    },
    c: { title: "Langage C", caption: "Mémoire, pointeurs, rigueur : l'école Epitech." },
    linux: { caption: "Mon environnement de travail au quotidien.", windows: ["terminal", "éditeur", "navigateur"] },
    devops: {
      caption: "Intégration continue, conteneurs, mise en production.",
      steps: ["Build", "Tests", "Image Docker", "Déploiement"],
      running: "en cours...",
      live: "✓ En ligne",
    },
  },
  journey: {
    programLink: "Découvrir le programme",
    current: "En cours",
    internship: "Stage",
    workTitle: "En entreprise.",
    workIntro: "Les stages du programme, pour mettre le code à l'épreuve d'une vraie équipe.",
  },
  services: {
    title: "Ce que je peux construire pour vous.",
    intro:
      "Artisans, PME, associations ou porteurs de projet : décrivez votre besoin, je vous réponds avec une proposition sur mesure.",
    quote: "Demander un devis",
    processTitle: "Comment on travaille ensemble.",
    processIntro: "De l'idée au déploiement, avec un interlocuteur unique du début à la fin.",
  },
  contact: {
    title: "Parlons de votre projet.",
    intro: "Une idée, une question, une opportunité ? Écrivez-moi, je réponds rapidement.",
    copy: "Copier l'adresse e-mail",
    copied: "Adresse copiée",
    type: "Type de projet",
    name: "Nom complet",
    email: "Adresse e-mail",
    phone: "Téléphone",
    optional: "(facultatif)",
    message: "Votre projet",
    placeholder: "Bonjour Mattéo, je souhaite...",
    send: "Envoyer le message",
    sending: "Envoi en cours...",
    failed: "L'envoi a échoué. Écrivez-moi directement à",
    successTitle: "Message envoyé.",
    successText: "Merci ! Je reviens vers vous très vite à l'adresse indiquée.",
    again: "Envoyer un autre message",
    errors: {
      name: "Indiquez votre nom.",
      email: "Cette adresse e-mail ne semble pas valide.",
      message: "Décrivez votre projet en quelques mots (10 caractères minimum).",
    },
  },
  footer: {
    city: "Strasbourg",
    cv: "CV (PDF)",
    rights: "Tous droits réservés.",
    built: "Conçu et développé avec Next.js, Tailwind CSS et Motion.",
  },
};

export type Messages = typeof fr;
