// Feu una taula dinamica on es demana {nº de columnes de la (de color)           2 1 2     
// i pinta en una piramide tal que     darrera fila}    (imparell)               1 3 1 un bucle para cada uno
// de color rojo y las  de alrededor en blanco, funcion con color en la fila      0 5 5        /2 hasta el 0
// se incrementa y se va restando                   "20px" x "20px" vermell
// td.style.backgroundColor = "red";   td.style.width = "20px";    un for para l'alçada files y 3 bucles columnes

function Taulacolor(){
  const numRows = 3;
  const numCols = 5;
  const cellSize = "20px";
  
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement("td");
      cell.style.width = cellSize;
      cell.style.height = cellSize;
      cell.style.textAlign = "center";
      cell.style.border = "1px solid black";
  
      if (i === 0 && j === 2) {
        cell.style.backgroundColor = "red"; // Primera fila: una celda roja en el medio
      } else if (i === 1 && (j >= 1 && j <= 3)) {
        cell.style.backgroundColor = "red"; // Segunda fila: tres celdas rojas en el medio
      } else if (i === 2) {
        cell.style.backgroundColor = "red"; // Tercera fila: todas las celdas rojas
      } else {
        cell.style.backgroundColor = "white";
      }
  
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  
  document.body.appendChild(table);
}

//  ___________________
// | B | B | R | B | B |
// |___|___|___|___|___|
// | B | R | R | R | B |
// |___|___|___|___|___|
// | R | R | R | R | R |
// |___|___|___|___|___|