import readline from "readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para encriptar el mensaje
function encryptMessage(inputMessage) {
  let encryptedMessage = "";

  for (let i = 0; i < inputMessage.length; i++) {
    let currentChar = inputMessage[i];

    // Encriptar letras minúsculas
    if (currentChar >= "a" && currentChar <= "z") {
      encryptedMessage += String.fromCharCode(
        ((currentChar.charCodeAt(0) - 97 + 1) % 26) + 97
      );
    }
    // Encriptar letras mayúsculas
    else if (currentChar >= "A" && currentChar <= "Z") {
      encryptedMessage += String.fromCharCode(
        ((currentChar.charCodeAt(0) - 65 + 1) % 26) + 65
      );
    }
    // Mantener caracteres no alfabéticos sin cambios
    else {
      encryptedMessage += currentChar;
    }
  }

  return encryptedMessage;
}

// Pedir al usuario que introduzca un mensaje
readLine.question("Introduce un mensaje para encriptar: ", (inputMessage) => {
  // Encriptar el mensaje
  const encryptedMessage = encryptMessage(inputMessage);

  // Mostrar el mensaje encriptado
  console.log(`Mensaje encriptado: ${encryptedMessage}`);

  readLine.close();
});
