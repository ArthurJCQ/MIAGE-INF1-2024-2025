const notes= [3, 13, 18, 15, 10, 3]



const AvecCoeff= notes.map(notes => {
    return {
        notes: notes,
        coefficient: notes < 10 ? 1.5 : 3
    };
})
console.log(PutObject);