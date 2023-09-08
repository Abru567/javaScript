// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial.

let valor_limite =Number(prompt("Ingrese el valor limite: "));
let suma=0;
do {
    let num = Number(prompt("Ingrese un numero hasta superar el valor limite: "));
    suma = suma + num;
} while (suma <= valor_limite);

alert("Ya supero el valor limite")