// Sélection des éléments du DOM
const postList = document.getElementById("post-list");
const refreshButton = document.getElementById("refresh-btn");

// Fonction pour récupérer et afficher les données
async function fetchPosts() {
    try {
        // Vidage de la liste
        postList.innerHTML = "";

        // Appel API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        // Limitation à 10 résultats
        const limitedPosts = posts.slice(0, 10);

        // Ajout dynamique des données dans le DOM
        limitedPosts.forEach((post) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${post.title}`;
            postList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

// Événement pour le bouton Refresh
refreshButton.addEventListener("click", fetchPosts);

// Appel initial
fetchPosts();
