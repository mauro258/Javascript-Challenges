import readline from 'readline'

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Función para calcular el BMI
  function calculateBMI(weight, height) {
    return weight / (height ** 2);
  }
  
  // Función para interpretar el BMI
  function interpretBMI(bmi) {
    if (bmi < 18.5) {
      return "Bajo peso";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidad";
    }
  }
  
  // Solicitar entrada del usuario para el peso
  readLine.question('Introduce tu peso en kilogramos: ', (weightInput) => {
    const weight = parseFloat(weightInput);
  
    // Solicitar entrada del usuario para la altura
    readLine.question('Introduce tu altura en metros: ', (heightInput) => {
      const height = parseFloat(heightInput);
  
      // Calcular el BMI
      const bmi = calculateBMI(weight, height);
  
      // Imprimir el BMI
      console.log(`Tu BMI es: ${bmi.toFixed(2)}`);
  
      // Interpretar y imprimir el resultado
      const interpretation = interpretBMI(bmi);
      console.log(`Interpretación: ${interpretation}`);
  
      // Cerrar la interfaz de readline
      readLine.close();
    });
  });