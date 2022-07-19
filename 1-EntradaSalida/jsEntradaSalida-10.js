/*Lucas Carrizo 1ro G
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
function mostrarAumento()
{
	let numero1

	numero1=(document.getElementById('txtIdImporte').value);
	numero1=parseInt(numero1);
	numeroDescuento = (numero1/4)*3
	document.getElementById('txtIdResultado').value=numeroDescuento;
}
*/
function mostrarAumento()
{
	let numero1;
	let porcentaje;
	let numeroDescuento;

	numero1=(document.getElementById('txtIdImporte').value);
	numero1=parseInt(numero1);
	
	porcentaje=prompt("Ingrese porcentaje");
	porcentaje=parseInt(porcentaje);

	numeroDescuento = numero1-((porcentaje/100)*numero1);
	document.getElementById('txtIdResultado').value=numeroDescuento;
}
