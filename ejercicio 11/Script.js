// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

let frase1 = prompt("ingrese una frase");
let palabra_mas_larga ="";
let frase2 = frase1.split(" ");
frase2.forEach(palabra => {
   if(palabra.length>palabra_mas_larga.length){
    palabra_mas_larga = palabra;
   };
});
alert(`la palabra mas larga de la frace es: ${palabra_mas_larga}`);