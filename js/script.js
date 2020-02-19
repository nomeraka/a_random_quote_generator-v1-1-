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
    source: "Kris Valloton"
  },
  {
    quote: "Your view of reality will always come out of your mouth.",
    source: "Jimmy Evans"
  },
  {
    quote: "Many times what the enemy can't destroy he'll distract.",
    source: "Micheal Todd"
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire"
  },
  {
    quote: "He who has a why to live can bear almost any how.",
    source: "Friedrich Nietzsche",
    year: 1900
  }
];
//console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote (array) {
   var ranNum = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[ranNum];
   return randomQuote;
};
var result = getRandomQuote(quotes);
//console.log(result);



/***
 * `printQuote` function
***/
function printQuote() {
  var result = getRandomQuote();
    var htmlString = '<p class = "quote" >' + result.quote + '</p>';
    htmlString += '<p class = "source" >' + result.source ;
    
    
    if (result.citation) {
      htmlString += '< span class = "citation" >' + result.citation + '</span>';
    } if (result.year) {
      htmlString += '<span class = "year" >' + result.year + '</span>';
    }
'</p>'
document.getElementById('quote-box').innerHTML = htmlString;

};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);