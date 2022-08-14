const quotes = [
    {quote:"Love is the big booming beat which covers up the noise of hate.",
    author:"Margaret Cho"},
    {quote:"Living in the moment brings you a sense of reverence for all of life's blessings.",
    author:"Oprah Winfrey"},
    {quote:"Learning is not compulsory... neither is survival.",
    author:"W. Edwards Deming"},
    {quote:"Success is never final.",
    author:"Sir Winston Churchill"},
    {quote:"Talent wins games, but teamwork wins championships.",
    author:"Michael Jordan"},
    {quote:"How many a man has dated a new era in his life from the reading of a book.",
    author:"Henry David Thoreau"},
    {quote:"Let no one ever come to you without leaving better and happier.",
    author:"Mother Teresa"},
  
];

const quoteMessage = document.querySelector("#quote-message h2");
const quoteSource = document.querySelector("#quote-message span");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]

quoteMessage.innerText = todayQuote.quote;
quoteSource.innerText = todayQuote.author;