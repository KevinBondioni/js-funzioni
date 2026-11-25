// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? formattaDurata
  Di quali dati ha bisogno? minuti totali del film
  Deve restituire qualcosa? la durata in ore e minuti
  Di che tipo? stringa

  STEPS
  1 - creo una funzione che ha come input la durata in minuti di un film
  2 - creo la variabile ore e la variabile minuti 
  3 - eseguo le operazioni matematiche di conversione
  4 - ritorno ore e minuti,
  5 - se 1 ora scrive 1 ora antrimenti ore
  6 - se non ho minuti ritorno solo le ore
  7 - se le ore sono 0 ritorno solo i minuti 
*/

// # La funzione
function formattadurata(tempo) {
  const ore = Math.floor(tempo / 60)
  const minuti = tempo - (ore * 60)

  if (ore == 0) {
    return `${minuti} minuti`
  }
  else if (minuti == 0) {
    if (ore == 1) {
      return `${ore} ora`
    }
    else {
      return `${ore} ore`
    }
  }
  else {
    if (ore == 1) {
      return `${ore} ora e ${minuti} minuti`
    }
    else {
      return `${ore} ore e ${minuti} minuti`
    }
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(formattadurata(148))
console.log(formattadurata(95))
console.log(formattadurata(120))
console.log(formattadurata(60))
console.log(formattadurata(45))
console.log(formattadurata(0))

