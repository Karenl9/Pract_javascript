//Demanar un {text a l'usuari (paraula) i eliminar el caracter de la paraula corresponent de la posicio de nº demanat 
//           {numero
//substring()                   ex: {hola} hoa
//                                  {2   }

function eliminard() {
    let texto = prompt("Pon un texto: ");
    let numero = prompt("Pon un número: ");
    
    // Convertir el número ingresado a un número entero
    let posicion = parseInt(numero);

    // Verificar si el número es válido
    if (isNaN(posicion) || posicion < 0 || posicion >= texto.length) {
        console.log("El número ingresado no es válido.");
        return;
    }

    // Eliminar el carácter en la posición especificada
    let resultado = texto.substring(0, posicion) + texto.substring(posicion + 1);

    console.log("Texto resultante: " + resultado);
}
