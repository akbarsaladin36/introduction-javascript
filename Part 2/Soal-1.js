//Soal No.1

//1) ToFixed() = berfungsi untuk mengubah angka menjadi desimal. Contoh:

let number1 = 25;
console.log(number1.toFixed(2));

//2) match() = berfungsi untuk mendapatkan kecocokan string dengan regular expression. Contoh:

let str = "For more information, see Chapter 3.4.5.1";
let re = /(chapter \d+(\.\d)*)/i;
let found = str.match( re );  
console.log(found);

//3) length = berfungsi untuk mengukur panjang dari sebuah value bisa berupa array, number, atau string. Contoh:

let str1 = new String( "This is string" );
console.log(str1.length); 

//4) search() = berfungsi untuk mengeksekusi antara regular expression dengan string objek. Contoh:

let re1 = /apples/gi;
let str2 = "Apples are round, and apples are juicy.";
       
       if (str2.search(re1) == -1 ) {
          console.log("Does not contain Apples" );
       } else {
          console.log("Contains Apples" );
       }

//5) concat() = berfungsi untuk menggabungkan satu string dengan string yang lain dan menghasilkan satu string. Contoh:

let oldString = new String( "This is string one" );
let oldString2 = new String( "This is string two" );
let str3 = oldString.concat( oldString2 );      
console.log("Concatenated String :" + str3); 

//6) slice() = berfungsi untuk mengekstrak bagian dari string dan mengembalikan string baru. Contoh:

let oldString4 = "Apples are round, and apples are juicy.";
let sliced = oldString4.slice(3, -2);         
console.log( sliced );

//7) indexOf() = berfungsi untuk  mengembalikan indeks dalam string pemanggil dengan nilai yang ditentukan, memulai pencarian dalam indeks atau -1 jika nilainya tidak ditemukan.. Contoh:

let oldString5 = new String( "This is string one" );
let index = oldString5.indexOf( "string" );
console.log("indexOf found String :" + index ); 

//8) replace() = berfungsi untuk menemukan kecocokan antara ekspresi reguler dan string, dan mengganti substring yang cocok dengan substring baru. Contoh:

let re2 = /apples/gi;
let oldString6 = "Apples are round, and apples are juicy.";
let newstr = oldString6.replace(re2, "oranges");        
console.log(newstr ); 

//9) substr() = berfungsi untuk mengembalikan karakter dalam string yang dimulai di lokasi yang ditentukan melalui jumlah karakter yang ditentukan. Contoh:

let oldString7 = "Apples are round, and apples are juicy.";         
console.log("(1,2): "    + oldString7.substr(1,2));

//10) toUpperCase( ) = berfungsi untuk mengubah huruf pada string menjadi huruf besar. Contoh:

let oldString8 = "Apples are round, and Apples are Juicy.";
console.log(oldString8.toUpperCase( ));

