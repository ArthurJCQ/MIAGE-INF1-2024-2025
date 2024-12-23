const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  const result = await response.json();
  return result; // Renvoie les données JSON
};

// Fonction pour affichage
async function displayFact() {
  const catFact = await fetchCatFact(); // Appelle la fonction précédente
  console.log(catFact); // Affiche l'objet complet
  console.log(catFact.fact); // Affiche seulement le texte du fait
}

// Appel de la fonction
displayFact();
