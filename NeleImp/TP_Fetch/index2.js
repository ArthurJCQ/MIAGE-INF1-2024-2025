const catFactsList = document.getElementById("CatFact");
const getCatFact = async () => {
  for (let i = 1; i <= 5; i++) {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    const liste = document.createElement("li");
    liste.textContent = data.fact;
    catFactsList.appendChild(liste);
  }
};

document.getElementById("btn").addEventListener("click", () => {
  catFactsList.innerHTML = "";
  getCatFact();
});

getCatFact();
