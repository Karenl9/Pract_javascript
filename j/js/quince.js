// function rombo() {
//     // Preguntar al usuario el número de filas (debe ser un número impar)
//     let num = parseInt(prompt("Introduce el número de filas (debe ser un número impar): "));

//     // Validar que el valor ingresado sea un número impar
//     while (isNaN(num) || num % 2 === 0) {
//         alert("Número no válido. Debe ser un número impar.");
//         num = parseInt(prompt("Introduce el número de filas (debe ser un número impar): "));
//     }

//     // Crear un elemento <table> y <tbody> en el HTML
//     let tabla = document.createElement("table");
//     let tablaBody = document.createElement("tbody");

//     // Calcular el tamaño del rombo (mitad del número de filas)
//     let mitad = num / 2;
//     mitad = Math.floor(mitad);

//     // Función para crear las celdas
//     function cell(tr, color) {
//         let cell = document.createElement("td");
//         let cellText = document.createTextNode(" ");
//         cell.appendChild(cellText);
//         tr.appendChild(cell);
//         cell.style.width = "20px";
//         cell.style.height = "20px";
//         cell.style.backgroundColor = color;
//     }

//     // Bucles para crear el rombo
//     for (let i = 0; i < num; i++) {
//         let row = document.createElement("tr");

//         // Determinar el número de celdas rojas en cada fila
//         let rojas = i <= mitad ? i * 2 + 1 : (num - i - 1) * 2 + 1;

//         // Calcular el número de celdas blancas a la izquierda y derecha
//         let blancas = (num - rojas) / 2;

//         // Crear celdas blancas a la izquierda
//         for (let a = 0; a < blancas; a++) {
//             cell(row, "white");
//         }

//         // Crear celdas rojas
//         for (let b = 0; b < rojas; b++) {
//             cell(row, "red");
//         }

//         // Crear celdas blancas a la derecha
//         for (let c = 0; c < blancas; c++) {
//             cell(row, "white");
//         }

//         tablaBody.appendChild(row);
//     }

//     tabla.appendChild(tablaBody);

//     // Agregar la tabla al cuerpo del HTML
//     document.body.appendChild(tabla);
    
//     // Establecer un borde para la tabla
//     tabla.setAttribute("border", "1");
// }


function rombo() {
    // Preguntar al usuario el número de filas (debe ser un número impar)
    let num = parseInt(prompt("Introduce el número de filas (debe ser un número impar): "));

    // Validar que el valor ingresado sea un número impar
    while (isNaN(num) || num % 2 === 0) {
        alert("Número no válido. Debe ser un número impar.");
        num = parseInt(prompt("Introduce el número de filas (debe ser un número impar): "));
    }

    // Crear un elemento <table> en el HTML
    let tabla = document.createElement("table");

    // Calcular el tamaño del rombo (mitad del número de filas)
    let mitad = num / 2;
    mitad = Math.floor(mitad);

    // Función para crear las celdas
    function cell(color) {
        let cell = document.createElement("td");
        cell.style.width = "20px";
        cell.style.height = "20px";
        cell.style.backgroundColor = color;
        cell.style.border = "1px solid black"; // Agregar borde a las celdas
        return cell;
    }

    // Bucles para crear el rombo
    for (let i = 0; i < num; i++) {
        let row = document.createElement("tr");

        // Determinar el número de celdas rojas en cada fila
        let rojas = i <= mitad ? i * 2 + 1 : (num - i - 1) * 2 + 1;

        // Calcular el número de celdas blancas a la izquierda y derecha
        let blancas = (num - rojas) / 2;

        // Crear celdas blancas a la izquierda
        for (let a = 0; a < blancas; a++) {
            row.appendChild(cell("white"));
        }

        // Crear celdas rojas
        for (let b = 0; b < rojas; b++) {
            row.appendChild(cell("red"));
        }

        // Crear celdas blancas a la derecha
        for (let c = 0; c < blancas; c++) {
            row.appendChild(cell("white"));
        }

        tabla.appendChild(row);
    }

    // Agregar la tabla al cuerpo del HTML
    document.body.appendChild(tabla);

    // Establecer un borde para la tabla (puedes eliminar esta línea si no deseas bordes en la tabla)
    tabla.style.borderCollapse = "collapse";
}
