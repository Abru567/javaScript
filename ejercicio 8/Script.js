// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.

var num=0;
var maximo=0;
var minimo=0;
var promedio =0;
var i = 0;
do{
    num=Number(prompt("ingrese numeros: "));
    if(maximo < num){ 
        maximo = num;
        console.log(num);
    }else if(minimo > num && num !=0){ 
        minimo = num;
        console.log(num);
    }else if(minimo==0){
    minimo=num;
    }
    promedio = promedio + num;
    i=1+i;
}while(num!=0);
promedio=promedio / (i-1);
alert(`
maximo = ${maximo}
minimo = ${minimo}
promedio = ${promedio}
`)