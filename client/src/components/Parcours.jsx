import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SectionTitle from "./SectionTitle";

// Icônes pour différencier les types d'événements
const WorkIcon = () => <i className="fa-solid fa-briefcase text-white"></i>;
const SchoolIcon = () => (
    <i className="fa-solid fa-graduation-cap text-white"></i>
);

// Données du parcours (de la plus récente à la plus ancienne)
const timelineData = [
    {
        type: "work",
        icon: <WorkIcon />,
        date: "Juillet 2025 - Août 2025",
        title: "Secrétaire Remplaçant",
        location: "Office Notarial Criqui de Saverne",
        link: "https://www.criqui-braun-saverne.notaires.fr/",
    },
    {
        type: "work",
        icon: <WorkIcon />,
        date: "Août 2024 - Novembre 2024",
        title: "Stage - Développeur",
        location: "Sogeti, Schiltigheim",
        link: "https://www.linkedin.com/company/sogeti/posts/?feedView=all",
    },
    {
        type: "education",
        icon: <SchoolIcon />,
        date: "2023 - Présent",
        title: "Programme Grande École (PGE 2028)",
        location: "Epitech, Strasbourg",
        link: "https://www.epitech.eu/ecole-informatique-strasbourg/",
    },
    {
        type: "work",
        icon: <WorkIcon />,
        date: "Été 2024 & 2022",
        title: "Job d'été - Agent technique",
        location: "Mairie de Wangenbourg",
        link: "http://www.wangenbourg-engenthal.fr/",
    },
    {
        type: "education",
        icon: <SchoolIcon />,
        date: "2020 - 2023",
        title: "Baccalauréat, Mention Assez Bien",
        location: "Lycée du Haut-Barr, Saverne",
        link: "https://www.hautbarr.net/",
    },
    {
        type: "work",
        icon: <WorkIcon />,
        date: "Décembre 2019",
        title: "Stage d'observation (3ème)",
        location: "Hexagone Immobilier",
        link: "http://www.hexagonediag.fr/",
    },
    {
        type: "education",
        icon: <SchoolIcon />,
        date: "2016 - 2020",
        title: "Brevet des Collèges, Mention Très Bien",
        location: "Collège Marcel Pagnol, Wasselonne",
        link: "https://clg-pagnol-wasselonne.monbureaunumerique.fr/",
    },
];

const Parcours = () => {
    const [ref, isVisible] = useFadeIn();

    return (
        <section
            id="Parcours"
            ref={ref}
            className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32 bg-gray-50`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionTitle
                    title="Mon Parcours"
                    subtitle="Expériences et Formation"
                />

                <div className="relative mt-16">
                    {/* Ligne verticale de la timeline */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200"></div>

                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex justify-center"
                            >
                                {/* Point sur la timeline */}
                                <div className="absolute left-1/2 top-2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600">
                                    {item.icon}
                                </div>

                                {/* Carte de contenu */}
                                <div
                                    className={`w-full lg:w-2/5 p-6 bg-white rounded-xl shadow-lg border border-gray-100 ${index % 2 === 0 ? "lg:ml-auto lg:text-left" : "lg:mr-auto lg:text-right"} hover:shadow-2xl transition-shadow duration-300`}
                                >
                                    <p className="text-sm font-semibold text-blue-600">
                                        {item.date}
                                    </p>
                                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 text-md text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        {item.location}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parcours;
