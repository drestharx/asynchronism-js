//despues de instalar el paquete npm i xmlhttprequest
//Debemos llamarlo para poder usarlo en este archivo

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//despues haremos el llamado a la API, entonces crearemos una variable que haga referencia de este recurso

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    //Se debe tener cuidado en el parametro urlApi, porque al escribirlo de manera distinta podemos estar haciendo referencia a API cuando se lo hace en un mismo archivo

    //callback hara referencia a la informacion que estemos recibiendo desde la url, o al error que suceda al recibirlo

    //Existen varias formas de hacer peticiones a las API, pero con XMLHttpRequest podemos controlar todo el flujo de el llamado

    let xhttp = new XMLHttpRequest(); //xhttp es una referencia a la instancia XMLHttpRequest

    xhttp.open('GET', urlApi, true); //con open abrimos una conexion a la API, 'GET' es el tipo de peticion que se hara que para este caso sera OBTENER, utilizaremos urlApi, y true para habilitar

    xhttp.onreadystatechange = function(event) {
        //Es parte de los elementos que entrega 'xmlhttprequest' para escuchar los diferentes estados que tiene la solicitud

        //dentro de los estados de la peticion tenemos diferentes valores
        // 0: NO SE INICIALIZO
        // 1: LOADING (todavia no se llamo el valor send, cuando se ejecuta)
        // 2: Se agrego el valor de send
        // 3: Esta trabajando con la solicitud
        // 4: Se completo la llamada

        if(xhttp.readyState === 4) {

            //la siguiente validacion se hara sobre status
            //200: significa que la solicitud fue correcta
            //En general los 200 son errores y los 500 son errores del servidor
            if(xhttp.status === 200) {
                //si el valor es 200 significa que el servidor respondio correctamente
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

//Esta es la forma que se utilizaba a los inicios de javascript

//XML nos proporciona un control de todo el proceso y ademas tiene soporte en todos los navegadores
//mientras que fetch es mas moderno, para hacer mas simple la solicitud

/* ------------------------------------------------------------------------------------------------------------- */

//Procedemos a hacer el llamado de la funcion

fetchData(`${API}/products`, function(error1, data1) {
    //se validara si salio un error para detener la ejecucion de la funcion
    //esta retornara el error que sucedio
    if(error1) return console.error('Primer solicitud',error1);
    
    //volveremos a llamar a fetchData pero esta vez si la peticion de todos los productos fue exitosa
    //utilizaremos los datos retornados en data 1, obtendremos el prodcuto en la pocision 0
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        //En esta ocasion validaremos si la solicitud de un producto en especifico fue exitosa
        if(error2) return console.error('Segunda solicitud',error2);

        //para la siguiente peticion, utilizaremos data2 obtenido en la anterior peticion, para 
        //entrar a la categoria del producto obtenido
        //ademas de utilizaremos las optional chaining para evitar errores sino encuentra los productos buscados
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
        if(error3) return console.error('Tercer solicitud',error3);

        console.log(data1[0]); //Mostrara de todos los productos traidos, mostrara el producto en la primer pocision
        console.log(data2.title); //mostrara el titulo del elemento traido en la peticion 2
        console.log(data3.name);
        });
    });
});

