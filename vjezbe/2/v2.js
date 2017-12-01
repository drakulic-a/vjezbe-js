//Vezba 2

//Kao ulazna vrednost zadat je niz celih brojeva. Proveriti da li u tom nizu postoje bar 2 ista elementa.
//Ukoliko postoje bar 2 ista elementa vratiti true vrednost, u suprotnom false.
//Primeri:
//  var niz = [3, 6, 7, 8]; // false
//  var niz = [1, 3, 1, 5]; // true


function nizBrojeva(niz){

	for (var i = 0; i < niz.length; i++) {
		
		for (var j=niz[i]; j<niz.length; j++) {
			if (niz[j]===niz[i]) {

			return true;
			
		}else{
			return false;
	
		}
		}
		console.log(a);
	}
	
}

nizBrojeva([3,8,6,3,6]);