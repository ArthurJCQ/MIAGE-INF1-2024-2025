/*const obj = {};
console.log(obj);
console.log(obj.hasOwnProperty('a'));

class Personne {
    age=20;

    constructor(nom, prenom) {
        this.nom = nom;
        this.noprenom = prenom;
    }

}

const Chanez = new Personne('Chanez','Arroum');
console.log(Chanez);*/
/*
document.getElementById("btn").addEventListener("click", changeColor);
function changeColor(){
    const square = document.getElementById("square");
    square.style.backgroundColor = 'red';
}*/

function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}
document.getElementById("btn").addEventListener("click", changeColor);

function changeColor(){
    const square = document.getElementById("square");
    square.style.backgroundColor = `#${randomColor()}`;

switchColorBtn.addEventListener('click', () => {
    const selectedSquare = document.querySelector('.selected');
    if (selectedSquare) {
        selectedSquare.style.backgroundColor = `#${randomColor()}`;
    }
});

document.getElementById("disable").addEventListener('click', () => {
    switchColorBtn.disabled = !switchColorBtn.disabled;
});

squares.forEach(square => {
    square.addEventListener('click', () => {
        squares.forEach(sq => sq.classList.remove('selected'));
        square.classList.add('selected');
    });
});
resetBtn.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'bisque';
    });
})
}