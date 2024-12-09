const getCatFacts = async () => {
    try {
        console.log("fetching in progress...")
        //fetch cat facts
        const response = await fetch('https://catfact.ninja/facts');
        const data = await response.json();
        
        const factsList = document.getElementById('factsList'); //recuperer l'element ul du fichier html
        factsList.innerHTML = ''; //supprimer les list items

        
        data.data.forEach(catFact => {
            const catElement = document.createElement('li'); //creer un nouveau list item element
            catElement.textContent = catFact.fact; //lui affecter la fact comme textContent
            console.log(catFact.fact);
            factsList.appendChild(catElement);
        });
        
    } catch (error) {
        console.error('Data afetching error:', error);
    }
};

//event listener sur le refresh button => refetcher les cat facts onClick
document.getElementById('refreshBtn').addEventListener('click', getCatFacts);

//appel initial
getCatFacts();

