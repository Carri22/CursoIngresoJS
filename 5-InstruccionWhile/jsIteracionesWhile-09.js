/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero=1;
	respuesta=true;
	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(!banderaDelPrimero)
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			else if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		else
		{
			banderaDelPrimero=0;
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}

		respuesta=confirm("desea continuar? / Aceptar, Cancelar");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;

}//FIN DE LA FUNCIÓN