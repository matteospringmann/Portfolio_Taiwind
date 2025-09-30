import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "LinkedIn", icon: "fab fa-linkedin", href: "#" },
        { name: "GitHub", icon: "fab fa-github", href: "#" },
        { name: "Instagram", icon: "fab fa-instagram", href: "#" },
    ];

    return (
        <footer id="footer" className="bg-blue-200">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Créons quelque chose ensemble.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        Vous avez un projet en tête ou une opportunité à me
                        proposer ? N'hésitez pas à me contacter.
                    </p>
                    <div className="mt-8">
                        <a
                            href="mailto:matteo.springmann@epitech.eu"
                            className="inline-block rounded-full bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            matteo.springmann@epitech.eu
                        </a>
                    </div>
                </div>

                <div className="mt-16 flex justify-center space-x-8">
                    {socialLinks.map((link) => (
                        <a key={link.name} /* ... */>
                            <span className="sr-only">{link.name}</span>
                            <FontAwesomeIcon
                                icon={link.icon}
                                className="text-2xl"
                            />
                        </a>
                    ))}
                </div>

                <div className="mt-16 border-t border-blue-300 pt-8 text-center">
                    <p className="text-sm text-gray-700">
                        &copy; {currentYear} Mattéo Springmann. Tous droits
                        réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
