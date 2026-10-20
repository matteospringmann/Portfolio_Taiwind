import type { Localized, Resolved } from "@/i18n/config";

// Every text is written in the three languages side by side: { fr, en, de }.
// French spacing before « : ; ? ! » is added automatically, write plain spaces.

type ShotSource = { src: string; alt: Localized; caption?: Localized };

type ProjectSource = {
  slug: string;
  title: string;
  category: Localized;
  /** Mon rôle sur le projet, affiché à côté de la catégorie. */
  role: Localized;
  /** Couleur propre au projet, utilisée pour teinter la scène. */
  accent: string;
  /** Appareil mis en avant dans la section Projets. */
  device: "browser" | "phone";
  /** Adresse affichée dans la barre du navigateur. */
  url: string;
  summary: Localized;
  problem: Localized;
  solution: Localized;
  features: Localized[];
  stack: string[];
  links?: { site?: string; store?: string };
  /** Affiché quand il n'y a pas encore de lien public. */
  note?: Localized;
  /** Captures dans public/projets/<slug>/ : ordinateur 16:10, mobile 390x844. */
  cover: ShotSource;
  mobile: ShotSource;
  /** Texte de la barre d'état du téléphone : "light" si la capture mobile a un fond sombre. */
  statusBar?: "dark" | "light";
  gallery: ShotSource[];
};

export type Shot = Resolved<ShotSource>;
export type Project = Resolved<ProjectSource>;

const shot = (slug: string, name: string, alt: Localized, caption?: Localized): ShotSource => ({
  src: `/projets/${slug}/${name}.webp`,
  alt,
  caption,
});

