//Demanar un numero a l'usuari (dies)
//Convertir el numero de dies a anys, mesos i dies
//Els mesos son de 30 dies tots  / %  1000 dies son 3 años x meses y dias 

function Convert(){
        let numero = parseInt(prompt("Pon un número para convertir: "));
    
        let años = Math.floor(numero / 1000);
        let meses = Math.floor((numero % 1000) / 30);
        let dias = numero % 30;
    
        console.log(numero + " días son " + años + " años, " + meses + " meses y " + dias + " días");
}
    