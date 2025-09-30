require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ["https://portfoliomatteospringmann.vercel.app/"];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg =
                "The CORS policy for this site does not allow access from the specified Origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
    console.log(`Le serveur est démarré sur le port ${PORT}`);
});
