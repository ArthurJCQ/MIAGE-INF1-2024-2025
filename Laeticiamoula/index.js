const squares = document.querySelectorAll('.square');
const switchColorBtn = document.getElementById('btn');
const resetBtn = document.getElementById('reset');

//generation couleur aléatoire
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

//eventListner du boutton de changement de couleur
switchColorBtn.addEventListener('click', () => {
    const selectedSquare = document.querySelector('.selected');
    if (selectedSquare) {
        //changer la couleur du boutton selectionné
        selectedSquare.style.backgroundColor = `#${randomColor()}`;
    }
});

//desactiver le boutton de changement de couleur 
document.getElementById("disable").addEventListener('click', () => {
    switchColorBtn.disabled = !switchColorBtn.disabled;
});

//selection d'un carré
squares.forEach(square => {
    square.addEventListener('click', () => {
        squares.forEach(sq => sq.classList.remove('selected'));
        square.classList.add('selected');
    });
});

//reset couleurs carrés
resetBtn.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'bisque';
    });
});