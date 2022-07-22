/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let valor;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	
	
	do {
		valor=prompt("Ingrese un numero");
		valor=parseInt(valor);

		if(valor>=0)
		sumaPositivos+=valor
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*valor;
			respuesta=confirm("¿Quiere continuar ingresando numeros? / aceptar o cancelar")
		}

	} while (respuesta==true);
	if(multiplicacionNegativos==1){
		multiplicacionNegativos=0;
		document.getElementById('txtIdProducto').value=multiplicacionNegativos;
	}
	else{
		document.getElementById('txtIdProducto').value=multiplicacionNegativos;
	}
	document.getElementById('txtIdSuma').value=sumaPositivos;

}//FIN DE LA FUNCIÓN