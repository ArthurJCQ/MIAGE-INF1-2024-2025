async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');

        if (!response.ok) {
            throw new Error('Error');
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Issue with fetch :', error);
    }
}
fetchCatFact().then();
