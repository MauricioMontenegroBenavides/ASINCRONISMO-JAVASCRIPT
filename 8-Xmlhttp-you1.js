// xmlhttp-request es un objeto para realizar las comunicaciones entre fronent y backend

const xhr=new XMLHttpRequest()// Instanciamos el objeto XMLHttpRequest

xhr.open('GET',url,true) // Con el metodo open le pasamos la petecion get, la url del servidor al cual nos conectamos, true para inf¿dicar que es una peticion asincrona
// si fuera sincronico seria false , es decir se DETIENE TODO EL JS hasta que se termine de ejecutar la funcion open()
// si fuera asincronico es true , es decir el resto del js se ejecuta normalmente , al momneto q se termina de jejecutar open, se ejecuta una funcion de callback(funcion de respuesta)
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){// 4 significa peticion finaliza 
        if(xhr.status===200){
            document.querySelector("#respuesta").innerHTML=xhr.responseText;
        }else{
            document.querySelector("#respuesta").innerHTML='peticion erronea '
        }
    }
    else{
        document.querySelector("#respuesta").innerHTML='espere....'
    }
}// Este objeto ajaax tiene una propiedad onreadystatechange, Aqui se procesa todos los cambios de estado, como eventos de conexion ,peticiones etc
// cada cambio de estado devuelve una respuesta diferente
//xhr.readyState es otra propiedad del objeto ajax , y nos indica el estado actual de la peticion
// Existen los estados(0,1,2,3,4(el estado 4 significa que termino todos los procesos que tenia q hacer, y puede ir a pedir la respuesta al ajax))
xhr.addEventListener('load', "FUNCION")// Esta linea indica q, cuando se termine la peticion la funcion decida dque hacer con esa informacion 
xhr.send()// Es el q realiza la petición y se ejecute el ajax
// al momento de realizar las peticiones y saber q una termino y poder enviar otra se utiliza los callbacks,pero las mas utilizadas son las promesas
// mientras la peticion se resuelve la pagina no se bloquea, los demas procesos siguen ejecutandose, esto es asincronia de js 


