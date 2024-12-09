// Fonction pour récupérer les données depuis l'API
async function fetchDogData() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Status : ${response.status}`);
        }
        const data = await response.json();
        return data; // Retourne le JSON
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}

// Fonction pour afficher les données dans la liste
function displayDogData(data) {
    const list = document.getElementById('dog-data');
    list.innerHTML = ''; // Efface le contenu précédent

    if (!data || !data.message) {
        list.innerHTML = '<li>Impossible de charger l\'image du chien. 😢</li>';
        return;
    }

    const imageUrl = data.message; // URL de l'image
    list.innerHTML += `
        <li>
            <img src="${imageUrl}" alt="Dog Image" style="max-width: 300px; border: 2px solid #ccc; border-radius: 10px;">
        </li>`;
}

// Fonction pour charger et afficher les données
async function loadDogData() {
    const data = await fetchDogData(); // Appel API
    displayDogData(data); // Affichage
}

// Ajoute un écouteur d'événement pour le bouton
document.getElementById('refresh-btn').addEventListener('click', loadDogData);

// Charge l'image initiale
loadDogData();
