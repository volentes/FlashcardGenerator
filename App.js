var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var firstPresident = BasicCard(
  "Who was the first president of the United States?", "George Washington"
);

//Question
console.log(firstPresident.front);

//Answer
console.log(firstPresident.back);

var firstPresidentCloze = ClozeCard(
  "George Washington was the first president of the United States", "George Washington");

//Logs the answer
console.log(firstPresidentCloze.cloze);

//Cloze Partial
console.log(firstPresidentCloze.partial);

//Normal Answer
console.log(firstPresidentCloze.fullText);

//Catches an error
var brokenCloze = ClozeCard("This doesn't work", "oops");
