function mostrar()
{
	//tomo la edad  
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad >= 18){
		alert("Es mayor de edad");
	} else if(edad >= 13){
		alert("Es adolescente");
	} else{
		alert("es niño")
	}



}//FIN DE LA FUNCIÓN