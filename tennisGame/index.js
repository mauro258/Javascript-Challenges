// Función para simular un juego de tenis
function playTennisGame(points) {
  // Jugadores
  let player1 = 0;
  let player2 = 0;

  // Puntuaciones en términos de índice
  const scores = ["Love", 15, 30, 40, "Deuce", "Advantage"];

  // Función para determinar el estado del juego
  function gameStatus() {
    if (player1 >= 3 && player2 >= 3) {
      if (player1 === player2) {
        return "Deuce";
      } else if (player1 > player2) {
        return "Advantage P1";
      } else {
        return "Advantage P2";
      }
    } else {
      return `${scores[player1]} - ${scores[player2]}`;
    }
  }

  // Iterar sobre los puntos
  for (let point of points) {
    if (point === "P1") {
      player1++;
    } else if (point === "P2") {
      player2++;
    } else {
      console.log(`Error: Entrada no válida (${point})`);
      return;
    }

    // Mostrar estado actual del juego
    console.log(gameStatus());

    // Determinar si hay ganador
    if (player1 >= 4 && player1 - player2 >= 2) {
      console.log("Ha ganado el P1");
      return;
    } else if (player2 >= 4 && player2 - player1 >= 2) {
      console.log("Ha ganado el P2");
      return;
    }
  }
}

// Ejemplo de uso con una secuencia dada
const pointsSequence = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];
console.log("Secuencia de puntos:", pointsSequence);
playTennisGame(pointsSequence);
