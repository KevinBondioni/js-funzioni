// Traccia 11 · Dal function alla freccia
// La consegna è nel README, alla voce "11 · Dal function alla freccia".

// # La funzione da riscrivere: è già scritta e funziona.
// Il costo di una spedizione: 5 € fissi, 2 € per ogni kg e 10 centesimi per ogni km.
// function calcolaCostoSpedizione(pesoPacco, distanzaKm) {
//   if (pesoPacco <= 0) {
//     return 0;
//   }
//   const costoPeso = pesoPacco * 2;
//   const costoDistanza = distanzaKm * 0.1;
//   return 5 + costoPeso + costoDistanza;
// }

/*
  STEPS (come si passa da function alla freccia)
  1 - creo la variabile calcolaCostoSpedizione che conterra la funzione
  2 - tra le parentesi () e {} metto =>
  3 - avendo il codice su piu righe mantengo i return
*/

// # La tua arrow function (quando funziona, cancella la versione con function qui sopra)

const calcolaCostoSpedizione = (pesoPacco, distanzaKm) => {
  if (pesoPacco <= 0) {
    return 0;
  }
  const costoPeso = pesoPacco * 2;
  const costoDistanza = distanzaKm * 0.1;
  return 5 + costoPeso + costoDistanza;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(calcolaCostoSpedizione(3, 100))
console.log(calcolaCostoSpedizione(0.5, 20))
console.log(calcolaCostoSpedizione(0, 50))
console.log(calcolaCostoSpedizione(-2, 50))
