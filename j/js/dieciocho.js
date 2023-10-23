//Demanar 2 cadenes i comprovar si tenen la mateixa longitud 
function Cadelong() {
    let cadena1 = prompt("Pon una cadena: ");
    let cadena2 = prompt("Pon otra cadena: ");

    if (cadena1.length === cadena2.length) {
        console.log("Las cadenas tienen la misma longitud.");
    } else {
        console.log("Las cadenas no tienen la misma longitud.");
    }
}

