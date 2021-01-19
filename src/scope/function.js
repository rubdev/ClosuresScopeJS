// Dentro del scope local podemos encontrarnos con el concepto de functionScope
// que es el ámbito de las variables en funciones.

const hola = () => {
    var fruta = 'Manzana';
    console.log(fruta);
}

hola();
// Esto va a dar error ya que no está establecida de forma global
console.log(fruta);