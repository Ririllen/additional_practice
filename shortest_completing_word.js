// https://leetcode.com/problems/shortest-completing-word/

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, 
// and treat letters as case insensitive. If a letter appears 
// more than once in licensePlate, then it must appear in the word the same number of times or more.
// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. 
// Possible completing words are "abccdef", "caaacab", and "cbca".
// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest 
// completing words, return the first one that occurs in words.

 

// Example 1:
// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"

// Example 2:
// Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
// Output: "pest"
// Explanation: licensePlate only contains the letter 's'. 
// All the words contain 's', but among these "pest", "stew", and "show" are shortest. 
// The answer is "pest" because it is the word that appears earliest of the 3.
// "use strict";
// function countLetterOccurance(word,letter){
//     let position = 0, 
//         count = 0;
//         position = word.indexOf(letter);        

//         while (position !== -1){
//             count++;
//             position = word.indexOf(letter,position + 1);
//         }
//     return count;
// }

// function shortestCompletingWord(licensePlate, words){
//     let resultWord   = "",
//         resultLength = 0,
//         occuranceTable = [],
//         flag           = true;

//     licensePlate = licensePlate.toLowerCase();
//     let newLicensePlate = licensePlate;

//     for (const letter of licensePlate){
//         if ( letter !== " " && isNaN(letter)){

//             flag = true;    
//             for (const element of occuranceTable){
//                 if ( element[0] === letter ){
//                     flag = false;
//                     break;    
//                 }
//             }
//             if (flag){
//                 let count = countLetterOccurance(newLicensePlate,letter);
//                 occuranceTable.push([letter,count]);
//             }
//         }
//     }
    

//     let stepOne = true;
//     for (const word of words){
//         flag = true;
//         for (const element of occuranceTable){
//             let count = countLetterOccurance(word,element[0]);
//             if (count !== element[1]){
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag){
//             if (stepOne === true){
//                 stepOne = false;
//                 resultLength = word.length;
//                 resultWord   = word;
//             }

//             if (  word.length < resultWord.length ){
//                 resultWord = word;
//                 resultLength = word.length;
//             }
//         }
//     }
    
//     return resultWord;
// }


// console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]));
// console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]));
// console.log(shortestCompletingWord("1A3 bc6", ["aabc","bc","abcuty","cbaut","cbau"]));
// console.log(shortestCompletingWord("1A3 aa6", ["aabc","bcaaa","aabcuty","cbaaaut","aaau","aaai","aa"]));



/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = (s, words) => {
    let cleared = '', min = Infinity, result = ''
    for (let i = 0; i < s.length; i++) {
       if (s[i] !== " " && isNaN(s[i])){
          cleared += s[i].toLowerCase()
       }
    }
    for (let word of words) {
       let copy = cleared.split('')
       for (let char of word) {
          if (copy.includes(char)) copy.splice(copy.indexOf(char), 1)
          if (copy.length === 0 && word.length < min) {
             min = word.length
             result = word
          }
       }
    }
    return result
 }

 console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]));