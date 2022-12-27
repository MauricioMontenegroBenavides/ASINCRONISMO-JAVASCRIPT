// Formas de expresar una funcion 
async function hola(){}
const hola1= async function(){}
const hola2=async ()=>{}
/////////////////////////////////
/////////////////////////////////
const hello=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{resolve("hello")},3000)
        } else{
            reject(new Error("SALIO ERROR "))
        }
})}

const otra=async ()=>{
    try {
      const c= await hello()// Aqui ejecutamos a la promesa 
    // const b=await hello2() Aqui se puede poner otras funciones u otras promesas 
      console.log(c)
      console.log('vamos') // TODO LO Q ESTA DENTRO DE LA FUNCION ASYNC ESPERA PARA EJECUTARSE 
    } 
    catch (error) {
       console.log(error)
    }
}

// OJO ASYNC Y AWAIT NO BLOQUEA LA APLICACION, HACE QUE CONTINUE EL FLUJO NORMAL 
console.log('antes')
otra() // TODO LO QUE ESTA AFUERA SIGUE EL FLUJO NORMAL 
console.log('despues')

