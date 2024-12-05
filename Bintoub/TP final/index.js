const characterList = document.getElementById("character-list");
let i;

// Fonction pour récupérer et afficher 5 personnages aléatoires
const getRandomCharacters = async () => {
  for (i = 0; i < 5; i++) {
    try {
      const response = await fetch("https://potterapi-fedeperin.vercel.app/fr/characters/random");
      const character = await response.json();

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${character.fullName || "Nom inconnu"}</strong><br>
        <img src="${character.image || ''}" alt="Photo de ${character.fullName}" width="100"><br>
        Maison : ${character.hogwartsHouse || "Inconnue"}
      `;
      characterList.appendChild(listItem);
    } catch (error) {
      console.error("Erreur lors de la récupération d'un personnage :", error);
    }
  }
};


document.getElementById("random").addEventListener("click", () => {
  characterList.innerHTML = ""; 
  getRandomCharacters();
});

getRandomCharacters();
