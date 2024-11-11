const square = document.getElementById("square");
const squareBis = document.getElementById("squareBis");
const switchColorButton = document.getElementById("btn");
const squares = [square, squareBis];

function randomColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16);
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
  squares.forEach((sqr) => (sqr.style.backgroundColor = "bisque"));
});

squares.forEach((sqr) => {
  sqr.addEventListener("click", () => {
    squares.forEach((el) => (el.className = "square"));
    sqr.className = "square selected";
  });
});
