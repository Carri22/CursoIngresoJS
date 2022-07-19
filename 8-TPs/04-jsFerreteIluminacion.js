/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let lamparas;
    let precio = 35;
    let precioDescuento;
    let marca;
    let descuento;
    let precioAumento;
    let mensaje;

    marca = document.getElementById('Marca').value;
    lamparas = document.getElementById('txtIdCantidad').value;
    lamparas = parseInt(lamparas);
    
    descuento=1; 
    if (lamparas >= 6) {

        descuento = 0.50;
    }
    else {
        if (lamparas == 5) {
            if (marca == "ArgentinaLuz") {

                descuento = 0.60;
            }
            else {
                descuento = 0.70;
            }
        }
        else {
            if (lamparas == 4) {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {

                    descuento = 0.75;
                }
                else {
                    descuento = 0.80;
                }

            }
            else{
                if (lamparas == 3) {
                    if (marca == "ArgentinaLuz") {
    
                        descuento = 0.85;
                    }
                    else {
                        if(marca == "FelipeLamparas"){
                            descuento = 0.90;
                        }
                        else{
                            descuento = 0.95;
                        }
                    }
                }
               
            }
        }

        
    }
    precioDescuento = precio * lamparas * descuento;
        document.getElementById('txtIdprecioDescuento').value = precioDescuento.toFixed(2); 
         /*precioBruto=precio*lamparas;
        
        if(precioBruto>120){
            precioAumento= precioBruto*1.1;
            precioDescuento= (precio * lamparas * descuento)+precioAumento;
            document.getElementById('txtIdprecioDescuento').value = "usted pago de impuetos: "+precioAumento.toFixed(2)+"y pago en todal: "+precioDescuento.toFixed;
        }
        else{
            precioDescuento = precio * lamparas * descuento;
            document.getElementById('txtIdprecioDescuento').value = precioDescuento.toFixed(2); 
        }*/

}
