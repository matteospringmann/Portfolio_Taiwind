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
| `journey.ts` | Le parcours : Epitech, année par année, et les stages |
| `services.ts` | Les offres et le processus |

Les tuiles de compétences (petits composants interactifs) sont dans `src/components/skills/`.

### Ajouter ou modifier un projet

Chaque projet est une entrée de `src/content/projects.ts`. Ses captures vont dans `public/projets/<slug>/`, en WebP :

- `accueil.webp` : la page d'accueil sur ordinateur, au format 16:10 (capture 1440 x 900, exportée en 2000 px de large) ;
- `telephone.webp` : la même page sur mobile (capture 390 x 844, exportée en 780 px de large), avec en haut une bande unie de 54 px (162 px en x3) de la couleur du fond, où se placent la barre d'état et l'encoche du téléphone ;
- d'autres captures 16:10 pour la galerie (`gallery`), chacune avec une légende.

`role` indique ton rôle (Fondateur, Cofondateur, Projet client…), affiché à côté de la catégorie. `device` choisit l'appareil mis en avant dans la section Projets (`"browser"` ou `"phone"`). `links.site` affiche le bouton « Voir le site » ; sans lien public, `note` explique pourquoi.
