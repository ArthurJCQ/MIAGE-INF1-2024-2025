const square = document.getElementById("square");
const squarebis = document.getElementById("squareBis");
const switchColorButton = document.getElementById("btn");
const squareSelected = document.getElementsByClassName("square selected");

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("btn").addEventListener("click", () => {
  squareSelected[0].style.backgroundColor = `#${randomColor()}`;
});

document.getElementById("disable").addEventListener("click", () => {
  switchColorButton.disabled = !switchColorButton.disabled;
});

document.getElementById("reset").addEventListener("click", () => {
  square.style.backgroundColor = "bisque";
  squarebis.style.backgroundColor = "bisque";
});

square.addEventListener("click", () => {
  square.className = "square selected";
  squarebis.className = "square";
});

squarebis.addEventListener("click", () => {
  square.className = "square";
  squarebis.className = "square selected";
});

/*
//En version optimisée
const squares = [square, squarebis];

squares.forEach((sq) => {
  sq.addEventListener("click", () => {
    squares.forEach((el) => (el.className = "square"));
    sq.className = "square selected";
  });
});
*/
