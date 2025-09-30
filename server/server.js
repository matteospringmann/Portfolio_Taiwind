require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "https://portfoliomatteospringmann-matteospringmanns-projects.vercel.app/",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
    console.log(`Le serveur est démarré sur le port ${PORT}`);
});
