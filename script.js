const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You know you are on the road to success if you would do your job, and not be paid for it.– Oprah Winfrey",
    "When you are asked if you can do a job, tell ’em, ‘Certainly I can! ‘ Then get busy and find out how to do it. -Theodore Roosevelt",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky", 
    "The best way to predict the future is to create it. - Peter Drucker",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only person you should try to be better than is the person you were yesterday. - Anonymous",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
    
];

const colors = [
    "#80c7b6", // Pastel green
    "#ffc0ad", // Pastel coral
    "#c3aed6", // Pastel lavender
    "#ffb347", // Pastel orange
    "#9fd8df", // Pastel blue
    "#f3c98b", // Pastel yellow
    "#B1907F",
    "#f3c56a",
    "#f7cac9", //pink
    "#A3C1AD", // Pastel greenish-blue
    "#FACB90", // Light peach
    "#B4A0E5", // Pastel purple
    "#FFDDA1"  // Light yellow

];



const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const saveQuoteBtn = document.getElementById('saveQuoteBtn');
const container = document.querySelector('.container');

function getRandomQuoteAndColor() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const randomColor = colors[randomIndex];
    return { quote: randomQuote, color: randomColor };
}

function displayRandomQuoteAndColor() {
    const { quote, color } = getRandomQuoteAndColor();
    quoteText.textContent = quote;
    container.style.backgroundColor = color;
    newQuoteBtn.style.backgroundColor = color;
}

newQuoteBtn.addEventListener('click', displayRandomQuoteAndColor);

function saveQuote() {
    const quote = quoteText.textContent;
    let favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
    console.log("Existing favorites:", favorites);
    favorites.push(quote);
    console.log("Updated favorites:", favorites);
    localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
    console.log("Favorites saved:", favorites);
    alert('Quote saved to favorites!');
}

saveQuoteBtn.addEventListener('click', saveQuote);
document.addEventListener('DOMContentLoaded', function() {
    const favoriteQuotesContainer = document.getElementById('favoriteQuotes');
    const favoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];

    if (favoriteQuotes.length === 0) {
        favoriteQuotesContainer.innerHTML = '<p>No favorite quotes saved yet.</p>';
    } else {
        favoriteQuotes.forEach(function(quote) {
            const quoteElement = document.createElement('div');
            quoteElement.textContent = quote;
            favoriteQuotesContainer.appendChild(quoteElement);
        });
    }
});


// Initial quote display
displayRandomQuoteAndColor();
setInterval(displayRandomQuoteAndColor,3000);

