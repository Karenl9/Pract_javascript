//Demanar un numero en base 10, usando divisiones, restas y bucles... convertir el numero a hexadecimal, octal y binario
//concatenarlo (utilizando bucles, condicionales y operaciones numericas) con tres funciones 

function convertirBase() {
  let num;
  do {
      num = parseInt(prompt("Ingresa un número en base 10:"));
  } while (isNaN(num));

  let n2 = pasarABinario(num);
  let n8 = pasarAOctal(num);
  let n16 = pasarAHexadecimal(num);

  let resultadoConcatenado = `num=${num}, n2=${n2}, n8=${n8}, n16=${n16}`;
  
  console.log(resultadoConcatenado);
  alert(resultadoConcatenado);
}

function pasarABinario(numeroDecimal) {
  return numeroDecimal.toString(2);
}

function pasarAOctal(numeroDecimal) {
  return numeroDecimal.toString(8);
}

function pasarAHexadecimal(numeroDecimal) {
  return numeroDecimal.toString(16).toUpperCase();
}


