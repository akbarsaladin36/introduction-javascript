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
  

  