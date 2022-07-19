/*Lucas Carrizo 1ro G
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos,
 que sumados son xx kilos y el promedio de peso xx ". */
function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  let suma;
  let promedio;

  nombre1=prompt("ingrese el nombre de uno de los dos");
  peso1=prompt(nombre1+" ingresa tu peso");
  peso1=parseInt(peso1);

  nombre2=prompt("ingrese el nombre de la otra persona");
  peso2=prompt(nombre2+ " ingrese su peso");
  peso2=parseInt(peso2);

  suma=peso1+peso2;
  promedio=suma/2;

  alert("ustedes se llaman "+nombre1+" y "+nombre2+" ,pesan "+peso1+ " y "+peso2+" kilos,que sumados son " +suma+ " kilos y el promedio de peso es "+promedio);
}
