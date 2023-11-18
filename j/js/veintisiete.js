// Els codis de barres a Europa poden tenir 8 o 13 digits(EAN8, EAN13) 
// la xifra mes a la dreta esta calculada segons una formula 
// on els digits en posició imparell es multipliquen *3 i els parells *1
// 2*3+5*1+9*3+3*1+8*3+5*1+6*3=88
// El digit final es la diferencia entre el numero calculat i el proper multiple de 10
// 65839522 -> Correcte
// 65839521 -> Incorrecto
// 5029365779425 -> Correcto
// 5129365779425 -> Incorrecto
// 2 funciones   function addLeftZeroPadding(code, num);    function checkDigitControl(codi);

function Codisdebarras(){
  let codigo;
  let contar = 0;
  let total = 0;
  let codigoV;
  do{
      codigo = prompt("Dime un numero de 8 o 13 digitos: ");
  }while(codigo.length>13);

  //Añade ceros a la izquierda al número ingresado para que tenga exactamente 8 o 13 dígitos utilizando la función addLeftZero.
  if(codigo.length<8){
      codigo = addLeftZero(codigo, 8);
  }else if(codigo.length>8){
      codigo = addLeftZero(codigo, 13);
  }

  codigoV=invertirCadena(codigo);

  //Calcula la suma ponderada de los dígitos del número invertido, multiplicando por 3 los dígitos en posiciones impares y por 1 los dígitos en posiciones pares.
  for(let n=1; n<=codigoV.length; n++){
      if(n%2!=0){
          total+=codigoV.charAt(n-1)*3;
      }else{
          total+=codigoV.charAt(n-1)*1;
      }
  }

  //Ajusta la suma ponderada agregando uno o más al total hasta que sea divisible por 10.
  while(total%10!=0){
      contar++;
      total++;
  };
  
  if(contar==codigo.charAt(codigo.length-1)){
      console.log("Correcto");
  }else{
      console.log("Incorrecto");
  }
}

// Invierte una cadena y elimina el primer valor.
function invertirCadena(codigo) {
  let separarCadena = codigo.split("");
  let invertir = separarCadena.reverse(); 
  let unir = invertir.join(""); 
  unir=unir.substring(1);
  return unir;
}

//Añade ceros a la izquierda de una cadena hasta que tenga una longitud específica.
function addLeftZero(codigo, length) {
  return (codigo.toString().length < length) ? addLeftZero("0" + codigo, length) : codigo;
}


 
  
