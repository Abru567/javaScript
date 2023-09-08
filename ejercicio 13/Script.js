// Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
// 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

class persona {
    nombre;
    edad;
    sexo;
    peso;
    altura;
    constructor(nombre,edad,sexo,peso,altura){
this.nombre= nombre;
this.edad=edad;
this.sexo=sexo;
this.peso=peso;
this.altura=altura;
    }
}
let persona1=new persona(String(prompt("ingrese nombre:")),Number(prompt("ingrese edad:")),String(prompt("ingrese sexo(h/hombre,m/mujer o o/otro):")),Number(prompt("ingrese peso:")),Number(prompt("ingrese altura:")));
alert(`propiedades: ${persona1.nombre}, ${persona1.edad}, ${persona1.sexo}, ${persona1.peso} y ${persona1.altura}`)