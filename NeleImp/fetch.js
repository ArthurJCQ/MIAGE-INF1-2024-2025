const getCatFacts = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  return response.json();
};

getCatFacts().then((fact) => console.log(fact));

// CORRECTION
async function sample() {
  const data = await getCatFacts();
  console.log(data);
  console.log(data.fact);
}

sample();
