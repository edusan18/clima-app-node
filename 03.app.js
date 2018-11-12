//******************************************* */
// Devuelve la temperatura mandando la latitud y longitud
//******************************************* */

const clima = require('./clima/clima')
// Programaremos opciones sin necesidad de un comand, es decir, en la raiz

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true

    }

}).argv;




clima.getclima(9.9280694,-84.0907246)
.then(resp =>{
    console.log(resp);
})
.catch(e => console.log(e));
//console.log(argv.direccion);

