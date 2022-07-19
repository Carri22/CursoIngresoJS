/*Lucas Carrizo 1ro G
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let centígrados;
    fahrenheit=(document.getElementById('txtIdTemperatura').value);
    centígrados=(fahrenheit - 32) * (5/9);
    alert(centígrados.toFixed(1));
    

    
}

function CentigradosFahrenheit () 
{
	let fahrenheit;
    let centígrados;
    centígrados=(document.getElementById('txtIdTemperatura').value);
    fahrenheit=(centígrados * 9/5) + 32;
    alert(fahrenheit.toFixed(1));
}
