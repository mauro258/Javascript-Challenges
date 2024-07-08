// Importamos el módulo readline para leer la entrada del usuario desde la consola
import readline from 'readline';

// Creamos una interfaz de lectura con readline
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para generar un nombre de usuario único
function generateUsername(nombre, apellido) {
  // Obtenemos las tres primeras letras del nombre y apellido (en minúsculas)
  const usernamePart1 = nombre.slice(0, 3).toLowerCase();
  const usernamePart2 = apellido.slice(0, 3).toLowerCase();
  
  // Generamos un número aleatorio entre 100 y 999
  const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  
  // Concatenamos las partes del nombre de usuario y el número aleatorio
  const username = `${usernamePart1}${usernamePart2}${randomNumber}`;
  
  // Retornamos el nombre de usuario generado
  return username;
}

// Solicitamos al usuario que ingrese su nombre
readLine.question('Ingresa tu nombre: ', (nombre) => {
  // Solicitamos al usuario que ingrese su apellido
  readLine.question('Ingresa tu apellido: ', (apellido) => {
    // Generamos el nombre de usuario llamando a la función con los datos ingresados
    const username = generateUsername(nombre, apellido);
    // Imprimimos el nombre de usuario generado
    console.log(`El nombre de usuario generado es: ${username}`);
    
    // Cerramos la interfaz de lectura
    readLine.close();
  });
});
