const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyQuoteBtn = document.getElementById("copyQuoteBtn");
const messageElement = document.getElementById("message");

let previousIndex = -1;

function generateQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    quoteElement.textContent = quotes[randomIndex].text;
    authorElement.textContent = "— " + quotes[randomIndex].author;
    messageElement.textContent = "";
}

async function copyQuote() {
    const fullQuote =
        quoteElement.textContent + "\n" + authorElement.textContent;

    try {
        await navigator.clipboard.writeText(fullQuote);
        messageElement.textContent = "Quote copied successfully!";
    } catch (error) {
        messageElement.textContent =
            "Copy is unavailable here. Select and copy the quote manually.";
    }
}

newQuoteBtn.addEventListener("click", generateQuote);
copyQuoteBtn.addEventListener("click", copyQuote);

// Display a random quote when the website opens.
generateQuote();