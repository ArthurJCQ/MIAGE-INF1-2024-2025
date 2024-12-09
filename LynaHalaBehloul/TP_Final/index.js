// Sélection des éléments du DOM
const movieList = document.getElementById("movie-list");
const refreshButton = document.getElementById("refresh-btn");
const loadingMessage = document.getElementById("loading-message");

// Fonction pour récupérer et afficher les données
async function fetchMovies() {
    try {
        // Afficher le message de chargement
        loadingMessage.style.display = "block";

        // Vidage de la liste
        movieList.innerHTML = "";

        // Appel API
        const response = await fetch("https://ghibliapi.vercel.app/films");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données.");
        }

        let movies = await response.json();

        // Mélange des films pour que chaque "refresh" soit différent
        movies = movies.sort(() => Math.random() - 0.5);

        // Limitation à 10 résultats pour une meilleure lisibilité
        const limitedMovies = movies.slice(0, 10);

        // Ajout dynamique des données dans le DOM
        limitedMovies.forEach((movie) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <div class="movie-title">${movie.title}</div>
                <div class="movie-info">
                    Réalisateur : ${movie.director}<br>
                    Année de sortie : ${movie.release_date}<br>
                    <em>${movie.description.substring(0, 100)}...</em>
                </div>
            `;
            movieList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    } finally {
        // Cacher le message de chargement
        loadingMessage.style.display = "none";
    }
}

// Événement pour le bouton Refresh
refreshButton.addEventListener("click", fetchMovies);

// Appel initial
fetchMovies();
