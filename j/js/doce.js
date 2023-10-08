//Demanar a l'usuari {nº de files      }
//                   {nº de columnes   }crear a la pagina
//html una tauladinamica que mostri els numeros{fila}
//                                             {col}
// tr = document.createElement("tr");
//tr.appendChild(td); 
//document.body.appendChild(Table);
//1.1 1.2 1.3
//2.1 2.2 2.3
//3.1 3.2 3.3

function crearT(){
// Demana a l'usuari el nombre de files i columnes
var numRows = parseInt(prompt("Introdueix el nombre de files:"));
var numCols = parseInt(prompt("Introdueix el nombre de columnes:"));

// Comprueba si numRows y numCols son números válidos y positivos
if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
    alert("Introdueix valors vàlids i positius per a files i columnes.");
    return;
} 

// Crea una taula i afegix-la al cos de la pàgina
var table = document.createElement("table");
document.body.appendChild(table);

// Bucle per crear les files i columnes de la taula
for (var i = 1; i <= numRows; i++) {
    var row = document.createElement("tr");
    table.appendChild(row);
    for (var j = 1; j <= numCols; j++) {
        var cell = document.createElement("td");
        cell.textContent = i + "." + j;
        row.appendChild(cell);
    }
}
}

   
