// Importamos el módulo readline para leer la entrada del usuario desde la consola
import readline from 'readline';

// Creamos una interfaz de lectura con readline
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generamos un número aleatorio entre 1 y 10 para que el jugador lo adivine
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3; // Número máximo de intentos permitidos

// Función para comenzar el juego de adivinanzas
function jugarAdivinanza() {
  // Preguntamos al jugador por su suposición
  readLine.question('Adivina el número secreto (entre 1 y 10): ', (respuesta) => {
    // Convertimos la respuesta del jugador a un número entero
    const suposicion = parseInt(respuesta);

    // Verificamos si la suposición es correcta
    if (suposicion === numeroSecreto) {
      console.log('¡Felicidades! ¡Has adivinado el número secreto!');
      readLine.close(); // Cerramos la interfaz de lectura
    } else if (suposicion > numeroSecreto) {
      console.log('Tu suposición es demasiado alta.');
      intentos--;
      if (intentos > 0) {
        console.log(`Te quedan ${intentos} intentos.`);
        jugarAdivinanza(); // Volvemos a preguntar al jugador
      } else {
        console.log(`¡Oh no! Has agotado tus intentos. El número secreto era ${numeroSecreto}.`);
        readLine.close(); // Cerramos la interfaz de lectura
      }
    } else {
      console.log('Tu suposición es demasiado baja.');
      intentos--;
      if (intentos > 0) {
        console.log(`Te quedan ${intentos} intentos.`);
        jugarAdivinanza(); // Volvemos a preguntar al jugador
      } else {
        console.log(`¡Oh no! Has agotado tus intentos. El número secreto era ${numeroSecreto}.`);
        readLine.close(); // Cerramos la interfaz de lectura
      }
    }
  });
}

// Comenzamos el juego llamando a la función principal
jugarAdivinanza();
