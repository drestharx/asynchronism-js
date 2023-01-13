/* Fetch viene a ser una promesa por lo tanto trabaja de la misma manera */
import fetch from "node-fetch"; //es necesario para poder trabajar con fetch

const API = 'https://api.escuelajs.co/api/v1';

//fetch dentro de la funcion es una promesa por lo tanto podremos usar then, catch y finally
function fetchData(urlApi) {
    return fetch(urlApi);
}

//primer ejemplo
/*
fetchData(`${API}/products`)
    .then(response => response.json()) //con el metodo json transformamos la data recibida a un objeto json; utilizamos el primer then para convertir los productos a un objeto JSON, response hace referencia a todos los productos llamados con el fetch
    .then(products => {
        console.log(products);
    }) //con este then mostraremos los productos traidos con el primer then en la consola
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

*/

fetchData(`${API}/products`)
    .then(response => response.json()) //transformara todos los productos a formato json
    .then(products => {
        console.log('Son la totalidad de productos', products);
        return fetchData(`${API}/products/${products[0].id}/`);
    })
    .then(response => response.json())
    .then(product => {
        console.log('El primer producto',product)
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => console.log(category.name))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));