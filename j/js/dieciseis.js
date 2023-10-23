//Demanar un nom d'arxiu a l'usuari i tornar per consola l'extensio de l'arxiu     arxiu.txt.exe   muestra exe
function NomArxiu() {
    let arxiu = prompt("Dime un nombre de archivo: ");
    
    if (arxiu) {
        const partes = arxiu.split('.');
        if (partes.length > 1) {
            const extension = partes.pop();
            console.log(extension);
        } else {
            console.log("El archivo no tiene extensión.");
        }
    } else {
        console.log("No ingresaste un nombre de archivo.");
    }
}


    

    