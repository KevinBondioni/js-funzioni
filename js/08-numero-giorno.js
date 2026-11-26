// Traccia 08 · Dal nome al numero del giorno
// La consegna è nel README, alla voce "08 · Dal nome al numero del giorno".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaNumeroGiorno
  Di quali dati ha bisogno? del nome di un giorno
  Deve restituire qualcosa? il numero del giorno
  Di che tipo? intero

  STEPS
  1 -creo una Funzione che abbia come input il nome del giorno della settimana
  2 -creo una lista contenente i nomi dei giorni della settimana
  3 -cerco tra gli elementi della lista il corrispondente
  4 -se l'elemento non è presente restituisco 0
  5 -se l'elemnento è presente ritorno l'index+1 
  6 -comunico all utente il numero 
*/

// # La funzione

function trovaNumeroGiorno(giornoRichiesto) {

  const giorniDellaSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]

  for (let i = 0; i < giorniDellaSettimana.length; i++) {
    // console.log(i)
    if (giornoRichiesto === giorniDellaSettimana[i]) {
      let numeroGiorno = i + 1
      return numeroGiorno
    }
  }
  return 0

}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaNumeroGiorno("Lunedì"))
console.log(trovaNumeroGiorno("Mercoledì"))
console.log(trovaNumeroGiorno("Domenica"))
console.log(trovaNumeroGiorno("lunedì"))
console.log(trovaNumeroGiorno("Pippo"))