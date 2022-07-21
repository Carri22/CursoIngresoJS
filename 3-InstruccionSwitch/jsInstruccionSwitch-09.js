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
				case "Mar del plata":
					mensaje = estadia * 1.2;
					break;
				default:
					mensaje = estadia * 0.9;
					break;
			}
		break;

		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = estadia * 0.8;
				case "Mar del plata":
					mensaje = estadia * 1.2;
					break;
				default:
					mensaje = estadia * 1.1;
					break;
			}
		break;

		default:
			switch (destinoIngresado) {
				case "Cordoba":
					mensaje = estadia;
					break;
				default:
					mensaje = estadia * 1.1;
					break;
			}
		break;
	}
	alert(mensaje.toFixed(2));

}//FIN DE LA FUNCIÓN