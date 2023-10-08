function tresbotones() {
    let numero = parseInt (prompt ("Pon un numero: "));
    let numero2 = parseInt (prompt ("Pon otro numero: "));
    let numero3 = parseInt (prompt ("Pon otro numero: "));

    // Crear un array con los números ingresados
    let numeros = [numero, numero2, numero3];
    
     // Ordenar el array en orden descendente
    numeros.sort((a, b) => b - a);
    
    // Mostrar los números en orden descendente de mayor a menor 
    console.log("Números en orden descendente: " + numeros.join(', '));
}

    
