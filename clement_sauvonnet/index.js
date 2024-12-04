var square = document.getElementById("square");
const defaultNumber = 10;
const apilink = 'https://catfact.ninja/fact';
const getCatFact = async () => {
    const response = await fetch(apilink);
    return response.json();
};

async function sample() {
    const { fact } = await getCatFact();
    return fact;
}

const getCatFactList = async (nombreFact) => {
    const listeFaits = [];
    for (let i = 0; i < nombreFact; i++) {
        const fact = await sample();
        listeFaits.push(fact);
    }
    return listeFaits;
};

function showCatList(factList) {
    const divCatList = document.getElementById('catList');
    const ul = document.createElement('ul');

    factList.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        ul.appendChild(li);
    });
    divCatList.innerHTML = '';
    divCatList.appendChild(ul);
}

document.getElementById("reset").addEventListener("click", async () => {
    let number = parseInt(document.getElementById("nbFaits").value); // Récupérer la valeur de l'input

    if (number === 0 || isNaN(number)) {
        number = defaultNumber;
    }

    const liste = await getCatFactList(number);
    showCatList(liste);
});

document.addEventListener("DOMContentLoaded", async () => {
    const liste = await getCatFactList(defaultNumber);
    showCatList(liste);
});
