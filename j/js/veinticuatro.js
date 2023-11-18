//Demanar a l'usuari      {any1 [2000-2050]} dir el primer any entre 
//les dues que comença en {any2 [2000-2050]} dimecres

function Any(){
    let any1 = parseInt(prompt("Pon un año: "));
    let any2 = parseInt(prompt("Pon otro año: "));
    
    for (let year = any1; year <= any2; year++) {
        let fecha = new Date(year, 0, 1); 
        if (fecha.getDay() == 3) { 
            console.log(`El primer año que comienza en miércoles entre ${any1} y ${any2} es ${year}.`);
            return;
        }
    }
    console.log(`No se encontró ningún año que comience en miércoles entre ${any1} y ${any2}.`);
}



