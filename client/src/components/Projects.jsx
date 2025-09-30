import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SectionTitle from "./SectionTitle";
import rpgImg from "../assets/images/rpg.png";
import renameImg from "../assets/images/rename.png";
import sokobanImg from "../assets/images/sokoban.png";
import siteImg from "../assets/images/site.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectsData = [
    {
        href: "#",
        githubLink: "#", // Ajoutez le lien GitHub ici
        imgSrc: siteImg,
        title: "Portfolio Professionnel",
        description:
            "Ce site ! Une Single-Page Application construite avec React et Vite, stylisée avec Tailwind CSS. Le formulaire de contact est géré par un backend dédié en Node.js et Express.",
        tags: ["React", "TailwindCSS", "Node.js", "Vite"],
    },
    {
        href: "#",
        githubLink: "#", // Ajoutez le lien GitHub ici
        imgSrc: rpgImg,
        title: "SAVERNE_RPG",
        description:
            "Un jeu de rôle 2D développé en C avec la librairie graphique CSFML. Le projet inclut la gestion des animations, les collisions, et un système de quêtes simple.",
        tags: ["C", "CSFML", "Jeu 2D"],
    },
    {
        href: "#",
        githubLink: "#", // Ajoutez le lien GitHub ici
        imgSrc: renameImg,
        title: "MY_HUNTER",
        description:
            "Une recréation du jeu d'arcade classique Duck Hunt. Ce projet m'a permis de me familiariser avec la gestion des sprites, des événements utilisateur et de la logique de jeu.",
        tags: ["C", "CSFML", "Jeu"],
    },
    {
        href: "#",
        githubLink: "#", // Ajoutez le lien GitHub ici
        imgSrc: sokobanImg,
        title: "MY SOKOBAN",
        description:
            "Une adaptation du célèbre jeu de puzzle Sokoban, entièrement jouable dans un terminal. Ce projet a renforcé mes compétences en algorithmique et en gestion de la mémoire en C.",
        tags: ["C", "Ncurses", "Algorithmique"],
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
                                        <div className="overflow-hidden rounded-xl shadow-lg">
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
                                                className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
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
                                        <i className="fab fa-github"></i>
                                        Voir sur GitHub
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
