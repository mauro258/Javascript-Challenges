import readline from "readline";

// Creamos una interfaz de lectura con readline
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para validar el número de tarjeta de crédito utilizando el algoritmo de Luhn
function luhnAlgorithm(cardNumber) {
  // Convertimos el número de tarjeta de crédito en un array de dígitos
  const digits = cardNumber.split("").map(Number);
  let sum = 0;

  // Iteramos sobre los dígitos de derecha a izquierda
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    // Duplicar cada segundo dígito desde la derecha
    if ((digits.length - i) % 2 === 0) {
      digit *= 2;

      // Si el resultado es un número de dos dígitos, sumar esos dos dígitos
      if (digit > 9) {
        digit -= 9;
      }
    }

    // Sumar todos los dígitos
    sum += digit;
  }

  // El número es válido si la suma total es divisible por 10
  return sum % 10 === 0;
}

// Solicitar al usuario que ingrese el número de tarjeta de crédito
readLine.question(
  "Ingrese el número de tarjeta de crédito para validar: ",
  (cardNumber) => {
    // Validar el número de tarjeta de crédito
    const isValid = luhnAlgorithm(cardNumber);

    // Imprimir si el número es válido o no
    if (isValid) {
      console.log("El número de tarjeta de crédito es válido.");
    } else {
      console.log("El número de tarjeta de crédito no es válido.");
    }

    // Cerrar la interfaz de lectura
    readLine.close();
  }
);
