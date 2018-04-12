var Letter = function(char){
    this.char = char;
    var guessed = false;

    this.charReplace = function(){
        if(guessed){
            return this.char;
        }
        else{
            return "_ ";
        }

    }

    this.checkGuess = function(char){
        if(char === this.char){
            guessed = true;
        }
    }
}

module.exports = Letter;