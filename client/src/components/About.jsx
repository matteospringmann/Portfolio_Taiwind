import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SectionTitle from "./SectionTitle";
import cvFile from "../assets/files/cv.pdf";
import profilePic from "../assets/images/profil_picture.jpg";

// Icônes pour les qualités
const CreativeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
    </svg>
);

const AutonomousIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
    </svg>
);

const PassionateIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
    </svg>
);

const qualities = [
    {
        name: "Créatif",
        icon: <CreativeIcon />,
        description:
            "J'aime imaginer des solutions élégantes et efficaces aux problèmes complexes.",
    },
    {
        name: "Autonome",
        icon: <AutonomousIcon />,
        description:
            "Je suis capable de mener un projet de A à Z en faisant preuve d'initiative.",
    },
    {
        name: "Passionné",
        icon: <PassionateIcon />,
        description:
            "Le code est plus qu'un travail, c'est un domaine qui me captive et me pousse à apprendre constamment.",
    },
];

const About = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section
            id="Presentation"
            ref={ref}
            className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionTitle
                    title="Mon Parcours"
                    subtitle="Développeur passionné en quête de défis"
                />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                    <div className="lg:col-span-3">
                        <div className="space-y-6 text-lg text-gray-700">
                            <p>
                                Je suis Mattéo Springmann, étudiant en 2ème
                                année à
                                <a
                                    href="https://www.epitech.eu/ecole-informatique-strasbourg/"
                                    className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                                >
                                    {" "}
                                    Epitech Strasbourg
                                </a>
                                . Actuellement en Master d'Informatique, je me
                                spécialise dans le développement front-end avec
                                un fort intérêt pour la création d'interfaces
                                utilisateur intuitives et performantes.
                            </p>
                            <p>
                                Ce portfolio est le reflet de mon apprentissage
                                et de ma passion pour la technologie. Vous y
                                découvrirez mes projets, mes compétences
                                techniques, et la manière dont j'approche la
                                résolution de problèmes.
                            </p>
                        </div>

                        <div className="mt-10 space-y-6">
                            {qualities.map((quality) => (
                                <div
                                    key={quality.name}
                                    className="flex items-start"
                                >
                                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
                                        {quality.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {quality.name}
                                        </h4>
                                        <p className="mt-1 text-gray-600">
                                            {quality.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                        <div className="flex flex-col items-center gap-6 w-full max-w-xs text-center">
                            <img
                                className="w-48 h-48 rounded-full object-cover shadow-2xl"
                                src={profilePic}
                                alt="Photo de Mattéo Springmann"
                            />
                            <p className="text-sm text-gray-500">
                                Étudiant en 2ème année, programme Grande École
                                (PGE 2028).
                            </p>
                            <a
                                href={cvFile}
                                download="matteo_springmann_cv.pdf"
                                className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                            >
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
