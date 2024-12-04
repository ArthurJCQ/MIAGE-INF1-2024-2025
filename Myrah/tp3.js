// Fonction pour récupérer une fact sur les chats
const getCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    return response.json(); // Retourne l'objet JSON complet
  };
  
  // Fonction qui appelle getCatFact() et affiche les résultats
  async function sample() {
    const data = await getCatFact(); // Appelle getCatFact()
    console.log(data); // Affiche l'objet complet
    console.log(data.fact); // Affiche uniquement la propriété "fact"
  }
  
  // Appel de la fonction sample()
  sample();
  