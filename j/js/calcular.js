function calcularPotencia () { 
    let numero = prompt ("Pon un numero: ");
    let potencia = prompt ("Pon una potencia: ");
    console.time();
    console.log ("Resultat " + Math.pow(numero, potencia));
    console.timeEnd();
    //Calcular la potencia 
    //calcular potencia con un bucle

    let numero2 = parseFloat(prompt("Pon otro numero: "));
    let potencia2 = parseInt(prompt("Pon otro potencia: "));    
    console.time();
    let resultado = 1; // Inicializamos el resultado en 1
        
    for (let i = 0; i<potencia2; i++) {
        resultado *= numero2;
    }
        
    console.log("Resultado: " + resultado);
    console.timeEnd();
    }
    