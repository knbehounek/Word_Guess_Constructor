var Letter = require("./letter.js");

var Word = function(word){

    this.word = word;
    this.letters = [];
    this.underscores = [];

    this.wordSplitter = function() {
        this.letters = this.word.split("");
        underscoresRequired = this.letters.length;
        console.log(this.underscores.join(" "));
    }
    
    this.letterCreation = function() {
		for (i=0; i < this.letters.length; i++){
			this.letters[i] = new Letter (this.letters[i]);
			this.letters[i].showLetter();
		}
	}
}

// // //Test for Word
// var testWord = new Word ("Dragon");
// testWord.wordSplitter();
// testWord.letterCreation();

module.exports = Word;