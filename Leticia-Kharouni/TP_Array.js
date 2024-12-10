const notes = [15, 18, 12, 16, 9, 14, 8];

// Transformation du tableau
const notesAvecCoeff = notes.map(note => {
  return {
    note: note,
    coefficient: note < 10 ? 1.5 : 3
  };
});

// Afficher le tableau transformé
console.log(notesAvecCoeff);
