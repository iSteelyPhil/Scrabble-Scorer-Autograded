// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `\nPoints for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
/////
let scrabbleScorer = function(word){
   word = word.toLowerCase();
   let letterPoints = "";
   let score = 0;
 
   for (let i = 0; i < word.length; i++) {
     score += newPointStructure[word[i]];
     letterPoints += `Points for '${word[i]}': ${newPointStructure[word[i]]}\n`;
   }
   console.log(letterPoints);
   return score;
 }
 
/////
function simpleScore(word){
   let score = 0;
   let stringAplhabet = "abcdefghijklmnopqrstuvwxyz"
   word = word.toUpperCase();
   for (let i = 0; i < word.length; i++) {
      if (stringAplhabet.toUpperCase().includes(word[i])) {
         score++;
      }
  }
  return score;
}
/////
function vowelBonusScore(word){
   let score = 0;
   let stringAplhabet = "abcdefghijklmnopqrstuvwxyz";
   let stringVowels = "aeiouy";
   word = word.toUpperCase();
   for (let i = 0; i < word.length; i++) {
      if (stringVowels.toUpperCase().includes(word[i])) {
        score += 3;
      } else if (stringAplhabet.toUpperCase().includes(word[i])) {
         score++;
  }
}
  return score;
}

/////
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble!\nEnter a word to score: ")
   /* console.log(oldScrabbleScorer(word)); */
   return word;
};


let simpleScorer = function(word){
   let score = 0;
   let stringAplhabet = "abcdefghijklmnopqrstuvwxyz"
   word = word.toUpperCase();
   for (let i = 0; i < word.length; i++) {
      if (stringAplhabet.toUpperCase().includes(word[i])) {
         score++;
      }
  }
  return score;
;}


let vowelBonusScorer = function(word){
   let score = 0;
   let stringAplhabet = "abcdefghijklmnopqrstuvwxyz";
   let stringVowels = "aeiouy";
   word = word.toUpperCase();
   for (let i = 0; i < word.length; i++) {
      if (stringVowels.toUpperCase().includes(word[i])) {
      score += 3;
      } else if (stringAplhabet.toUpperCase().includes(word[i])) {
         score++;
   }
   }
   return score;
   }




const scoringAlgorithms = [
   {
   Name: "Simple Scorer",
   Description: "Each letter is worth 1 point.",
   scorerFunction: simpleScore
}, {
   Name: "Bonus Vowels",
   Description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScore
   
}, {
   Name: "Scrabble",
   Description: "The traditional scoring algorithm",
   scorerFunction: scrabbleScorer
   } 
];

function scorerPrompt(word) {
   console.log("Which scoring algorithm would you like to use?");
   console.log("\n");
   console.log("0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system");
   let choice = Number(input.question("Enter 0, 1, or 2: "));
   scoreSystem = scoringAlgorithms[choice];
   return console.log(`Score for ${word} : ${scoreSystem.scorerFunction(word)}`)
};

function transform(oldPointStructure) {
   let newObj = {};
  
   for (let item in oldPointStructure) {
     for (let i = 0; i < oldPointStructure[item].length; i++) {
       newObj[oldPointStructure[item][i].toLowerCase()] = Number(item);
     }
   }
   return newObj;
 };

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word);
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
