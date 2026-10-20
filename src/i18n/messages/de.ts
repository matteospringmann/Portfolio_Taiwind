import type { Messages } from "./fr";

export const de: Messages = {
  meta: {
    title: "Mattéo Springmann, Frontend-Entwickler",
    keywords: [
      "Mattéo Springmann",
      "Frontend-Entwickler",
      "Next.js-Entwickler",
      "Website-Entwicklung",
      "interne Tools",
      "Epitech Strasbourg",
      "Portfolio",
    ],
    ogHeadline: ["Interfaces,", "die man spürt."],
    ogTagline: "Websites, interne Tools und individuelle Projekte",
  },
  a11y: {
    skip: "Zum Inhalt springen",
    mainNav: "Hauptnavigation",
    footerNav: "Fußzeile",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    openCommand: "Befehlspalette öffnen",
    language: "Sprache",
  },
  nav: {
    links: {
      "a-propos": "Über mich",
      projets: "Projekte",
      competences: "Kompetenzen",
      parcours: "Werdegang",
      services: "Leistungen",
    },
    home: "Start",
    contact: "Kontakt",
    cta: "Kontakt aufnehmen",
  },
  command: {
    label: "Befehlspalette",
    placeholder: "Zu einem Abschnitt springen, Lebenslauf laden...",
    search: "Befehl suchen",
    escape: "Esc",
    empty: "Keine Ergebnisse",
    goTo: "Gehe zu",
    actions: "Aktionen",
    language: "Sprache",
    cv: "Lebenslauf herunterladen",
    copyEmail: "E-Mail-Adresse kopieren",
    copied: "Adresse kopiert",
    github: "GitHub öffnen",
  },
  hero: {
    headline: "Interfaces, die man spürt.",
    intro:
      "Frontend-Entwickler, ausgebildet an der Epitech. Ich entwickle schnelle, präzise Websites und Web-Tools, die Freude machen.",
    projects: "Projekte ansehen",
    services: "Meine Leistungen",
  },
  about: {
    manifesto:
      "Ich bin Mattéo, Student an der Epitech Strasbourg und Frontend-Entwickler. Ich gestalte intuitive, performante Oberflächen, von der ersten Skizze bis zum Launch. Ich mag es, wenn ein gut abgestimmtes Detail ein Produkt selbstverständlich wirken lässt.",
    photoAlt: "Foto von",
    cv: "Lebenslauf herunterladen",
  },
  projects: {
    title: "Fünf Projekte. Fünf Spielwiesen.",
    intro:
      "Ein Shop für einen Kaffeeröster, eine KI-App, eine Chrome-Erweiterung, ein Skill-Shop und ein Webstudio. Echte Projekte: Öffnen Sie eins, um hinter die Kulissen zu blicken.",
    open: "Projekt ansehen",
    close: "Schließen",
    problem: "Das Problem",
    solution: "Die Lösung",
    features: "Funktionen",
    stack: "Technologien",
    gallery: "In Bildern",
    site: "Website besuchen",
    store: "Chrome Web Store",
  },
  skills: {
    title: "Ein Werkzeugkasten, in Aktion.",
    intro: "Jede Kachel führt echten Code aus. Klicken Sie, wechseln Sie den Tab und sehen Sie ihnen bei der Arbeit zu.",
    react: {
      caption: "Komponenten, die reagieren. Klicken Sie auf das Herz und beobachten Sie den Code.",
      card: "Sonnenuntergang",
      likes: "Likes",
      like: "Gefällt mir",
      unlike: "Gefällt mir entfernen",
      renders: "Renderings:",
      code: { component: "Card", state: "liked", setter: "setLiked", button: "Button", handler: "toggle" },
    },
    typescript: {
      caption: "Präzise Typen, Fehler, die vor dem Launch auffallen.",
      ok: "0 Fehler",
      code: `type Project = {
  title: string;
  stack: Tech[];
  live: boolean;
};

const dressigo: Project = {
  title: "Dressigo",
  stack: ["React Native", "Supabase"],
  live: true,
};`,
    },
    tailwind: { caption: "Styling direkt im Markup.", button: "Stil wechseln" },
    next: {
      caption: "Das Framework hinter genau dieser Website.",
      lines: ["✓ Kompiliert", "○ /  statische Seite", "✓ Bereit für Vercel"],
    },
    terminal: {
      title: "Node.js und Python",
      caption: "APIs, Skripte und Daten in Bewegung.",
      node: {
        command: "curl localhost:3000/api/projects?live=true",
        output: [
          "HTTP/1.1 200 OK",
          "[",
          '  { "title": "Dressigo", "type": "app" },',
          '  { "title": "Lumi GEO", "type": "extension" },',
          '  { "title": "MethodoSkills", "type": "e-commerce" }',
          "]",
        ],
      },
      python: {
        command: "python cutout.py jacket.jpg --backdrop marble",
        output: [
          "Foto ausgerichtet: 2048 x 2560",
          "Maske berechnet in 0,8 s",
          "Hintergrund angewendet: weißer Marmor, Format 4:5",
          "Bild gespeichert: jacket-marble.webp",
        ],
      },
    },
    git: {
      title: "Git und GitHub",
      caption: "Saubere Branches, eine lesbare Historie.",
      graph: "Commit-Graph mit einem gemergten Branch",
      commits: ["init", "startseite", "feat: warenkorb", "fix: mahlgrad", "hotfix", "merge", "v1.0"],
    },
    c: { title: "Programmiersprache C", caption: "Speicher, Zeiger, Sorgfalt: die Epitech-Schule." },
    linux: { caption: "Meine tägliche Arbeitsumgebung.", windows: ["Terminal", "Editor", "Browser"] },
    devops: {
      caption: "Continuous Integration, Container, Deployment in Produktion.",
      steps: ["Build", "Tests", "Docker-Image", "Deployment"],
      running: "läuft...",
      live: "✓ Online",
    },
  },
  journey: {
    programLink: "Programm entdecken",
    current: "Laufend",
    internship: "Praktikum",
    workTitle: "Im Unternehmen.",
    workIntro: "Die Praktika des Programms, um meinen Code in einem echten Team zu erproben.",
  },
  services: {
    title: "Was ich für Sie bauen kann.",
    intro:
      "Handwerksbetriebe, KMU, Vereine oder Gründer: Beschreiben Sie Ihr Anliegen, ich antworte Ihnen mit einem maßgeschneiderten Angebot.",
    quote: "Angebot anfragen",
    processTitle: "So arbeiten wir zusammen.",
    processIntro: "Von der Idee bis zum Launch, mit einem einzigen Ansprechpartner von Anfang bis Ende.",
  },
  contact: {
    title: "Sprechen wir über Ihr Projekt.",
    intro: "Eine Idee, eine Frage, eine Gelegenheit? Schreiben Sie mir, ich antworte schnell.",
    copy: "E-Mail-Adresse kopieren",
    copied: "Adresse kopiert",
    type: "Art des Projekts",
    name: "Vollständiger Name",
    email: "E-Mail-Adresse",
    phone: "Telefon",
    optional: "(optional)",
    message: "Ihr Projekt",
    placeholder: "Hallo Mattéo, ich möchte...",
    send: "Nachricht senden",
    sending: "Wird gesendet...",
    failed: "Das Senden ist fehlgeschlagen. Schreiben Sie mir direkt an",
    successTitle: "Nachricht gesendet.",
    successText: "Vielen Dank! Ich melde mich sehr bald unter der angegebenen Adresse.",
    again: "Weitere Nachricht senden",
    errors: {
      name: "Bitte geben Sie Ihren Namen an.",
      email: "Diese E-Mail-Adresse scheint nicht gültig zu sein.",
      message: "Beschreiben Sie Ihr Projekt in ein paar Worten (mindestens 10 Zeichen).",
    },
  },
  footer: {
    city: "Straßburg",
    cv: "Lebenslauf (PDF)",
    rights: "Alle Rechte vorbehalten.",
    built: "Gestaltet und entwickelt mit Next.js, Tailwind CSS und Motion.",
  },
};
