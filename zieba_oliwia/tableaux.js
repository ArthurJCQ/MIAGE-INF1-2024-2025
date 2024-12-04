const notes = [8, 12, 15, 7, 9];

const notesEtCoefficients = notes.map(note => {
  return {
    note: note,
    coefficient: note < 10 ? 1.5 : 3
  };
});

console.log(notesAvecCoefficients);
