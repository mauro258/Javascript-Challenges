import readline  from'readline';

// Función para contar las vocales tildadas en una palabra
function contarVocalesTildadas(palabra) {
    const vocalesTildadas = ['á', 'é', 'í', 'ó', 'ú'];
    let contador = 0;

    for (let letra of palabra.toLowerCase()) {
        if (vocalesTildadas.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

// Función principal para detectar el idioma
function detectarIdioma(palabra) {
    const numVocalesTildadas = contarVocalesTildadas(palabra);

    if (numVocalesTildadas > 0) {
        console.log(`La palabra "${palabra}" es probablemente en español.`);
    } else {
        console.log(`La palabra "${palabra}" es probablemente en inglés.`);
    }
}

// Interfaz para ingresar la palabra desde la consola
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Ingresa una palabra para detectar su idioma: ', (answer) => {
    detectarIdioma(answer);
    readLine.close();
});
