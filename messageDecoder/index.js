// Mensaje codificado
const encodedMessage = "El gato rojo tiene hambre";

// Diccionario de decodificación
const decodingDictionary = {
  gato: "agente",
  rojo: "secreto",
  hambre: "misión",
};

// Función para decodificar el mensaje
function decodeMessage(message, dictionary) {
  // Separar el mensaje en palabras
  const words = message.split(" ");

  // Reemplazar las palabras codificadas por sus equivalentes descodificadas
  const decodedWords = words.map((word) => {
    return dictionary[word] || word;
  });

  // Unir las palabras para formar el mensaje descodificado
  return decodedWords.join(" ");
}

// Decodificar el mensaje
const decodedMessage = decodeMessage(encodedMessage, decodingDictionary);

// Imprimir el mensaje descodificado
console.log("Mensaje codificado: ", encodedMessage);
console.log("Mensaje descodificado: ", decodedMessage);
