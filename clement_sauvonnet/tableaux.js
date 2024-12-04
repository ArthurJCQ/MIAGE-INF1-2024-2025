const table = [1,2,12,3,4,10];

const tableModifiee = table.map(note => note > 10 ? {valeur : note, coefficient : 1.5} : {valeur : note, coefficient : 3});
console.log(tableModifiee);

const table2 = table.map(note => {
    return {
        valeur: note,
        coefficient: note > 10 ? 1.5 : 3
    }
});
const sumOfSquaresOfEvens = (numbers) =>
    numbers
        .filter((num) => num % 2 === 0)
        .map((num) => num * num)
        .reduce ((stack, sum) => sum + stack, 0);

console.log(sumOfSquaresOfEvens(table));
