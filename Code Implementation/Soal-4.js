function divideAndSort(numbers) {

   const division = numbers.toString().split(0);

   for (let num in division) {
      if (division[num] == "") {
         division.splice(num, 1);
      } else {
         division[num] = division[num].split("").sort().join().replace(/,/g, "");
      }
   }

   return division.join().replace(/,/g, "");
}

console.log(divideAndSort(5956560159466056));
