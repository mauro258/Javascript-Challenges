import readline  from'readline';

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para analizar el mensaje de texto
function analyzeMessage(inputMessage) {
  // Cantidad de caracteres en el mensaje, incluyendo espacios y signos de puntuación
  const characterCount = inputMessage.length;

  // Cantidad de palabras en el mensaje (considerando que las palabras están separadas por espacios)
  const wordCount = inputMessage.split(/\s+/).filter(word => word.match(/\b\w+\b/)).length;

  // Cantidad de oraciones en el mensaje
  const sentenceCount = (inputMessage.match(/[.!?]/g) || []).length;

  return {
    characterCount,
    wordCount,
    sentenceCount
  };
}

// Pedir al usuario que introduzca un mensaje de texto
readLine.question('Introduce un mensaje de texto: ', (inputMessage) => {
  // Analizar el mensaje
  const analysis = analyzeMessage(inputMessage);

  // Mostrar los resultados del análisis
  console.log(`Cantidad de caracteres: ${analysis.characterCount}`);
  console.log(`Cantidad de palabras: ${analysis.wordCount}`);
  console.log(`Cantidad de oraciones: ${analysis.sentenceCount}`);

  readLine.close();
});
