import React from "react";

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
                    {socialLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-125"
                        >
                            <span className="sr-only">{item.name}</span>
                            <i className={`${item.icon} text-2xl`}></i>
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
