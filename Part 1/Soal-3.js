let printSegitiga = 5;

for (let i = printSegitiga; i >= 1; i--) {
	let tmp = '';

	for (let j = 1; j <= i; j++) {
		tmp += j;
	}
	console.log(tmp);
}