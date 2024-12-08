const API_KEY = 'DEMO_KEY'; 
async function fetchAstronomyData(date) {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'appel API :', error);
    return null;
  }
}

function updateContent(data) {
  const titleElement = document.getElementById('title');
  const imageElement = document.getElementById('image');
  const descriptionElement = document.getElementById('description');

  if (data) {
    titleElement.textContent = data.title;
    imageElement.src = data.url;
    imageElement.alt = data.title;
    descriptionElement.textContent = data.explanation;
  } else {
    titleElement.textContent = 'Erreur lors du chargement des données.';
    imageElement.src = '';
    descriptionElement.textContent = '';
  }
}
function getRandomDate() {
  const start = new Date(1995, 5, 16);
  const end = new Date();
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime).toISOString().split('T')[0];
}
async function refreshContent() {
  const randomDate = getRandomDate();
  const data = await fetchAstronomyData(randomDate);
  updateContent(data);
}
document.getElementById('refresh').addEventListener('click', refreshContent);
refreshContent();
