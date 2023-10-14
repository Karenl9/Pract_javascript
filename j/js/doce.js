//Demanar a l'usuari {nº de files      }
//                   {nº de columnes   }crear a la pagina
//html una tauladinamica que mostri els numeros{fila}
//                                             {col}
// tr = document.createElement("tr");                         t.border = 1;
//tr.appendChild(td);                                         document.createTextNode("-----");
//document.body.appendChild(Table);                          taula = document.createElement("table");
//1.1 1.2 1.3                                          tr = document.createElement("tr");
//2.1 2.2 2.3                                          td = document.createElement("td"):
//3.1 3.2 3.3

function crearT(){
// Demana a l'usuari el nombre de files i columnes
var numFilas = parseInt(prompt("Introdueix el nombre de files:"));
var numColumnas = parseInt(prompt("Introdueix el nombre de columnes:"));

// Comprueba si numRows y numCols son números válidos y positivos
if (isNaN(numFilas) || isNaN(numColumnas) || numFilas <= 0 || numColumnas <= 0) {
    alert("Introdueix valors vàlids i positius per a files i columnes.");
    return;
} 

// Crea una taula i afegix-la al cos de la pàgina
var table = document.createElement("table");
document.body.appendChild(table);
// table.styleborder = "1px solid black";
// const textNode = document.createTextNode("_____________________");
// table.appendChild(textNode);

// Bucle per crear les files i columnes de la taula
for (var i = 1; i <= numFilas; i++) {
    var filas = document.createElement("tr");
    table.appendChild(filas);
    for (var j = 1; j <= numColumnas; j++) {
        var cell = document.createElement("td");
        cell.textContent = i + "." + j;
        filas.appendChild(cell);
    }
}
}

   
