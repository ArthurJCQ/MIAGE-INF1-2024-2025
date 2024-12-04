// Fonction pour récupérer les données de l'API
const getCatFacts = () => {
    return fetch('https://catfact.ninja/facts') // Appel API
      .then((response) => response.json()) // Convertit la réponse en JSON
      .then((data) => data.data) // Retourne uniquement les faits
      .catch((error) => {
        console.error('Erreur lors de la récupération des faits :', error);
        return []; // Retourne un tableau vide en cas d'erreur
      });
  };
  
  // Fonction pour afficher 5 faits dans le DOM
  const displayFacts = () => {
    const factsList = document.getElementById('facts-list');
    factsList.innerHTML = ''; // Efface l'ancienne liste
  
    getCatFacts().then((facts) => {
      // Mélange les faits
      const shuffledFacts = facts.sort(() => Math.random() - 0.5);
  
      // Sélectionne toujours 5 faits
      const factsToDisplay = shuffledFacts.slice(0, 5);
  
      // Affiche les 5 faits dans la liste
      factsToDisplay.forEach(({ fact }) => {
        const listItem = document.createElement('li');
        listItem.textContent = fact; // Texte du fait
        factsList.appendChild(listItem);
      });
    });
  };
  
  // Ajout d'un écouteur pour le bouton Refresh
  document.getElementById('refresh-btn').addEventListener('click', displayFacts);
  
  // Affiche 5 faits au chargement initial de la page
  displayFacts();
  