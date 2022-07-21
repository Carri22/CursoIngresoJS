function mostrar() {
	let estadia;
	let mensaje;

	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	let estacionIngresada;
	estacionIngresada = document.getElementById("txtIdEstacion").value;

	estadia = 1500;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = "Se viaja"
					break;
				default:
					mensaje = "No se viaja"
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado) {
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja"
					break;
				default:
					mensaje = "No se viaja"
					break;
			}
			break;

		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = "Se viaja"
					break;
				default:
					mensaje = "No se viaja"
					break;
			}
			break;

		default:
			mensaje = "Se viaja"
			break;
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN
