function arkFood(harga, voucher, jarak, pajak) {
  console.log('Harga: ' + harga);
  console.log('Potongan: ' + hitungVoucher(harga, voucher));
  console.log('Biaya Antar: ' + hitungJarak(jarak));
  console.log('Pajak: ' + hitungPajak(harga, pajak));
  console.log(harga - hitungVoucher(harga, voucher) + hitungJarak(jarak) + hitungPajak(harga, pajak));
}

function hitungVoucher(harga, voucher) {
  if (voucher = 'ARKAFOOD5' && harga >= 50000) {
    return voucher = 50 / 100 * harga;
  } else if (voucher = 'DITRAKTIRDEMY' && harga >= 23000) {
    return voucher = 60 / 100 * harga;
  } else {
    return false;
  }
}

function hitungPajak(harga, pajak) {
  if (harga) {
    return pajak = 5 / 100 * harga;
  } else {
    return false;
  }
}

function hitungJarak(jarak) {
  if (jarak >= 2) {
    jarak1 = 5000;
    jarak2 = jarak * 3000;
    return totalJarak = jarak1 + jarak2
  } else {
    return jarak = 5000;
  }
}


arkFood(75000, 'ARKAFOODS', 3, true);

