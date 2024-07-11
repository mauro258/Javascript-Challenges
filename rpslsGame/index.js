import readline from "readline";

// Definir las reglas del juego
const rules = {
  piedra: ["tijera", "lagarto"],
  papel: ["piedra", "spock"],
  tijera: ["papel", "lagarto"],
  lagarto: ["spock", "papel"],
  spock: ["tijera", "piedra"],
};

// Función para determinar el ganador de una ronda
function determineWinner(player1, player2) {
  if (player1 === player2) return "Tie";
  if (rules[player1].includes(player2)) return "Player 1";
  return "Player 2";
}

// Función para calcular quién gana más partidas
function calculateWinner(games) {
  let player1Wins = 0;
  let player2Wins = 0;

  games.forEach((game) => {
    const [player1, player2] = game;
    const winner = determineWinner(player1, player2);
    if (winner === "Player 1") player1Wins++;
    if (winner === "Player 2") player2Wins++;
  });

  if (player1Wins > player2Wins) return "Player 1";
  if (player2Wins > player1Wins) return "Player 2";
  return "Tie";
}

// Solicitar entrada del usuario
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

async function main() {
  const numberOfGames = parseInt(
    await askQuestion("Introduce el número de partidas: ")
  );

  if (isNaN(numberOfGames) || numberOfGames <= 0) {
    console.log("Por favor, introduce un número válido de partidas.");
    return;
  }

  const games = [];
  for (let i = 0; i < numberOfGames; i++) {
    const player1Move = await askQuestion(
      `Introduce el movimiento del Jugador 1 para la partida ${
        i + 1
      } (piedra, papel, tijera, lagarto, spock): `
    );
    const player2Move = await askQuestion(
      `Introduce el movimiento del Jugador 2 para la partida ${
        i + 1
      } (piedra, papel, tijera, lagarto, spock): `
    );
    games.push([player1Move.toLowerCase(), player2Move.toLowerCase()]);
  }

  const result = calculateWinner(games);
  console.log(`Resultado: ${result}`);
}

main();
