const square = document.getElementById('square');
const switchColorButton = document.getElementById('btn');
const resetColorButton = document.getElementById('reset');

// fonction génératrice de couleurs en mode random
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

// fonction pour changer le background du carré sélectionné
function changeColor() {
    const selectedSquare = document.querySelector('.selected');
    if (selectedSquare) {
        selectedSquare.style.backgroundColor = `#${randomColor()}`;
    }
}

// tout reset à l'état original : enlever les couleurs
function resetColors() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = '';
    });
}

// sélectionner le carré qui est cliqué
function selectSquare(event) {
    document.querySelectorAll('.square').forEach(square => {
        square.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

// event listeners
switchColorButton.addEventListener('click', changeColor);
resetColorButton.addEventListener('click', resetColors);
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', selectSquare);
});

// Toggle l'état disabled du switchColorButton quand on clique le bouton switch on/off : fonction déjà fournie
document.getElementById("disable").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
});

