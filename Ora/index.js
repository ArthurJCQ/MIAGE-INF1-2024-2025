// Sélection des carrés et des boutons
const square1 = document.getElementById('square');
const square2 = document.getElementById('squareBis');
const colorButton = document.getElementById('btn');
const disableButton = document.getElementById('disable');
const resetButton = document.getElementById('reset');

let currentSquare = square1; // Par défaut, le premier carré est sélectionné

// Fonction pour générer une couleur aléatoire
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Gestion de la sélection des carrés
[square1, square2].forEach((square) => {
    square.addEventListener('click', () => {
        square1.classList.remove('selected');
        square2.classList.remove('selected');
        square.classList.add('selected');
        currentSquare = square; // Met à jour le carré sélectionné
    });
});

// Gestion du changement de couleur du carré sélectionné
colorButton.addEventListener('click', () => {
    if (currentSquare) {
        currentSquare.style.backgroundColor = getRandomHexColor();
    }
});

// Gestion de l'activation/désactivation du bouton de changement de couleur
disableButton.addEventListener('click', () => {
    colorButton.disabled = !colorButton.disabled;
});

// Gestion de la réinitialisation des couleurs des carrés
resetButton.addEventListener('click', () => {
    [square1, square2].forEach(square => {
        square.style.backgroundColor = 'bisque'; // Réinitialise la couleur
    });
});
