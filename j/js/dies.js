// Demanar a l'usuari un color en format (r/g/b)
// 3 numeros(3 prompts) i convertirlo a hexadecimal 
// #AF 00 12    n.toString(16);

// Funció per convertir els valors de color a hexadecimal
function convertirARGBaHexadecimal(r, g, b) {
    // Convertim els valors a hexadecimal i els formategem
    var rHex = parseInt(r).toString(16).toUpperCase().padStart(2, '0');
    var gHex = parseInt(g).toString(16).toUpperCase().padStart(2, '0');
    var bHex = parseInt(b).toString(16).toUpperCase().padStart(2, '0');
    
    // Concatenem els valors hexadecimals per obtenir el color en format (r/g/b)
    var colorHexadecimal = "#" + rHex +" " + gHex + " " + bHex;
    return colorHexadecimal;
  }
  
  // Demanem a l'usuari els valors de color R, G i B
  var r = prompt("Introdueix el valor de color R (0-255):");
  var g = prompt("Introdueix el valor de color G (0-255):");
  var b = prompt("Introdueix el valor de color B (0-255):");
  
  // Cridem la funció i mostrem el color en format (r/g/b)
  var colorEnHexadecimal = convertirARGBaHexadecimal(r, g, b);
  console.log("El color en format (r/g/b) és: " + colorEnHexadecimal);
