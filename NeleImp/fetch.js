const getCatFacts = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  return response.json();
};

getCatFacts().then((fact) => console.log(fact));
