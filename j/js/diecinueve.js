//Demanar a l'usuari un text i un caràcter -> dir si el caràcter està contingut en el text de 2 a 4 vegades 
function texCarac() {
    let text = prompt("Pon un texto: ");
    let caracter = prompt("Pon un caracter: ");
    
    // Contar cuántas veces aparece el carácter en el texto
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === caracter) {
            count++;
        }
    }

    if (count >= 2 && count <= 4) {
        console.log(`El carácter "${caracter}" está en el texto de 2 a 4 veces.`);
    } else {
        console.log(`El carácter "${caracter}" no está en el texto de 2 a 4 veces.`);
    }
}

