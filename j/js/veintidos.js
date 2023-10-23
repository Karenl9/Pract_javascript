//El dia de nitvella Pepe vol saber quan falta per mitjanit
//Demana una hora en format hh:mm i fica el numero de minuts fins la mitjanit
//Si l'hora es 00:00 digues "Bon any Nou!"       un prompt para has horas y minutos
//ex 23:45 ->15
// 00:01 ->1439
//21:30 ->150 
function nitvella() {
    let horaMinutos = prompt("Pon la hora y los minutos (en formato hh:mm): ");

    if (horaMinutos === "00:00") {
        console.log("¡Bon any Nou!");
    } else {
        let [horas, minutos] = horaMinutos.split(":");
        horas = parseInt(horas);
        minutos = parseInt(minutos);

        let minutosRestantes = (24 - horas) * 60 - minutos;
        console.log("Minutos restantes hasta la medianoche: " + minutosRestantes);
    }
}

