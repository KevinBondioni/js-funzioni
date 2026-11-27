// Traccia 15 · L'IVA che cambia
// La consegna è nel README, alla voce "15 · L'IVA che cambia".

// # Il programma di partenza: è già scritto. Leggilo e prevedi cosa stampa, prima di aprire la pagina.
let percentualeIva = 22;

const calcolaPrezzoFinale = (prezzoNetto, percentualeIva) => prezzoNetto + (prezzoNetto * percentualeIva) / 100;

console.log(calcolaPrezzoFinale(100, 22))
console.log(calcolaPrezzoFinale(100, 4))
console.log(calcolaPrezzoFinale(50, 22))
console.log(calcolaPrezzoFinale(80, 0))


/*
  LE QUATTRO DOMANDE (per la nuova versione della funzione)
  Come si chiama?
  Di quali dati ha bisogno?
  Deve restituire qualcosa?
  Di che tipo?

  STEPS
  1 -
  2 -
*/

// # La versione indipendente: modifica la funzione qui sopra, non scriverne una seconda con lo stesso nome.


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

