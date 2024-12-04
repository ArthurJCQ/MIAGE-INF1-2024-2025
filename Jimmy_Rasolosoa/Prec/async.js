async function fetchCatFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Il y a eu un problème avec l'opération fetch :", error);
  }
}
fetchCatFact().then();
