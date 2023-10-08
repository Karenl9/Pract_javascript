//fibonacci calcular con un bucle for 
function Fibonacci() {
    let numero = prompt("Dime un numero: ");
    let a = 1;
    let b = 1;
    console.log(a);
    console.log(b);

    for (let i = 2; i < numero; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(b);
    }  
}

