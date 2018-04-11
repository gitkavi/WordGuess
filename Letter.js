var Letter = function(char){
    this.char = char;
    var guessed = false;

    this.charReplace = function(){
        if(guessed){
            return this.char+" ";
        }
        else{
            return "_ ";
        }

    }

    this.checkGuess = function(char){
        if(char === this.char){
            guessed = true;
        }
        else{
            guessed = false;
        }
    }
}

// var letter = new Letter("a");
// letter.checkGuess("a");
// console.log(letter.charReplace());
// letter.checkGuess("b");
// console.log(letter.charReplace());

module.exports = Letter;