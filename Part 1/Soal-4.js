// Bagian A
  let newName = {
    name: 'Muhammad Akbar Saladin Siregar'
  };
  
  let newEmail = {
    email: 'asong36@gmail.com'
  };
  
  let newHobby = {
    hobby: 'Main laptop, baca buku'
  };
  
  let data = {
    id: 1,
    ...newName,
    username: "Bret",
    ...newEmail,
    ...newHobby,
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  
  console.log(data);
  
  // bagian B
  let { street, city } = data.address;
  console.log(street);
  console.log(city);