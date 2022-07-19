/*Lucas Carrizo 1ro G
Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".*/ 
function mostrar()
{
	//tomo la edad
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if(edad==15){
		alert("niña bonita");
	}
	else{
		alert("No tiene 15");
	}
	
	

}//FIN DE LA FUNCIÓN