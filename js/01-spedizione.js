// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovsa stato spedizione
  Di quali dati ha bisogno? del codice stato ( un numero, valore ammesseo un numero  1(In elaborazione) 2(Spedito  3(consegnato) Altri (stato sconosciuto))
  Deve restituire qualcosa? ci deve restituire lo stato 
  Di che tipo? Stringa 

  STEPS
  1 - creo la funzione e gli passo il codice del pacco  
  2 -
  3 -
*/

// # La funzione
function trovaStatoSpedizione(codiceStato) {
  if (isNaN()) {
    return "Valore non valido! inserire un numero"
  }

  else if (codiceStato === + 1) {
    return "In elaborazione"
  }
  else if (codiceStato === + 2) {
    return "Spedito"
  }
  else if (codiceStato === 3) {
    return "Consegnato"
  }
  else {
    return "Stato sconosciuto"
  };

}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
const stato = Number(prompt(`inserire il numero dello stato:`))
console.log(`Stato attuale:${trovaStatoSpedizione(stato)}`)

