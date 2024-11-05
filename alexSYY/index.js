class Person{

    constructor(prenom){
        this.prenom = prenom;
        this.nom = "SAM-YIN-YANG";
    }
}

let alex = new Person("Alex");
console.log(alex.nom);

document.getElementById("btn").addEventListener("click", changeColor);
document.getElementById("btn_desactivate").addEventListener("click", desactiveBtn);
document.getElementById("reset").addEventListener("click", resetColor);

document.getElementById("squareBis").addEventListener("click", selectSquare);
document.getElementById("square").addEventListener("click", selectSquare);


function changeColor(){
    const square = document.querySelector(".selected");
    console.log(square);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = '#' + randomColor;
}

function desactiveBtn(){
    const firstBtn = document.getElementById("btn");
    firstBtn.disabled = !firstBtn.disabled;
}

function selectSquare(){
    const clickedElement = document.addEventListener("click", function(event) {
        if (event.target.classList.contains("square")){
            if (event.target.classList.contains("selected")) {
                // Ne fais rien
                console.log("Déjà sélectionné !");
            }else{
                const allSquares = document.querySelectorAll(".square");
                allSquares.forEach((square) => {
                    square.classList.toggle("selected");
                  });
            }
        }
    });
}

function resetColor(){
    document.getElementById("squareBis").style.backgroundColor = 'bisque';
    document.getElementById("square").style.backgroundColor = 'bisque';
}

    