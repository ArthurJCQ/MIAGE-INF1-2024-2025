// URL de l'API REST Countries
const API_URL = 'https://restcountries.com/v3.1/all';

// Éléments DOM
const fetchButton = document.getElementById('fetch-countries-btn');
const countryList = document.getElementById('country-list');

// Fonction pour récupérer les données des pays
async function fetchCountries() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Erreur réseau');
        }

        const countries = await response.json();

        // Vide la liste actuelle
        countryList.innerHTML = '';

        // Ajoute les pays au DOM
        countries.forEach(country => {
            const listItem = document.createElement('li');

            // Création du contenu pour chaque pays
            listItem.innerHTML = `
                <img src="${country.flags.png}" alt="Drapeau de ${country.name.common}" />
                <p><strong>${country.name.common}</strong></p>
                <p>Capitale : ${country.capital ? country.capital[0] : 'Non spécifiée'}</p>
                <p>Population : ${country.population.toLocaleString()}</p>
            `;

            countryList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erreur :', error);
        countryList.innerHTML = '<li>Impossible de récupérer les données des pays.</li>';
    }
}

// Ajoute un gestionnaire d'événement au bouton
fetchButton.addEventListener('click', fetchCountries);
