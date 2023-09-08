// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].


let matriz = [[3], [6], [9], [12], [15]];
let arreglo=[];
// let result = matriz.map(function(x){
//    x=x*2;
// });
// console.log(result);
const doc = document.getElementById("Matriz");
// for (let i = 0; i < 5; i++) {
//     doc.innerHTML = `array = ${result}`
// }
matriz = matriz.flat();
arreglo = matriz.slice(0, matriz.length);
arreglo = arreglo.slice(1, arreglo.length);
arreglo.push(18);
console.log(arreglo)
for (let i = 0; i < 5; i++) {
    doc.innerHTML = `array = ${arreglo}`
}