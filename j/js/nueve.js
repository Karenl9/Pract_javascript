//Una companyia telefonica cobra 10c per l'establiment de trucada (descolgar) i 5c/minut (tarificat en segons) del temps de la trucada
//introdueixi {hh}
//            {mm}  i digues el cost de la trucada en format x euros i y centimos
//            {ss}
//PASARLO TODO AL COSTE DE SEGUNDOS Y DESPUES PASARLO A EUROS Y CENTIMOS

function costTrucada() {
    let hora = parseInt(prompt("Ingrese las horas:"));
    let minuto = parseInt(prompt("Ingrese los minutos:"));
    let segundo = parseInt(prompt("Ingrese los segundos:"));

    const cuestaLlamada = 10; // Coste de llamada 
    const cuestaPorMinuto = 5; // Coste por minuto en céntimos

    //Convertir el tiempo de la llamada a segundos
    let totalSegundos = (hora * 3600) + (minuto * 60) + segundo;

    //Calcular el coste del tiempo en céntimos
    const costeTiempoCentimos = (totalSegundos/60) * cuestaPorMinuto;
    console.log("Coste del tiempo en céntimos: " + costeTiempoCentimos + " céntimos");

    //Sumar de llamada y el coste del tiempo
    const costeTotalCentimos = cuestaLlamada + costeTiempoCentimos;

    //Convertir el coste total a euros y céntimos
    const euros = Math.floor(costeTotalCentimos / 100); // Parte en euros
    const centimos = Math.round(costeTotalCentimos % 100); // Parte en céntimos

    //Imprimir el resultado en formato "x€ e yc"
    console.log(`${euros}€ ${centimos}c`);
}
    
