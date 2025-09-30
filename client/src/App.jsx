import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Parcours from "./components/Parcours"; // <-- IMPORTER LE NOUVEAU COMPOSANT
import Skills from "./components/Skills"; // On garde les compétences techniques
import Projects from "./components/Projects";
import Offer from "./components/Offer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Home />
            <main>
                <About />
                <Parcours /> {/* <-- AJOUTER LE COMPOSANT PARCOURS ICI */}
                <Skills /> {/* On garde les compétences techniques en plus */}
                <Projects />
                <Offer />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
