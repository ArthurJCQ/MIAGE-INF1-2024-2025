const square = document.getElementById("square");
const squarebis = document.getElementById("squareBis");
const switchColorButton = document.getElementById("btn");
const squares = [square, squarebis];

function randomColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

switchColorButton.addEventListener("click", () => {
  const selectedSquare = document.querySelector(".square.selected");
  if (selectedSquare) {
    selectedSquare.style.backgroundColor = `#${randomColor()}`;
  }
});

document.getElementById("disable").addEventListener("click", () => {
  switchColorButton.disabled = !switchColorButton.disabled;
});

document.getElementById("reset").addEventListener("click", () => {
  squares.forEach((sq) => (sq.style.backgroundColor = "bisque"));
});

squares.forEach((sq) => {
  sq.addEventListener("click", () => {
    squares.forEach((el) => (el.className = "square"));
    sq.className = "square selected";
  });
});
