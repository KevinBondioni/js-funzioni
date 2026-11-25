// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaGiudizio
  Di quali dati ha bisogno? dei voti
  Deve restituire qualcosa? la valutazione
  Di che tipo? stringa

  STEPS
  
  1 -creo una funzione chiamata trovaGiudizio
  2 -chiedo all'utente il voto 
  3 -se il voto è minore di 1 o maggiore di 10: Voto non valido
  3 -Gravemente insufficiente sotto il 5; 
  4 -Insufficiente da 5 a sotto il 6;
  5 -Sufficiente da 6 a sotto il 7;
  6 -Buono da 7 a sotto l'8;
  7 -Ottimo da 8 in su.
  8 -restituisco il giudizio
*/

// # La funzione
function trovagiudizio(voto) {

  if (voto < 1 || voto > 10) {
    return "Voto non valido"
  }
  else if (voto < 5) {
    return "Gravemente insufficiente"
  }
  else if (voto < 6) {
    return "Insufficiente"
  }
  else if (voto < 7) {
    return "Sufficiente"
  }
  else if (voto < 8) {
    return "Buono"
  }
  else if (voto => 8) {
    return "Ottimo"
  }
}

function calcolaMediaPonderata(votoScritto, votoOrale) {
  media = (votoScritto * 2 + votoOrale) / 3
  return media.toFixed(1)
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovagiudizio(3))
console.log(trovagiudizio(5))
console.log(trovagiudizio(5.5))
console.log(trovagiudizio(6))
console.log(trovagiudizio(7.5))
console.log(trovagiudizio(8))
console.log(trovagiudizio(10))
console.log(trovagiudizio(0))
console.log(trovagiudizio(11))

console.log(trovagiudizio(calcolaMediaPonderata(6, 9)))
