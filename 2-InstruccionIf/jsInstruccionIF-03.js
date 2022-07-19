function mostrar()
{
	//tomo la edad  
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
    if(edad>=18){
		alert("es mayor de edad");
	}
	else{
		alert("No es mayor de edad");
	}
	

}//FIN DE LA FUNCIÓN