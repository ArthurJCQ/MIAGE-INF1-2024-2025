const square = document.getElementById('square');
const switchColorButton = document.getElementById('btn');

function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("btn").addEventListener('click', () => {
    square.style.backgroundColor = `#${randomColor()}`;
})

document.getElementById("disable").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
})
