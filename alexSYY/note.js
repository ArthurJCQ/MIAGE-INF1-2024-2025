function mapMarks(){
    const noteInf1 = [3, 12, 20, 8, 16];
    const obj = {
        identity: {
            name: 'John',
            familyName: 'Doe',
        }
    }
    console.log(noteInf1.map(setCoef));
}

function setCoef(mark){
    if (mark < 10){
        return {note: mark, coef: 1.5};
    }else{
        return {note: mark, coef: 3};
    }
}