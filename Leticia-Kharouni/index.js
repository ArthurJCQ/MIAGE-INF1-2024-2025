const squares = document.querySelectorAll('.square');
const switchColorButton = document.getElementById('btn');

function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("btn").addEventListener('click', () => {
    const selectedSquare = document.querySelector('.selected'); // Trouve le carré sélectionné
    if (selectedSquare) { // Vérifie si un carré est sélectionné
        selectedSquare.style.backgroundColor = `#${randomColor()}`; // Correction ici
    }
});

document.getElementById("disable").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
});

squares.forEach(square => {
    square.addEventListener('click', () => {
        // Enlève la classe 'selected' de tous les carrés avant d'ajouter au carré cliqué
        squares.forEach(s => s.classList.remove('selected'));
        square.classList.add('selected');
    });
});

document.getElementById("reset").addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = "bisque";
        square.classList.remove('selected');
    });
});
