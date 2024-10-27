const square = document.getElementById('square');
const switchColorButton = document.getElementById('btn');
const resetColorButton = document.getElementById('reset');

// fonction génératrice de couleur en mode random
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

// changer le background du carré sélectionné
function changeColor() {
    const selectedSquare = document.querySelector('.selected');
    if (selectedSquare) {
        selectedSquare.style.backgroundColor = `#${randomColor()}`;
    }
}

// tout reset à l'original
function resetColors() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = '';
    });
}

// select le carré qui est cliqué
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

// Toggle the disabled state of switchColorButton when clicking the disable button : fonction déjà fournie
document.getElementById("disable").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
});

