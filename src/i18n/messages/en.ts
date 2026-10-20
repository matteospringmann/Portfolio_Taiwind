import type { Messages } from "./fr";

export const en: Messages = {
  meta: {
    title: "Mattéo Springmann, front-end developer",
    keywords: [
      "Mattéo Springmann",
      "front-end developer",
      "Next.js developer",
      "website development",
      "internal tools",
      "Epitech Strasbourg",
      "portfolio",
    ],
    ogHeadline: ["Interfaces", "you can feel."],
    ogTagline: "Websites, internal tools and custom projects",
  },
  a11y: {
    skip: "Skip to content",
    mainNav: "Main navigation",
    footerNav: "Footer",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    openCommand: "Open the command palette",
    language: "Language",
  },
  nav: {
    links: {
      "a-propos": "About",
      projets: "Projects",
      competences: "Skills",
      parcours: "Journey",
      services: "Services",
    },
    home: "Home",
    contact: "Contact",
    cta: "Contact me",
  },
  command: {
    label: "Command palette",
    placeholder: "Jump to a section, download the CV...",
    search: "Search for a command",
    escape: "Esc",
    empty: "No results",
    goTo: "Go to",
    actions: "Actions",
    language: "Language",
    cv: "Download the CV",
    copyEmail: "Copy email address",
    copied: "Address copied",
    github: "Open GitHub",
  },
  hero: {
    headline: "Interfaces you can feel.",
    intro:
      "Front-end developer trained at Epitech. I build fast, precise websites and web tools that are a pleasure to use.",
    projects: "See the projects",
    services: "My services",
  },
  about: {
    manifesto:
      "I'm Mattéo, a student at Epitech Strasbourg and a front-end developer. I build intuitive, high-performance interfaces, from the first sketch to launch. I love it when one well-tuned detail makes a product feel obvious.",
    photoAlt: "Photo of",
    cv: "Download my CV",
  },
  projects: {
    title: "Five projects. Five playgrounds.",
    intro:
      "A shop for a coffee roaster, an AI app, a Chrome extension, a skills store and a web studio. Real projects: open one to go behind the scenes.",
    open: "Discover the project",
    close: "Close",
    problem: "The problem",
    solution: "The solution",
    features: "Features",
    stack: "Technologies",
    gallery: "In pictures",
    site: "Visit the website",
    store: "Chrome Web Store",
  },
  skills: {
    title: "A toolbox, up and running.",
    intro: "Every tile runs a real piece of code. Click, switch tabs, watch them work.",
    react: {
      caption: "Components that react. Click the heart and watch the code.",
      card: "Sunset",
      likes: "likes",
      like: "Like",
      unlike: "Remove like",
      renders: "renders:",
      code: { component: "Card", state: "liked", setter: "setLiked", button: "Button", handler: "toggle" },
    },
    typescript: {
      caption: "Precise types, bugs caught before going live.",
      ok: "0 errors",
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
    tailwind: { caption: "Styling, right in the markup.", button: "Change the style" },
    next: {
      caption: "The framework behind this very site.",
      lines: ["✓ Compiled", "○ /  static page", "✓ Ready for Vercel"],
    },
    terminal: {
      title: "Node.js and Python",
      caption: "APIs, scripts and data on the move.",
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
          "Photo straightened: 2048 x 2560",
          "Mask computed in 0.8 s",
          "Backdrop applied: white marble, 4:5 format",
          "Render saved: jacket-marble.webp",
        ],
      },
    },
    git: {
      title: "Git and GitHub",
      caption: "Clean branches, a readable history.",
      graph: "Commit graph with a merged branch",
      commits: ["init", "home", "feat: cart", "fix: grind", "hotfix", "merge", "v1.0"],
    },
    c: { title: "C language", caption: "Memory, pointers, rigour: the Epitech way." },
    linux: { caption: "My everyday work environment.", windows: ["terminal", "editor", "browser"] },
    devops: {
      caption: "Continuous integration, containers, shipping to production.",
      steps: ["Build", "Tests", "Docker image", "Deploy"],
      running: "running...",
      live: "✓ Live",
    },
  },
  journey: {
    programLink: "Discover the programme",
    current: "In progress",
    internship: "Internship",
    workTitle: "In the workplace.",
    workIntro: "The programme's internships, to put my code to the test in a real team.",
  },
  services: {
    title: "What I can build for you.",
    intro:
      "Craftspeople, small businesses, non-profits or founders: describe what you need and I'll get back to you with a tailored proposal.",
    quote: "Request a quote",
    processTitle: "How we work together.",
    processIntro: "From idea to launch, with a single point of contact from start to finish.",
  },
  contact: {
    title: "Let's talk about your project.",
    intro: "An idea, a question, an opportunity? Write to me, I reply quickly.",
    copy: "Copy email address",
    copied: "Address copied",
    type: "Project type",
    name: "Full name",
    email: "Email address",
    phone: "Phone",
    optional: "(optional)",
    message: "Your project",
    placeholder: "Hi Mattéo, I'd like to...",
    send: "Send message",
    sending: "Sending...",
    failed: "Sending failed. Write to me directly at",
    successTitle: "Message sent.",
    successText: "Thank you! I'll get back to you very soon at the address you gave.",
    again: "Send another message",
    errors: {
      name: "Please enter your name.",
      email: "This email address doesn't look valid.",
      message: "Describe your project in a few words (at least 10 characters).",
    },
  },
  footer: {
    city: "Strasbourg",
    cv: "CV (PDF)",
    rights: "All rights reserved.",
    built: "Designed and built with Next.js, Tailwind CSS and Motion.",
  },
};
