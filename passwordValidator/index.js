import readline  from"readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para validar la contraseña
function validatePassword(password) {
  const errors = [];

  // Verificar la longitud mínima
  if (password.length < 8) {
    errors.push("La contraseña debe tener al menos 8 caracteres de longitud.");
  }

  // Verificar si contiene al menos una letra mayúscula
  if (!/[A-Z]/.test(password)) {
    errors.push("La contraseña debe contener al menos una letra mayúscula.");
  }

  // Verificar si contiene al menos una letra minúscula
  if (!/[a-z]/.test(password)) {
    errors.push("La contraseña debe contener al menos una letra minúscula.");
  }

  // Verificar si contiene al menos un número
  if (!/[0-9]/.test(password)) {
    errors.push("La contraseña debe contener al menos un número.");
  }

  return errors;
}

// Pedir al usuario que ingrese la contraseña
readLine.question("Ingrese una contraseña: ", (password) => {
  // Validar la contraseña
  const validationErrors = validatePassword(password);

  // Mostrar resultados
  if (validationErrors.length === 0) {
    console.log("Contraseña válida");
  } else {
    console.log("La contraseña no cumple con los siguientes requisitos:");
    validationErrors.forEach((error) => console.log(`- ${error}`));
  }

  readLine.close();
});
