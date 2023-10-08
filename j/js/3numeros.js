function hora() {
    //Calcular hora, minuto y segundo +1
    let hours = parseInt (prompt ("Pon un numero: "));
    let minute = parseInt (prompt ("Pon otro numero: "));
    let seconds = parseInt (prompt ("Pon otro numero mas: "));

    let fecha = new Date(3,4,2023,  hours, minute, seconds + 1);
    console.log(fecha + "\n" + fecha.getSeconds());
}
