// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
// funcionamiento de la función Substring().

let frase = prompt("Ingrese una frase: ");
let frase2;
let frase3="";
for(let i=0;i<frase.length;i++){
frase2 = frase.substring(i,i+1);
frase3 =frase3+" "+frase2
}
alert(frase3);