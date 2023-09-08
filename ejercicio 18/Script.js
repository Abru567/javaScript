// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos
var valores = [true, 5, false, "hola", "adios", 2];
function A() {
    let palabragrande = "";
    valores.forEach(element => {
        if (typeof element == "string") {
            if (element.length > palabragrande.length) {
                palabragrande = element;
            }
        }
    });
    return palabragrande;
}
function B() {
    let verd = valores[0] || valores[2];
    let falso = valores[0] && valores[2]
    alert(verd, falso);
}
function C() {
    var suma = 0;
    var resta = 0;
    var multi = 1;
    var div=1;
    var modulo =1;
    valores.forEach(element => {
        if (typeof element == "number") {
            suma += element;
            resta -= element;
            multi *= element;
            div /= element;
            modulo %= element;
        }
    });
    alert(`Resultados:
    Suma = ${suma}
    Resta = ${resta}
    Multiplicacion = ${multi}
    División = ${div}
    Modulo = ${modulo}`)
}
alert(`La palabra mas grande del array: ${A()}`);
B();
C();
