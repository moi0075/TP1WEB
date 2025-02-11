// Fonction pour vérifier si l'email est valide
export function estEmailValide(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Fonction pour vérifier si le mot de passe est valide
export function estMotDePasseValide(password) {
    
    return password.length >= 6;
}

