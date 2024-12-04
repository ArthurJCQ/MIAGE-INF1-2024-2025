const notes = [8, 12, 9, 15, 7, 10, 13];

const notesCoefficient = notes.map(note => {
    return {
        note: note,
        coefficient: note < 10 ? 1.5 : 3
    };
});

console.log(notesCoefficient);
