//console.log("Hola, World");

const h1 = document.querySelector('h1');//seleccionar por el nombre de la Etiqueta
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn    = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//tomar los eventos
form.addEventListener('click', sumaInputValues);//


function sumaInputValues(event){
 //como convertir los String en numero

event.preventDefault();//para que no se actualice el resultado con el envio de los datos(click)
const sumaInputs = parseInt(input1.value) + parseInt(input2.value);

pResult.innerText = "El resultado es: " + sumaInputs;

}





//PAra imprimir varios




/*Escribiendo HTML desde  JavaScript
*/

//Agregando Imagen
//const img = document.createElement('img');
//img.setAttribute('src', './Adriana-MT.png');

//pid.append(img);
//pid.replaceWith(img);

//----------------------------------------
//const p = document.querySelector('p');
//const parrafo = document.querySelector('.parrafo');
//const pid = document.getElementById('pid');//Ya no es necesario utilizar el #
//const input = document.querySelector('input');