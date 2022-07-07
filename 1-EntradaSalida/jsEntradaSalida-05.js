/*Lucas Carrizo 1ro
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	nombreIngresado=document.getElementById('txtIdNombre').value;
	let edadIngresada;
	edadIngresada=document.getElementById('txtIdEdad').value;
	alert("Usted se llama "+ nombreIngresado+ " y tiene"+edadIngresada);
	
}

