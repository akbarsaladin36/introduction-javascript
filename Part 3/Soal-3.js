  //Program 1
  const cariHuruf = (huruf) => {
    return new Promise((resolve, reject) => {
      const kata2 = ['Andi', 'Husein', 'Twitch', 'Grey'];
      let cekHuruf = kata2.filter((str) => {
        return str.toLowerCase().includes(huruf);
      })
      const batas = kata2.slice(0);
      if(cekHuruf){
        resolve(cekHuruf);
      } else {
        reject('Huruf yang anda masukkan salah.');
      }
    })
  }

  cariHuruf('n')
  .then((hasil) => {
    console.log(hasil);
  })
  .catch((error) => {
    console.log(error);
  })

  
  //Program 2
  const urutAngka = (array) => {
    return new Promise((resolve, reject) => {
      const eksekusiArray = array.sort((a, b) => {
        return a - b;
      })
      if(eksekusiArray) {
        resolve(eksekusiArray);
      } else {
        reject('Harus ada array yang akan diurutkan.');
      }
    })
  }

  urutAngka([5,6,9,12,4])
  .then((hasil2) => {
    console.log(hasil2);
  })
  .catch((error) => {
    console.log(error);
  })