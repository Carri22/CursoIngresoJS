function mostrar() {
	//tomo el mes
	let mesDelAño;
	let mensaje;
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Junio":
		case "Julio":
		case "Agosto":
			mensaje = "Agrigate que hace frio.";
			break;
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje = "Falta para el invierno";
			break;
		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;

	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN