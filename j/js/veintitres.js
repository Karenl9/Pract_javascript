//Obtenir un nº a l'atzar entre (1-100). Es tracta de que l'usuari l'endevina.
//Si l'encerta se li mostrara "Obtingut en n intents". Si introdueix un zero es pintara "Game over" i es sortirà.
//Si falla se li dira "menor" o "major". Si introdueix algun valor invalid no passa res (el segueix).
//pero es compta amb un intent mes.

function nAtzar(){
// Generem un número aleatori entre 1 i 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

while (true) {
let numero = parseInt(prompt("Adivina el número: "));
if (numero == 0) {
    console.log("GAME OVER");
    break;
}
intentos++;

if (numero == numeroAleatorio) {
    console.log(`Obtenido en ${intentos} intentos.`);
    break;
} else if (numero < numeroAleatorio) {
    console.log("Mayor.");
} else {
    console.log("Menor.");
}
}}


























   























    