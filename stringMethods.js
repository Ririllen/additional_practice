// const anyString = "Mozilla";

// console.log(anyString.substring(0, 1)); // 'M'
// console.log(anyString.substring(1, 0)); // 'M'

// console.log(anyString.substring(0, 6)); // 'Mozill'

// console.log(anyString.substring(4)); // 'lla'
// console.log(anyString.substring(4, 7)); // 'lla'
// console.log(anyString.substring(7, 4)); // 'lla'

// console.log(anyString.substring(0, 7)); // 'Mozilla'
// console.log(anyString.substring(0, 10)); // 'Mozilla'


// const text = "Mozilla";

// // Takes 4 last characters of string
// console.log(text.substring(text.length - 4)); // prints "illa"

// // Takes 5 last characters of string
// console.log(text.substring(text.length - 5)); // prints "zilla"



const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e");

while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 4