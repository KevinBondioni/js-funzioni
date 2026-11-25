// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaFasciaEta
  Di quali dati ha bisogno? dell'età 
  Deve restituire qualcosa? un etichetta 
  Di che tipo? stringa 

  STEPS
  1 - creo una funzione che ha come input l'eta dell utente 
  2 - Un'età negativa restituisce Età non valida
  3 - restituisce Minorenne sotto i 18 anni, 
  4 - Giovane Adulto da 18 a 35, 
  5 - Adulto da 36 a 60, 
  6 - Senior oltre i 60. 
  7 - restituisco l'etichetta
*/

// # La funzione

function trovaFasciaEta(età) {
  if (età < 0) {
    return "Età non valida"
  }
  else if (età < 18) {
    return "Minorenne"
  }
  else if (età < 36) {
    return "Giovane adulto"
  }
  else if (età < 61) {
    return "Adulto"
  }
  else {
    return "Senior"
  }
}



// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaFasciaEta(0))
console.log(trovaFasciaEta(17))
console.log(trovaFasciaEta(18))
console.log(trovaFasciaEta(35))
console.log(trovaFasciaEta(36))
console.log(trovaFasciaEta(60))
console.log(trovaFasciaEta(61))
console.log(trovaFasciaEta(-3))
