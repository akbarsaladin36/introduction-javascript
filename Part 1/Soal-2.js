const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

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
  hasilNilai = 'Tidak diketahui.';
}

console.log(hasilNilai);