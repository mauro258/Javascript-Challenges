import readline from "readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para contar vocales y consonantes
function countVowelsAndConsonants(inputString) {
  // Convertir la cadena a minúsculas
  const lowerCaseString = inputString.toLowerCase();

  // Definir las vocales
  const vowels = "aeiou";

  let vowelCount = 0;
  let consonantCount = 0;

  // Contar vocales y consonantes
  for (let char of lowerCaseString) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char >= "a" && char <= "z") {
      consonantCount++;
    }
  }

  return { vowelCount, consonantCount };
}

// Pedir al usuario que ingrese una cadena de texto
readLine.question("Introduce una cadena de texto: ", (inputString) => {
  // Contar vocales y consonantes
  const { vowelCount, consonantCount } = countVowelsAndConsonants(inputString);

  // Mostrar resultados
  console.log(`Número de vocales: ${vowelCount}`);
  console.log(`Número de consonantes: ${consonantCount}`);

  readLine.close();
});
