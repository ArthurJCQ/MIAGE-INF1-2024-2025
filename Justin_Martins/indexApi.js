async function fetchPokemonData() {
    try {
        const randomId = Math.floor(Math.random() * 100) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null;
    }
}

function displayPokemonData(data) {
    const list = document.getElementById('pokemon-data');
    list.innerHTML = ''; 

    if (!data) {
        list.innerHTML = '<li>Failed to load Pokémon data.</li>';
        return;
    }

    const { name, abilities, base_experience, sprites } = data;
    list.innerHTML += `<li><strong>Nom:</strong> ${name}</li>`;
    list.innerHTML += `<li><strong>Xp:</strong> ${base_experience}</li>`;

    const abilitiesList = abilities.map((ability) => ability.ability.name).join(', ');
    list.innerHTML += `<li><strong>Attaques:</strong> ${abilitiesList}</li>`;

    if (sprites && sprites.front_default) {
        list.innerHTML += `<li><img src="${sprites.front_default}" alt="${name}"></li>`;
    }
}

async function loadPokemonData() {
    const data = await fetchPokemonData();
    displayPokemonData(data);
}

document.getElementById('refresh-btn').addEventListener('click', loadPokemonData);

loadPokemonData();
