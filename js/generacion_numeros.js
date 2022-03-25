function generarNumerosAleatorios() {
  let numeroAleatorio = parseFloat(Math.floor(Math.random() * (1 - 0 + 1)) + 0);
  document.write(numeroAleatorio);
  numeroAleatorio = parseFloat(Math.floor(Math.random() * (75 - 25 + 1) + 25));
  document.write(numeroAleatorio);
}

function generarNumerosAleatorios2() {
  let numeroAleatorio = parseFloat(Math.floor(Math.random() * (7 - 5 + 1)) + 5);
  document.write(numeroAleatorio);
}

function generarLetrasAleatorias() {
  let nombre = String(prompt("Ingrese su nombre"));
  let posicionLetra = parseInt(
    Math.floor(Math.random() * (nombre.length - 0 + 1 + 0))
  );
  let letraAleatoria = nombre.charAt(posicionLetra);
  document.write(
    "Letra Aleatoria: " + letraAleatoria + " Posicion: " + posicionLetra
  );
}
