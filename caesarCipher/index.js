import readline from "readline";

// Creamos una interfaz de lectura con readline
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para cifrar el mensaje usando el Cifrado César
function caesarCipher(message, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedMessage = "";

  // Convertir el mensaje a minúsculas para manejar mayúsculas y minúsculas de manera uniforme
  message = message.toLowerCase();

  for (let i = 0; i < message.length; i++) {
    const char = message[i];

    // Si el carácter es una letra
    if (alphabet.includes(char)) {
      const charIndex = alphabet.indexOf(char);
      let newIndex = (charIndex + shift) % alphabet.length;

      // Manejar índices negativos
      if (newIndex < 0) {
        newIndex += alphabet.length;
      }

      encryptedMessage += alphabet[newIndex];
    } else {
      // Si el carácter no es una letra, se añade tal cual
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

// Solicitar al usuario que ingrese el mensaje a cifrar
readLine.question("Ingrese el mensaje a cifrar: ", (message) => {
  // Solicitar al usuario que ingrese el desplazamiento
  readLine.question("Ingrese el desplazamiento: ", (shiftInput) => {
    const shift = parseInt(shiftInput);

    // Cifrar el mensaje
    const encryptedMessage = caesarCipher(message, shift);

    // Imprimir el mensaje cifrado
    console.log(`El mensaje cifrado es: ${encryptedMessage}`);

    // Cerrar la interfaz de lectura
    readLine.close();
  });
});
