import mongoose from 'mongoose';
import env from './utils/validateenv'
import app from './app';

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