async function fetchChar() {
    try {
        const index = Math.floor(Math.random() * 25);
        const response = await fetch(`https://potterapi-fedeperin.vercel.app/en/characters?index=${index}`);
        if (!response.ok) {
            throw new Error(`HTTP status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur de réception', error);
        return null;
    }
}

function printChar(data) {
    const error = document.getElementById('error');
    error.innerHTML = ''; 

    if (!data) {
        error.innerHTML = 'FAIL !';
        return;
    }
    const fullNameCase = document.getElementById('fullNameCase');
    const nicknameCase = document.getElementById('nicknameCase');
    const hogwartsHouseCase = document.getElementById('hogwartsHouseCase');
    const interpretedByCase = document.getElementById('interpretedByCase');
    const childrenCase = document.getElementById('childrenCase');
    const imageCase = document.getElementById('imageCase');
    const birthdateCase = document.getElementById('birthdateCase');
    const { fullName, nickname, hogwartsHouse,interpretedBy,children,image,birthdate, index } = data;
    fullNameCase.innerHTML = fullName;
    nicknameCase.innerHTML = nickname;
    hogwartsHouseCase.innerHTML = hogwartsHouse;
    interpretedByCase.innerHTML = interpretedBy;
    childrenCase.innerHTML = children;
    imageCase.innerHTML = '<img src="' + image +'" alt="' + nickname+'">';
    birthdateCase.innerHTML = birthdate;



    
}

async function loadChar() {
    const data = await fetchChar();
    printChar(data);
}
document.getElementById('reload-btn').addEventListener('click', loadChar);

loadChar();
