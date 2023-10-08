//Demanar C/F a l'usuari
//Demanar una temperatura
//ºF = ºC . (9.0) +32           "x ºC son Y ºF"
//           5.0               " xºF son  y ºC "
//ºC =ºF-32
//     9.0
//     5.0
function Temper() {
    let CF = prompt("Pon C o F: ");
    let temperatura = parseInt(prompt("Pon un numero: "));

    if (CF == "C" || CF == "c"){
        let fahrenheit = (temperatura * 9.0 / 5.0) + 32;
        console.log(temperatura + "ºC son " + fahrenheit + "ºF");
    } else (CF == "F" || CF == "f") 
        let celsius = (temperatura - 32) * 5.0 / 9.0;
        console.log(temperatura + "ºF son " + celsius + "ºC");
}