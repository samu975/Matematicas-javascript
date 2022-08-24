class Rectangulo {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    get perimetro(){
        return `${this.calcularPerimetro()}cm`
    }

    get area(){
        return `${this.calcularArea()}cm2`
    }

    calcularPerimetro(){
        return (this.base *2) + (this.altura *2)
    }

    calcularArea(){
        return (this.base * this.altura)
    }
}

class Triangulo {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    get perimetro(){
        return `El perimetro es: ${this.calcularPerimetro()}cm`
    }
    get area(){
        return `El area es: ${this.calcularArea()}cm2`
    }
    
    calcularPerimetro(){
        return (this.base) + (this.altura*2)
    }
    calcularArea(){
        return(this.base * this.altura) / 2
    }
}

const myTriangulo = new Triangulo(2, 5)

console.log(myTriangulo.area)