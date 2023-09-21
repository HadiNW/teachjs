function shopTest (tomatoQty, chilliQty, cucumberQty) {
	let tomatoPrice = 15000
	let tomatoPriceBeforeDisc = tomatoQty * tomatoPrice
	let tomatoAfterDisc = tomatoPriceBeforeDisc

	if (tomatoQty > 4) {
		tomatoAfterDisc = tomatoPriceBeforeDisc * (100-15)/100
	}

	let cucumberPrice = 10000
	let cucumberPriceBeforeDisc = cucumberQty * cucumberPrice
	let cucumberAfterDisc = cucumberPriceBeforeDisc

	if (cucumberQty > 2) {
		cucumberAfterDisc = cucumberPriceBeforeDisc * (100-15)/100
	}

	let chilliPrice = 21000
	let chilliPriceBeforeDisc = chilliQty * chilliPrice
	let chilliPriceAfterDisc = chilliPriceBeforeDisc

	if (cucumberQty > 3) {
		chilliPriceAfterDisc = chilliPriceBeforeDisc * (100-15)/100
	}




	



	let totalPayment = chilliPriceAfterDisc + cucumberAfterDisc + tomatoAfterDisc 

	if (tomatoQty + cucumberQty + chilliQty === 2) {
		totalPayment = 0.8*totalPayment
	}

	if (tomatoQty + cucumberQty + chilliQty >=3 ) {
		totalPayment = 0.7*totalPayment
	}



	return totalPayment*0.89
}


module.exports = {
	shopTest
}