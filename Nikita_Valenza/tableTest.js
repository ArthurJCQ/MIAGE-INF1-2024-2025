const notes = [8, 12, 15, 7, 10, 9, 14]; // Tableau des notes

// Transformation en tableau d'objets avec note et coefficient
const result = notes.map(note => ({
  note: note,
  coefficient: note <= 10 ? 4 : 5,
}));

console.log(result);
