const notesInf1 = [3,13,18,15,10,3]

resultTable=notesInf1.map(x=>{
    return {
        "note" : x,
        "coefficient": x<10 ? 1.5 : 3
    };
})

console.log(resultTable)