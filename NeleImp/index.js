// Récupération des éléments HTML
const squares = document.querySelectorAll(".square"); // Sélectionne tous les éléments avec la classe "square"
const switchColorButton = document.getElementById("btn"); // Bouton pour changer la couleur
let selectedSquare = document.querySelector(".selected"); // Initialiser le carré sélectionné par défaut

// Fonction pour générer une couleur aléatoire
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

// Fonction pour changer la couleur du carré sélectionné
switchColorButton.addEventListener("click", () => {
  if (selectedSquare) {
    selectedSquare.style.backgroundColor = `#${randomColor()}`;
  }
});

// Permet de désactiver ou réactiver le bouton de changement de couleur
document.getElementById("disable").addEventListener("click", () => {
  switchColorButton.disabled = !switchColorButton.disabled;
});

// Fonction pour réinitialiser les couleurs des deux carrés
document.getElementById("reset").addEventListener("click", () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "bisque";
  });
});

// Gestion de la sélection d'un carré
squares.forEach((square) => {
  square.addEventListener("click", () => {
    // Enlève la classe 'selected' de tous les carrés
    squares.forEach((sq) => sq.classList.remove("selected"));

    // Ajoute la classe 'selected' au carré cliqué
    square.classList.add("selected");

    // Mettre à jour le carré sélectionné
    selectedSquare = square;
  });
});
