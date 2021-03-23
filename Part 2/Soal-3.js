const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

  let array = dataArray;
  for (let i = nilaiAwal; i < nilaiAkhir; i++) {
    array.push(i);
  }
  return array;
}

console.log(seleksiNilai(10,20,[2,4,7,9,10,50]));