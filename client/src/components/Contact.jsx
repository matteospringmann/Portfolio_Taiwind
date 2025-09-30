import React, { useState, useEffect } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import profilePic from "../assets/images/profil_picture.jpg";
import SectionTitle from "./SectionTitle";

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
    const [formData, setFormData] = useState({
        firstname: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        if (status === "success" || status === "error") {
            const timer = setTimeout(() => {
                setStatus("idle");
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/contact/send`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${formData.firstname} ${formData.name}`,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    firstname: "",
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Erreur:", error);
            setStatus("error");
        }
    };

    const inputStyle =
        "w-full p-3 bg-zinc-100 rounded-lg border border-zinc-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

    return (
        <section
            id="Contact"
            ref={ref}
            className={`fade-in-section ${isVisible ? "is-visible" : ""} w-full p-20 max-lg:p-4`}
        >
            <div className="flex flex-row gap-5 items-center justify-center mb-10 max-lg:mb-5">
                <SectionTitle
                    title="Portfolio"
                    subtitle="Quelques-uns de mes projets"
                />
            </div>

            <div className="flex gap-20 m-auto items-start w-[80%] max-lg:w-full max-lg:gap-10 max-lg:flex-col max-lg:mb-16">
                <div className="flex flex-col justify-start gap-10 w-[50%] mt-10 mx-auto max-sm:w-[80%] max-lg:text-center max-lg:order-1">
                    <h1 className="text-3xl font-bold">Restons en contact !</h1>
                    <p className="text-lg text-gray-600">
                        Vous avez une question, une opportunité ou simplement
                        envie de discuter ? N'hésitez pas à m'envoyer un
                        message. Je vous répondrai dans les meilleurs délais.
                    </p>
                    <a
                        href="mailto:matteo.springmann@epitech.eu"
                        className="text-blue-600 font-semibold mb-0 hover:text-blue-800 text-lg"
                    >
                        matteo.springmann@epitech.eu
                    </a>
                    <div className="flex flex-row pt-12 border-t border-zinc-200">
                        <img
                            className="w-14 h-14 rounded-full object-cover"
                            src={profilePic}
                            alt="Mattéo Springmann"
                        />
                        <div className="ml-4 text-left">
                            <h1 className="font-bold text-lg">
                                Mattéo Springmann
                            </h1>
                            <p className="text-sm text-gray-500">
                                Étudiant à Epitech Strasbourg
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-[50%] m-auto flex flex-col gap-5 mt-10 max-lg:order-2 max-lg:w-[80%]">
                    <form
                        className="flex flex-col gap-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-row gap-5 max-lg:flex-col max-lg:gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <label
                                    htmlFor="firstname"
                                    className="text-sm font-semibold text-gray-700"
                                >
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                    className={inputStyle}
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-gray-700"
                                >
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={inputStyle}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={inputStyle}
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
                                value={formData.phone}
                                onChange={handleChange}
                                className={inputStyle}
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
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className={`${inputStyle} resize-none`}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full flex justify-center items-center gap-3 p-3 bg-blue-500 text-white font-bold rounded-lg transition-all ease-in-out duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                                    ? "Message envoyé avec succès !"
                                    : "Une erreur est survenue. Veuillez réessayer."
                            }
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
