import mongoose from 'mongoose';
import express from 'express';
import env from './utils/validateenv'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
const port = env.PORT || 5000;
const mongoUri = env.MONGODB_URI_STRING

mongoose.connect(mongoUri)
    .then(() => {
        console.log("MongoDB Connecté !");
        app.listen(port, () => {
            console.log(`Serveur démarré sur http://localhost:${port}`);
        });
    })
    .catch(err => console.error("Erreur de connexion MongoDB :", err));

app.get("/", (req, res) => {
    res.send("Hello World!");
});