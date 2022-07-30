/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar()
{
	
	let pais;
	let continente;
	let habitantes;
	let temperaruta;
	let minHabitantes;
	let miniPais;
	let minTemperatura;
	let minTempPais;
	let temperatura;
	

	let contPares=0;
	let contTemperatura=0;
	let contHabitantes=0;
	let promedio = 0;
	let flag=true;
	let flagTemperatura=true;


	for(let i = 0; i<5; i++){

		continente = prompt("ingrese un continente, america, asia o europa").toLowerCase();
		while (continente != "america" && continente != "asia" && continente != "europa")
		{
			continente = prompt("Error, no ingreso un continente valido, vuelva a intentarlo").toLowerCase();
		}
		pais = prompt("ingrese el pais").toLowerCase();

		habitantes = prompt("ingrese cantidad de habitantes");
		habitantes = parseInt(habitantes);

		while (isNaN(habitantes) || habitantes< 1||habitantes>2000) {
			habitantes = prompt("Error, no ingreso una cantidad de habitantes valida, vuelva intentarlo");
			habitantes = parseInt(habitantes);
		}

		temperatura = prompt("ingrese la temperatura").toLowerCase();
		temperatura = parseInt(temperatura);
		while (temperatura<-50||temperatura>50) {
			temperatura = prompt("Error, no ingreso una temperatura valida, vuelva a intentarlo").toLowerCase();
		}

		if(temperatura%2==0){
			contPares++;
		}

		if (flag == true)
		{
			flag = false;
			minHabitantes = habitantes;
			miniPais = pais;
		}
		else if (minHabitantes >= habitantes)
		{
			minHabitantes = habitantes;
			miniPais = pais;
		}

		if(continente=="america"){
			if(temperatura<0){
				contTemperatura++;
			}
		}

		contHabitantes+=habitantes;

		if (flagTemperatura == true)
		{
			flagTemperatura = false;
			minTemperatura = temperatura;
			minTempPais = pais;
		}
		else if (minTemperatura >= temperatura)
		{
			minTemperatura = temperatura;
			minTempPais = pais;
		}

	}
	promedio = contHabitantes/5;

	document.write("La cantidad de temperaturas pares son : " + contPares + "<br>");
	document.write("El pais con menos habitantes es: " + miniPais + "<br>");
	document.write("La cantidad de paises con temperaturas menores a 0 son : " + contTemperatura + "<br>");
	document.write("La temperatura minima ingresada es: " + minTemperatura +" y el pais al que pertenece es: " +minTempPais+"<br>");
	document.write("El promedio de habitantes ingresados por pais es de : " + promedio + "<br>");

}
