import readline  from'readline';

// Creamos una interfaz de lectura con readline
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para validar una dirección de correo electrónico
function validateEmail(email) {
  // Comprobar que hay exactamente un símbolo de arroba (@)
  const atIndex = email.indexOf('@');
  if (atIndex === -1 || email.indexOf('@', atIndex + 1) !== -1) {
    return false;
  }

  // Comprobar que hay al menos un punto después del símbolo de arroba
  const dotIndex = email.indexOf('.', atIndex);
  if (dotIndex === -1) {
    return false;
  }

  // Comprobar que hay al menos un carácter antes del símbolo de arroba y después del punto
  if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
    return false;
  }

  return true;
}

// Solicitamos al usuario que ingrese una dirección de correo electrónico
readLine.question('Ingrese una dirección de correo electrónico: ', (email) => {
  // Validar la dirección de correo electrónico
  const isValid = validateEmail(email);

  // Imprimir un mensaje indicando si la dirección de correo electrónico es válida o no
  if (isValid) {
    console.log(`La dirección de correo electrónico "${email}" es válida.`);
  } else {
    console.log(`La dirección de correo electrónico "${email}" no es válida.`);
  }

  // Cerramos la interfaz de lectura
  readLine.close();
});