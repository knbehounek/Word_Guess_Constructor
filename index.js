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

