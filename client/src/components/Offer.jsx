import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SectionTitle from "./SectionTitle";

// Icônes SVG pour chaque service
const ConceptionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 mx-auto text-blue-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5M3.75 3v16.5M13.5 6.75h3.75m-3.75 3h3.75m-3.75 3h3.75M9 19.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v-.008z"
    />
  </svg>
);

const ProductionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 mx-auto text-blue-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

const LivraisonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 mx-auto text-blue-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a16.95 16.95 0 00-1.58-1.58m1.58 1.58L18.75 16.5m-5.84-7.38a16.95 16.95 0 00-1.58 1.58m-1.58-1.58L12.75 3.5m-5.84 7.38a16.95 16.95 0 01-1.58-1.58L3.75 16.5m1.58-9.12a16.95 16.95 0 011.58 1.58m0 0L12.75 3.5"
    />
  </svg>
);

const Offer = () => {
  const [ref, isVisible] = useFadeIn();

  const services = [
    {
      icon: <ConceptionIcon />,
      title: "1. Conception & Stratégie",
      description:
        "Nous définissons ensemble vos objectifs et la meilleure approche pour concevoir un site qui parle à votre audience.",
    },
    {
      icon: <ProductionIcon />,
      title: "2. Développement sur Mesure",
      description:
        "Je transforme le design en un site web performant, responsive et optimisé, en utilisant les technologies les plus modernes.",
    },
    {
      icon: <LivraisonIcon />,
      title: "3. Déploiement & Suivi",
      description:
        "Je vous accompagne pour la mise en ligne et la prise en main de votre site, avec un support pour garantir votre autonomie.",
    },
  ];

  return (
    <section
      id="Offre"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gray-50`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Mes Services"
          subtitle="De l'idée au déploiement, ensemble."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              {service.icon}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl text-gray-800">
            Prêt à donner vie à votre projet ?
          </p>
          <a
            href="#Contact"
            className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Discutons-en
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offer;
