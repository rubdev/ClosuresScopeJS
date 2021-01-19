// A esta podremos acceder en cualquier momento (SCOPE GLOBAL)
var hola = "hola";
let hola2 = "hola let";
const hola3 = "hola const";

const unaFunc = () => {
    console.log(hola, hola2, hola3);
}

unaFunc();

// var se puede reasignar ES UNA MALA PRÁCTICA
var hola = "hola de nuevo";
// let no se puede reasignar, esto va a dar error
let hola2 = "hola de nuevo en let";

unaFunc();