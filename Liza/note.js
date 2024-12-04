const notesInf1 = [3, 13, 18, 15, 10, 3];

const notesObject = notesInf1.map(note => {
  return note < 10
    ? {
        coefficient: 1.5,
        note,
      }
    : {
        coefficient: 3,
        note,
      };
});

console.log(notesObject);
