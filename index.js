var Word = require("./word.js");

var inquirer = require("inquirer");

var userGuessedCorrectly = false;

var chooserandomWord;
var someotherWord;

var gamesWon = 0;
var gamesLost = 0;
var remainingChances = 10;

var userschoice = "";

var underscoresFilled = 0;

var wordList = [
    "dragon",
    "wizard",
    "witch",
    "faries",
    "knights",
    "dungeon",
    "werewolves",
    "vampires",
    "unicorn",
    "drow",
    "dwarves",
    "elves"
]

function tostartGame() {
    var wanttoStart = [
        {
            type: "text",
            name: "username",
            message: "Please enter your username."
        },

        {
            type: "confirm",
            name: "TimetoPlay",
            message: "Are you ready?.",
            default: true

        }
    ];
    inquirer.prompt(wanttoStart).then(answers => {
        if (answers.TimetoPlay) {
            console.log("Welcome, " + answers.username + ". Let us start...");
            gameStart();
        }

        else {
            console.log("Thanks, " + answers.username + "! Please come back.");
            return;
        }
    });

}

function gameStart() {
    remainingChances = 10;
    getRandomWord();
    lettersAlreadyGuessedList = "";
    lettersAlreadyGuessedListArray = [];
}

function getRandomWord() {
    chooserandomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    someotherWord = new Word(chooserandomWord);
    console.log("The word has " + chooserandomWord.length + " letters.");
    console.log("WORD TO GUESS:");
    someotherWord.wordSplitter();
    someotherWord.letterCreation();
    letterGuess();
}

function letterGuess() {
    if (underscoresFilled < someotherWord.letters.length || remainingChances > 0) {
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter:",
            }
        ]).then(function (theGuess) {
            theGuess.letter.toUpperCase();
            console.log("You guessed the letter: " + theGuess.letter.toUpperCase());
            userGuessedCorrectly = false;
            if (lettersAlreadyGuessedListArray.indexOf(theGuess.letter.toUpperCase()) > -1) {
                console.log("That letter has already been guessed. Please try another.");
                letterGuess();
            } else if (lettersAlreadyGuessedListArray.indexOf(theGuess.letter.toUpperCase()) === -1) {
                lettersAlreadyGuessedList = lettersAlreadyGuessedList.concat(" " + theGuess.letter.toUpperCase());
                lettersAlreadyGuessedListArray.push(theGuess.letter.toUpperCase());
                console.log('Letters already guessed:' + lettersAlreadyGuessedList) 
                for (i = 0; i < someotherWord.letters.length; i++) {
                    if (theGuess.letter.toUpperCase() === someotherWord.letters[i].character && someotherWord.letters[i].letterGuessedCorrectly === false) {
                        someotherWord.letters[i].letterGuessedCorrectly === true;
                        userGuessedCorrectly = true;
                        someotherWord.underscores[i] = theGuess.letter.toUpperCase();
                        underscoresFilled++
                    }
                }
                console.log("THE WORD TO GUESS IS:");
                someotherWord.wordSplitter();
                someotherWord.letterCreation();

                if (userGuessedCorrectly) {
                    console.log('CORRECT!');
                    userWon();
                }
                else {
                    console.log('INCORRECT!');
                    remainingChances--;
                    console.log("You have " + remainingChances + " remaining chances.");
                    userWon();
                }
            }
        });
    }
}

function userWon() {
	if (remainingChances === 0) {
		console.log('YOU LOSE.');
		console.log("The correct word was: " + chooserandomWord);
		gamesLost++;
		console.log("Wins: " + gamesWon);
		console.log("Losses: " + gamesLost);
		playAgain();
    }
    else if (underscoresFilled === someotherWord.letters.length) {
		console.log(correct("YOU WON!"));
		gamesWon;
		console.log("Wins: " + gamesWon);
		console.log("Losses: " + gamesLost);
		playAgain();
    }
    else {
		letterGuess("");
	}
}

function playAgain() {
	var GameAgain = [
	 {
	    type: 'confirm',
	    name: 'tryAgain',
	    message: 'Do you want to try the game again?',
	    default: true
	  }
	];

	inquirer.prompt(GameAgain).then(userWantsTo => {
		if (userWantsTo.tryAgain){
			lettersAlreadyGuessedList = "";
			lettersAlreadyGuessedListArray = [];
			underscoresFilled= 0;
			console.log("Welcome back.");
			gameStart();
		}

		else {
			console.log("Good bye! Come back soon.");
			return;
		}
	});
}
tostartGame();