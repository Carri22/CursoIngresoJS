/*Lucas Carrizo 1ro G
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
function mostrarAumento()
{
	let numero1

	numero1=(document.getElementById('txtIdSueldo').value);
	numero1=parseInt(numero1);
	aumento = (numero1/10)+numero1;
	document.getElementById('txtIdResultado').value=aumento;
}*/
function mostrarAumento()
{
	let numero1
	let porcentaje

	numero1=(document.getElementById('txtIdSueldo').value);
	numero1=parseInt(numero1);
	porcentaje=prompt("ingrese un porcentaje");
	porcentaje=parseInt(porcentaje);
	aumento = ((porcentaje/100)+1)*numero1;
	document.getElementById('txtIdResultado').value=aumento;
}