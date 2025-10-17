require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// --- CONFIGURATION CORS CORRIGÉE ---

// IMPORTANT : Remplacez l'URL ci-dessous par l'URL exacte de votre site déployé sur Vercel.
// Assurez-vous qu'il n'y a PAS de barre oblique (/) à la fin.
const allowedOrigins = ["https://portfoliomatteospringmann.vercel.app/"];

const corsOptions = {
  origin: (origin, callback) => {
    // Cette logique autorise les requêtes venant de votre site Vercel
    // ainsi que les requêtes qui n'ont pas d'origine (comme les outils de test type Postman).
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Accès non autorisé par la politique CORS"));
    }
  },
};

// Applique la configuration CORS à toutes les routes.
// Le middleware `cors` gère automatiquement les requêtes OPTIONS (preflight).
app.use(cors(corsOptions));

// --- FIN DE LA CORRECTION ---

// Middlewares pour parser le JSON des requêtes
app.use(express.json());

app.get("/favicon.ico", (req, res) => res.status(204).send());

// Utilisation des routes pour le formulaire de contact
app.use("/api/contact", contactRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
});
