// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

let num1= Number(prompt("ingrese un numero: "));
let num2= Number(prompt("ingrese otro numero: "));

opciones=prompt("ingrese lo que desea hacer (S o s/suma, R o r/resta, M o m/multiplicacion y D o d/division")
switch (opciones) {
    case "s"|| "S":
        alert(`${num1} + ${num2} = ${num1+num2}`)
        break;
    case "r"||"R":
        alert(`${num1} - ${num2} = ${num1-num2}`)
        break;
    case "m"||"M":
        alert(`${num1} * ${num2} = ${num1*num2}`)
        break;
    case "d"||"D":
        alert(`${num1} / ${num2} = ${num1/num2}`)
        break;    
    default:
        alert("opcion ingresada incorrecta")
        break;
}