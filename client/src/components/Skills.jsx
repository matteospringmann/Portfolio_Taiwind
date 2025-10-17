import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importations des icônes
import {
  faC,
  faCode,
  faInfinity,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

// Création d'un objet pour mapper les noms d'icônes aux objets importés
const iconMap = {
  "fa-html5": faHtml5,
  "fa-css3-alt": faCss3Alt,
  "fa-js": faJs,
  "fa-react": faReact,
  "fa-code": faCode, // Pour TypeScript et VS Code
  "fa-node-js": faNodeJs,
  "fa-python": faPython,
  "fa-c": faC,
  "fa-git-alt": faGitAlt,
  "fa-linux": faLinux,
  "fa-infinity": faInfinity, // Pour DevOps
  "fa-terminal": faTerminal, // Pour Zed
};

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-500" },
      {
        name: "CSS3 & Tailwind",
        icon: "fa-brands fa-css3-alt",
        color: "text-blue-500",
      },
      { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
      { name: "React", icon: "fa-brands fa-react", color: "text-cyan-400" },
      { name: "TypeScript", icon: "fa-solid fa-code", color: "text-blue-700" },
    ],
  },
  {
    category: "Backend & Langages",
    skills: [
      {
        name: "Node.js",
        icon: "fa-brands fa-node-js",
        color: "text-green-500",
      },
      { name: "Python", icon: "fa-brands fa-python", color: "text-blue-400" },
      { name: "C Language", icon: "fa-solid fa-c", color: "text-gray-600" },
    ],
  },
  {
    category: "Outils & Environnement",
    skills: [
      {
        name: "Git & GitHub",
        icon: "fa-brands fa-git-alt",
        color: "text-orange-600",
      },
      {
        name: "Linux (Fedora)",
        icon: "fa-brands fa-linux",
        color: "text-gray-800",
      },
      { name: "DevOps", icon: "fa-solid fa-infinity", color: "text-red-500" },
      { name: "VS Code", icon: "fa-solid fa-code", color: "text-sky-500" },
      {
        name: "Zed (IDE)",
        icon: "fa-solid fa-terminal",
        color: "text-green-600",
      },
    ],
  },
];

const Skills = () => {
  const [ref, isVisible] = useFadeIn();

  // Fonction pour obtenir l'objet icône à partir du nom de la classe
  const getIconObject = (iconClassName) => {
    // Extrait le nom de l'icône (ex: 'fa-html5' de 'fa-brands fa-html5')
    const iconName = iconClassName.split(" ")[1];
    return iconMap[iconName];
  };

  return (
    <section
      id="Competences"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32 bg-gray-50`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Compétences"
          subtitle="Ma boîte à outils de développeur"
        />

        <div className="mt-16 space-y-12">
          {skillsData.map((category) => (
            <div key={category.category} className="mx-auto max-w-4xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pl-2 border-l-4 border-blue-600">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
                  >
                    <FontAwesomeIcon
                      icon={getIconObject(skill.icon)}
                      className={`text-4xl ${skill.color}`}
                    />
                    <p className="mt-4 font-semibold text-gray-700 text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
