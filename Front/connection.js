import { estEmailValide, estMotDePasseValide } from './fonctionDeValidation.js';

console.log("Connection connection.js")

// Inscription et connection
const pageConnection = document.getElementById('pageConnection');
console.log(pageConnection);

const pageInscription = document.getElementById('pageInscription');
console.log(pageInscription);

const connectionText = document.getElementById('connectionText');
console.log(connectionText);

const inscriptionText = document.getElementById('inscriptionText');
console.log(inscriptionText);

const messageElement = document.getElementById("message");

pageInscription.addEventListener("click", () => {

    messageElement.textContent = "";//remove erreur

    connectionText.classList.add("desactive-tab"); 
    connectionText.classList.remove("active-tab");
    inscriptionText.classList.add("active-tab"); 
    inscriptionText.classList.remove("desactive-tab");

    pageInscription.classList.add("activebtn");
    pageConnection.classList.remove("activebtn");
});

pageConnection.addEventListener("click", () => {

    pageInscription.classList.remove("activebtn");
    pageConnection.classList.add("activebtn");

    messageElement.textContent = "";//remove erreur

    inscriptionText.classList.add("desactive-tab"); 
    inscriptionText.classList.remove("active-tab");
    connectionText.classList.add("active-tab"); 
    connectionText.classList.remove("desactive-tab");
});

// Gestion de l'inscription
document.querySelector("#inscription").addEventListener("click", () => {
    const mail = document.getElementById("mail2").value.trim();
    const password1 = document.getElementById("password21").value.trim();
    const password2 = document.getElementById("password22").value.trim();
    const pseudo = document.getElementById("pseudo").value.trim();

    const messageElement = document.getElementById("message");
    messageElement.textContent = "";

    if (!estEmailValide(mail)) {
        messageElement.textContent = "Format d'email invalide !";
        messageElement.style.color = "red";
        return;
    }

    if (!estMotDePasseValide(password1)) {
        messageElement.textContent = "Le mot de passe doit contenir au moins 6 caractères !";
        messageElement.style.color = "red";
        return;
    }

    if (password1 !== password2) {
        messageElement.textContent = "Les mots de passe ne correspondent pas !";
        messageElement.style.color = "red";
        return;
    }

    if (localStorage.getItem(mail)) {
        messageElement.textContent = "Cet email est déjà utilisé !";
        messageElement.style.color = "red";
        return;
    }

    // Passer tous les utilisateurs à 'isConnected: false'
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const utilisateur = JSON.parse(localStorage.getItem(key));
        if (utilisateur && utilisateur.hasOwnProperty('isConnected')) {
            utilisateur.isConnected = false;  // Modifier isConnected à false
            localStorage.setItem(key, JSON.stringify(utilisateur));  // Sauvegarder la modification
        }
    }

    const utilisateur = {
        mail: mail,
        pseudo: pseudo,
        password: password1,
        isConnected: true,
        jeux1: {},
        jeux2: {},
        jeux3: {}
    };

    localStorage.setItem(mail, JSON.stringify(utilisateur));

    messageElement.textContent = "Inscription réussie !";
    messageElement.style.color = "green";
    window.location.href = "index.html";
    
});


// Gestion de la connexion
document.querySelector("#connection").addEventListener("click", () => {
    const mail = document.getElementById("mail").value.trim();
    const password = document.getElementById("password").value.trim();

    const messageElement = document.getElementById("message");
    messageElement.textContent = "";

    // Récupérer l'utilisateur depuis localStorage
    const storedUser = localStorage.getItem(mail);

    if (!storedUser) {
        messageElement.textContent = "Utilisateur non trouvé !";
        messageElement.style.color = "red";
        return;
    }

    // Convertir les données stockées en objet
    const utilisateur = JSON.parse(storedUser);

    // Vérifier le mot de passe
    if (utilisateur.password === password) {
        messageElement.textContent = "Connexion réussie !";
        messageElement.style.color = "green";

        // Passer tous les utilisateurs à 'isConnected: false'
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const utilisateur = JSON.parse(localStorage.getItem(key));
            if (utilisateur && utilisateur.hasOwnProperty('isConnected')) {
                utilisateur.isConnected = false;  // Modifier isConnected à false
                localStorage.setItem(key, JSON.stringify(utilisateur));  // Sauvegarder la modification
            }
        }

        // Modifier isConnected à true
        utilisateur.isConnected = true;
        localStorage.setItem(mail, JSON.stringify(utilisateur));

        // Redirection vers la page d'accueil
        window.location.href = "index.html";
    } else {
        messageElement.textContent = "Mot de passe incorrect !";
        messageElement.style.color = "red";
    }
});





