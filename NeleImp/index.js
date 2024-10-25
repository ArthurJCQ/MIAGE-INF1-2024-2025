document.getElementById("btn").addEventListener("click", changeColor()); // addEventListener : Eventloop
function changeColor() {
  const square = document.getElementById("square");
  square.style.backgroundColor = "red";
}
