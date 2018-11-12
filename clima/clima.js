const axios = require('axios');


const getclima = async(lat,lng) => {

    
    let encondedlatUrl = encodeURI(lat);
    let encondedlngUrl = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encondedlatUrl}&lon=${encondedlngUrl}&units=metric&appid=f95ffea44741a336ff2fb6cdc99c9133`);

    
    // if (resp.data.status ==="ZERO_RESULTS"){
    //     throw new Error(`No hay resultados para la ciudad ${direccion}`);
    // }

    let temp = resp.data.main.temp;
    //let coors = location.geometry.location;

    return temp
    
    // return {
    //     temperatura: temp
    // }


}

module.exports = {
    getclima
}