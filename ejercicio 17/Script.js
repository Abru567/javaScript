// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
// resultado
let Array1=[];
console.log("Array sin eliminar sus elementos:");
for(let i=0;i<5;i++){
    Array1[i]=[Math.floor(Math.random() * 100)];
    console.log(Array1[i]);
}
console.log("Array con los elementos eliminados:");
Array1.splice(Array1.length-2,2);
for(let i=0;i<Array1.length;i++){
console.log(Array1[i]);
}


