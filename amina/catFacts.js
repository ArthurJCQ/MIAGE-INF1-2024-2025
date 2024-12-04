const getCatFacts = async () => {
    const response = await fetch('https://catfact.ninja/fact')
    return response.json();
}

const logRes = async () => {
    console.log(await getCatFacts())
}

logRes()