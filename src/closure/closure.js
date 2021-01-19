const cajaDeMonedas = (monedas) => {
    var monedasGuardas = 0;
    monedasGuardas += monedas;
    console.log(`Monedas en la caja: ${monedasGuardas}`);
}
// No guarda elementos solo se queda con el valor que le pasamos
cajaDeMonedas(2);
cajaDeMonedas(15);

// Haciendo uso de closure
// Así conseguimos guardar en memoria el dato almacenado en el ámbito de la función
// por eso al ser ejecutada vemos que guarda el acumulado de monedas
const cajaDeMonedasClosure = () => {
    var monedasGuardas = 0;
    const monedasAlmacenadas = (monedas) => {
        monedasGuardas += monedas;
        console.log(`Monedas en la caja: ${monedasGuardas}`);
    }
    return monedasAlmacenadas;
}

let cajaDeDinero = cajaDeMonedasClosure();
cajaDeDinero(6);
cajaDeDinero(4);

