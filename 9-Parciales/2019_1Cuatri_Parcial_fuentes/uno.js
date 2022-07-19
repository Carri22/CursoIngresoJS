/*Lucas Carrizo 1ro G
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt
 y que muestre el perímetro por alert. */
function mostrar() {
    
    let lado;
    let perimetro;

    lado = prompt("Ingrese la medida de los lados de un triangulo equilatero");
    lado = parseInt(lado);

    perimetro = lado * 3;
    alert(perimetro);

}
