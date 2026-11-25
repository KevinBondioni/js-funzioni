// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaMediaPonderata
  Di quali dati ha bisogno? ho bisogno dei vori di scritto ed orale
  Deve restituire qualcosa? deve restituire la media calculata su scritto x 2 e orale
  Di che tipo? numenro

  STEPS
  1 -creo la funzione calcolaMediaPonderata 
  2 -gli passo i voti di scritto ed orale 
  3 -moltiplico lo scritto e lo sommo all'orale
  4 -divido per 3
  5 -ritorno la media con un decimale 

*/

// # La funzione
function calcolaMediaPonderata(votoScritto, votoOrale) {
  media = (votoScritto * 2 + votoOrale) / 3
  return media.toFixed(1)
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(calcolaMediaPonderata(6, 9))
console.log(calcolaMediaPonderata(9, 6))
console.log(calcolaMediaPonderata(8, 6))
console.log(calcolaMediaPonderata(5, 8))
console.log(calcolaMediaPonderata(10, 10))


