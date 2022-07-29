/*
En el ingreso a un viaje en crucero nos solicitan 
nombre , 
edad(mayores de 18), 
sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros. 
*/
function mostrar() {

	let nombre;
	let edad;
	let sexo;
	let estado;
	let promedioMujeres;
	let promedioHombres;
	

	let minCasado;
	let nombreMinCasado;

	let maxEdad;
	let maxNombreEdad;
	let maxSexoEdad;

	let respuesta = true;
	let flagCasado = true;
	let flagEdad=true;

	let contEdadMujer=0;
	let contMujeres=0;
	let contMujeresEnTotal=0;
	let contHombres=0;
	let contEdadHombres=0;
	
	do {

		nombre = prompt("ingrese su nombre").toLowerCase();
		while (isNaN(nombre) == false) {
			nombre = prompt("Error, no ingreso un nombre valido, vuelva a intentarlo").toLowerCase();
		}

		edad = prompt("ingrese su edad").toLowerCase();
		edad = parseInt(edad);
		while (isNaN(edad)) {
			edad = prompt("Error, no ingreso una edad valida, vuelva a intentarlo").toLowerCase();
			edad = parseInt(edad);
		}

		sexo = prompt("ingrese el sexo, f para femenino, m para masculino").toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error, no ingreso un sexo valido, vuelva a intentarlo").toLowerCase();
		}

		estado = prompt("ingrese su estado civil, soltero o soltero/casado o casada/viudo o viuda").toLowerCase();
		while (estado != "soltero" && estado != "soltera" &&estado != "casado" && estado != "casada" && estado != "viudo" &&estado != "viuda") {
			estado = prompt("Error, no ingreso un estado civil valido, vuelva a intentarlo").toLowerCase();
		}

		if (estado == "casado") {
			if (flagCasado == true) {
				flagCasado = false;
				minCasado = edad;
				nombreMinCasado = nombre;
			}
			else if (minCasado > edad) {
				minCasado = edad;
				nombreMinCasado = nombre;
			}
		}


		if (flagEdad == true) {
			flagEdad = false;
			maxEdad = edad;
			maxNombreEdad = nombre;
			maxSexoEdad = sexo;
		}
		else if (maxEdad < edad) {
			maxEdad = edad;
			maxNombreEdad = nombre;
			maxSexoEdad = sexo;
		}

		if(sexo=="f"){

			contMujeresEnTotal++;
			contEdadMujer+=edad;

			if(estado=="casado" ||estado=="casado" || estado=="viuda"||estado=="viudo"){
				contMujeres++;
			}

		}
		else{
			if(estado=="soltero"){
				contHombres++;
				contEdadHombres+=edad;
			}
		}

		respuesta = confirm("desea continuar?");
	} while (respuesta == true);

	promedioMujeres = contEdadMujer/contMujeresEnTotal;
	promedioMujeres.toFixed(2);
	promedioHombres = contEdadHombres/contHombres;
	promedioHombres.toFixed(2);

	document.write("El nombre del hombre casado mas joven es: " + nombreMinCasado + "<br>");
	document.write("El nombre del pasajero mas viejo es: " + maxNombreEdad + " y su sexo es " +maxSexoEdad+"<br>");
	document.write("la cantidad de mujeres casadas y viudas son: " + contMujeres + "<br>");
	document.write("El promedio de edad de las mujeres es:  " + promedioMujeres + "<br>");
	document.write("El promedio de edad de los hombres solteros es:  " + promedioHombres + "<br>");
}
