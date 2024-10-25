var square = document.getElementById("square");

function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("disable").addEventListener("click", () =>{
    if(document.getElementById("btn").disabled === true){
        document.getElementById("btn").disabled = false;
    }
    else{
        document.getElementById("btn").disabled = true;
    }
});


document.getElementById("reset").addEventListener("click", () =>{
    document.getElementById("square").style.backgroundColor = "bisque";
    document.getElementById("squareBis").style.backgroundColor = "bisque";
});

document.getElementById("squareBis").addEventListener("click", () => {
    document.getElementById("square").className = "square";
    document.getElementById("squareBis").className = "square selected";
    square = document.getElementById("squareBis");

});
document.getElementById("square").addEventListener("click", () => {
    document.getElementById("square").className = "square selected";
    document.getElementById("squareBis").className = "square";
    square = document.getElementById("square");
});

document.getElementById("btn").addEventListener("click", () => {
    square.style.backgroundColor = "#" + randomColor();
});