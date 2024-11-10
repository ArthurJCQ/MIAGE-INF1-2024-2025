const square = document.getElementById('square');
const squareBis = document.getElementById('squareBis');
const switchColorButton = document.getElementById('btn');


function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}


document.getElementById("square").addEventListener('click', () => {
    if(square.className === "square selected"){
        square.className="square";
    }
    else{
        square.className="square selected"
        squareBis.className="square"}

})
document.getElementById("squareBis").addEventListener('click', () => {
    if(squareBis.className === "square selected"){
        squareBis.className="square";
    }
    else{
        squareBis.className="square selected"
        square.className="square"}

})
document.getElementById("reset").addEventListener('click', () => {
    square.style.backgroundColor ="bisque";
    squareBis.style.backgroundColor ="bisque";
    squareBis.className="square";
    square.className="square"

})
document.getElementById("btn").addEventListener('click', () => {
    document.querySelector('.square.selected').style.backgroundColor = `#${randomColor()}`;

})

document.getElementById("disable").addEventListener('click', () => {
    switchColorButton.disabled = !switchColorButton.disabled ;
})
