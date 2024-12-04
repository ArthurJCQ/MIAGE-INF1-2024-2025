let allSpells = [];

const fetchSpells = async () => {
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/en/spells');
        const data = await response.json();
        allSpells = data;
        displaySpells(data);
    } catch (error) {
        console.error("Error during the fetch :", error);
        return [];
    }
};

const displaySpells = (spells) => {
    const spellsList = document.getElementById('spells-list');
    spellsList.innerHTML = '';
    const spell = allSpells[Math.floor(Math.random() * allSpells.length)];
    const spellName = document.createElement('li');
    spellName.textContent = `Name: ${spell.spell}`;
    const spellUse = document.createElement('li');
    spellUse.textContent = `Use: ${spell.use}`;

    spellsList.appendChild(spellName);
    spellsList.appendChild(spellUse);
};

document.addEventListener('DOMContentLoaded', () => {
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', displaySpells);
});

const init = async () => {
    await fetchSpells();
};

init();
