require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// --- CONFIGURATION CORS CORRIGÉE ---

const vercelFrontendUrl = "https://portfoliomatteospringmann.vercel.app/";

app.use(cors(corsOptions));

app.use(
  cors({
    origin: vercelFrontendUrl,
  }),
);

// Middlewares pour parser le JSON des requêtes
app.use(express.json());

app.get("/favicon.ico", (req, res) => res.status(204).send());

// Utilisation des routes pour le formulaire de contact
app.use("/api/contact", contactRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
});
