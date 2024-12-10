
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const clickButton = document.getElementById("click-btn");
const resetButton = document.getElementById("reset-btn");


const originalColor = "pink";
let selectedSquare = square1;


function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function selectSquare(square) {
 
  square1.classList.remove("selected");
  square2.classList.remove("selected");

 
  square.classList.add("selected");

 
  selectedSquare = square;
}
square1.addEventListener("click", () => selectSquare(square1));
square2.addEventListener("click", () => selectSquare(square2));

clickButton.addEventListener("click", () => {
  selectedSquare.style.backgroundColor = getRandomColor();
});


resetButton.addEventListener("click", () => {
 
  square1.style.backgroundColor = originalColor;
  square2.style.backgroundColor = originalColor;
});
