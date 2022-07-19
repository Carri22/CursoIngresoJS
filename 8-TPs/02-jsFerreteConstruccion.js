/*Lucas Carrizo 1ro G

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo;
    let ancho;
    let cantidadAlambre;

    largo = document.getElementById('txtIdLargo').value;
    parseInt(largo);
    ancho = document.getElementById('txtIdAncho').value;
    parseInt(ancho);
    cantidadAlambre=(largo*2+ancho*2)*3;
    alert(cantidadAlambre.toFixed(1));
   
}

function Circulo() {
    let radio;
    let cantidadAlambre;

    radio = document.getElementById('txtIdRadio').value;
    parseInt(radio);
   
    cantidadAlambre=(2*3.14*radio)*3;
    alert(cantidadAlambre.toFixed(1));
   
}

function Materiales() {
    let largo;
    let ancho;
    let CantidadCemento;
    let CantidadCal

    largo = document.getElementById('txtIdLargo').value;
    parseInt(largo);
    ancho = document.getElementById('txtIdAncho').value;
    parseInt(ancho);

    CantidadCemento=largo*ancho*2;
    CantidadCal=largo*ancho*3;

    alert("Se necesitan "+CantidadCemento+" bolsas de cemento y "+CantidadCal+" bolsas de cal");

}