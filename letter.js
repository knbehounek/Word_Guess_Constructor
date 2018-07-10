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

module.exports = Letter