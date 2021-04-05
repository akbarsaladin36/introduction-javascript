function divideAndSort(numbers) {

   const division = numbers.toString().split(0);

   for (let element in division) {
      if (division[element] == "") {
         division.splice(element, 1);
      } else {
         division[element] = division[element].split("").sort().join().replace(/,/g, "");
      }
   }

   return division.join().replace(/,/g, "");
}

console.log(divideAndSort(5956560159466056));
