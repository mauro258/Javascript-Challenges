// leetConverter.js
import readline from "readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para convertir texto a lenguaje "leet" o "1337"
function toLeetSpeak(text) {
  // Definir la tabla de transformación leet
  const leetTable = {
    a: "4",
    b: "8",
    e: "3",
    l: "1",
    o: "0",
    s: "5",
    t: "7",
  };

  // Convertir el texto a minúsculas para ser insensible a mayúsculas
  text = text.toLowerCase();

  // Inicializar la variable para almacenar el texto convertido
  let leetText = "";

  // Iterar sobre cada carácter del texto
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // Verificar si el carácter existe en la tabla leet
    if (leetTable[char]) {
      // Si existe, añadir la versión leet al texto convertido
      leetText += leetTable[char];
    } else {
      // Si no existe, añadir el carácter original al texto convertido
      leetText += char;
    }
  }

  // Devolver el texto convertido a lenguaje leet
  return leetText;
}

// Solicitar al usuario que ingrese un mensaje
readLine.question(
  'Ingrese un mensaje para convertir a "leet" o "1337": ',
  (answer) => {
    const textoConvertido = toLeetSpeak(answer);
    console.log("Texto original:", answer);
    console.log("Texto convertido a leet speak:", textoConvertido);
    readLine.close();
  }
);
