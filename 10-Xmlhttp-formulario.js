//Ventaja actualizar la pagina sin actualizarla completammente 
// Ventaja
//- Solicitar informacion
//- Recibir informacion 
//- Enviar informacion


// Xmlhttp es un objeto que intercambia datos , actualiza la pagina web sin recargar completamente 

var xhr= new  XMLHttpRequest() // Instanciamos el objetos XMLHttp-Request
// ahora ya se tienen acceso a los metodos y propiedades de este objeto
// METODOS
//.abort() Cancela el request 
//.open () Abrir la conexion y crear la linformacion basica.
//.send () Envia el request al servidor, la aenviar el send recien se hace la consulta la servidor. 
//.getAllResponseHeader() Retorna la informacion al header.
//.setRequestHeader() Agrega valores al header que se desea enviar

xhr.open('POST',url, true)

// Cuando se trabaja con formularios se debe utilizar el .setRequestHeader()
xhr.setRequestHeader('Contennt-type',"aplication/x-www-form-urlencoded") // Los argumentos son obligatorios para que los formularios trabajen correctamente
xhr.send("nombre=mauricio&&apellido=montenegro");
