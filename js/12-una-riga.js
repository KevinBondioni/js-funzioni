// Traccia 12 · Una riga sola
// La consegna è nel README, alla voce "12 · Una riga sola".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaPrezzoConIva
  Di quali dati ha bisogno? prezzo netto
  Deve restituire qualcosa? prezzo con l'IVA al 22%
  Di che tipo? numero 

  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaAreaRettangolo
  Di quali dati ha bisogno? base e altezza
  Deve restituire qualcosa? restituisce l'area
  Di che tipo? numero

  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? verificaNumeroPari
  Di quali dati ha bisogno? numero
  Deve restituire qualcosa? tru o false
  Di che tipo? stringa

  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? convertiCelsiusInFahrenheit
  Di quali dati ha bisogno? gradi Celsius
  Deve restituire qualcosa? gradi Fahrenheit
  Di che tipo? numero 

  STEPS
  1 -
  2 -
  3 -
*/

// # Le arrow function, con il return implicito: una riga ciascuna

const calcolaPrezzoConIva = (prezzo) => prezzo + (prezzo * 0.22)

const calcolaAreaRettangolo = (base, altezza) => base * altezza

const verificaNumeroPari = (numero) => numero % 2 == 0

const convertiCelsiusInFahrenheit = (gradiC) => gradiC * 9 / 5 + 32


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(calcolaPrezzoConIva(10))
console.log(calcolaPrezzoConIva(100))
console.log(calcolaPrezzoConIva(0))

console.log(calcolaAreaRettangolo(4, 5))
console.log(calcolaAreaRettangolo(2.5, 2))

console.log(verificaNumeroPari(4))
console.log(verificaNumeroPari(7))
console.log(verificaNumeroPari(0))

console.log(convertiCelsiusInFahrenheit(0))
console.log(convertiCelsiusInFahrenheit(100))
console.log(convertiCelsiusInFahrenheit(20))
console.log(convertiCelsiusInFahrenheit(-40))