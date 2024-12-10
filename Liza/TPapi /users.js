const userList = document.getElementById("user-list");

// Fonction pour récupérer et afficher 5 utilisateurs aléatoires
const getRandomUsers = async () => {
  for (let i = 0; i < 5; i++) {
    try {
      // Appel API pour récupérer un utilisateur
      const response = await fetch("https://randomuser.me/api/?results=1");
      const data = await response.json();
      const user = data.results[0]; // Prendre le premier utilisateur

      // Créer un élément de liste
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${user.name.first} ${user.name.last}</strong><br>
        <img src="${user.picture.medium}" alt="Photo de ${user.name.first}" width="100"><br>
        Email : ${user.email}<br>
        Pays : ${user.location.country}
      `;

      // Ajouter l'utilisateur à la liste
      userList.appendChild(listItem);
    } catch (error) {
      console.error("Erreur lors de la récupération d'un utilisateur :", error);
    }
  }
};

// Bouton pour rafraîchir la liste des utilisateurs
document.getElementById("refresh").addEventListener("click", () => {
  userList.innerHTML = ""; // Vider la liste
  getRandomUsers(); // Afficher 5 nouveaux utilisateurs
});

// Charger 5 utilisateurs au démarrage
getRandomUsers();
