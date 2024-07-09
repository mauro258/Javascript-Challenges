import readline  from'readline';

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para invertir cada palabra de la frase
function invertirPalabras(frase) {
  // Dividir la frase en palabras
  const palabras = frase.split(' ');

  // Invertir cada palabra
  const palabrasInvertidas = palabras.map(palabra => {
    // Convertir la palabra en un array de caracteres, invertir el array y unireadLineo nuevamente
    return palabra.split('').reverse().join('');
  });

  // Unir las palabras invertidas para formar la frase invertida completa
  const fraseInvertida = palabrasInvertidas.join(' ');

  return fraseInvertida;
}

// Preguntar al usuario por la frase
readLine.question('Ingrese una frase para invertir las palabras: ', (respuesta) => {
  // Invertir las palabras de la frase ingresada por el usuario
  const fraseOriginal = respuesta;
  const fraseInvertida = invertirPalabras(fraseOriginal);

  // Mostrar resultados
  console.log(`Frase original: ${fraseOriginal}`);
  console.log(`Frase invertida: ${fraseInvertida}`);

  readLine.close();
});