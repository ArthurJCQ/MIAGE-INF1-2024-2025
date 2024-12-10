const API_URL = 'https://restcountries.com/v3.1/all';


const fetchButton = document.getElementById('fetch-countries-btn');
const countryList = document.getElementById('country-list');


async function fetchCountries() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Erreur réseau');
        }

        const countries = await response.json();

        countryList.innerHTML = '';

        countries.forEach(country => {
            const listItem = document.createElement('li');

  
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


fetchButton.addEventListener('click', fetchCountries);
