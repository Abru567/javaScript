// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

let num = Number(prompt("Ingrese un numero par: "))

if(num%2==0){
alert(`El numero ${num} es par`)
}else if(num==0){
alert(`El numero ${num} no es par ni impar`)
}else{
alert(`El numero ${num} no es par`)
}