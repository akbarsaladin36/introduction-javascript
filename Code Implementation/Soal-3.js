function divideAndSort(numbers) {

   const stringNumbers = numbers.toString();
   const arrayofStringsNumber = stringNumbers.split("0");

   const arrayWithSortedNumber = arrayofStringsNumber.map((element) => {

      const eachElement = element;

      const splitElement = [];
      for (const element of eachElement) {
         splitElement.push(element);
      }
      
      const sortSplitElement = splitElement.sort((a, b) => a - b);

      let sortedNumber = '';
      for (const element of sortSplitElement) {
         sortedNumber += element;
      }

      return sortedNumber;
   })

   let printSortedNumber = "";
   for (const element of arrayWithSortedNumber) {
      printSortedNumber += element;
   }

   return parseInt(printSortedNumber);

}

console.log(divideAndSort(5956560159466056));
