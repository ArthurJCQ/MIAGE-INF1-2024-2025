async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Il y a eu un problème avec l\'opération fetch :', error);
    }
}
getCatFact().then();
const getCatFact2 = async () =>{
    const response = await fetch('https://catfact.ninja/fact');
    return response.json();
}

async function sample(){
    const { fact } = await getCatFact2();
    console.log(fact)
}
sample().then();

