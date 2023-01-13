//se creara una funcion de suma
function sum(num1, num2) {
    return num1 + num2;
}

//crearemos una nueva funcion que recibira como parametro a sum y que dentro de esta sera ejecutada
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

//en un console.log llamamos a la funcion calc con los 3 argumentos que necesita, los 2 numeros y la funcion que invocara
console.log(calc(2, 2, sum));

//OTRO EJEMPLO CON SETIMEOUT

setTimeout(function() {
    console.log('hola javascript');
}, 2000);

//creando una funcion para no utilizar funciones anonimas
function saludar(name) {
    console.log(`Hola ${name}!`);
};
//para ejecutar el setTimeout es necesario pasar la funcion, el tiempo que demorara y los argumentos

setTimeout(saludar, 2000, 'Huascar');