const quotes = [
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "-Arnold Schwarzenegger",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "-Walt Disney",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "-Michael Jordan",
    },
    {
        quote: "What doesn't kill you makes you stronger.",
        author: "-Friedrich Nietzsche",
    },
    {
        quote: "Today's special moments are tomorrow's memories.",
        author: "-Aladdin",
    },
    {
        quote: "Sometimes the smallest things take up the most room in your heart.",
        author: "-Winnie the Pooh",
    },
    {
        quote: "Venture outside your comfort zone. The rewards are worth it.",
        author: "-Tangled",
    },
    {
        quote: " If you keep on believing the dream that you wish will come true.",
        author: "-Cinderella",
    },
    {
        quote: "When life gets you down, do you wanna know what you've gotta do? Just keep swimming, swimming and swimming.",
        author: "-Finding Nemo",
    },
    {
        quote: "A true hero isn't measured by the size of his strength but by the strength of his heart.",
        author: "-Hercules",
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

