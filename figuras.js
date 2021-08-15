//Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
} 

//Código del triángulo

function perimetroTriangulo(lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
} 

function areaTriangulo(base, altura){
    const areaTriangulo = (base * altura) / 2;
    //Devuelvo 2 decimales
    return Math.round((areaTriangulo + Number.EPSILON) * 100) / 100;
} 

// Calcular altura de un triángulo isóceles
// Dos lados iguales, uno desigual
// h = Raíz cuadrada de ( lado igual ^2 ) - (lado desigual^2 / 4)
function alturaTriangulo(lado1, lado2, lado3){
    //Buscamos cuales son los lados iguales
    let ladoIgual;
    let ladoDesigual;
    if(lado1 == lado2){
        ladoIgual = lado1; 
        ladoDesigual = lado3;
    }else if(lado1 == lado3){
        ladoIgual = lado1;
        ladoDesigual = lado2;
    }else{ //lado2 == lado3 
        ladoIgual = lado2; 
        ladoDesigual = lado1;
    }
    // Devolvemos el cálculo de la altura del triángulo
    const alturaTrianguilo = Math.sqrt((ladoIgual * ladoIgual) - ((ladoDesigual * ladoDesigual) / 4))
    return Math.round((alturaTrianguilo + Number.EPSILON) * 100) / 100;

}

//Código del círculo

const PI = Math.PI;

function diametroCirculo(radio){
    return radio + 2;
}

function perimetroCirculo(radio){
    const perimetro = diametroCirculo(radio) * PI;
    return Math.round((perimetro+ Number.EPSILON) * 100) / 100;
} 

function areaCirculo(radio){
    const area = radio * radio * PI
    return Math.round((area + Number.EPSILON) * 100) / 100;
}


// Interacción HTML

function inputValue(idElementHtml){
    const input = document.getElementById(idElementHtml);
    return input.value;
}

function calcularDatosTriangulo(){
    const lado1 = inputValue("inputTrianguloLado1");
    const lado2 = inputValue("inputTrianguloLado2");
    const base = inputValue("inputTrianguloBase");

    const perimetro =  perimetroTriangulo(lado1, lado2, base);
    const altura = alturaTriangulo(lado1, lado2, base);
    const area = areaTriangulo(base, altura);

    const resultTriangulo = document.getElementById("resultTriangulo")
    resultTriangulo.innerText = "El perimetro es: " + perimetro + "\n" +
                                "La altura es: " + altura + "\n" +
                                "El área es: " + area;
}

function calcularDatosCuadrado(){
    const lado = inputValue("inputCuadrado");
    const perimetro = perimetroCuadrado(lado);
    const area = areaCuadrado(lado);

    const resultCuadrado = document.getElementById("resultCuadrado")
    resultCuadrado.innerText = "El perimetro es: " + perimetro + "\n" +
    "El área es: " + area;
}


function calcularDatosCirculo(){
    const radio = inputValue("inputCirculo");
    const perimetro = perimetroCirculo(radio);
    const area = areaCirculo(radio);

    const resultCirculo = document.getElementById("resultCirculo")
    resultCirculo.innerText = "El perimetro es: " + perimetro + "\n" +
    "El área es: " + area;
}









