async function getOrigin(event) {
    event.preventDefault();
    var name = document.getElementById("inputName").value;
    console.log(name);
    const baseUrl = 'https://api.nationalize.io/';
    const paramName = new URLSearchParams();
    paramName.append('name', name);
    const url = `${baseUrl}?${paramName.toString()}`;
    console.log(url);
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP Error : ${response.status}`);
        }

        const originProba = await response.json();

        displayResults(originProba);
    } catch (error) {
        console.error("Erreur : ", error);
    }
}

function displayResults(data) {
    const results = document.getElementById('results');
    results.innerHTML = '';

    if (data.country && data.country.length > 0) {
        data.country.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `Pays : ${item.country_id}, Probabilité : ${item.probability * 100}`;
            results.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'Pas de résultat trouvé';
        results.appendChild(listItem);
    }
}
