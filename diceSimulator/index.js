// Función para generar un número aleatorio entre 1 y 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Lanzar los dados
const dice1 = rollDice();
const dice2 = rollDice();

// Calcular la suma de los valores de los dados
const sum = dice1 + dice2;

// Imprimir los valores de los dados y su suma
console.log(`Valor del dado 1: ${dice1}`);
console.log(`Valor del dado 2: ${dice2}`);
console.log(`Suma de los valores de los dados: ${sum}`);
