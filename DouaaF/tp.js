const notesInf1 = [3, 13, 18, 15, 10, 3];

const notesAvecCoefficient = notesInf1.map(note => {
  return {
    note: note,
    coefficient: note < 10 ? 1.5 : 3
  };
});

console.log(notesAvecCoefficient);