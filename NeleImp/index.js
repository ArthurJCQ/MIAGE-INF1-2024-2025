const obj = {
  a: 1,
};
//au debut on cree un objet vide et js y associe des proprietes par defaut
console.log(Object.getPrototypeOf(obj)); // getPrototypeof = static fn
console.log(Object.getPrototypeOf(2)); //Prototype String =>

class Person {
  age;
  prenom;
  nom;
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }
  static sayHello() {
    return "Hello";
  }
  // pour l'appeler je fais Person.sayHello parce que c'est static
}
b = new Person("Nele", "IMP");
console.log(b);
