// Traccia 07 · I giorni del mese
// La consegna è nel README, alla voce "07 · I giorni del mese".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? contaGiorniDelMese
  Di quali dati ha bisogno? del numero del mese
  Deve restituire qualcosa? il numero dei gionrni 
  Di che tipo? numero 

  STEPS
  1 - creo una funzione che abbia come imput il numero dei mesi 
  2 - creo l'array con i giorni dei mesi 
  3 - se il numero non esiste restituisco 0
  4 - 
*/

// # La funzione
function contaGiorniDelMese(mese) {

  const giornidelmese = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (mese < 1 || mese > 12) {
    return 0
  }
  else {
    return giornidelmese[mese - 1]
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(contaGiorniDelMese(1))
console.log(contaGiorniDelMese(2))
console.log(contaGiorniDelMese(4))
console.log(contaGiorniDelMese(8))
console.log(contaGiorniDelMese(11))
console.log(contaGiorniDelMese(12))
console.log(contaGiorniDelMese(0))
console.log(contaGiorniDelMese(13))
