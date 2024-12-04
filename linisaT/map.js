const notesInf1 = [1, 5, 10, 15, 9, 4];

const notesAvecCoefficients = notesInf1.map(note => {
  if (note < 10) {
    return { note: note, coefficient: 1.5 };
  } else {
    return { note: note, coefficient: 3 };
  }
});

console.log(notesAvecCoefficients);
