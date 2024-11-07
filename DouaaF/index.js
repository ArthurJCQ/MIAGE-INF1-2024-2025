function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

let selectedSquare = null;

function selectSquare(square) {
    if (selectedSquare) {
        selectedSquare.classList.remove('selected');
    }
    selectedSquare = square;
    selectedSquare.classList.add('selected');
}

document.getElementById("btn").onclick = function() {
    if (selectedSquare) {
        selectedSquare.style.backgroundColor = `#${randomColor()}`;
    }
};

document.getElementById("btn2").onclick = function() {
    document.getElementById("btn").disabled = !document.getElementById("btn").disabled;
};

document.getElementById("btn3").onclick = function() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'bisque';
    });
};

document.querySelectorAll('.square').forEach(square => {
    square.onclick = function() {
        selectSquare(square);
    };
});



//** Exerice fait en cours **//

// const obj = {
//     a: 1
// };

// console.log(obj);
// console.log(Object.getPrototypeOf(obj));
// console.log(Object.getPrototypeOf('chaine'));
// console.log(typeof String); //Les prototypes sont les fonctions


// class Person{
//      //constructeur avec un prénom et un nom
//      //une popriété age
//      //on crée une nouvelle personne et on accède à nom et prénom etc..

//     age = 20;
//     _city = '';

//      constructor (prenom, nom){
//         this.prenom = prenom;
//         this.nom = nom;
//      }

//      incrementAge(){
//         this.age++;
//      }

//      set city(v){
//         this._city = v;
//      }

//      get nom(){
//         return this._nom;
//      }

//      get prenom(){
//         return this._prenom;
//      }

//      set nom(nom){
//         this._nom = nom;
//      }
    
//      set prenom(prenom){
//         this._prenom = prenom;
//      }

//      isMajeur(){
//         return this.age >= 18;
//      }

//     static majorite = 18; 

//     static sayHello(){
//         console.log('Hello !');
//      }

// }

// const John = new Person('John', 'Doe');
// console.log(John);

