//Posedujemo 2 predmeta. Svaki od njih ima svoju težinu. Takođe znamo koja je maksimalna težina koju možemoda ponesemo sa nama. 
//Proveriti da li možemo da ponesemo oba, samo jedan od njih i to koji ili ni jedan. 
//Takođe se može desiti da ne možemo oba ali da pojedinačno ne prelaze maksimalnu težinu pa možemo da biramo koji ćemo.
//Dakle, ulazni parametri su:
//     var weight1;
//     var weight2;
//     var maxWeight;
//Pravila kojih se držimo i poruke koje vraćamo:
//     zbir težina <= maxWeight : "nosimo oba"
//     težina prvog je > maxWeight i takođe težina drugog > maxWeight : "ne možemo ni jedan da ponesemo"
//     težina prvog je > maxWeight ali težina drugog je <= maxWeight : "možemo drugi"
//     težina prvog je <= maxWeight, a težina drugog je > maxWeight : "možemo prvi"
//     težina prvog je <= maxWeight, a isto tako težina drugog <= maxWeight, međutim njihov zbir je > maxWeight : "možemo da biramo koji ćemo ali ne možemo oba"

function predmetiT(weight1, weight2, maxWeight){
	if (weight1 + weight2 <= maxWeight) {

		console.log('Nosimo oba predmeta');

	} else if (weight1 > maxWeight && weight2 > maxWeight){

		console.log('Ne mozemo ponijeti nijedan predmet');

	} else if (weight1 > maxWeight && weight2 <= maxWeight) {

		console.log('Mozemo ponijeti drugi predmet');

	} else if (weight1 <= maxWeight && weight2 > maxWeight) {

		console.log('Mozemo ponijeti prvi predmet');
	} else{
		console.log('Mozemo da biramo koji cemo ponijeti, ali ne mozemo oba');
	}
}
predmetiT(60, 60, 50);

