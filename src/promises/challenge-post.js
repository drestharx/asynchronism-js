import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

//EN ESTE CASO BUSCAREMOS AGREGAR INFORMACION A LA API

function postData(urlApi, data) {
    //esta funcion mandara la informacion a la url de la api
    //dentro de la const response se tiene la url a la que tiene q conectarse
    //y despues en forma de un objeto mandara la informacion a guardar
    //de acuerdo a un formato particular
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response;
}

const data = {
    "title": "New Product Course",
    "price": 1000000,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));//una vez transformada la data a json, mostrara la API con el producto agregado