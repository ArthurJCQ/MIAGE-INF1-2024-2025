/*const obj ={
    a:1
}; 

console.log(obj);
console.log(obj.hasOwnProperty('a'));

//console.log(obj.getPrototypeOf(obj));
//console.log(getPrototypeOf(2)); //pour number

class Person{
    constructor(prenom, nom){
        this.prenom=prenom;
        this.nom=nom;
    }
    age;

    static sayHello(){
        return 'Hello'
    }
    //pour l'appelé je fais Person.majorite car c'est static
    static majorite=18;
    isMajeur(){
        return this.age>=Person.majorite;
    }

    //getter
    get age(){
        return this.age;
    }
    //setter
    set age(value){
        this.age=value;
    }
}

//création d'une object personne
console.log(new Person("Bintou","BARADJI"));*/

//addEventListener(envent,callback)
document.getElementById("btn").addEventListener("click",changeColor); //addEventListener : Eventloop

function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16); //couleur en hexadecimale
}

function changeColor1(){
    const square= document.getElementById("square");
    square.style.backgroundColor='#'+randomColor();
    //autre manière de l'écrire: '#${randomColor}' pour la concaténation
}

function changeColor() {
    if (selectedSquare) {  
        selectedSquare.style.backgroundColor = '#' + randomColor();
    }
}

const switchColorButton = document.getElementById('btn');
switchColorButton.addEventListener("click", changeColor);

document.getElementById("btn2").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled;
})



let selectedSquare = null;

//selected square
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        document.querySelectorAll('.square').forEach(sq => sq.classList.remove('selected'));
        square.classList.add('selected');
        selectedSquare = square;
    });
});

//reset bouton
document.getElementById("btn3").addEventListener("click", () => {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'bisque';  // couleur défaut
        square.classList.remove('selected');  
    });
    selectedSquare = null;  
});
//

//