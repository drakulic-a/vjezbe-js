//Zadat je niz celih brojeva, zadata je vrednost koja se traži i zadata je vrednost kojom treba zameniti traženu vrednost.

//Primer:

//    var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
//    var trazenaVrednost = 4;
//    var vrednostZaZamenu = 25;

//Napisati kod koji će da uzme te tri stvari u obzir i da vrati NOVI niz:
//    var noviNiz = [7, 25, 52, 10, 25, 5, 12, 1, 3, 6] // Dakle, sve 4 su zamenjene sa 25


//Takođe, pokušati napisati funkciju za taj problem.
//Krajnja vrednost koja se vraća treba da bude novi niz.
//Funkcija treba da ima 3 parametra: ulazni niz, tražena vrednost, vrednost za zamenu


function zamena(niz, a, b){

	var noviNiz=[];
	for (var i = 0; i < niz.length; i++) {
		
		if (niz[i] === a) {
			noviNiz[i]=b;
	
		}else{
			noviNiz[i]=niz[i];
		}
		
	}
	
	console.log(noviNiz);

}

zamena([7, 4, 52, 10, 4, 5, 12, 1, 3, 6],4,25)