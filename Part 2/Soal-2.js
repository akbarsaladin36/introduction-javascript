  // Soal No.2

  const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", 
  "Carolyn", "Deindre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

  function searchName(keyword, limit, callback) {

    let execute = name.filter(function(el) {
      return el.toLowerCase().includes(keyword);
  });
    let sliceExecute = execute.slice(0, limit);
    callback(sliceExecute);
  }

  function output(hasil) {
    console.log(hasil);
  }

  console.log(searchName('an', 3, output));