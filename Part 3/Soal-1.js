  const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
        let cek = dataDay.find((item) => {
          return item === day;
        })
        if(cek){
          resolve(cek);
        }else{
          reject(new Error('Hari ini bukan hari kerja'));
        }
      }, 3000)
    })
  }

  //Penggunaan .then() dan .catch()
  cekHariKerja('senin')
  .then((result)=> {
    console.log(result);
  })
  .catch((error)=> {
    console.log(error);
  })
  //Penggunaan .then() dan .catch() pada soal ini bertujuan untuk menampilkan hasil dari promise pada function cekHariKerja() melalui terminal.

  //Penggunaan try dan catch
  const cekHariKerja2 = async () => {
    try {
      let result = await cekHariKerja('selasa');
      console.log(result);
    } catch(error) {
      console.log(error);
    }
  }
   
  cekHariKerja2();

  //Penggunaan try dan catch pada soal ini bertujuan untuk menampilkan hasil dari promise dengan cara membuat function baru dengan nama cekHariKerja2 kemudian melakukan async pada invoke dan await pada function cekHariKerja() dalam try dan catch.
