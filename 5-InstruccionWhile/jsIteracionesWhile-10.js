/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */


//IMPORTANTE: Este programa no considera el numero 0 como positivo.


function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let contPositivos=0;
	let contNegativos=0;
	let contCeros=0;
	let contPares=0;
	let promPositivos;
	let promNegativos;
	let diferenciaPosNeg;

	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

			if(numeroIngresado>0){
				sumaPositivos+=numeroIngresado;
				contPositivos++;
			}
			else if(numeroIngresado<0)
			{
				sumaNegativos+=numeroIngresado;
				contNegativos++;	
			}
			else{
				contCeros++;
			}
			
			if(numeroIngresado%2==0){
				contPares++;
			}
			
		
		respuesta=confirm("desea continuar?");
	}//fin del while
	promPositivos=sumaPositivos/contPositivos;
	promNegativos=sumaNegativos/contNegativos;
	diferenciaPosNeg=contPositivos-contNegativos;

	document.write("La suma de negativos es :"+sumaNegativos+"<br>"+
				"La suma de los positivos :"+sumaPositivos+"<br>"+
				"La cantidad de positivos es :"+contPositivos+"<br>"+
				"La cantidad de negativos es :"+contNegativos+"<br>"+
				"La cantidad de números pares es :"+contPares+"<br>"+
				"La cantidad de ceros es :"+contCeros+"<br>"+
				"El promedio de positivos es :"+promPositivos.toFixed(2)+"<br>"+
				"El promedios de negativos es :"+promNegativos.toFixed(2)+"<br>"+
				"la diferencia entre positivos y negativosos es :"+diferenciaPosNeg);

}//FIN DE LA FUNCIÓN