// https://www.codewars.com/kata/5264d2b162488dc400000001

// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only 
// when more than one word is present.


// function spinWords(string_toReverse){
//     //TODO Have fun :)  

//     let result = "";
    
//     const myArray = string_toReverse.split(" ");
    

//     myArray.forEach( (element,index) => {
//       if (element.length >= 5) {
        
//         let reverseWord = element.split("");
//         reverseWord = reverseWord.reverse();
//         myArray[index] = reverseWord.join("");
//       }        
//     });
       
//     result = myArray.join(" ");
    
//     return result;
    
//   }


function spinWords(str){
    return str.split(' ')
      .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
      .join(' ');
  }

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));