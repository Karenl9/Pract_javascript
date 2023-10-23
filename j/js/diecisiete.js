//Demanar un text a l'usuari i dir si te el mateix nº de "a" que de "b" charAt
function contar() {
    let texto = prompt("Escribe un texto: ");
    
    // Inicializar contadores para 'a' y 'b'
    let contadorA = 0;
    let contadorB = 0;

    // Recorrer cada carácter en el texto
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === 'a') {
            contadorA++;
        } else if (texto.charAt(i) === 'b') {
            contadorB++;
        }
    }

    // Comprobar si tienen el mismo número de 'a' y 'b'
    if (contadorA === contadorB) {
        console.log("El texto tiene el mismo número de 'a' y 'b.");
    } else {
        console.log("El texto no tiene el mismo número de 'a' y 'b.");
    }
}
