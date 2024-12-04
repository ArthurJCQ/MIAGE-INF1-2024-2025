const notesInf = [3, 5, 15, 19, 9, 16, 10];

const getTen = notesInf.map((note) => {
  if (note < 10) {
    return { note: note, coef: 1.5 };
  } else {
    return { note: note, coef: 3 };
  }
});

console.log(getTen);
