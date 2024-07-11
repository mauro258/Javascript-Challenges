import readline from "readline";

// Función para generar una contraseña con los parámetros especificados
function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
  // Conjuntos de caracteres disponibles para la contraseña
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Comenzar con letras minúsculas
  let availableCharacters = lowercaseLetters;

  // Incluir letras mayúsculas si se especifica
  if (includeUppercase) {
    availableCharacters += uppercaseLetters;
  }

  // Incluir números si se especifica
  if (includeNumbers) {
    availableCharacters += numbers;
  }

  // Incluir símbolos si se especifica
  if (includeSymbols) {
    availableCharacters += symbols;
  }

  let password = "";

  // Generar la contraseña seleccionando caracteres al azar de los disponibles
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }

  return password;
}

// Función para hacer preguntas al usuario y obtener las respuestas
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

// Función asincrónica para solicitar parámetros al usuario y generar la contraseña
async function requestParametersAndGeneratePassword() {
  // Solicitar la longitud de la contraseña
  const length = parseInt(
    await askQuestion("Introduce la longitud de la contraseña (entre 8 y 16): ")
  );

  // Solicitar si se desean incluir letras mayúsculas
  const includeUppercase =
    (await askQuestion("¿Quieres incluir letras mayúsculas? (s/n): ")).toLowerCase() === "s";

  // Solicitar si se desean incluir números
  const includeNumbers =
    (await askQuestion("¿Quieres incluir números? (s/n): ")).toLowerCase() === "s";

  // Solicitar si se desean incluir símbolos
  const includeSymbols =
    (await askQuestion("¿Quieres incluir símbolos? (s/n): ")).toLowerCase() === "s";

  // Validar que la longitud esté dentro del rango permitido
  if (isNaN(length) || length < 8 || length > 16) {
    console.log("Longitud no válida. Debe ser un número entre 8 y 16.");
    return;
  }

  // Generar la contraseña con los parámetros especificados
  const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);

  // Imprimir la contraseña generada
  console.log(`Contraseña generada: ${password}`);
}

// Llamar a la función para solicitar parámetros y generar la contraseña
requestParametersAndGeneratePassword();
