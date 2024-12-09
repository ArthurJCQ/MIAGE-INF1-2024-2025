// Fonction pour récupérer un fait de chat depuis l'API
async function fetchCatFact() {
    const statusMessage = document.getElementById('status-message') || document.createElement('p');
    statusMessage.id = 'status-message';

    try {
        statusMessage.textContent = 'Chargement...';
        statusMessage.className = 'loading';
        document.querySelector('.container').appendChild(statusMessage);

        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error(`Erreur réseau : ${response.status}`);
        }
        const data = await response.json();
        return data.fact;
    } catch (error) {
        console.error('Erreur lors de la récupération du fait de chat:', error);
        statusMessage.textContent = 'Impossible de charger un fait. Veuillez réessayer.';
        statusMessage.className = 'error';
        return null;
    } finally {
        setTimeout(() => statusMessage.remove(), 2000);
    }
}

// Fonction pour afficher un fait de chat dans la liste
async function displayCatFact() {
    const fact = await fetchCatFact();
    if (!fact) return;

    const factList = document.getElementById('fact-list');
    const facts = Array.from(factList.children).map(li => li.textContent);

    // Éviter les doublons
    if (facts.includes(fact)) {
        console.log('Fait déjà affiché, en récupérant un nouveau...');
        return displayCatFact();
    }

    // Crée un nouvel élément de liste
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    listItem.className = 'fact-item';

    // Ajoute l'élément à la liste
    factList.appendChild(listItem);

    // Limiter le nombre de faits affichés à 5
    if (factList.children.length > 5) {
        factList.removeChild(factList.firstChild);
    }
}

// Fonction pour rafraîchir la liste des faits
function refreshFactList() {
    const factList = document.getElementById('fact-list');
    factList.innerHTML = ''; // Efface la liste existante
    displayCatFact(); // Affiche un nouveau fait
}

// Ajouter un écouteur d'événement au bouton "Rafraîchir"
const refreshButton = document.getElementById('refresh-btn');
refreshButton.addEventListener('click', refreshFactList);

// Affiche un fait au démarrage
displayCatFact();
