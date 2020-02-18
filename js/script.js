/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

var quotes = [
  {
    quote: "Whatever you cultivate, dominates.",
    person: "Kris Valloton"
  },
  {
    quote: "Your view of reality will always come out of your mouth.",
    person: "Jimmy Evans"
  },
  {
    quote: "Many times what the enemy can't destroy he'll distract.",
    person: "Micheal Todd"
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    person: "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire"
  },
  {
    quote: "He who has a why to live can bear almost any how.",
    person: "Friedrich Nietzsche",
    year: 1900
  }
];
//console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote (array) {
   var ranNum = Math.floor(Math.random() * quotes.length);
   for (var i = 0; i < array.length; i ++) {
    var randomQuote = array[ranNum];
   };
   return randomQuote;
};
var result = getRandomQuote(quotes);
console.log(result);



/***
 * `printQuote` function
***/
function printQuote() {
  var result = getRandomQuote();
    var finalQuote = <p class = 'quote' > quotes.quote + </p>
    <p class = "source" > quotes.source 
    <span class = "citation" > quotes.citation </span>
    <span class = "year" > quotes.year </span>
    </p>;

    if () {
    }

document.getElementById('quote-box').innerHTML = finalQuote;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);