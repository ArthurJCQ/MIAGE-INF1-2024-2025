const table = [1,2,12,3,4,10];

const mapTableau = table.map(note => note > 10 ? {valeur : note, "coefficient" : 1.5} : {valeur : note, "coefficient" : 3});
console.log(mapTableau);