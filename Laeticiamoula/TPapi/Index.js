// Fonction pour récupérer un fait sur les chats depuis l'API
async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error(`Erreur réseau : ${response.status}`);
        }
        const data = await response.json();
        return data.fact; // Retourne le fait
    } catch (error) {
        console.error('Erreur lors de la récupération du fait de chat:', error);
        return 'Impossible de charger un fait amusant.';
    }
}

// Fonction pour afficher un fait sur les chats
async function displayCatFact() {
    const fact = await fetchCatFact();
    if (!fact) return;

    const factList = document.getElementById('fact-list');

    // Crée un nouvel élément de liste avec une icône de chat
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span class="cat-icon">🐱</span> ${fact}`; // Ajout de l'icône

    factList.appendChild(listItem);

    // Limiter à 5 faits maximum
    if (factList.children.length > 5) {
        factList.removeChild(factList.firstChild);
    }
}

// Ajouter un écouteur d'événement au bouton "Rafraîchir"
document.getElementById('refresh-btn').addEventListener('click', () => {
    document.getElementById('fact-list').innerHTML = ''; // Vide la liste
    displayCatFact(); // Affiche un nouveau fait
});

// Affiche un fait au démarrage
displayCatFact();
é"
