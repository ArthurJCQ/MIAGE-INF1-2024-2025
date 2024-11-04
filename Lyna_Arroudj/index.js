/**const obj = {};

console.log(obj);
console.log(Object.getPrototypeOf(obj)); // getPrototypeOf = static fn
console.log(Object.getPrototypeOf('Chaîne')); // Prototype String -> Prototype Object
console.log('chaine'.length); // Utilise le prototype String
console.log(typeof String); // Les prototypes sont des fonctions (car on peut faire new Object() par exemple)


class Person { // Création d'un prototype
    age = 20; // Si valeur par défaut. Propriété créée sur l'objet directement.
    _city = ''; // On peut créer _city pour éviter d'avoir undefined avec le getter. _ = convention pour parler de propriété interne. Mais peut être modifié de l'extérieur.
    #secret = 'Secret !'; // = Propriété privée. Très peu utilisé en JS. Modifiable / Consultable que dans le contexte de la classe Person.
    
    constructor(firstname, lastname) {
        this.firstname = firstname; // Dynamic properties
        this.lastname = lastname; // Crées sur l'objet directement
    }
    
    incrementAge() { // Méthode créée sur le prototype Person
        this.age++;
    }
    
    set city(v) { // getter / setter dans le prototype
        this._city = v; // propriété dynamique. Rajout de _ pour différencier le setter de la propriété de l'objet. On peut rajouter des checks.
    }
    
    get city() {
        return `J'habite ${this._city}`; // Undefined si _city n'existe pas.
    }
    
    get name() { // getter / setter dans le prototype
        return `${this.firstname} ${this.lastname}`;
    }
    
    static majorite = 18; // Static = Dispo sur l'objet Person, PAS dans le prototype.
    static sayHello() { // Static = Dispo sur l'objet Person, PAS dans le prototype.
        return 'Hello !';
    }
    isMajeur() {
        return this.age >= Person.majorite;
    }
}

const john = new Person('John', 'Doe');
john.incrementAge();
console.log(john);
console.log(john.age);
john.city = 'Pau';
console.log(john.city)
console.log(Person.majorite);
console.log(Person.sayHello());**/


//Deux bouton activé desactivé

/*
document.getElementById("btn").addEventListener("click", changeColor);
document.getElementById("switche-btn").addEventListener("click", ()=> {
    const switchColorBtn = document.getElementById("btn");
    switchColorBtn.disabled = !switchColorBtn.disabled;
}
);



function changeColor(){
    const square = document.getElementById("square");
    
    //square.style.backgroundColor = 'red'; //Juste changer en rouge

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    square.style.backgroundColor = randomColor;
}
*/


const squares = document.querySelectorAll(".square");
let selectedSquare = null; // carré actuellement sélectionné

// Ajouter un événement de clic pour sélectionner un carré
squares.forEach(square => {
    square.addEventListener("click", () => {
        
        if (selectedSquare) {
            selectedSquare.style.border = "none";
        }
        
        selectedSquare = square;
        selectedSquare.style.border = "2px dotted black";
    });
});


document.getElementById("btn").addEventListener("click", changeColor);
document.getElementById("switche-btn").addEventListener("click", () => {
    const switchColorBtn = document.getElementById("btn");
    switchColorBtn.disabled = !switchColorBtn.disabled;
});

// Fonction pour changer la couleur du carré sélectionné
function changeColor(){
    if (selectedSquare) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        selectedSquare.style.backgroundColor = randomColor;
    } else {
        alert("Veuillez sélectionner un carré pour changer sa couleur.");
    }
}

// Bouton pour réinitialiser les couleurs des deux carrés
document.getElementById("reset-btn").addEventListener("click", resetColors);


function resetColors() {
    squares.forEach(square => {
        square.style.backgroundColor = ""; // reset couleur (peut être remplacée par une couleur spécifique)
        square.style.border = "none";
    });
    selectedSquare = null; // Aucun carré n'est sélectionné après réinitialisation
}

