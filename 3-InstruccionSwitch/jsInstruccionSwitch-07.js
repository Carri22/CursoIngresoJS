/*switch ejr 7*/
function mostrar() {
	let destino;
	let mensaje;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
			mensaje="Oeste";
			break;
		case "Cataratas":
			mensaje="Norte";
			break;
		case "Mar del plata":
			mensaje="Este ";
			break;
		case "Ushuaia":
			mensaje="Sur";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN