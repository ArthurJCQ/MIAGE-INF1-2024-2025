const noteInf = [1,11,13,14,9,18];

const noteInfCoef = noteInf.map(note => {
    return {
        note: note,
        coeff: note < 10 ? 1.5 : 3
    }
});