require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// --- DÉBUT DE LA CORRECTION ---

// IMPORTANT : Assurez-vous que l'URL ci-dessous est l'URL EXACTE de votre site Vercel.
// Copiez-la depuis la barre d'adresse de votre navigateur et collez-la ici.
// Ne mettez PAS de barre oblique (/) à la fin.
const vercelFrontendUrl = "https://portfoliomatteospringmann.vercel.app";

// Configuration CORS simple et directe qui autorise uniquement votre frontend.
app.use(
  cors({
    origin: vercelFrontendUrl,
  }),
);

// --- FIN DE LA CORRECTION ---

// Middleware pour permettre à Express de lire le JSON envoyé par le client
app.use(express.json());

// Route pour ignorer les demandes de favicon et éviter les erreurs inutiles
app.get("/favicon.ico", (req, res) => res.status(204).send());

// Utilisation des routes pour le formulaire de contact
app.use("/api/contact", contactRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
});
