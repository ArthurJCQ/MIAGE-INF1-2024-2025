
const BASE_URL = 'https://http.cat/';


const possibleCodes = [
    100, 101, 200, 201, 202, 204, 301, 302, 304, 400, 401, 403, 404, 
    405, 408, 418, 429, 500, 502, 503, 504
];

const refreshButton = document.getElementById('refresh-btn');
const catContainer = document.getElementById('cat-container');

// pour obtenir un code http au hasard dans la liste 
function getRandomCode() {
    const randomIndex = Math.floor(Math.random() * possibleCodes.length);
    return possibleCodes[randomIndex];
}

// afficher un chat aléatoire
function fetchRandomCat() {
    // on appelle la fonction getrandom code 
    const randomCode = getRandomCode();
    // pour avoir notre url d'image : 
    const catImageUrl = `${BASE_URL}${randomCode}`;

    // si il y a du contenu de l'ancienne image
    catContainer.innerHTML = '';

    // nouvelle balise img pour le chat
    const catImage = document.createElement('img');
    catImage.src = catImageUrl;
    catImage.alt = `HTTP Cat ${randomCode}`;
    catImage.title = `HTTP Cat ${randomCode}`;

    // pour donner l'image au conteneur
    catContainer.appendChild(catImage);
}

refreshButton.addEventListener('click', fetchRandomCat);

fetchRandomCat();


