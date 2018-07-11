var Letter = function(letterCharacter) {
	
	this.letterCharacter = letterCharacter.toUpperCase();
	this.letterGuessedCorrectly = false;
	this.showCharacter = function() {
		if (this.letterGuessedCorrectly) {
			console.log(this.letterCharacter);
		}
		else {
			console.log ("_");
		}

	}
}


// var letterCharacter = new Letter ("a");
// letterCharacter.showCharacter();

module.exports = Letter