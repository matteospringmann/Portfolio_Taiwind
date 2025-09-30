import React, { useState, useEffect } from "react";
import profilePic from "../assets/images/profil_picture.jpg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClasses = isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm"
        : "bg-transparent";
    const navLinkClasses = isScrolled ? "text-gray-900" : "text-gray-700";
    const buttonClasses = isScrolled
        ? "bg-blue-600 text-white shadow-sm hover:bg-blue-500 border-transparent"
        : "bg-white text-blue-600 border-white hover:bg-gray-100";

    return (
        <header
            className={`fixed w-full py-5 m-auto px-6 lg:px-20 flex items-center justify-between z-50 transition-all duration-300 ${headerClasses}`}
        >
            {/* Partie Gauche : Logo et Nom */}
            <div className="flex-1 flex justify-start">
                <a href="#Accueil" className="flex items-center gap-3">
                    <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={profilePic}
                        alt="Mattéo Springmann"
                    />
                    <h1
                        className={`hidden sm:block font-bold text-lg transition-colors duration-300 ${navLinkClasses}`}
                    >
                        Mattéo Springmann
                    </h1>
                </a>
            </div>

            {/* Partie Centrale : Navigation */}
            <nav
                className={`hidden md:flex flex-1 justify-center text-base font-medium transition-colors duration-300 ${navLinkClasses}`}
            >
                <a
                    className="mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors py-1"
                    href="#A-Propos"
                >
                    À Propos
                </a>
                <a
                    className="mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors py-1"
                    href="#Parcours"
                >
                    Parcours
                </a>
                <a
                    className="mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors py-1"
                    href="#Competences"
                >
                    Compétences
                </a>
                <a
                    className="mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors py-1"
                    href="#Projets"
                >
                    Projets
                </a>
                <a
                    className="mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors py-1"
                    href="#Offre"
                >
                    Services
                </a>
            </nav>

            {/* Partie Droite : Bouton */}
            <div className="flex-1 flex justify-end">
                <a
                    href="#Contact"
                    className={`rounded-md px-4 py-2 text-sm font-semibold border-2 transition-all duration-300 ${buttonClasses}`}
                >
                    Me Contacter
                </a>
            </div>
        </header>
    );
};

export default Header;
