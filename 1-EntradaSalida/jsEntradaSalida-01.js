/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let banderaDelPrimero;
	let edad;
	let nombre;
	let apellido;

	let nombreMaximo;
	let apellidoMaximo;
	let numeroMaximo;

	let nombreMinimo;
	let apellidoMinimo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero=1;
	respuesta=true;
	while(respuesta)
	{
		

		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		nombre=prompt("Ingrese su nombre");
		apellido=prompt("ingrese su apellido");
		if(banderaDelPrimero==0)
		{
			if(edad>numeroMaximo)
			{
				numeroMaximo=edad;
				nombreMaximo=nombre;
				apellidoMaximo=apellido;
			}
			else if(edad<numeroMinimo)
			{
				numeroMinimo=edad;
				nombreMinimo=nombre;
				apellidoMinimo=apellido;
			}
		}
		else
		{
			banderaDelPrimero=0;
			numeroMaximo=edad;
			nombreMaximo=nombre;
			apellidoMaximo=apellido;
			numeroMinimo=edad;
			nombreMinimo=nombre;
			apellidoMinimo=apellido;
		}
		respuesta=confirm("desea continuar? / Aceptar, Cancelar");

		
	}

	alert(nombreMaximo + "con una edad de "+ numeroMaximo+apellidoMaximo+ " es el mas adulto.");
}

