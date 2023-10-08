// Demanar 2 numeros {Preu producte}
//                  {diners lliurats}
// tornar la combinacio del min canvi de billets 
// i monedes d'euro i centims
// n.toFixed(2);
// Format sortida-> preu =--       pagat=--
// 1 de 500
// 1 de 200
// 1 de 1
// ....
// Total canvi=---

function calcularCanvi() {
    let preuprod = parseFloat(prompt("Ingresa el precio del producto: "));
    let dinerslliurats = parseFloat(prompt("Ingresa el dinero para pagar: "))

    while (isNaN(preuprod) || isNaN(dinerslliurats)) {
          alert("ERROR");
          preuprod = parseFloat(prompt("Ingresa el precio del producto: "));
          dinerslliurats = parseFloat(prompt("Ingresa el dinero para pagar: "))
      }

    console.log("Precio del producto: "+ preuprod +"\nDinero para pagar: "+ dinerslliurats);

    let billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let totalCanvio = dinerslliurats - preuprod;
    totalCanvio = parseFloat(totalCanvio.toFixed(2));
    let totaltotal = totalCanvio;
    
    for (let i = 0; i < billetesMonedas.length; i++) {
      if (totalCanvio >= billetesMonedas[i]) {
          let count = parseInt(totalCanvio / billetesMonedas[i]);
          if (billetesMonedas[i] >= 1) {
              console.log(count + " billetes de " + billetesMonedas[i] + "€");
          } else {
              console.log(count + " moneda de " + (billetesMonedas[i] * 100) + " centimos");
          }
          totalCanvio -= count * billetesMonedas[i];
      }
  }
  console.log("Total cambio: " + totaltotal.toFixed(2) + "€");
}

    