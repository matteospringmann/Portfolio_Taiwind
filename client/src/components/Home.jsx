import React from "react";
import epitechLogo from "../assets/images/epitech_logo.png"; // Importez le logo

const Home = () => {
    return (
        <section
            id="Accueil"
            className="relative bg-white min-h-screen flex items-center justify-center"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="mx-auto max-w-2xl">
                    {/* Logo Epitech */}
                    <img
                        src={epitechLogo}
                        alt="Logo Epitech"
                        className="mx-auto mb-8 h-24 w-auto" // Style du logo
                    />

                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Mattéo Springmann
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Étudiant en informatique et développeur front-end
                        spécialisé dans la création d'applications web modernes
                        et intuitives avec React et Tailwind CSS.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#Projets"
                            className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                        >
                            Découvrir mes projets
                        </a>
                        <a
                            href="#Contact"
                            className="text-sm font-semibold leading-6 text-gray-900 group"
                        >
                            Me contacter{" "}
                            <span
                                aria-hidden="true"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Icône de flèche pour scroller */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <a
                    href="#Presentation"
                    aria-label="Faire défiler vers la section suivante"
                >
                    <svg
                        className="w-8 h-8 text-gray-500 animate-bounce hover:text-blue-600 transition-colors"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 5.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Home;
