function horas() {
    let any = parseInt(prompt("Pon un número para el año: "));
    let mes = parseInt(prompt("Pon un número para el mes: "));
    let dia = parseInt(prompt("Pon un número para el día: "));
     // Crear una nueva instancia de Date usando los valores proporcionados por el usuario
    let fecha = new Date(any, mes - 1, dia); // Nota: Meses en JavaScript van de 0 a 11, por lo que restamos 1
        
     // Obtener los componentes de la fecha
    let year = fecha.getFullYear();
    let month = fecha.getMonth() + 1; // Sumamos 1 porque queremos mostrar los meses de 1 a 12
    let day = fecha.getDate();
     
     // Verificar si la fecha es "2/2/2222" y mostrar un mensaje apropiado
    if (year === 2222 && month === 2 && day === 2) {
        console.log("La fecha es cierta 2/2/2222.");
    } else {
        console.log("La fecha no es cierta de 2/2/2222.");
    }
}