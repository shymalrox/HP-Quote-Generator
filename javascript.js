const button = document.getElementById("button");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

const quotes = [
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        author: "- Albus Dumbledore"
    },
    {
        quote: "Never trust anything that can think for itself if you can't see where it keeps its brain!",
        author: "- Arthur Weasley"
    },
    {
        quote: "I am what I am, an' I'm not ashamed. 'Never be ashamed' my ol' dad used ter say, 'there's some who'll hold it agaist you, but they're not worth botherin' with.",
        author: "- Rubeus Hagrid"
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "- Sirius Black"
    },
    {
        quote: "What's comin' will come, an' we'll meet it when it does.",
        author: "- Rubeus Hagrid"
    },
    {
        quote: "We are only as strong as we are united, as weak as we are divided.",
        author: "- Albus Dumbledore"
    },
    {
        quote: "Indifference and neglect often do much more damage than outright dislike",
        author: "- Albus Dumbledore"
    },
    {
        quote: "Anything's possible if you've got enough nerve.",
        author: "- Ginny Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "- Kingsley Shacklebolt"
    },
    {
        quote: "It is impossible to manufacture or imitate love.",
        author: "- Horace Slughorn"
    },
    {
        quote: "You're just as sane as I am.",
        author: "- Luna Lovegood"
    },
    {
        quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        author: "- Albus Dumbledore"
    }
]

button.addEventListener("click", function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  
    if (quoteDiv.innerText !== randomQuote.quote) {
      quoteDiv.innerText = randomQuote.quote;
      authorDiv.innerText = randomQuote.author;
    } else {
      randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      quoteDiv.innerText = randomQuote.quote;
      authorDiv.innerText = randomQuote.author;
    }
  });