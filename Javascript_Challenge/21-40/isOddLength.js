// Write a function called "isOddLength".

// Given a word, "isOddLength" returns whether the length of the given word is odd.

// var output = isOddLength('special');
// console.log(output); // --> true

function isOddLength(word) {
    // your code here
    if (word.length % 2 === 1) return true
    else return false
}