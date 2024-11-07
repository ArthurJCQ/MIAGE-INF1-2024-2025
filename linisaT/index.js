const square = document.getElementById('square'); 
const squareBis = document.getElementById('squareBis');
const switchColorButton = document.getElementById('btn');
const resetButton = document.getElementById('reset');

let selectedSquare = null; // Variable pour garder trace du carré sélectionné

// Fonction pour générer une couleur aléatoire
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

// Changer la couleur du carré sélectionné
switchColorButton.addEventListener('click', () => {
    if (selectedSquare) {
        selectedSquare.style.backgroundColor = `#${randomColor()}`;
    } else {
        alert('Veuillez d\'abord sélectionner un carré!');
    }
});

// Fonction pour désactiver/activer le bouton de changement de couleur
document.getElementById("disable").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
});

// Réinitialiser les couleurs des carrés
resetButton.addEventListener('click', () => {
    square.style.backgroundColor = 'bisque';
    squareBis.style.backgroundColor = 'bisque';
});

// Sélectionner un carré en cliquant dessus
function selectSquare(clickedSquare) {
    // Retirer la classe 'selected' des deux carrés
    square.classList.remove('selected');
    squareBis.classList.remove('selected');
    
    // Ajouter la classe 'selected' au carré cliqué
    clickedSquare.classList.add('selected');
    
    // Mettre à jour la variable de carré sélectionné
    selectedSquare = clickedSquare;
}

// Ajouter des événements de clic pour les carrés
square.addEventListener('click', () => selectSquare(square));
squareBis.addEventListener('click', () => selectSquare(squareBis));
