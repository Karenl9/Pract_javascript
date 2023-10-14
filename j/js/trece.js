//Crea una taula de Multiplicacions com aquesta:
//1 2 3 4 5 ....            demanar les {files    }
//2 4 6 8 10                            {columnes }
//3 6 9 12 15
//4 ...

function TaulaMultiplicar(){
// Solicitar al usuario la cantidad de filas y columnas
const filas = parseInt(prompt("Ingresa el número de filas:"));
const columnas = parseInt(prompt("Ingresa el número de columnas:"));

if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
  alert("Por favor, ingresa valores válidos para filas y columnas.");
} else {

  // Función para generar una tabla de multiplicar
    function generarTablaMultiplicar(filas, columnas) {
    const tabla = document.createElement("table");

    for (let i = 1; i <= filas; i++) {
      const fila = document.createElement("tr");

      for (let j = 1; j <= columnas; j++) {
        const celda = document.createElement("td");
        celda.textContent = i * j;
        celda.style.border = '1px solid black';
        celda.style.padding = '10px';
        fila.appendChild(celda);
      }

      tabla.appendChild(fila);
    }

    tabla.style.borderCollapse = 'collapse';

    return tabla;
  }

  // Generar la tabla y agregarla al cuerpo del documento
  const tablaMultiplicar = generarTablaMultiplicar(filas, columnas);
  document.body.appendChild(tablaMultiplicar);
}
}