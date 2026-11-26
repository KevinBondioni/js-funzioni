// Traccia 09 · Quanto manca alla pensione
// La consegna è nel README, alla voce "09 · Quanto manca alla pensione".

/*
 
LE QUATTRO DOMANDE (una risposta per ogni funzione)

  Come si chiama? calcolaAnniAllaPensione
  Di quali dati ha bisogno? riceve l'anno di nascita, l'anno corrente e il tipo di lavoro
  Deve restituire qualcosa? restituisce gli anni che mancano alla pensione
  Di che tipo? numero intero
   
  Come si chiama? trovaEtaPensione
  Di quali dati ha bisogno? del tipo di lavoro 
  Deve restituire qualcosa? l'età per la pensione
  Di che tipo? numero intero

  STEPS
  1 - creo la funzione trovaEtaPensione che ha come input tipo di lavoro
  2 - se urusante restituisce 62 altrimenti 67
  3 - creo la funzione calcolaAnniAllaPensione che ha come input l'anno di nascita, l'anno corrente e il tipo di lavoro
  4 - all'interno metto la funzione trovaEtaPensione che ci dice l'eta per la pension
  5 - sommo all anni di nascita l'età per la pensione 
  6 - sottraggo all anno attuale il risultato precedente cosi da avere gli anni mancanti 
  7 - se l'età della pensione e passata restituisco 0 
*/

// # Le funzioni

function trovaEtaPensione(tipoLavoro) {
  if (tipoLavoro === "usurante") {
    return 62
  }
  else {
    return 67
  }
}

function calcolaAnniAllaPensione(nascita, annoCorrente, tipoLavoro) {
  const etaPensione = trovaEtaPensione(tipoLavoro)
  const anniResidui = nascita + etaPensione - annoCorrente
  if (anniResidui > 0) {
    return anniResidui
  }
  else {
    return 0
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(calcolaAnniAllaPensione(2000, 2026, 'ordinario'))
console.log(calcolaAnniAllaPensione(2000, 2026, 'usurante'))
console.log(calcolaAnniAllaPensione(2000, 2027, 'ordinario'))
console.log(calcolaAnniAllaPensione(1960, 2026, 'ordinario'))
console.log(calcolaAnniAllaPensione(1964, 2026, 'usurante'))
console.log(calcolaAnniAllaPensione(1950, 2026, 'ordinario'))

