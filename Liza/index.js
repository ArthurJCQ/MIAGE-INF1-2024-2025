const square = document.getElementById('square');
const squareBis = document.getElementById('squareBis');
const switchColorButton = document.getElementById('btn');
const resetButton = document.getElementById('reset');

// Fonction de couleur aléatoire
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

// Changer la couleur du carré sélectionné
switchColorButton.addEventListener('click', () => {
    const selectedSquare = document.querySelector('.selected');
    selectedSquare.style.backgroundColor = `#${randomColor()}`;
});

// Activer/Désactiver le bouton de changement de couleur
document.getElementById("disable").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
});

// Sélection d'un carré au clic avec bordure en pointillé
function selectSquare(square) {
    square.addEventListener('click', () => {
        document.querySelectorAll('.square').forEach(sq => sq.classList.remove('selected'));
        square.classList.add('selected');
    });
}
selectSquare(square);
selectSquare(squareBis);

// Réinitialiser les couleurs des deux carrés
resetButton.addEventListener('click', () => {
    square.style.backgroundColor = 'bisque';
    squareBis.style.backgroundColor = 'bisque';
});
