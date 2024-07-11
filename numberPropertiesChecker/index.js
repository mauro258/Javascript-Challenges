import readline from "readline";

// Función para verificar si un número es primo
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
}

// Función para verificar si un número es parte de la secuencia de Fibonacci
function isFibonacci(number) {
  function isPerfectSquare(x) {
    const s = Math.sqrt(x);
    return s * s === x;
  }

  // Un número es Fibonacci si 5*n^2 + 4 o 5*n^2 - 4 es un cuadrado perfecto
  return (
    isPerfectSquare(5 * number * number + 4) ||
    isPerfectSquare(5 * number * number - 4)
  );
}

// Función para verificar si un número es par
function isEven(number) {
  return number % 2 === 0;
}

// Función para solicitar el número al usuario y verificarlo
function checkNumberProperties(number) {
  const primeMessage = isPrime(number) ? "es primo" : "no es primo";
  const fibonacciMessage = isFibonacci(number)
    ? "es Fibonacci"
    : "no es Fibonacci";
  const evenMessage = isEven(number) ? "es par" : "es impar";

  console.log(`${number} ${primeMessage}, ${fibonacciMessage} y ${evenMessage}`);
}

// Función para solicitar entrada del usuario
function askQuestion(query) {
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    readLine.question(query, (answer) => {
      readLine.close();
      resolve(answer);
    })
  );
}

// Función principal para solicitar el número y mostrar los resultados
async function main() {
  const number = parseInt(await askQuestion("Introduce un número: "));

  if (isNaN(number)) {
    console.log("Por favor, introduce un número válido.");
    return;
  }

  checkNumberProperties(number);
}

main();
