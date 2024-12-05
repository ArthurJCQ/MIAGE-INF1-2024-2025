const refreshBtn = document.getElementById('refreshBtn');
const dataList = document.getElementById('dataList');

async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        return data.fact; 
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return "Erreur lors de la récupération des données.";
    }
}

async function updateList() {
    dataList.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const fact = await fetchCatFact();  
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        dataList.appendChild(listItem);  
    }
}

refreshBtn.addEventListener('click', updateList);

updateList();
