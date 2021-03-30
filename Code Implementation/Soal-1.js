//1. Deteksi Palindrome

function checkPalindrome(str) {
  let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  let len = str.length;
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
         return console.log('Bukan Palindrome');
     }
   }
   return console.log('Palindrome');
}
  
checkPalindrome("Malam");
  
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
  