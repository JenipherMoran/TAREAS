alert("¿Quieres saber tu signo zodiacal?")

var diaTexto;
var dia;

while (true) {
  diaTexto = prompt("Ingresa tu día de nacimiento (1-31)");
  dia = parseInt(diaTexto, 10);

  if (dia >= 1 && dia <= 31) {
    break;
  } else {
  
    alert("Día invalido. Ingresa un número entero entre 1 y 31");
  }
}

var mesTexto;
var mes;

while (true) {
  mesTexto = prompt("Ingrese tu mes de nacimiento (1-12)");
  mes = parseInt(mesTexto, 10);

  if (mes >= 1 && mes <= 12) {
    break;
  } else {
    alert("Mes inválido. Ingrese un número entero entre 1 y 12");
  }
}

switch (mes) {
  case 1:
    mesIngresado = "Enero";
    break;
  case 2:
    mesIngresado = "Febrero";
    case 3:
    mesIngresado = "Marzo";
    break;
  case 4:
    mesIngresado = "Abril";
    break;
  case 5:
    mesIngresado = "Mayo";
    break;
  case 6:
    mesIngresado = "Junio";
    break;
  case 7:
    mesIngresado = "Julio";
    break;
  case 8:
    mesIngresado = "Agosto";
    break;
  case 9:
    mesIngresado = "Septiembre";
    break;
  case 10:
    mesIngresado = "Octubre";
    break;
  case 11:
    mesIngresado = "Noviembre";
    break;
  case 12:
    mesIngresado = "Diciembre";
}
var signo;

if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
  signo = "Acuario";
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
  signo = "Piscis";
} else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
  signo = "Aries";
} else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
  signo = "Tauro";
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
  signo = "Géminis";
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
  signo = "Cáncer";
} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
  signo = "Leo";
} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
  signo = "Virgo";
} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
  signo = "Libra";
} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
  signo = "Escorpio";
} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
  signo = "Sagitario";
} else {
  signo = "Capricornio";
}

alert ("Tu fecha de nacimiento es:"+ " " +dia+" " + "de" + " " + mesIngresado)
alert ("Tu signo zodiacal es"+ " " + signo)