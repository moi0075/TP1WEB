import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurer `__dirname` car ES Modules ne l'a pas par défaut
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Créer le serveur
const app = express();
app.use(cors());
app.use(express.json());

// Servir les fichiers du dossier "front"
app.use(express.static(path.join(__dirname, '../Front')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front/index.html'));
});

const PORT = 4000;
app.listen(PORT, () => console.log('Serveur démarré sur http://localhost:' + PORT));
