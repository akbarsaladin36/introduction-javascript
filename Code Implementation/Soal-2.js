//2. Reverse Words

let string = "Saya Belajar Javascript";
let stringSplit = string.split(' ');

function reverseString(str) {
 let currentString = str;
 let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + ' ' + currentString[i];
  }
  return newString;
}
console.log(reverseString(stringSplit));