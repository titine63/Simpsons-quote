// Définition de la fonction pour charger une nouvelle citation
function loadNewQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(function(response) {
            const quote = response.data[0];
            const quoteElement = document.createElement('div');
            quoteElement.innerHTML = `
                <p><strong>${quote.character}</strong></p>
                <img src="${quote.image}" alt="${quote.character}"/>
                <p>${quote.quote}</p>
            `;
            const quoteContainer = document.getElementById('simpson-quote');
            quoteContainer.innerHTML = ''; // Efface la citation précédente
            quoteContainer.appendChild(quoteElement);
        })
        .catch(function(error) {
            console.log(error);
        });
}

// Exécution de la fonction au chargement de la page et configuration du gestionnaire de clic
document.addEventListener('DOMContentLoaded', function() {
    loadNewQuote(); // Charger une première citation au chargement de la page

    // Gestionnaire de clic pour le bouton
    const loadQuoteButton = document.getElementById('load-quote');
    if (loadQuoteButton) {
        loadQuoteButton.addEventListener('click', function() {
            loadNewQuote();
        });
    }
});