export const projects: ProjectSource[] = [
  {
    slug: "zalonini",
    title: "Zalonini Coffee",
    category: {
      fr: "Boutique en ligne d'un torréfacteur",
      en: "Online shop for a coffee roaster",
      de: "Onlineshop einer Kaffeerösterei",
    },
    role: { fr: "Projet client", en: "Client project", de: "Kundenprojekt" },
    accent: "#b8642e",
    device: "browser",
    url: "zalonini-coffee-roasters-3.myshopify.com",
    summary: {
      fr: "La boutique Shopify d'un torréfacteur alsacien : un thème sur mesure, chaleureux et artisanal, fidèle à ses cafés.",
      en: "The Shopify store of a coffee roaster from Alsace: a custom theme, warm and handcrafted, true to his coffees.",
      de: "Der Shopify-Shop eines elsässischen Kaffeerösters: ein maßgeschneidertes Theme, warm und handwerklich, so ehrlich wie seine Kaffees.",
    },
    problem: {
      fr: "Bruno torréfie en petites quantités et vend surtout sur les marchés. Il voulait une boutique en ligne qui lui ressemble : authentique et humble, loin des sites de café génériques.",
      en: "Bruno roasts in small batches and sells mostly at markets. He wanted an online shop that feels like him: authentic and humble, far from generic coffee websites.",
      de: "Bruno röstet in kleinen Mengen und verkauft vor allem auf Märkten. Er wollte einen Onlineshop, der zu ihm passt: authentisch und bescheiden, weit weg von austauschbaren Kaffee-Websites.",
    },
    solution: {
      fr: "Un thème Shopify écrit de zéro, ajusté au fil de plusieurs séries de retours du client : fiches détaillées pour chaque lot, comparateur café vert et torréfié, guide des méthodes douces.",
      en: "A Shopify theme written from scratch and refined over several rounds of client feedback: detailed pages for each lot, a green versus roasted coffee slider, a guide to slow brewing methods.",
      de: "Ein von Grund auf geschriebenes Shopify-Theme, über mehrere Feedbackrunden mit dem Kunden verfeinert: ausführliche Seiten für jede Partie, ein Vergleichsregler für grünen und gerösteten Kaffee, ein Ratgeber zu langsamen Brühmethoden.",
    },
    features: [
      {
        fr: "Thème Shopify sur mesure, construit en sections",
        en: "Custom Shopify theme, built in sections",
        de: "Individuelles Shopify-Theme, in Sections aufgebaut",
      },
      {
        fr: "Fiches café : origine, altitude, process, notes",
        en: "Coffee pages: origin, altitude, process, tasting notes",
        de: "Kaffeeseiten: Herkunft, Anbauhöhe, Aufbereitung, Aromen",
      },
      {
        fr: "Comparateur glissant café vert et café torréfié",
        en: "Slider comparing green and roasted coffee",
        de: "Schieberegler: grüner und gerösteter Kaffee im Vergleich",
      },
      {
        fr: "Guide « Slow coffee » des méthodes d'extraction",
        en: "“Slow coffee” guide to brewing methods",
        de: "„Slow Coffee“-Ratgeber zu den Brühmethoden",
      },
    ],
    stack: ["Shopify", "Liquid", "Tailwind CSS", "Alpine.js", "Vite"],
    note: {
      fr: "Boutique en cours d'ouverture : le lien public arrive bientôt.",
      en: "The shop is about to open: the public link is coming soon.",
      de: "Der Shop eröffnet in Kürze: Der öffentliche Link folgt bald.",
    },
    cover: shot("zalonini", "accueil", {
      fr: "Page d'accueil de la boutique Zalonini Coffee Roasters",
      en: "Home page of the Zalonini Coffee Roasters shop",
      de: "Startseite des Shops Zalonini Coffee Roasters",
    }),
    mobile: shot("zalonini", "telephone", {
      fr: "Accueil de la boutique Zalonini sur mobile",
      en: "The Zalonini shop home page on mobile",
      de: "Die Startseite des Zalonini-Shops auf dem Smartphone",
    }),
    gallery: [
      shot(
        "zalonini",
        "boutique",
        {
          fr: "Grille des cafés de la boutique Zalonini",
          en: "Coffee grid of the Zalonini shop",
          de: "Kaffeeübersicht des Zalonini-Shops",
        },
        {
          fr: "La boutique : un lot par origine, avec ses caractéristiques.",
          en: "The shop: one lot per origin, with its characteristics.",
          de: "Der Shop: eine Partie pro Herkunft, mit ihren Eigenschaften.",
        },
      ),
      shot(
        "zalonini",
        "comparateur",
        {
          fr: "Comparateur café vert et café torréfié",
          en: "Green versus roasted coffee comparison",
          de: "Vergleich von grünem und geröstetem Kaffee",
        },
        {
          fr: "Le comparateur à faire glisser, comme sur les marchés.",
          en: "The comparison slider, just like at the market stall.",
          de: "Der Vergleichsregler, wie am Marktstand.",
        },
      ),
      shot(
        "zalonini",
        "signature",
        {
          fr: "Section signature avec photos du torréfacteur",
          en: "Signature section with the roaster's photos",
          de: "Signature-Bereich mit Fotos des Rösters",
        },
        {
          fr: "Les vraies photos du torréfacteur, mises en scène.",
          en: "The roaster's real photos, put on stage.",
          de: "Die echten Fotos des Rösters, in Szene gesetzt.",
        },
      ),
      shot(
        "zalonini",
        "slow-coffee",
        {
          fr: "Guide des méthodes douces",
          en: "Guide to slow brewing methods",
          de: "Ratgeber zu langsamen Brühmethoden",
        },
        {
          fr: "Le guide des méthodes douces.",
          en: "The slow brewing guide.",
          de: "Der Ratgeber zu den langsamen Brühmethoden.",
        },
      ),
    ],
  },
  {
    slug: "dressigo",
    title: "Dressigo",
    category: {
      fr: "Application web et mobile avec IA",
      en: "Web and mobile app powered by AI",
      de: "Web- und Mobile-App mit KI",
    },
    role: { fr: "Cofondateur", en: "Co-founder", de: "Mitgründer" },
    accent: "#3d4ff5",
    device: "phone",
    url: "dressigo.app",
    summary: {
      fr: "Une app qui transforme la photo d'un vêtement en annonce prête pour Vinted, Leboncoin ou eBay : détourage, décor propre et texte rédigé.",
      en: "An app that turns a photo of a garment into a listing ready for Vinted, Leboncoin or eBay: background removal, a clean backdrop and a written description.",
      de: "Eine App, die aus dem Foto eines Kleidungsstücks eine fertige Anzeige für Vinted, Leboncoin oder eBay macht: Freistellen, sauberer Hintergrund und fertiger Anzeigentext.",
    },
    problem: {
      fr: "Vendre ses vêtements d'occasion prend du temps : photos prises sur un fond chargé, annonce à réécrire pour chaque plateforme. Un article mal présenté se vend moins bien.",
      en: "Selling second-hand clothes takes time: photos taken on a cluttered background, a listing to rewrite for every platform. A poorly presented item sells worse.",
      de: "Gebrauchte Kleidung zu verkaufen kostet Zeit: Fotos vor unruhigem Hintergrund, eine Anzeige, die für jede Plattform neu geschrieben werden muss. Ein schlecht präsentierter Artikel verkauft sich schlechter.",
    },
    solution: {
      fr: "L'article est détouré directement dans le navigateur puis posé sur un décor au choix. Une IA rédige ensuite le titre et la description pour chaque plateforme, sans jamais inventer la marque ni la taille.",
      en: "The item is cut out right in the browser, then placed on a backdrop of your choice. An AI then writes the title and description for each platform, without ever making up the brand or the size.",
      de: "Der Artikel wird direkt im Browser freigestellt und auf einen Hintergrund nach Wahl gesetzt. Danach schreibt eine KI Titel und Beschreibung für jede Plattform, ohne je Marke oder Größe zu erfinden.",
    },
    features: [
      {
        fr: "Détourage sur l'appareil, dans le navigateur (WebGPU)",
        en: "On-device background removal, in the browser (WebGPU)",
        de: "Freistellen auf dem Gerät, direkt im Browser (WebGPU)",
      },
      {
        fr: "Douze décors, formats carré et 4:5",
        en: "Twelve backdrops, square and 4:5 formats",
        de: "Zwölf Hintergründe, quadratisch und im Format 4:5",
      },
      {
        fr: "Annonce Vinted, Leboncoin et eBay en quatre langues",
        en: "Vinted, Leboncoin and eBay listings in four languages",
        de: "Anzeigen für Vinted, Leboncoin und eBay in vier Sprachen",
      },
      {
        fr: "Crédits, paiement Stripe et suivi des ventes",
        en: "Credits, Stripe payments and sales tracking",
        de: "Credits, Stripe-Zahlung und Verkaufsübersicht",
      },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Stripe", "Mistral AI"],
    links: { site: "https://dressigo.app" },
    cover: shot("dressigo", "accueil", {
      fr: "Page d'accueil de Dressigo avec un comparatif avant et après détourage",
      en: "Dressigo home page with a before and after cut-out comparison",
      de: "Dressigo-Startseite mit Vorher-Nachher-Vergleich des Freistellens",
    }),
    mobile: shot("dressigo", "telephone", {
      fr: "Dressigo sur mobile : un short détouré, avant et après",
      en: "Dressigo on mobile: a pair of shorts, before and after",
      de: "Dressigo auf dem Smartphone: eine Shorts, vorher und nachher",
    }),
    gallery: [
      shot(
        "dressigo",
        "etapes",
        {
          fr: "Les trois étapes de Dressigo",
          en: "The three steps of Dressigo",
          de: "Die drei Schritte von Dressigo",
        },
        {
          fr: "Trois temps : la photo, le décor, l'annonce.",
          en: "Three steps: the photo, the backdrop, the listing.",
          de: "Drei Schritte: das Foto, der Hintergrund, die Anzeige.",
        },
      ),
      shot(
        "dressigo",
        "annonce",
        {
          fr: "Exemple d'annonce générée",
          en: "Example of a generated listing",
          de: "Beispiel einer erstellten Anzeige",
        },
        {
          fr: "L'annonce rédigée pour chaque plateforme, champ par champ.",
          en: "The listing written for each platform, field by field.",
          de: "Die Anzeige für jede Plattform, Feld für Feld geschrieben.",
        },
      ),
      shot(
        "dressigo",
        "suivi",
        { fr: "Suivi des ventes", en: "Sales tracking", de: "Verkaufsübersicht" },
        {
          fr: "Le suivi des ventes, sans tableur.",
          en: "Sales tracking, without a spreadsheet.",
          de: "Die Verkaufsübersicht, ganz ohne Tabelle.",
        },
      ),
    ],
  },
  {
    slug: "lumi-geo",
    title: "Lumi GEO",
    category: {
      fr: "Extension Chrome d'analyse SEO et GEO",
      en: "Chrome extension for SEO and GEO analysis",
      de: "Chrome-Erweiterung für SEO- und GEO-Analysen",
    },
    role: { fr: "Projet personnel", en: "Personal project", de: "Eigenes Projekt" },
    accent: "#d6452b",
    device: "browser",
    url: "lumi-geo.pages.dev",
    summary: {
      fr: "Une extension Chrome qui montre une page telle que la voient ChatGPT, Perplexity ou Gemini, la note sur 100 et donne le code pour corriger.",
      en: "A Chrome extension that shows a page the way ChatGPT, Perplexity or Gemini see it, scores it out of 100 and gives you the code to fix it.",
      de: "Eine Chrome-Erweiterung, die eine Seite so zeigt, wie ChatGPT, Perplexity oder Gemini sie sehen, sie mit bis zu 100 Punkten bewertet und den Code zur Korrektur liefert.",
    },
    problem: {
      fr: "La plupart des robots IA n'exécutent pas le JavaScript. Une page parfaite dans le navigateur peut être presque vide pour eux, et ses éditeurs ne le voient pas.",
      en: "Most AI crawlers don't run JavaScript. A page that looks perfect in the browser can be almost empty to them, and its publishers don't notice.",
      de: "Die meisten KI-Crawler führen kein JavaScript aus. Eine Seite, die im Browser perfekt aussieht, kann für sie fast leer sein, ohne dass ihre Betreiber es merken.",
    },
    solution: {
      fr: "Lumi compare la page affichée au HTML brut et vérifie les données structurées, le llms.txt et l'accès des robots IA. Elle classe ensuite les corrections par points gagnés. Tout tourne dans le navigateur : aucun serveur, aucune donnée envoyée.",
      en: "Lumi compares the rendered page with the raw HTML and checks structured data, llms.txt and AI crawler access. It then ranks fixes by the points they earn. Everything runs in the browser: no server, no data sent.",
      de: "Lumi vergleicht die angezeigte Seite mit dem rohen HTML und prüft strukturierte Daten, llms.txt und den Zugang für KI-Crawler. Danach sortiert sie die Korrekturen nach gewonnenen Punkten. Alles läuft im Browser: kein Server, keine Datenübertragung.",
    },
    features: [
      {
        fr: "Note sur 100 et quatre piliers : SEO, GEO, AEO, Vue IA",
        en: "Score out of 100 and four pillars: SEO, GEO, AEO, AI view",
        de: "Bewertung bis 100 und vier Säulen: SEO, GEO, AEO, KI-Ansicht",
      },
      {
        fr: "Vue robot : le texte invisible sans JavaScript, surligné",
        en: "Robot view: text that is invisible without JavaScript, highlighted",
        de: "Robot-Ansicht: Text, der ohne JavaScript unsichtbar ist, hervorgehoben",
      },
      {
        fr: "Code JSON-LD prêt à copier, adapté au type de page",
        en: "Ready-to-copy JSON-LD code, tailored to the page type",
        de: "JSON-LD-Code zum Kopieren, passend zum Seitentyp",
      },
      {
        fr: "Aperçu Google, rapport PDF, interface bilingue",
        en: "Google preview, PDF report, bilingual interface",
        de: "Google-Vorschau, PDF-Bericht, zweisprachige Oberfläche",
      },
    ],
    stack: ["JavaScript", "Chrome Extension MV3", "Next.js", "Tailwind CSS", "Cloudflare Pages"],
    links: {
      site: "https://lumi-geo.pages.dev/",
      store: "https://chromewebstore.google.com/detail/lumi-geo/nodnlpecbohjikeljkdcmkpagokdhike",
    },
    cover: shot("lumi-geo", "accueil", {
      fr: "Page d'accueil de Lumi GEO",
      en: "Lumi GEO home page",
      de: "Startseite von Lumi GEO",
    }),
    mobile: shot("lumi-geo", "telephone", {
      fr: "Le site de Lumi GEO sur mobile",
      en: "The Lumi GEO website on mobile",
      de: "Die Website von Lumi GEO auf dem Smartphone",
    }),
    gallery: [
      shot(
        "lumi-geo",
        "vue-robot",
        {
          fr: "La vue robot de l'extension, zones invisibles hachurées",
          en: "The extension's robot view, with invisible areas hatched",
          de: "Die Robot-Ansicht der Erweiterung, unsichtbare Bereiche schraffiert",
        },
        {
          fr: "La vue robot : ce que les IA ne lisent pas, hachuré sur la page.",
          en: "The robot view: what AI can't read, hatched on the page.",
          de: "Die Robot-Ansicht: Was KIs nicht lesen, wird auf der Seite schraffiert.",
        },
      ),
      shot(
        "lumi-geo",
        "note",
        {
          fr: "Le panneau de l'extension avec la note sur 100",
          en: "The extension panel with the score out of 100",
          de: "Das Panel der Erweiterung mit der Bewertung bis 100",
        },
        {
          fr: "La note globale et ses quatre piliers.",
          en: "The overall score and its four pillars.",
          de: "Die Gesamtbewertung und ihre vier Säulen.",
        },
      ),
      shot(
        "lumi-geo",
        "code",
        {
          fr: "Le code JSON-LD généré par l'extension",
          en: "The JSON-LD code generated by the extension",
          de: "Der von der Erweiterung erzeugte JSON-LD-Code",
        },
        {
          fr: "Le code à copier pour corriger.",
          en: "The code to copy to fix it.",
          de: "Der Code zum Kopieren für die Korrektur.",
        },
      ),
      shot(
        "lumi-geo",
        "etapes",
        {
          fr: "Les trois étapes d'une analyse",
          en: "The three steps of an analysis",
          de: "Die drei Schritte einer Analyse",
        },
        {
          fr: "Le site de présentation : trois étapes, directement dans Chrome.",
          en: "The product website: three steps, right inside Chrome.",
          de: "Die Produktseite: drei Schritte, direkt in Chrome.",
        },
      ),
    ],
  },
  {
    slug: "methodoskills",
    title: "MethodoSkills",
    category: {
      fr: "Boutique de packs de skills pour Claude",
      en: "Shop selling skill packs for Claude",
      de: "Shop für Skill-Pakete für Claude",
    },
    role: { fr: "Cofondateur", en: "Co-founder", de: "Mitgründer" },
    accent: "#f08a3c",
    device: "browser",
    url: "methodoskills-ai.app",
    summary: {
      fr: "Un site qui vend des packs de skills pour Claude : dix packs, 51 méthodes prêtes à installer, en français et en anglais.",
      en: "A website that sells skill packs for Claude: ten packs, 51 ready-to-install methods, in French and English.",
      de: "Eine Website, die Skill-Pakete für Claude verkauft: zehn Pakete, 51 installationsfertige Methoden, auf Französisch und Englisch.",
    },
    problem: {
      fr: "Claude sait écrire, mais sans méthode il faut tout lui réexpliquer à chaque demande. Et la plupart des utilisateurs ne savent pas écrire leurs propres skills.",
      en: "Claude can write, but without a method you have to explain everything again with every request. And most users don't know how to write their own skills.",
      de: "Claude kann schreiben, aber ohne Methode muss man bei jeder Anfrage alles neu erklären. Und die meisten Nutzer wissen nicht, wie man eigene Skills schreibt.",
    },
    solution: {
      fr: "Des packs par besoin (clients, emploi, étudiants…) en paiement unique. Une démo montre chaque skill au travail, et la livraison est automatique : paiement Stripe, liens de téléchargement signés, e-mail de confirmation.",
      en: "Packs by need (clients, job hunting, students…) with a one-time payment. A demo shows each skill at work, and delivery is automatic: Stripe payment, signed download links, confirmation email.",
      de: "Pakete nach Bedarf (Kunden, Jobsuche, Studium …) mit Einmalzahlung. Eine Demo zeigt jeden Skill bei der Arbeit, und die Auslieferung läuft automatisch: Stripe-Zahlung, signierte Download-Links, Bestätigungs-E-Mail.",
    },
    features: [
      {
        fr: "Démo interactive de chaque skill",
        en: "Interactive demo of every skill",
        de: "Interaktive Demo jedes Skills",
      },
      {
        fr: "Paiement Stripe, prix calculé côté serveur",
        en: "Stripe payment, price computed on the server",
        de: "Stripe-Zahlung, Preis serverseitig berechnet",
      },
      {
        fr: "Téléchargements par liens signés, valables 7 jours",
        en: "Downloads through signed links, valid for 7 days",
        de: "Downloads über signierte Links, 7 Tage gültig",
      },
      {
        fr: "Site bilingue, 49 tests automatisés",
        en: "Bilingual website, 49 automated tests",
        de: "Zweisprachige Website, 49 automatisierte Tests",
      },
    ],
    stack: ["JavaScript", "Tailwind CSS", "Cloudflare Pages Functions", "Stripe"],
    links: { site: "https://methodoskills-ai.app" },
    cover: shot("methodoskills", "accueil", {
      fr: "Page d'accueil de MethodoSkills",
      en: "MethodoSkills home page",
      de: "Startseite von MethodoSkills",
    }),
    mobile: shot("methodoskills", "telephone", {
      fr: "MethodoSkills sur mobile",
      en: "MethodoSkills on mobile",
      de: "MethodoSkills auf dem Smartphone",
    }),
    statusBar: "light",
    gallery: [
      shot(
        "methodoskills",
        "demo",
        {
          fr: "Démo d'un skill dans une conversation avec Claude",
          en: "Demo of a skill in a conversation with Claude",
          de: "Demo eines Skills in einem Gespräch mit Claude",
        },
        {
          fr: "La démo : chaque skill au travail, de la demande au résultat.",
          en: "The demo: every skill at work, from request to result.",
          de: "Die Demo: jeder Skill bei der Arbeit, von der Anfrage bis zum Ergebnis.",
        },
      ),
      shot(
        "methodoskills",
        "packs",
        { fr: "Choix des packs et achat", en: "Choosing and buying packs", de: "Paketauswahl und Kauf" },
        {
          fr: "Un pack par besoin, achat en un clic.",
          en: "One pack per need, bought in one click.",
          de: "Ein Paket pro Bedarf, Kauf mit einem Klick.",
        },
      ),
    ],
  },
  {
    slug: "web-relive",
    title: "Web Relive",
    category: {
      fr: "Site vitrine de mon studio web",
      en: "Website of my web studio",
      de: "Website meines Webstudios",
    },
    role: { fr: "Fondateur", en: "Founder", de: "Gründer" },
    accent: "#13836a",
    device: "browser",
    url: "web-relive.webrelive.workers.dev",
    summary: {
      fr: "Web Relive, c'est mon studio web à Strasbourg : je crée des sites vitrines et des outils de gestion pour les commerces, les indépendants et les PME.",
      en: "Web Relive is my web studio in Strasbourg: I build websites and management tools for shops, freelancers and small businesses.",
      de: "Web Relive ist mein Webstudio in Straßburg: Ich entwickle Websites und Verwaltungstools für Geschäfte, Selbstständige und KMU.",
    },
    problem: {
      fr: "Un commerçant hésite à confier son site : il veut voir le résultat, comprendre le déroulé et savoir à qui il parle avant d'écrire.",
      en: "A shop owner hesitates to hand over their website: they want to see the result, understand the process and know who they're talking to before getting in touch.",
      de: "Ein Ladenbesitzer zögert, seine Website aus der Hand zu geben: Er will das Ergebnis sehen, den Ablauf verstehen und wissen, mit wem er spricht, bevor er sich meldet.",
    },
    solution: {
      fr: "J'ai conçu une page qui montre au lieu d'expliquer : comparateur avant et après, maquettes de sites et d'outils internes, planning type et engagements écrits. Le tout noté entre 98 et 100 sur Lighthouse.",
      en: "I designed a page that shows instead of explains: a before and after slider, mockups of websites and internal tools, a typical schedule and written commitments. All scored between 98 and 100 on Lighthouse.",
      de: "Ich habe eine Seite gestaltet, die zeigt statt erklärt: Vorher-Nachher-Regler, Entwürfe von Websites und internen Tools, ein typischer Zeitplan und schriftliche Zusagen. Alles mit 98 bis 100 Punkten bei Lighthouse.",
    },
    features: [
      {
        fr: "Comparateur avant et après à faire glisser",
        en: "Draggable before and after slider",
        de: "Verschiebbarer Vorher-Nachher-Regler",
      },
      {
        fr: "Maquettes de sites et d'outils internes",
        en: "Mockups of websites and internal tools",
        de: "Entwürfe von Websites und internen Tools",
      },
      {
        fr: "Demande de devis validée et enregistrée dans Supabase",
        en: "Quote requests validated and stored in Supabase",
        de: "Angebotsanfragen geprüft und in Supabase gespeichert",
      },
      {
        fr: "Lighthouse : 98 en performance, 100 ailleurs",
        en: "Lighthouse: 98 for performance, 100 everywhere else",
        de: "Lighthouse: 98 bei der Performance, 100 überall sonst",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare Workers"],
    links: { site: "https://web-relive.webrelive.workers.dev/" },
    cover: shot("web-relive", "accueil", {
      fr: "Page d'accueil de Web Relive",
      en: "Web Relive home page",
      de: "Startseite von Web Relive",
    }),
    mobile: shot("web-relive", "telephone", {
      fr: "Web Relive sur mobile",
      en: "Web Relive on mobile",
      de: "Web Relive auf dem Smartphone",
    }),
    gallery: [
      shot(
        "web-relive",
        "avant-apres",
        {
          fr: "Comparateur avant et après d'un site de restaurant",
          en: "Before and after slider for a restaurant website",
          de: "Vorher-Nachher-Regler für eine Restaurant-Website",
        },
        {
          fr: "Le comparateur : un site de restaurant, avant et après.",
          en: "The slider: a restaurant website, before and after.",
          de: "Der Regler: eine Restaurant-Website, vorher und nachher.",
        },
      ),
      shot(
        "web-relive",
        "offres",
        { fr: "Les offres du studio", en: "The studio's services", de: "Die Angebote des Studios" },
        {
          fr: "Les offres, chacune avec son aperçu.",
          en: "The services, each with its own preview.",
          de: "Die Angebote, jeweils mit eigener Vorschau.",
        },
      ),
      shot(
        "web-relive",
        "realisations",
        { fr: "Les réalisations du studio", en: "The studio's work", de: "Die Arbeiten des Studios" },
        {
          fr: "Des maquettes réalistes comme point de départ des projets clients.",
          en: "Realistic mockups as a starting point for client projects.",
          de: "Realistische Entwürfe als Ausgangspunkt für Kundenprojekte.",
        },
      ),
    ],
  },
];
