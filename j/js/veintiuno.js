//Demanar un text a l'usuari i mostra:
//1) text en majuscules
//2) en minuscules
//3) longitud total                   </br>
//4) numero de palabras split
//5) las vocales que contiene           expr=/[aàáäeéèëiíìïoóòöuúùü]/gi;                  text.match(expr);
//6) El numero de vocales
//7) la frase en n lineas on cada linia li falta una lletra de davant        el resultat  amb document.write();
function text(){
    let texto = prompt("Pon un texto: ");
        
        // 1) Texto en mayúsculas
    document.write("1) Texto en mayúsculas: " + texto.toUpperCase() + "<br>");
    
        // 2) Texto en minúsculas
    document.write("2) Texto en minúsculas: " + texto.toLowerCase() + "<br>");
    
        // 3) Longitud total
    document.write("3) Longitud total: " + texto.length + "<br>");
    
        // 4) Número de palabras
    let palabras = texto.split(" ");
    document.write("4) Número de palabras: " + palabras.length + "<br>");
    
        // 5) Vocales que contiene
    let vocales = texto.match(/[aàáäeéèëiíìïoóòöuúùü]/gi);
    document.write("5) Las vocales que contiene: " + (vocales ? vocales.join("") : "Ninguna") + "<br>");
    
        // 6) El número de vocales
    document.write("6) El número de vocales: " + (vocales ? vocales.length : 0) + "<br>");
    
        // 7) La frase en n líneas donde falta una letra de delante
    let lineas = palabras.map(word => word.slice(1));
    let fraseLineas = lineas.join("\n");
    document.write("7) La frase en líneas: <br>" + fraseLineas);
}
   
    