// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.
class Persona{
    nombre;
    edad;
    sexo;
    peso;
    altura;
 constructor(nombre,edad,sexo,peso,altura){
    this.nombre=nombre;
    this.edad=edad;
    this.sexo=sexo;
    this.peso=peso;
    this.altura=altura;
}
}
    let persona =[new Persona(prompt("ingrese nombre"),prompt("ingrese edad"),prompt("ingrese sexo('H' hombre, 'M' mujer, 'O' otro)"),prompt("ingrese peso"),prompt("ingrese altura"))];
console.log(persona)