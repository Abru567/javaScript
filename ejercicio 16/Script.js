// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.
let casa=[];
let rojo=[];
for(let i=0;i<5;i++){
    casa[i]=[Math.floor(Math.random() * 100)];
    rojo[i]=[Math.floor(Math.random() * 100)];
}
for(let i=0;i<5;i++){
console.log("array 1="+casa[i]);
console.log("array 2="+rojo[i]);
}
