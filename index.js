var Word = require("./Word.js");
var inquirer = require("inquirer");

var items = ["apple", "ball", "cat","dog" ];
var item = items[Math.floor(Math.random()*items.length)];

console.log(item);

var word = new Word(item);
console.log(word.originalWord());

var numberOfGuessLeft = item.length;

function guessTheWord(){
    if (numberOfGuessLeft > 0){
        inquirer.prompt([
            {
            name:"letter",
            message: "Guess a letter"
            }
        ]).then(function(answers){
            word.guessLetter(answers.letter);
            console.log(word.originalWord());
            numberOfGuessLeft --;
            console.log("Number of Guess left: "+ numberOfGuessLeft);
            guessTheWord()
        });    
    }
}

guessTheWord();