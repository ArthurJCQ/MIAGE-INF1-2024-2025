const notesInf1= [3,13,18,15,10,13];

const notesObj = notesInf1.map(note => {
    return {
      note: note,
      coefficient: note < 10 ? 1.5 : 3
    };
  });
  
  console.log(notesObj);