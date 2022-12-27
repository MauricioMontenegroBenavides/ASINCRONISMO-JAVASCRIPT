console.log("hola")
const url="https://api.escuelajs.co/api/v1/products"

// fetch es una api que nos permite hacer peticiones de una manera muy sencilla 
fetch(url) // Esta funcion nos devuelve una promesa 
// Las promesas se resuelven con el metodo then()
.then(res=>res.json())// Cuando cargamos una api hay q convertir esas respuesta a algo q JS pueda entender , por ejemplo un objeto, para eso se utiliza json
//la promesa then de arriba nos devuelve otra promesa
.then(data=>{// data ya tiene todo lo q viene desde la api, con esta informacion la recorro , la pinto en pantalla, la valido, etc
    // fetch es compatible con todos los navegadoress
   
    const x=document.querySelector("img")// MANIPULAMOS EL DOM
    x.src= data[0].url
    // url es la url de la imagen aleatoria que nos da la api 
     // La app JSON Viewer nos permite ver el formato json de una manera agradable
}
)
 