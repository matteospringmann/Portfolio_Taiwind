# Portfolio de Mattéo Springmann

Site personnel : présentation, projets, compétences, parcours et services (sites internet, outils internes, projets sur mesure).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, page statique)
- Tailwind CSS v4 (tokens dans `src/app/globals.css`)
- [Motion](https://motion.dev) pour les animations, [Lenis](https://lenis.darkroom.engineering) pour le scroll fluide
- EmailJS pour le formulaire de contact

## Lancer le projet

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm run start      # sert le build
npm run lint
```

Variables d'environnement (fichier `.env.local`, non versionné) :

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Le formulaire envoie `name`, `email`, `phone`, `message` et `project_type` au template EmailJS.

## Modifier le contenu

Tout le texte vit dans `src/content/` :

| Fichier | Contenu |
| --- | --- |
| `site.ts` | Nom, e-mail, liens (GitHub, LinkedIn), CV, qualités |
| `projects.ts` | Les projets affichés |
| `timeline.ts` | Le parcours |
| `services.ts` | Les offres et le processus |

Les tuiles de compétences (petits composants interactifs) sont dans `src/components/skills/`.

### Remplacer une maquette par un vrai projet

Dans `src/content/projects.ts`, pour le projet concerné :

1. passer `status` à `"live"` ;
2. ajouter `links: { demo: "https://...", code: "https://github.com/..." }` ;
3. (optionnel) ajouter `images: [{ src: "/projets/mon-projet.png", alt: "..." }]` avec l'image dans `public/projets/`. Les captures remplacent alors la maquette codée.

Le badge « Projet de démonstration » disparaît automatiquement.
