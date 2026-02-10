var jugar = "SI";

while (jugar === "SI") {


  var numero_secreto = Math.floor(Math.random() * 8) + 1;
  var numero_ingresado;


  while (true) {
    numero_ingresado = parseInt(prompt("Ingresa un número entre 1 y 9"), 10);

    if (numero_ingresado >= 1 && numero_ingresado <= 9) {
      break; 
    } else {
      alert("Número inválido. Debes ingresar un número entre 1 y 9.");
    }
  }

  var eleccion = prompt(
    "¿Tu número es MAYOR, MENOR o IGUAL al de la computadora?"
  ).toUpperCase();

  var resultadoCorrecto = false;

  if (numero_ingresado > numero_secreto && eleccion === "Mayor") {
    resultadoCorrecto = true;
  } else if (numero_ingresado < numero_secreto && eleccion === "Menor") {
    resultadoCorrecto = true;
  } else if (numero_ingresado === numero_secreto && eleccion === "Igual") {
    resultadoCorrecto = true;
  }

  if (resultadoCorrecto) {
    alert(
      "La computadora eligió " + numero_secreto +
      ", Tu ingresaste " + numero_ingresado +
      ". Tu elección es correcta ;)¡Has adivinado!"
    );
  } else {
    alert(
      "La computadora eligió " + numero_secreto +
      ", Tu ingresaste " + numero_ingresado +
      ". Tu elección es incorrecta x__x."
    );
  }


  jugar = prompt("¿Desea jugar otra vez? (SI / NO)").toUpperCase()
}

alert("Gracias por jugar");