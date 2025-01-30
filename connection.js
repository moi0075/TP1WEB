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
    pageInscription.style.color = "rgb(49, 162, 255)";
    pageInscription.style.borderBottom = "3px solid rgb(0, 110, 255)";   

    pageConnection.style.color = "rgb(255, 255, 255)";
    pageConnection.style.borderBottom = "3px solid rgb(255, 255, 255)";     

    messageElement.textContent = "";//remove erreur

    connectionText.classList.add("desactive-tab"); 
    connectionText.classList.remove("active-tab");
    inscriptionText.classList.add("active-tab"); 
    inscriptionText.classList.remove("desactive-tab");
});

pageConnection.addEventListener("click", () => {
    pageConnection.style.color = "rgb(49, 162, 255)";
    pageConnection.style.borderBottom = "3px solid rgb(0, 110, 255)";   

    pageInscription.style.color = "rgb(255, 255, 255)";
    pageInscription.style.borderBottom = "3px solid rgb(255, 255, 255)";     

    messageElement.textContent = "";//remove erreur

    inscriptionText.classList.add("desactive-tab"); 
    inscriptionText.classList.remove("active-tab");
    connectionText.classList.add("active-tab"); 
    connectionText.classList.remove("desactive-tab");
});


// Gestion de l'inscription
document.querySelector("#inscription").addEventListener("click", () => {
    const username = document.getElementById("username2").value.trim();
    const password1 = document.getElementById("password21").value.trim();
    const password2 = document.getElementById("password22").value.trim();

    const messageElement = document.getElementById("message");
    messageElement.textContent = ""; 

    if (password1 !== password2) {
        messageElement.textContent = "Les mots de passe ne correspondent pas !";
        messageElement.style.color = "red";
        return;
    }
    if (username === "" || password1 === "" || password2 === "") {
        messageElement.textContent = "Mots de passe invalide";
        messageElement.style.color = "red";
        return;
    }
    if (localStorage.getItem(username)) {
        messageElement.textContent = "Cet utilisateur existe déjà !";
        messageElement.style.color = "red";
        return;
    }
    // Stockage de l'utilisateur
    localStorage.setItem(username, password1);
    messageElement.textContent = "Inscription réussie !";
    messageElement.style.color = "green";
    window.location.href = "index.html";
});

// Gestion de la connexion
document.querySelector("#connection").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const messageElement = document.getElementById("message");
    messageElement.textContent = ""; 
    
    const storedPassword = localStorage.getItem(username);

    if (!storedPassword) {
        messageElement.textContent = "Utilisateur non trouvé !";
        messageElement.style.color = "red";
        return;
    }

    if (storedPassword === password) {
        messageElement.textContent = "Connexion réussie !";
        messageElement.style.color = "green";
        window.location.href = "index.html";
    } else {
        messageElement.textContent = "Mot de passe incorrect !";
        messageElement.style.color = "red";
    }
});

    