// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaDollariRicevuti
  Di quali dati ha bisogno? euro, commissione, tasso di cambio 
  Deve restituire qualcosa?
  Di che tipo?

  STEPS
  1 -creo un prompt che mi permette di inserire i soldi da cambiare il tasso del cambio e la commissione
  2 -trasformo il prompt in numero
  3 -controllo se i soldi coprono la commissione se no restituisco 0
  4 -sottraggo la commissione dai soldi da cambiare
  5 -prendo il rimanente e il tasso di cambio e converto da euro a dollari
  6 -formatto la cifra con 2 decimali
  7 -restituisco la crifra all utente
*/

// # La funzione
function calcolaDollariRicevuti(euro, cambio, commissione) {
  if (euro <= commissione) {
    return 0
  }
  else {
    let senzaCommissione = euro - commissione
    return (senzaCommissione * cambio).toFixed(2)
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

const euro = Number(prompt(`Inserire l'importo da convertire in dollari`))
const tassoDiCambio = Number(prompt(`Inserire il tasso di cambio`))
const commissione = Number(prompt(`Inserire l'importo di commissione`))

console.log(calcolaDollariRicevuti(euro, tassoDiCambio, commissione))