import readline from "readline";

// Creamos una interfaz de lectura con readline
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para calcular la propina
function calculateTip(billAmount, tipPercentage) {
  return (billAmount * tipPercentage) / 100;
}

// Preguntamos al usuario por el total de la factura
readLine.question("Ingrese el total de la factura: ", (billAmountInput) => {
  const billAmount = parseFloat(billAmountInput);

  // Preguntamos al usuario por el porcentaje de propina
  readLine.question(
    "Ingrese el porcentaje de propina que desea dejar: ",
    (tipPercentageInput) => {
      const tipPercentage = parseFloat(tipPercentageInput);

      // Calculamos la propina
      const tip = calculateTip(billAmount, tipPercentage);

      // Imprimimos la propina calculada
      console.log(`La propina que deberías dejar es: $${tip.toFixed(2)}`);

      // Cerramos la interfaz de lectura
      readLine.close();
    }
  );
});
