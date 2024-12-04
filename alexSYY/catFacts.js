async function getCatFacts(){
    const response = await fetch('https://catfact.ninja/fact');
    console.log(response);

    const catFacts = await response.json();
    console.log(catFacts);
}