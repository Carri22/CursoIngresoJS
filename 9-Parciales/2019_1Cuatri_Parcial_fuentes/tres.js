/*Lucas Carrizo 1ro G
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. */
function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio=prompt("ingrese el precio");
    precio=parseInt(precio);

    descuento=prompt("ingrese el descuento");
    descuento=parseInt(descuento);
    
    precioFinal=precio-((descuento/100)*precio);
    document.getElementById('elPrecioFinal').value=precioFinal;

}
