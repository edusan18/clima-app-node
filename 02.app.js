//******************************************* */
// Ejercicio 01 optimizado
//******************************************* */

const lugar = require('./lugar/lugar')
// Programaremos opciones sin necesidad de un comand, es decir, en la raiz

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true

    }

}).argv;


lugar.getLugarLatLng(argv.direccion)
.then(resp =>{
    console.log(resp);
})
.catch(e => console.log(e));
//console.log(argv.direccion);

