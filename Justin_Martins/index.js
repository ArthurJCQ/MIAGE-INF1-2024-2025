
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}


const square1 = document.getElementById("square");
const square2 = document.getElementById("squareBis");
const switchColorButton = document.getElementById("btn");
const disableButton = document.getElementById("disable");
const resetButton = document.getElementById("reset");

let selectedSquare = square1; 

function changeColor() {
  selectedSquare.style.backgroundColor = `#${randomColor()}`;
}

function disableSwitchColorButton() {
  switchColorButton.disabled = !switchColorButton.disabled;
}

function resetColors() {
  square1.style.backgroundColor = "bisque";
  square2.style.backgroundColor = "bisque";
}

function selectSquare(square) {
  selectedSquare.classList.remove("selected");

  selectedSquare = square;

  selectedSquare.classList.add("selected");
}

switchColorButton.addEventListener("click", changeColor);
disableButton.addEventListener("click", disableSwitchColorButton);
resetButton.addEventListener("click", resetColors);

square1.addEventListener("click", () => selectSquare(square1));
square2.addEventListener("click", () => selectSquare(square2));
