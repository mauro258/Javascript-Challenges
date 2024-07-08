import readline from "readline";

// Creamos una interfaz de lectura con readline
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
  // Fórmula: F = C * 9/5 + 32
  return (celsius * 9) / 5 + 32;
}

// Función para convertir Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
  // Fórmula: C = (F - 32) * 5/9
  return ((fahrenheit - 32) * 5) / 9;
}

// Preguntamos al usuario por la temperatura en grados Celsius
readLine.question(
  "Introduce la temperatura en grados Celsius: ",
  (celsiusInput) => {
    // Convertimos la entrada del usuario a un número flotante
    const temperaturaCelsius = parseFloat(celsiusInput);
    // Llamamos a la función para convertir Celsius a Fahrenheit
    const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
    // Imprimimos el resultado de la conversión en español
    console.log(
      `${temperaturaCelsius} grados Celsius son ${temperaturaFahrenheit.toFixed(
        2
      )} grados Fahrenheit.`
    );

    // Preguntamos al usuario por la temperatura en grados Fahrenheit
    readLine.question(
      "Introduce la temperatura en grados Fahrenheit: ",
      (fahrenheitInput) => {
        // Convertimos la entrada del usuario a un número flotante
        const temperaturaFahrenheit = parseFloat(fahrenheitInput);
        // Llamamos a la función para convertir Fahrenheit a Celsius
        const temperaturaCelsius = fahrenheitToCelsius(temperaturaFahrenheit);
        // Imprimimos el resultado de la conversión en español
        console.log(
          `${temperaturaFahrenheit} grados Fahrenheit son ${temperaturaCelsius.toFixed(
            2
          )} grados Celsius.`
        );

        // Cerramos la interfaz de lectura
        readLine.close();
      }
    );
  }
);
