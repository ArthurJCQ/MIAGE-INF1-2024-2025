const obj= {
    a : "t",
    b : 5
};
console.log(obj);
obj["clem"] = obj["a"];
console.log(obj)
obj["a"] = "changé"
console.log(obj)
console.log(obj.hasOwnProperty(("clem")));
console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj["a"]));


class Person{

    age = 20;

    constructor (prenom, nom){
        this.prenom = prenom;
        this.nom = nom;
    }

    bonjour(){
        console.log("Bonjour " + this.prenom + " " + this.nom + " ,vous avez " + this.age  + " ans !");
    }
}


clement = new Person("Clément", "Sauvonnet");
clement.bonjour();
console.log(clement);


document.getElementById("btn").addEventListener("click",changeColor);

function changeColor(){
    const square = document.getElementById("square");
    if (square.style.backgroundColor === "red"){
        square.style.backgroundColor = "blue";
    }
    else{
        square.style.backgroundColor = "red"
    }
}