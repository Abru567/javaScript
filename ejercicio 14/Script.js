// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.

class libro{
    ISBN;
     Título;
    Autor;
    Número_de_páginas;
    constructor(){}
    libros_guardar(){
        this.ISBN=Number(prompt("Ingrese ISBN: "));
        this.Título=String(prompt("Ingrese Título: "));
        this.Autor=String(prompt("Ingrese Autor: "));
        this.Número_de_páginas=Number(prompt("Ingrese Numero de paginas"));
    };
    libros_mostrar(){
       alert(`ISBN: ${this.ISBN}, Título: ${this.Título}, Autor: ${this.Autor} y Numero de paginas: ${this.Número_de_páginas}`);
    };
};
let libros = new libro();
libros.libros_guardar();
libros.libros_mostrar();