// https://leetcode.com/problems/unique-morse-code-words/

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes,
//  as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call
//  such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

// Example 1:
// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

// Example 2:
// Input: words = ["a"]
// Output: 1

// var alphabet = [...Array(26)]; 
// // console.log(alphabet);
// // console.log(JSON.stringify(alphabet));
// const convertedAlph = alphabet.map((_, i) => String.fromCharCode(i+97));
// console.log(convertedAlph);


let morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

// To do: inspect .map() function
function generateAlphabet(capital) {
	return [...Array(26)].map(( _ , i ) => String.fromCharCode(i + (capital ? 65 : 97)));
}

function uniqueMorseCode(words){
    let count = 0;
    let alphabet = generateAlphabet(false);
    let morseWord = "";
    let morseWordArray = [];

    for (const word of words){
        for (const letter of word){
            let index = alphabet.indexOf(letter);
            morseWord += morseAlphabet[index];
        }

        if (morseWordArray.includes(morseWord) === false){
            morseWordArray.push(morseWord);
        }    
        morseWord = "";
    }

    return morseWordArray.length;
}

// console.log(uniqueMorseCode(["gin","zen","gig","msg"]));
console.log(uniqueMorseCode(["gin","zen","gig","msg"]));

console.log(uniqueMorseCode(["a"]));

// var newAlphabet = alphabet.map(x => 5 );
// console.log(newAlphabet);


// const names = ['Ram', 'Shyam', 'Laxman', [
//     'Jay', 'Jessica', [
//        'Vikram'
//     ]
//  ]];
//  const includesMultiDimension = (arr, str) => JSON.stringify(arr).includes(str);
//  console.log(includesMultiDimension(names, 'Vikram'));

 