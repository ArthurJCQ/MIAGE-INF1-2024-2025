// Base URL de l'API HTTP Cat
const BASE_URL = 'https://http.cat/';

// Liste des codes HTTP possibles
const possibleCodes = [
    100, 101, 200, 201, 202, 204, 301, 302, 304, 400, 401, 403, 404, 
    405, 408, 418, 429, 500, 502, 503, 504
];

// Récupération des éléments du DOM
const refreshButton = document.getElementById('refresh-btn');
const catContainer = document.getElementById('cat-container');

// Fonction pour obtenir un code HTTP aléatoire
function getRandomCode() {
    const randomIndex = Math.floor(Math.random() * possibleCodes.length);
    return possibleCodes[randomIndex];
}

// Fonction pour charger et afficher un chat aléatoire
function fetchRandomCat() {
    // Obtenir un code aléatoire
    const randomCode = getRandomCode();
    // Générer l'URL de l'image
    const catImageUrl = `${BASE_URL}${randomCode}`;

    // Effacer l'ancienne image si elle existe
    catContainer.innerHTML = '';

    // Créer une nouvelle balise <img> pour le chat
    const catImage = document.createElement('img');
    catImage.src = catImageUrl;
    catImage.alt = `HTTP Cat ${randomCode}`;
    catImage.title = `HTTP Cat ${randomCode}`;

    // Ajouter l'image au conteneur
    catContainer.appendChild(catImage);
}

// Ajouter un gestionnaire d'événement pour le bouton "Refresh"
refreshButton.addEventListener('click', fetchRandomCat);

// Charger une image de chat au démarrage
fetchRandomCat();


