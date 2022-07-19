function mostrar() {
	//tomo la edad  
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if (edad >= 13 && edad <= 17) {
		alert("Es adolescente");
	}


}//FIN DE LA FUNCIÓN