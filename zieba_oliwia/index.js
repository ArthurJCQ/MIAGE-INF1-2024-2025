const squares = document.querySelectorAll('.square');
const switchColorButton = document.getElementById('btn');
const disableButton = document.getElementById('disable');
const resetButton = document.getElementById('reset');

let selectedSquare = null;

function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function selectSquare(square) {
    if (selectedSquare) {
        selectedSquare.classList.remove('selected');
    }

    square.classList.add('selected');
    selectedSquare = square;
}

squares.forEach(square => {
    square.addEventListener('click', () => selectSquare(square));
});

switchColorButton.addEventListener('click', () => {
    if (selectedSquare) {
        selectedSquare.style.backgroundColor = `#${randomColor()}`;
    }
});

disableButton.addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
});

resetButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = "bisque";
        square.classList.remove('selected');
    });
    selectedSquare = null;
});
