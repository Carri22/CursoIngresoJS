
/*
Carrizo Lucas 1G
 
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 

//Nivel Ninja;
se pide la altura , 
la edad y 
la estacion del año en la que nacio(invierno,verano , otoño, primavera)
i) la nota y nombre de la persona mas alta
j) de los nacidos en otoño el primer varon
k) de los adolescente el nombre del mas bajo en altura
L) la estacion del año que mas alumnos nacieron
M) el sexo , nombre, edad y altura del primer aprobado
*/

function mostrar() {
  let sexo;
  let nombre;
  let nota;
  let altura;
  let edad;
  let estacion;

  let promedio;
  let minAlum;
  let minNota;
  let minSexo;
  let mayDesaprobados;
  let promedioAprobado;
  let promedioNotasMujeres = 0;
  let nombreMinAltura;
  let alturaMinima;
  let minAltura;

  let contNOtasAprobadas;
  let cantAprobados;

  let alturaMax;
  let nombreMaxAltura;
  let notaMaxAltura;

  let acuNotas = 0;
  let contNotas = 0;
  let notasMaySeis = 0;
  let aproMujeres = 0;
  let desaprobadosMuj = 0;
  let desaprobadosHomb = 0;
  let contNotasMujeres = 0;
  let contNotasHom = 0;
  let acuNotasTotalesMuj = 0;
  let contMujeres = 0;

  let contOtoño = 0;
  let contInvierno = 0;
  let contVerano = 0;
  let contPrimavera = 0;


  let flagHombres = true;
  let flagMujeres = true;
  let flagMenorNota = true;
  let flagAltura = true;
  let flagOtoño = true;
  let flagAdolecentes = true;
  let flagPrimerAprobado = true;

  let primerAltura;
  let primerNombreApro;
  let primerEdad;
  let primerSexo;
  let minAdolecente;
  let masNacidosEn;

  let primNotaMuj;
  let primerNombre;

  for (let i = 0; i < 5; i++) {
    nombre = prompt("ingrese su nombre");

    sexo = prompt("ingrese su sexo, f para femenino, m para masculino").toLowerCase();
    while (sexo != "f" && sexo != "m") {
      sexo = prompt("Error, no ingreso una sexo valido, vuelva a intentarlo").toLowerCase();
    }

    nota = prompt("ingrese la nota, entre 0 y 10").toLowerCase();
    nota = parseInt(nota);
    while (isNaN(nota) || 0 > nota || nota > 10) {
      nota = prompt("Error, no ingreso una nota valida, vuelva a intentarlo").toLowerCase();
      nota = parseInt(nota);
    }

    altura = prompt("ingrese su altura en cm").toLowerCase();
    altura = parseInt(altura);
    while (isNaN(altura)) {
      altura = prompt("Error, no ingreso una altura valida, vuelva a intentarlo").toLowerCase();
      altura = parseInt(altura);
    }
    edad = prompt("ingrese su edad").toLowerCase();
    edad = parseInt(edad);
    while (isNaN(edad)) {
      edad = prompt("Error, no ingreso una edad valida, vuelva a intentarlo").toLowerCase();
      edad = parseInt(edad);
    }
    estacion = prompt("ingrese la estacion del año en que nacio").toLowerCase();
    while (estacion != "invierno" && estacion != "verano" && estacion != "otoño" && estacion != "primavera") {
      estacion = prompt("Error, no ingreso una sexo valido, vuelva a intentarlo").toLowerCase();
    }

    contNotas++;
    acuNotas += nota;

    if (flagMenorNota == true) {
      flagMenorNota = false;
      minAlum = nombre;
      minNota = nota;
      minSexo = sexo;
    }
    else if (minNota >= nota) {
      minAlum = nombre;
      minNota = nota;
      minSexo = sexo;
    }

    switch (sexo) {
      case "f":
        acuNotasTotalesMuj += nota;
        contMujeres++;
        if (flagMujeres == true) {
          flagMujeres = false;
          primNotaMuj = nota;
          primerNombre = nombre;
        }

        if (nota > 5) {
          aproMujeres++;
          contNotasMujeres += nota;
        }
        else {
          desaprobadosMuj++;
        }
        break;

      case "m":
        if (nota >= 6) {
          notasMaySeis++;
          contNotasHom += nota;
        }
        else {
          desaprobadosHomb++;
        }
    }
    if (flagAltura == true) {
      flagAltura == false;
      alturaMinima = altura;
      nombreMinAltura = nombre;

    }
    else {
      alturaMax = altura;
      alturaMinima = altura;
      nombreMinAltura = nombre;
    }

    switch (estacion) {
      case "invierno": {
        contInvierno++;
        break;
      }
      case "otoño": {
        contOtoño++;
        if (sexo == "m") {
          if (flagOtoño == true) {
            flagOtoño = false;
            nombreOtoño = nombre;
          }
        }
        break;
      }
      case "primavera": {
        contPrimavera++;
        break;
      }
      case "verano": {
        contVerano++;
      }
    }

    if (edad > 12 && edad < 18) {
      if (flagAdolecentes == true) {
        flagAdolecentes = false;
        minAdolecente = nombre;
        minAltura = altura;

      }
      else if (minAltura >= altura) {
        minAdolecente = nombre;
        minAltura = altura;
      }
    }

    if (nota > 5) {
      if (flagPrimerAprobado == true) {
        flagPrimerAprobado = false;
        primerNombreApro = nombre;
        primerEdad = edad;
        primerSexo = sexo;
        primerAltura = altura;
      }
    }

  }

  if (contInvierno > contOtoño && contInvierno > contPrimavera && contInvierno > contVerano) {
    masNacidosEn = "invierno";
  }
  else if (contOtoño > contPrimavera && contOtoño > contVerano) {
    masNacidosEn = "otoño";
  }
  else if (contPrimavera > contVerano) {
    masNacidosEn = "primavera";
  }
  else {
    masNacidosEn = "verano";
  }

  promedio = acuNotas / contNotas;
  promedio.toFixed(2);

  if (desaprobadosHomb > desaprobadosMuj) {
    mayDesaprobados = "el seño que mas desaprobo fueron los hombres";
  }
  else if (desaprobadosMuj > desaprobadosHomb) {
    mayDesaprobados = "el sexo que mas desaprobo fueron las mujeres";
  }
  else {
    mayDesaprobados = "ambos sexos desaprobaron la misma cantidad de veces";
  }

  cantAprobados = aproMujeres + mayDesaprobados;
  contNOtasAprobadas = contNotasMujeres + contNotasHom;
  promedioAprobado = contNOtasAprobadas / cantAprobados
  promedioAprobado.toFixed(2);

  promedioNotasMujeres = acuNotasTotalesMuj / contMujeres;
  promedioNotasMujeres.toFixed(2);

  alert("El promedio de las notas totales es:" + promedio);
  alert("la nota mas baja es: " + minNota + " del alumno " + minAlum + " que pertenece al sexo " + minSexo);
  alert("la cantidad de hombres con notas mayores o iguales a 6 fueron: " + notasMaySeis);
  alert("La nota de la primer mujer ingresada es de: " + primNotaMuj + " y su nombre es:" + primerNombre);
  alert("La cantidad de mujeres aprobadas es de: " + aproMujeres + " y la cantidad de hombres aprobados es de: " + notasMaySeis);
  alert(mayDesaprobados);
  alert("El promedio de los aprobados es: " + promedioAprobado);
  alert("el promedio de mujeres es de: " + promedioNotasMujeres);
  //nivel ninja
  alert("El alumno " + nombreMaxAltura + " es el mas alto con una altura de " + alturaMax + " y una nota de " + notaMaxAltura);
  alert("El primer varon que nacio en otoño es: " + nombreOtoño);
  alert("El adolecente mas bajo es: " + minAdolecente);
  alert("La estacion en la que nacieron mas es: " + masNacidosEn);
  alert("el los datos (sexo , nombre, edad y altura) del primer aprobado son: " + primerSexo + " " + primerNombreApro + " " + primerEdad + " " + primerAltura);

} 