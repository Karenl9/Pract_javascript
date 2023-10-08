function Cuatro() {
    let numero1 = parseInt (prompt ("Pon un numero: "));
    let numero2 = parseInt (prompt ("Pon otro numero: "));
    // Calcular las diferencias entre los números y que este cerca del 100
    let diferencia1 = Math.abs(numero1 - 100);
    let diferencia2 = Math.abs(numero2 - 100);

    if (diferencia1 < diferencia2) {
        console.log(`El número ${numero1} está más cerca de 100.`);
    } else if (diferencia2 < diferencia1) {
        console.log(`El número ${numero2} está más cerca de 100.`);
    } else {
        console.log(`Ambos números están a la misma distancia de 100.`);
    }
}