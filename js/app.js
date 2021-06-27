let numero,texto,numero2;


const nombre = prompt("Cual es tu nombre?");
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript Moderno`;

numero = prompt("Digite un numero")
texto = prompt("Digite un texto")
numero2 = prompt("Digite otro numero")

if(numero >= 1000){
    alert('El número es mayor que 1000');}
else{
alert('El numero es menor menor que 1000') }

if(texto == "hola"){
    alert('que bueno digitaste hola');}
else{
alert('tu texto es diferente de hola') }

if((numero2 <=10)&&(numero2 >=50)){
    alert('Excelente el numero digitado esta entre 10 y 50');}
else{
alert('Que falla el numero no quedo entre 10 y 50') }

