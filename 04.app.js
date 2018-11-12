//******************************************* */
// Deveulve la temperatura mandando la ciudad
//******************************************* */

const clima = require('./clima/clima')
const lugar = require('./lugar/lugar')

// Programaremos opciones sin necesidad de un comand, es decir, en la raiz

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true

    }

}).argv;


let getinfo = async(direccion) =>{

    try{
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getclima(coors.lat,coors.lng);

    return `El clima en ${coors.direccion} es de ${temp}` 
    } catch(e){
        return `No se pudo obtener el clima para ${direccion}` 
    }
}

getinfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch(e=> console.log(e));

/* //Mi solucion:
lugar.getLugarLatLng(argv.direccion)
.then(resp =>{
    //console.log(resp);
    let temp;
    await clima.getclima(resp.lat,resp.lng)
    .then(resp2 =>{temp = resp2
        //console.log(resp,resp2)
    
    })
    .catch(ex => console.log(ex));

    console.log(resp,resp2)
    
})
.catch(e => console.log(e));

*/

