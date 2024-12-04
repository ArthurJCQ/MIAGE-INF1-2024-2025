function calculcoef(note) {
    if (note < 10) {
      return 1.5;
    } else {
      return 3;
    }
  }
  
  const notes = [1, 2, 5, 10, 11, 12];
  const notesCoef = notes.map((note) => [note, calculcoef(note)]);
  
  console.log(notesCoef);
  
