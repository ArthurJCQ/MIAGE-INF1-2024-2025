async function obtenirFaitChat() {
    try {
        const reponse = await fetch('https://catfact.ninja/fact');

        if (!reponse.ok) {
            throw new Error('Erreur réseau');
        }

        const informations = await reponse.json();

        console.log(informations);
    } catch (erreur) {
        console.error('Problème rencontré lors de la récupération des données :', erreur);
    }
}

obtenirFaitChat().then();

