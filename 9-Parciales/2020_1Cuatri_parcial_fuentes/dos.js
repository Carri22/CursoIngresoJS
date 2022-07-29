/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
*/ /*Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar() 
{

  let nombrePais;
  let continente;
  let temperatura;
  let cantHabitantes;
  let cantTempPares;
  let paisMenosHab;
  let tempMin;
  let paisMenorTemp;
  let cont;
  let flag = true;
  let flagDos = true;
  let cantPaisTempCero;
  let promedio;


  let acuHabitantes;
  let sPaisMenosHab;

  acuHabitantes = 0;
  cont = 0;
  cantTempPares = 0;
  cantPaisTempCero = 0;

  while (cont < 3)
  {
    continente = prompt("Por favor ingrese el continente");
    continente = continente.toLowerCase();
    while (continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" && continente != "oceania") {
      continente = prompt("Por favor ingrese el continente");
      continente = continente.toLowerCase();
    }

    nombrePais = prompt("Por favor ingrese el pais");
    nombrePais = nombrePais.toLowerCase();

    cantHabitantes = prompt("Por favor ingrese la cantidad de habitantes");
    cantHabitantes = parseInt(cantHabitantes);
    while (isNaN(cantHabitantes) || cantHabitantes < 1 || cantHabitantes > 2000) {
      cantHabitantes = prompt("Por favor reingrese la cantidad de habitantes");
      cantHabitantes = parseInt(cantHabitantes);
    }

    temperatura = prompt("Ingrese la temperatura minima del territorio");
    temperatura = parseInt(temperatura);
    while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
      temperatura = prompt("Error, reingrese la temperatura");
      temperatura = parseInt(temperatura);
    }

    cont++;

    if (temperatura % 2 == 0) {
      cantTempPares++;
    }

    if (flag == true || sPaisMenosHab > cantHabitantes) {
      flag = false;
      sPaisMenosHab = cantHabitantes;
      paisMenosHab = nombrePais;
    }

    if (continente == "america") {
      if (temperatura < 0) {
        cantPaisTempCero++;
      }
  
    }
  
    if (flagDos == true || temperatura > tempMin) {
      tempMin = temperatura;
      paisMenorTemp = nombrePais;
    }

    acuHabitantes += cantHabitantes;
    //promedio = cantHabitantes/cont; 
  }

  promedio = cantHabitantes/cont; 
  
  document.write("La cantidad de temperaturas pares son : " + cantTempPares + "<br>");
  document.write("El nombredel pais con menos habitantes es: " + paisMenosHab + "<br>");
  document.write("el promedio de habitantes entre los paises ingresados es: " + promedio + "<br>");
  document.write("la temperatura minima ingresada es: " + tempMin + " pertence al pais: " + paisMenorTemp);

}



