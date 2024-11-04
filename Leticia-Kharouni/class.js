document.getElementById("btn").addEventListener("click", changeColor); //add event listener : Eventloop
function changeColor(){
    const square = document.getElementById("square");
    square.style.backgroundColor = randomColor()
}

function randomColor(){
    let randomColor = (Math.random()*0xFFFFFF<<0).toString(16);
    square.style.backgroundColor = '#' + randomColor;
}