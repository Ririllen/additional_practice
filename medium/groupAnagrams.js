// https://leetcode.com/problems/group-anagrams/

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.


function sortWordLetters(word){

    let arrayWord = word.split("");
    arrayWord.sort();

    return arrayWord.join("");
}

function addWord(word, sortedWord, result){
    for (entry of result){
        if (entry[0] === sortedWord){
            entry[1].push(word);
            return ;
        }
    }
    result.push([sortedWord,[word]]);
}

function groupAnagrams(strs){

    let result = [],
        finalResult = [];

    for (const str of strs){
        let sortedWord = sortWordLetters(str);

        addWord(str,sortedWord,result);
    }


    for (const entry of result){
        finalResult.push(entry[1]);
    }
    return finalResult;
}

console.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]