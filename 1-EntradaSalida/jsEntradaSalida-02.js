/* 
1.	Se ingresan 5 importes, marca del producto 
y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

function mostrar()
{
	let importe;
	let marca;
	let pais;
	let flagImporte;
	flagImporte==true;
	let MinimoPais;
	let MaximoMarca;

	for(let i = 0; i<5; i++)
	{
		importe=prompt("ingrese el importe del producto");
		importe=parseInt(importe);

		while(isNaN(importe))
		{
			importe=prompt("Error, no ingreso un importe, vuelva intentarlo");
			importe=parseInt(importe);
		}

		marca=prompt("ingrese la marca del pruducto");

		pais=prompt("ingrese el pais de origen del producto").toLowerCase;
		while(pais!="china"&&pais!="uruguay"&&pais!="paraguay")
		{
			pais=prompt("Error, no ingreso un pais valido, vuelva a intentarlo").toLowerCase;
		}
		if(flagImporte==false){
			if(MaximoMarca<=importe)
			{
				MaximoMarca=importe;
			}
			else if(MinimoPais>=importe)
			{
				MinimoPais=importe;
			}

		}
		else{
			flagImporte==false;
			MinimoPais=importe;
			MaximoMarca=importe;
			
		}

	}

	alert("El maximo importe es: "+ MaximoMarca+ " de la marca "+marca+" y el minimo importe es: "+MinimoPais+" y pertenecese al pais de origen "+pais);
}

