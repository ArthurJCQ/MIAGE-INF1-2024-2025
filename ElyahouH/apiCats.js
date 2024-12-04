async function fetchCatFact() {
    const reponse = await fetch('https://catfact.ninja/fact');
    if (!reponse.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await reponse.json();
    console.log(data);
}
fetchCatFact().then();
