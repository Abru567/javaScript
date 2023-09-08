// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A de 50 números reales, 
// y el segundo B, un arreglo de 20 números, también reales. El
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// de 20.
var ArrayA = [];
var ArrayB = [];
const doc = document.getElementById("arrayA");
for (let i = 0; i < 50; i++) {
    ArrayA[i] = [Math.floor(Math.random() * 50)];
    doc.innerHTML = `arrayA = ${ArrayA}`
}
ArrayA.sort(function(a,b){
    return a-b;
});
console.log(ArrayA);
const doc2 = document.getElementById("arrayB");
for (let i = 0; i < 20; i++) {
    if(i<10){
        ArrayB[i] = ArrayA[i];
    } else {
        ArrayB.push(0.5);
    }
        doc2.innerHTML = `arrayB = ${ArrayB}`
}
console.log(ArrayB)