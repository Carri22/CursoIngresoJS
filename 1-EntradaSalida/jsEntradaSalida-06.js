/*Lucas Carrizo 1ro G
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1
	let numero2

	numero1=document.getElementById('txtIdNumeroUno').value;
	numero2=document.getElementById('txtIdNumeroDos').value;

	numero1=parseInt(numero1)
	numero2=parseInt(numero2)
	
	alert("la suma es: "+(numero1+numero2));
	
}

