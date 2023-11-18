//Dir si una paraula introduida es pentavocalica(conté les 5 vocales)
// text.match(vocals[0]);
//vocals = (/[aàáä]/gi, /[eéèë]/gi, /[iíìï]/gi, /[oóòö]/gi, /[uúùü]/gi);

function Pentavocalica() {
    let palabra = prompt("Introduce una palabra: ");
    
    let vocals = [/[aàáä]/gi, /[eéèë]/gi, /[iíìï]/gi, /[oóòö]/gi, /[uúùü]/gi];
  
    let contadorVocales = 0;

    for (let i = 0; i < vocals.length; i++) {
      if (vocals[i].test(palabra)) {
        contadorVocales++;
      }
    }
  
    if (contadorVocales == 5) {
      console.log("La palabra es pentavocálica.");
    } else {
      console.log("La palabra no es pentavocálica.");
    }
}
  

       
    

  

