import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SectionTitle from "./SectionTitle";
import rpgImg from "../assets/images/rpg.png";
import epiTrelloImg from "../assets/images/EpiTrello.png";
import sokobanImg from "../assets/images/sokoban.png";
import portfolioImg from "../assets/images/Portfolio.png";
import jebIncubatorImg from "../assets/images/Jeb_Incubator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectsData = [
  {
    href: "#",
    githubLink:
      "https://github.com/EpitechPGE3-2025/G-PRO-500-STG-5-1-professionalwork-20",
    imgSrc: epiTrelloImg,
    title: "EpiTrello - Plateforme Collaborative",
    description:
      "Une réplique de Trello avec gestion de projets en drag & drop et collaboration en temps réel. Inclut une API RESTful, une base de données et un déploiement conteneurisé.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Docker"],
  },
  {
    href: "#",
    githubLink: "https://github.com/matteospringmann/Portfolio_Taiwind",
    imgSrc: portfolioImg,
    title: "Portfolio Professionnel",
    description:
      "Ce site ! Une Single-Page Application construite avec React, stylisée avec Tailwind CSS et un backend Node.js pour le formulaire de contact.",
    tags: ["React", "TailwindCSS", "Node.js", "Vite"],
  },
  {
    href: "#",
    githubLink:
      "https://github.com/EpitechPromo2028/B-MUL-200-STG-2-1-myrpg-paul.bast",
    imgSrc: rpgImg,
    title: "SAVERNE_RPG",
    description:
      "Jeu de rôle 2D en C avec la librairie CSFML, incluant animations, collisions et un système de quêtes simple.",
    tags: ["C", "CSFML", "Jeu 2D"],
  },
];

const Projects = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="Projets"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32 bg-white`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Réalisations"
          subtitle="Quelques-uns de mes projets"
        />

        <div className="mt-20 space-y-20 lg:space-y-28">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Colonne Image */}
                <div
                  className={`group relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={project.imgSrc}
                        alt={`Aperçu du projet ${project.title}`}
                      />
                    </div>
                  </a>
                </div>

                {/* Colonne Texte */}
                <div
                  className={`flex flex-col items-start ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-lg text-gray-600">
                    {project.description}
                  </p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    Voir sur GitHub
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* --- DÉBUT DU NOUVEAU BLOC GITHUB --- */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Et ce n'est pas tout !
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Ce portfolio ne présente qu'une sélection de mes travaux. Pour
            découvrir l'ensemble de mes projets, contributions et
            expérimentations, je vous invite à visiter ma page GitHub.
          </p>
          <a
            href="https://github.com/matteospringmann" // IMPORTANT: Vérifiez que c'est le bon lien
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-gray-700 transition-all transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            Visiter mon GitHub
          </a>
        </div>
        {/* --- FIN DU NOUVEAU BLOC GITHUB --- */}
      </div>
    </section>
  );
};

export default Projects;
