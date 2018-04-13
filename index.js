var Word = require("./Word.js");
var inquirer = require("inquirer");

var items = ["apple", "ball", "cat","dog", "jurrasic park" ];
var item = items[Math.floor(Math.random()*items.length)];

var word = new Word(items[4]);
console.log(word.originalWord());

var numberOfGuessLeft = items[4].length+3;

function guessTheWord(){
    if (numberOfGuessLeft > 0){
        inquirer.prompt([
            {
            name:"letter",
            message: "Guess a letter"
            }
        ]).then(function(answers){
            word.guessLetter(answers.letter)
            console.log(word.originalWord());
            numberOfGuessLeft --;
            if(numberOfGuessLeft >= 0 && items[4] === word.originalWord().trim()){

                return console.log("\n----------------------------\n \nCONGRATULATIONS!!\n \n----------------------------\n");
            }
            else{
                console.log("Number of Guess left: "+ numberOfGuessLeft);
                guessTheWord()
            }
        });    
    }
    if (numberOfGuessLeft == 0 &&  items[4] != word.originalWord()){
        console.log("\n----------------------------\n \nThe Original word is '"+items[4] +"'\n \n----------------------------\n");
    }
}

guessTheWord();
