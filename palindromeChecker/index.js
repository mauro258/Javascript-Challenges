import readline  from'readline';

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para verificar si una cadena es un palíndromo
function isPalindrome(inputString) {
  // Convertir la cadena a minúsculas y eliminar espacios y puntuación
  const sanitizedString = inputString.toLowerCase().replace(/[\W_]/g, '');

  // Invertir la cadena
  const reversedString = sanitizedString.split('').reverse().join('');

  // Comparar la cadena original con la invertida
  return sanitizedString === reversedString;
}

// Pedir al usuario que ingrese una cadena de texto
readLine.question('Introduce una cadena de texto: ', (inputString) => {
  // Verificar si la cadena es un palíndromo
  const result = isPalindrome(inputString);

  // Mostrar resultados
  if (result) {
    console.log('La cadena de texto es un palíndromo');
  } else {
    console.log('La cadena de texto no es un palíndromo');
  }

  readLine.close();
});
