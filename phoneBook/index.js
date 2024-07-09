import readline from "readline";

// Creamos una interfaz de lectura con readline
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Objeto para almacenar los contactos de la agenda telefónica
let phoneBook = {};

// Función para agregar un contacto a la agenda
function addContact(name, phone) {
  phoneBook[name] = phone;
  console.log(`¡Contacto ${name} agregado a la agenda!`);
}

// Función para buscar un contacto en la agenda
function findContact(name) {
  if (phoneBook.hasOwnProperty(name)) {
    console.log(`El número de teléfono de ${name} es: ${phoneBook[name]}`);
  } else {
    console.log(`El contacto ${name} no se encontró en la agenda.`);
  }
}

// Solicitamos al usuario que ingrese el nombre y el teléfono del contacto a agregar
readLine.question("Ingrese el nombre del contacto: ", (name) => {
  readLine.question("Ingrese el número de teléfono: ", (phone) => {
    // Agregamos el contacto llamando a la función con los datos ingresados
    addContact(name, phone);

    // Solicitamos al usuario que ingrese el nombre del contacto a buscar
    readLine.question(
      "Ingrese el nombre del contacto que desea buscar: ",
      (nameToFind) => {
        // Buscamos el contacto llamando a la función con el nombre ingresado
        findContact(nameToFind);

        // Cerramos la interfaz de lectura
        readLine.close();
      }
    );
  });
});
