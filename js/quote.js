const quotes = [
    {quote:"a",
    author:"b"},
    {quote:"c",
    author:"d"},
    {quote:"e",
    author:"f"},
    {quote:"g",
    author:"h"},
    {quote:"i",
    author:"j"},
    {quote:"k",
    author:"l"},
    {quote:"m",
    author:"n"},
  
];

const quoteMessage = document.querySelector("#quote-message h2");
const quoteSource = document.querySelector("#quote-message span");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]

quoteMessage.innerText = todayQuote.quote;
quoteSource.innerText = todayQuote.author;