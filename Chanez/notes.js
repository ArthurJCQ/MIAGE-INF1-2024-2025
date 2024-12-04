const tableau = [2, 1, 19, 18, 3, 6, 16];

const mapT = tableau.map(note => note > 10 ? {valeur : note, "coefficient" : 1.5} : {valeur : note, "coefficient" : 3});
console.log(mapT);