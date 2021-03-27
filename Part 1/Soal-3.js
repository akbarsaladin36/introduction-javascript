const printSegitiga = 4;

if(typeof printSegitiga === "number") {
	for (let i = printSegitiga; i >= 1; i--) {
		let tmp = '';
	
		for (let j = 1; j <= i; j++) {
			tmp += j;
		}
		console.log(tmp);
	}
} else {
	console.log('Data harus Number');
}

