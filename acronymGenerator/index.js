import readline  from'readline';

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para generar un acrónimo a partir de una frase
function generateAcronym(inputPhrase) {
  // Dividir la frase en palabras, tomar la primera letra de cada palabra, convertireadLinea a mayúscula y unireadLineas
  const acronym = inputPhrase
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
  return acronym;
}

// Pedir al usuario que introduzca una frase
readLine.question('Introduce una frase: ', (inputPhrase) => {
  // Generar el acrónimo
  const acronym = generateAcronym(inputPhrase);

  // Mostrar el acrónimo
  console.log(`El acrónimo es: ${acronym}`);

  readLine.close();
});
