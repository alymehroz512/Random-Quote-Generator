// Some quotes
const quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Whether you think you can or think you can’t, you’re right. – Henry Ford",
    "Act as if what you do makes a difference. It does. – William James",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "The best revenge is massive success. – Frank Sinatra",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "The best preparation for tomorrow is doing your best today. – H. Jackson Brown, Jr.",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair"
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    document.getElementById('quote').textContent = randomQuote;
}

// Add event listener to the button
document.getElementById('quoteButton').addEventListener('click', generateQuote);

