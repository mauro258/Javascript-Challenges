import readline from "readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to generate superhero name
function generateSuperheroName(nombre, animal) {
  // Capitalize the animal name (first letter uppercase)
  const animalCapitalized = animal.charAt(0).toUpperCase() + animal.slice(1);

  // Combine the capitalized animal name and the user's name
  const superheroName = `${animalCapitalized} ${nombre}`;

  return superheroName;
}

// Ask the user for their name and favorite animal
readLine.question("Ingrese su nombre: ", (nombre) => {
  readLine.question("Ingrese su animal favorito: ", (animal) => {
    // Generate the superhero name
    const superhero = generateSuperheroName(nombre, animal);

    // Show the superhero name to the user
    console.log(`Nombre de Superhéroe: ${superhero}`);

    readLine.close();
  });
});
