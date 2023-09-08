//Escribir una función flecha que reciba una palabra y la devuelva al revés.
let palabra = prompt("ingrese una palabra");
let invertirCadena = cadena => cadena.split("").reverse().join("");
alert(invertirCadena(palabra));
