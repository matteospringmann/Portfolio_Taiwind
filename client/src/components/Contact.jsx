import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFadeIn } from "../hooks/useFadeIn";
import profilePic from "../assets/images/profil_picture.jpg";
import SectionTitle from "./SectionTitle";

// Ce sous-composant reste le même, il est parfait pour afficher les messages
const StatusAlert = ({ status, message }) => {
  if (status === "idle" || status === "sending") return null;

  const isSuccess = status === "success";
  const bgColor = isSuccess ? "bg-green-100" : "bg-red-100";
  const borderColor = isSuccess ? "border-green-400" : "border-red-400";
  const textColor = isSuccess ? "text-green-800" : "text-red-800";
  const icon = isSuccess ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div
      className={`p-4 mt-4 rounded-md border ${bgColor} ${borderColor} flex items-center gap-3`}
    >
      {icon}
      <p className={`text-sm font-medium ${textColor}`}>{message}</p>
    </div>
  );
};

const Contact = () => {
  const [ref, isVisible] = useFadeIn();
  const form = useRef(); // Crée une référence pour le formulaire
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // Fait disparaître le message de statut après 4 secondes
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // La nouvelle fonction pour envoyer l'email avec EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Utilise les variables d'environnement de Vite
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("EmailJS Success:", result.text);
        setStatus("success");
        e.target.reset(); // Réinitialise le formulaire après envoi réussi
      },
      (error) => {
        console.error("EmailJS Error:", error.text);
        setStatus("error");
      },
    );
  };

  const inputStyle =
    "w-full p-3 bg-gray-100 rounded-lg border border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <section
      id="Contact"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32 bg-gray-50`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle title="Contact" subtitle="Entrons en contact" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Colonne de gauche avec le texte d'information */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Une idée, un projet ?
            </h3>
            <p className="text-lg text-gray-600">
              Je suis toujours ouvert à de nouvelles opportunités et
              collaborations. Que vous ayez une question, une proposition de
              projet ou simplement envie de discuter, n'hésitez pas à m'envoyer
              un message.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={profilePic}
                alt="Mattéo Springmann"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Mattéo Springmann
                </h4>
                <a
                  href="mailto:matteo.springmann@epitech.eu"
                  className="text-blue-600 hover:underline"
                >
                  matteo.springmann@epitech.eu
                </a>
              </div>
            </div>
          </div>

          {/* Colonne de droite avec le formulaire */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700"
                >
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={inputStyle}
                  placeholder="Votre nom"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={inputStyle}
                  placeholder="vous@exemple.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-gray-700"
                >
                  Téléphone (Optionnel)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={inputStyle}
                  placeholder="Votre numéro"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className={`${inputStyle} resize-none`}
                  placeholder="Bonjour Mattéo,..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex justify-center items-center gap-3 p-3 bg-blue-600 text-white font-bold rounded-lg transition-all ease-in-out duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status === "sending" && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {status === "sending"
                  ? "Envoi en cours..."
                  : "Envoyer mon message"}
              </button>

              <StatusAlert
                status={status}
                message={
                  status === "success"
                    ? "Merci ! Votre message a bien été envoyé."
                    : "Une erreur est survenue. Veuillez réessayer."
                }
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
