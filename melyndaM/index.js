//On sélectionne l'élément HTML avec l'ID square (le premier carré) et on le stocke dans la variable square.
const square = document.getElementById('square');
//On sélectionne l'élément HTML avec l'ID squareBis (le deuxième carré) et on le stocke dans la variable squareBis.
const squareBis = document.getElementById('squareBis');
//On sélectionne le bouton avec l'ID btn, qui servira à changer la couleur du carré sélectionné, et on le stocke dans switchColorButton.
const switchColorButton = document.getElementById('btn');
// On sélectionne le bouton de réinitialisation (reset) pour l’utiliser plus tard, et on le stocke dans resetButton.
const resetButton = document.getElementById('reset');

// Fonction pour générer une couleur aléatoire
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

// Fonction pour sélectionner un carré
function selectSquare(selectedSquare) {
    // Sélectionne tous les éléments ayant la classe square (donc les deux carrés).Retirer la classe 'selected' de tous les carrés
    document.querySelectorAll('.square').forEach(square => {
        square.classList.remove('selected');
    });
    // Ajouter la classe 'selected' au carré cliqué,Cela ajoute une bordure en pointillé, comme défini dans le CSS.
    selectedSquare.classList.add('selected');
}

// Ajouter un événement de clic pour chaque carré
square.addEventListener('click', () => selectSquare(square));
squareBis.addEventListener('click', () => selectSquare(squareBis));

// Changer la couleur du carré sélectionné lors du clic sur le bouton
document.getElementById("btn").addEventListener('click', () => {
    //Sélectionne le carré actuellement marqué comme sélectionné (ayant la classe selected).
    const selectedSquare = document.querySelector('.square.selected');
    //Vérifie que selectedSquare existe (qu'un carré est bien sélectionné).
    if (selectedSquare) {
        // Change la couleur de fond du carré sélectionné en une couleur aléatoire, générée par la fonction randomColor().
        selectedSquare.style.backgroundColor = `#${randomColor()}`;
    }
});

// Désactiver ou réactiver le bouton de changement de couleur
document.getElementById("disable").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
});

// Réinitialiser la couleur des deux carrés au clic sur le bouton de réinitialisation
resetButton.addEventListener('click', () => {
    square.style.backgroundColor = 'bisque';
    squareBis.style.backgroundColor = 'bisque';
});
