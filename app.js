// Array para almacenar los nombres de los amigos 
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Aquí accedes al input
    const nombreAmigo = input.value.trim(); // Usamos input.value para obtener el valor

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Debes ingresar un nombre');
        return;  // Detiene la ejecución de la función
    }

    // Validar que el nombre no se repita
    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya fue agregado');
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista de amigos
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista de amigos
    listaAmigos.innerHTML = ""; // Borrar todo el contenido

    // Recorrer el array con un ciclo for
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento li por cada amigo
        const elemento = document.createElement('li');
        elemento.textContent = amigos[i];

        // Agregar el elemento a la lista
        listaAmigos.appendChild(elemento);
    }
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) { // Comprueba si el array está vacío.   
        alert('No hay amigos en la lista');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un número aleatorio entre 0 y la cantidad de array de amigos

    // Obtener el nombre sorteado   
    const amigoSorteado = amigos[indiceAleatorio]; // Usa el índice aleatorio para obtener el nombre del array

    // Mostrar el resultado en el html    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
