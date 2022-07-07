/*Lucas Carrizo 1ro G
1.Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let prod1;
    let prod2;
    let prod3;

	prod1=(document.getElementById('txtIdPrecioUno').value);
	prod1=parseInt(prod1);
    prod2=(document.getElementById('txtIdPrecioDos').value);
	prod2=parseInt(prod2);
    prod3=(document.getElementById('txtIdPrecioTres').value);
	prod3=parseInt(prod3);

    let suma
    suma=prod1+prod2+prod3;

    alert(suma);
    
}
function Promedio () 
{
    let prod1;
    let prod2;
    let prod3;

	prod1=(document.getElementById('txtIdPrecioUno').value);
	prod1=parseInt(prod1);
    prod2=(document.getElementById('txtIdPrecioDos').value);
	prod2=parseInt(prod2);
    prod3=(document.getElementById('txtIdPrecioTres').value);
	prod3=parseInt(prod3);

    let promed
    promed=(prod1+prod2+prod3)/3;


    alert(promed);
}
function PrecioFinal () 
{
    let prod1;
    let prod2;
    let prod3;

	prod1=(document.getElementById('txtIdPrecioUno').value);
	prod1=parseInt(prod1);
    prod2=(document.getElementById('txtIdPrecioDos').value);
	prod2=parseInt(prod2);
    prod3=(document.getElementById('txtIdPrecioTres').value);
	prod3=parseInt(prod3);

    let precioFinal
    precioFinal=(prod1+prod2+prod3)*1.21;

    alert(precioFinal);
}