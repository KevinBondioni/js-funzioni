// Traccia 10 · Il taxi di notte
// La consegna è nel README, alla voce "10 · Il taxi di notte".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? verificaOraNotturna
  Di quali dati ha bisogno? un ora
  Deve restituire qualcosa? vero o falso 
  Di che tipo? booleano

  Come si chiama? calcolaTotaleCorsa
  Di quali dati ha bisogno? prezzo base, ora di partenza ora di arrivo 
  Deve restituire qualcosa? il costo totale
  Di che tipo? numero 

  STEPS
  1 - creo la funzione verificaOraNotturna con imput 2 ore (partenza e arrivo)
  2 - verifico se gli orari sono tra le 0 e le 5 
  3 - se si restituisco true altrimenti restituisco false
  4 - creo la funzione calcolaTotaleCorsa con imput prezzo base, partenza e arrivo
  5 - se verificaOraNotturna = true aggiungo 5€
  6 - ritorno il totale 
*/

// # Le funzioni

function verificaOraNotturna(oraPartenza, oraArrivo) {
  if (oraPartenza < 6 || oraArrivo < 6) {
    return true
  }
  else {
    return false
  }
}

function calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo) {
  const notte = verificaOraNotturna(oraPartenza, oraArrivo)

  if (notte) {
    prezzoBase += 5
  }
  return prezzoBase
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(calcolaTotaleCorsa(20, 22, 23))
console.log(calcolaTotaleCorsa(20, 23, 1))
console.log(calcolaTotaleCorsa(20, 23, 0))
console.log(calcolaTotaleCorsa(20, 2, 3))
console.log(calcolaTotaleCorsa(20, 5, 6))
console.log(calcolaTotaleCorsa(20, 6, 7))
