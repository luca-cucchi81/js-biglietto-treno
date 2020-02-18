/*SCOPO ESERCIZIO:
chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.*/

// Impostare le variabili iniziali interessate alle richieste "prompt"
// Impostare le prime modifiche al DOM
// Impostare la variabile prezzo secondo le 3 casistiche: prezzo pieno, prezzo adolescenti, prezzo anziani
// Infine impostare apportare le ultime modifiche al DOM

/*impostazioni variabili + prime modifiche al DOM*/
var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome')
var età = prompt('Quanti anni hai?')
var tragitto = prompt('Quanti KM devi percorrere?')

document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('età').innerHTML = età;
document.getElementById('kilometri').innerHTML = tragitto;
