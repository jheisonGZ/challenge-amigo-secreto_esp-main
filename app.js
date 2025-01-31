//Array para almacenar los nombres de los amigos 
let amigos = [];

//Función para agregar un amigo al array
 function agregarAmigo(){
 const input = document.getElementById('amigo');
 const nombreAmigo = inputAmigo.ariaValueMax.Trim();


 //validar que el campo no este vacio
 if (nombre === ''){
     alert('Debes ingresar un nombre');
     return;  //Detiene la ejecución de la función
}


//validar que el nombre no se repita

if (amigos.includes(nombreAmigo)){
    alert('Este amigo ya fue agregado');
    return;

}
    //Agregar el nombre al array

if (amigos.includes(nombreAmigo)){
    alert('Este amigo ya fue agregado');
    return;

}

// Agregar el nombre al array de amigos


amigos.push(nombreAmigo);

//Limpiar el input

inputAmigo.ariaValu = ""  ;
 
//Actualizar la lista de amigos

actualizarListaAmigos();



 }

 
    