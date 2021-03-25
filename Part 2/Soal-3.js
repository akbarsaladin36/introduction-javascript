  const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

    if(nilaiAwal > nilaiAkhir) {
      console.log('Nilai akhir harus lebih besar dari nilai awal.');
    } else if(dataArray.length < 5) {
      console.log('Jumlah angka dalam data array tidak ada.');
    } else {
      let temp = [];
      for(let i in dataArray) {
        if(dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir){
          temp.push(dataArray[i]);
        }
      }
      if(temp.length === 0) {
        return console.log('temp');
      } else {
        temp = temp.sort((a, b) => a - b);
        return console.log(temp);
      }
    }

  }

  seleksiNilai(5,20,[2, 25, 4, 14, 17, 30, 8]);
  seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
  seleksiNilai(5, 17 , [2, 25, 4]);

