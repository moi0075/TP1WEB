const express = require('express');
// 
const cors = require('cors');
// accépter tt requéte ou juste certaine
const path = require('path');

//créer le serveur
const app = express();
app.use(cors());
app.use(express.json());

//Servir les fichiers du dossier "front"
app.use(express.static(path.join(__dirname, '../front'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/index.html'));
});

const PORT = 4000;
app.listen(PORT, () => console.log('serveur démarrer sur http://localhost:' + PORT));