// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.
 let letra= prompt("solo puede ingresar n o s");
 if (letra== "s"||letra=="n") {
    alert("correcto")
 } else {
    alert("incorrecto")
 }