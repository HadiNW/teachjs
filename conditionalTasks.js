// Diketahui seorang user membeli timun, cabai dan tomat masing2 seharga. Rp10.000, Rp21.000, Rp15.000. 
// dengan diskon 10% jika membeli 1 barang saja. 
// user akan mendapatkan diskon 20% jika membeli 2 barang. 
// user akan mendapatkan diskon 30% jika membeli 3 barang atau lebih. 
// berapakah uang yg dikeluarkan user jika terdapat PPN 11%

// jika membeli timun lebih dari 2kg akan mendapat diskon 15%
// jika membeli cabai lebih dari 3kg akan mendapat diskon 15%
// jika membeli tomat lebih dari 4kg akan mendapat diskon 15%


// tambahkan `return` pada variable akhir contoh
// function shop (tomatoQty, chilliQty, tomatooQty) {
	// let result = 300
	// .....
	// .....
	// return result
// }


function shop (tomatoQty, chilliQty, tomatooQty) {
	let tomatoPrice = 15000
	let tomatoPriceBeforeDisc = tomatoQty * tomatoPrice
	let tomatoAfterDisc = tomatoPriceBeforeDisc

	if (tomatoQty > 2) {
		tomatoAfterDisc = tomatoPriceBeforeDisc * (100-15)/100
	}

	console.log({tomatoAfterDisc})




	let totalPayment = tomatoAfterDisc 


	return totalPayment
}


function runIt () {
	shop(3,3,4)
}


runIt()