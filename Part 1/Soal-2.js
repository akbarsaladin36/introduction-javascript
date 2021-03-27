    const mtk = 75;
    const bahasaIndonesia = 75;
    const bahasaInggris = 76;
    const ipa = 79;

    const total = mtk + bahasaIndonesia + bahasaInggris + ipa; 

    const nilaiRata2 = total / 4;

    console.log(nilaiRata2);

  if(nilaiRata2 >= 90) {
    hasilNilai = 'Siswa mendapat nilai A';
  } else if (nilaiRata2 >= 80) {
    hasilNilai = 'Siswa mendapat nilai B';
  } else if (nilaiRata2 >= 70) {
    hasilNilai = 'Siswa mendapat nilai C';
  } else if (nilaiRata2 >= 60) {
    hasilNilai = 'Siswa mendapat nilai D';
  } else if (nilaiRata2 >= 0) {
    hasilNilai = 'Siswa mendapat nilai E';
  } else {
    hasilNilai = 'Nilai setiap mata pelajaran harus diisi.';
  }

console.log(hasilNilai);