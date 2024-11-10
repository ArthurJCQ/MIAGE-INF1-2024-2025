// Récupération des éléments
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const changeColorButton = document.getElementById("changeColorButton");
const disableButton = document.getElementById("disableButton");
const resetButton = document.getElementById("resetButton");

let selectedSquare = null;

// Fonction pour sélectionner un carré
function selectSquare(square) {
    // Retire la classe "selected" de tous les carrés
    document.querySelectorAll('.square').forEach(sq => sq.classList.remove('selected'));
    // Ajoute la classe "selected" au carré cliqué
    square.classList.add('selected');
    selectedSquare = square;
}

// Ajoute des listeners pour la sélection des carrés
square1.addEventListener('click', () => selectSquare(square1));
square2.addEventListener('click', () => selectSquare(square2));

// Fonction pour changer la couleur aléatoire du carré sélectionné
function changeColor() {
    if (selectedSquare) {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        selectedSquare.style.backgroundColor = randomColor;
    }
}

// Fonction pour réinitialiser les couleurs
function resetColors() {
    // Remet les couleurs initiales
    square1.style.backgroundColor = "red";
    square2.style.backgroundColor = "blue";
}

// Ajout des écouteurs d'événements aux boutons
changeColorButton.addEventListener('click', changeColor);

// Fonction pour activer/désactiver le bouton "Changer Couleur"
disableButton.addEventListener('click', () => {
    if (changeColorButton.disabled) {
        changeColorButton.disabled = false;
        disableButton.textContent = "Désactiver";
    } else {
        changeColorButton.disabled = true;
        disableButton.textContent = "Activer";
    }
});

resetButton.addEventListener('click', resetColors);

