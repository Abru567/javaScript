// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// radio del círculo lo proporcionará el usuario.

class Circulo{
    perimetro;
    area;
    radio;
    constructor(){}
    AgregarRadio(){
        this.radio=Number(prompt("Ingrese el radio del circulo"));
    }
    CalcularPerimetro(){
        this.perimetro=(2*Math.PI)*this.radio;
    }
    CalcularArea(){
        this.area=Math.PI*(this.radio**2);
    }
    MostrarCirculo(){
        alert(`Perimetro= ${this.perimetro}
        Area=${this.area}`);
    }
}
let circulo=new Circulo();
circulo.AgregarRadio();
circulo.CalcularPerimetro();
circulo.CalcularArea();
circulo.MostrarCirculo();





