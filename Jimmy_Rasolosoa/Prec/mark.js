const noteInf1 = [3, 13, 14, 18, 7, 4, 17, 20, 1];

// noteInf devient un tableau a 2 clés note et coeff si note < 10 alors coef = 1.5 sinon 3 

const noteInf2 = noteInf1.map(note => {
    return {
        note: note,
        coeff: note < 10 ? 1.5 : 3
    }
});

console.log(noteInf2);