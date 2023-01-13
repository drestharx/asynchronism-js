import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

async function fetchData (urlApi) {
    // en el cuerpo de la funcion traeremos la data desde el api, primero a la constante response
    const response = await fetch(urlApi);

    //una vez lo tengamos en response, transformaremos la data a formato json
    const data = await response.json();

    //y por ultimo lo retornaremos, La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término. Al regreso de la ejecución, el valor de la expresión await es la regresada por una promesa terminada.
    //es necesario recordar que fetch utiliza el concepto de las promesas

    return data;
}

const anotherFunction = async (urlApi) => {
    try { //en try estara toda la logica de lo que queremos que suceda

        const totalProducts = await fetchData(`${urlApi}/products`); //es el primer llamado a los productos de la API

        const product = await fetchData(`${urlApi}/products/${totalProducts[0].id}`); //es el llamado a un producto en particular

        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);


        console.log(totalProducts);
        console.log(product.title);
        console.log(category.name);

    } catch (error) { //si en alguna de las promesas pasa un error, pasara a catch, donde nos ayudara a manejar mejor los errores
        console.error(error);
    }
}

anotherFunction(API);