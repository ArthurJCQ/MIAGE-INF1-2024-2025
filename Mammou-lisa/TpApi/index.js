const pokemonList = document.getElementById("pokemon-list");


const getRandomPokemons = async () => {
    try {
        
        for (let i = 0; i < 5; i++) {
            const randomId = Math.floor(Math.random() * 100) + 1; 
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const pokemon = await response.json();

            
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="Image de ${pokemon.name}">
                <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                <p>Type : ${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</p>
            `;
            pokemonList.appendChild(listItem);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des Pokémon :", error);
    }
};


document.getElementById("random").addEventListener("click", () => {
    pokemonList.innerHTML = ""; 
    getRandomPokemons();
});

getRandomPokemons();
