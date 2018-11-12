const axios = require('axios');

// Programaremos opciones sin necesidad de un comand, es decir, en la raiz

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true

    }

}).argv;

console.log(argv.direccion);

let encondedUrl = encodeURI(argv.direccion); //Codifica el texto en un codigo URL amigable para el browser

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl }&key=AIzaSyA0oxlBDviRVbEIn4T-fHwu7fi2MmDmSWo`)
.then(resp => {
    //console.log(resp); // Muestra el primer nivel de respuesta
    //console.log(resp.data);  // Muestra la estructura data, que es un arreglo 
    //console.log(resp.status); // Muestra la estructura status, que es un string

   // console.log(JSON.stringify(resp.data,undefined,2)) // Muestra la respuesta de manera más amigable, 
                                                        //el segundo parametro es para reemplazar valores en la respuesta, no lo usamos
                                                        //el tercer parametro es el espaciado


    /* Tarea indicar la direccion, la latitud y longitud*/

let location = resp.data.results[0];
    console.log('Dirección: ' , location.formatted_address);
    console.log('Latitud: ' , location.geometry.location.lat);
    console.log('Longitud: ' , location.geometry.location.lng);


})
.catch(e=> console.log('ERRORRR!!!',e))