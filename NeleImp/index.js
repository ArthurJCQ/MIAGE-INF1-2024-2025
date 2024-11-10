const square = document.querySelectorAll(".square");
const switchColorButton = document.getElementById("btn");
let selected_square = document.querySelector(".selected");

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("btn").addEventListener("click", () => {
  if (selected_square) {
    selected_square.style.backgroundColor = `#${randomColor()}`;
  }
});

document.getElementById("disable").addEventListener("click", () => {
  switchColorButton.disabled = !switchColorButton.disabled;
});

document.getElementById("reset").addEventListener("click", () => {
  square.forEach((s) => {
    s.style.backgroundColor = "bisque";
  });
});

function selectSquare(square1, square2) {
  document.getElementById(square2).classList.remove("selected");
  document.getElementById(square1).classList.add("selected");
  selected_square = document.getElementById(square1);
}

document.getElementById("square").addEventListener("click", () => {
  selectSquare("square", "squareBis");
});

document.getElementById("squareBis").addEventListener("click", () => {
  selectSquare("squareBis", "square");
});
