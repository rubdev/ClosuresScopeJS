// Podemos acceder a una variable solo en un bloque o estructura de código
const holaMundo = () => {
    const hola = 'Hola mundo';
    console.log(hola);
}

holaMundo();

// Ámbito lexico es cuando solo va a poder acceder a la variable scope dentro de la función llamada
var scope = 'var global';
const funcScope = () => {
    var scope = 'var local';
    const func = () => {
        return scope;
    }
    console.log(func());
}

funcScope();