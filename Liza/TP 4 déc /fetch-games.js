// Fonction pour récupérer les données de jeux vidéo
async function fetchGames() {
  try {
    const response = await fetch('https://api.rawg.io/api/games?page_size=5');
    const data = await response.json();
    return data.results; // Retourne la liste des jeux
  } catch (error) {
    console.error("Erreur lors de la récupération des jeux :", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
}

// Fonction pour afficher les jeux dans le DOM
function displayGames(games) {
  const listElement = document.getElementById('result-list');
  listElement.innerHTML = ''; // Vider la liste existante

  games.forEach(game => {
    const listItem = document.createElement('li');
    listItem.textContent = `${game.name} - Note : ${game.rating}`;
    listElement.appendChild(listItem);
  });
}

// Fonction pour actualiser les jeux avec le bouton "Refresh"
async function handleRefresh() {
  const games = await fetchGames();
  displayGames(games);
}

// Ajouter un événement au bouton
document.getElementById('refresh-button').addEventListener('click', handleRefresh);

// Charger les jeux dès l'ouverture de la page
handleRefresh();
