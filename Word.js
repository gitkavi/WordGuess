var Letter = require("./Letter.js")

var Word = function (currentWord) {
    this.letterArray = [];
    for (var i = 0; i < currentWord.length; i++) {
        var char = new Letter(currentWord.charAt(i));
        this.letterArray.push(char);
    }
    var wordToGuess = "";

    this.originalWord = function () {
        console.log("WordToGuess as we enter the function"+wordToGuess);
        if(wordToGuess === ""){
            for (var i = 0; i < this.letterArray.length; i++) {
                wordToGuess += this.letterArray[i].charReplace();
            }
            return wordToGuess;
        }
        else{
            for (var i = 0; i < this.letterArray.length; i++) {
                console.log(this.letterArray[i].charReplace());
                if(this.letterArray[i].charReplace() != "_ "){
                    wordToGuess = wordToGuess[i].replace("_ ", this.letterArray[i].charReplace())
                }
            }
            return wordToGuess;
        }
    }

    this.guessLetter = function (char) {
        console.log("Inside the guessLetter");
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkGuess(char)
        }

    }
}

// var word = new Word("apple");
// console.log(word.originalWord());
// console.log("Guessing p");
// word.guessLetter("p");
// console.log(word.originalWord());
// console.log("Guessing a");
// word.guessLetter("a");
// console.log(word.originalWord());
// console.log("Guessing l");
// word.guessLetter("l");
// console.log(word.originalWord());

module.exports = Word;