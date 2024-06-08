/*
    CIT 281 Project 2
    Name: Jake McIntosh
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  
// Returns a random letter
function getRandomLetter() {
    return alphabet[getRandomInteger(1, alphabet.length - 1)];
}

// Returns string of random letters at random length
function getRandomString(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }

    return result;
}

// Returns a sorted string
function getSortedString(string) {
    return string.split("").sort().join("");
}

  
  console.log(getSortedString(getRandomString(10, 20)));