
const heroList = document.getElementById('heroList');
const refreshButton = document.getElementById('refreshButton');


async function fetchAllHeroes() {
    try {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
        if (!response.ok) {
            throw new Error('Impossible de récupérer les données des super-héros');
        }

        const heroes = await response.json();

        heroList.innerHTML = '';

        const randomHeroes = heroes.sort(() => 0.5 - Math.random()).slice(0, 5);

        randomHeroes.forEach(hero => {
            const listItem = document.createElement('li');
            listItem.textContent = hero.name;
            heroList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erreur:', error);
        heroList.innerHTML = '<li>Impossible de charger la liste. Réessayez plus tard.</li>';
    }
}


refreshButton.addEventListener('click', fetchAllHeroes);

fetchAllHeroes();
