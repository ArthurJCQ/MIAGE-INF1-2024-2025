const getCatFacts= async()=> {

    const response= await fetch('https://catfact.ninja/fact');
    
    return response.json;
    
};

async function AsyncFunctiongetCatFacts() {
    console.log(await getCatFacts)
}

AsyncFunctiongetCatFacts()