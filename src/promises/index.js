//Una promesa se entiende como algo que va a pasar (ahora, mas tarde o nunca)
// Una promesa tiene 3 estados
//      1. PENDIENTE.- cuando se esta ejecutando
//      2. CUMPLIDO.- regreso la informacion deseada
//      3. RECHAZADO

//para crear una promesa instanciamos Promise, esta nos regresa una funcion con 2 funciones dentro (resolve y reject)

//dentro de promise tendremos la funcion anonima que nos regresa las 2 funciones, las cuales nos indicaran como esta
//el estado y regresar la informacion al usuario

const promise = new Promise(function(resolve, reject) {
    // con la funcion resolve se indica que pasara cuando la la promesa fue resuelta
})

/* EJEMPLO */

const cows = 15;

//se buscar a partir de las 15 vacas si se puede cumplir con la promesa de ? litros de leche

const countCows = new Promise(function(resolve, reject) {
    //Si no tenemos la cantidad suficiente de vacas no podremos cumplir con la promesa de litros de leche
    if(cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`We do not have enough cows`);
    }
});

//Pasamos a llamar a la promesa de la siguiente manera

countCows.then((result) => {
    //El result significa que dependiendo la cantidad de vacas, se resolvera o rechazara la promesa
    //con la palabra .then capturamos el resolve
    console.log(result);
}).catch((error) => {
    //con catch manejaremos los errores
    console.log(error);
}).finally(() => {
    //Con finally se hace referencia cuando la promesa termino, independientemente de si la promesa se resolvio o se rechazo
    console.log('Finally!');
});


function delay(time, message) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(message);
        }, time);
    });
}

delay(2000, 'hello after 2s')
.then((message) => console.log(message));