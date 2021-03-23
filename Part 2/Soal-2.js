  // Soal No.2

  const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", 
  "Carolyn", "Deindre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

  function searchName(keyword, limit, callback) {

    let slice = name.slice(1, limit);

    return slice.filter(function(el) {
      return el.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });

    function printName(result) {
      console.log(result);
    }

  }

  console.log(searchName('an', 5));