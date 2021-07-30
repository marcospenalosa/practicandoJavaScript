//Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
} 

//Código del triángulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 


function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

// Calcular altura de un triángulo isóceles
// Dos lados iguales, uno desigual
// h = Raíz cuadrada de ( lado igual ^2 ) - (lado desigual^2 / 4)
function alturaTrianguilo(lado1, lado2, lado3){
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
    return Math.sqrt(
        (ladoIgual * ladoIgual) - ((ladoDesigual * ladoDesigual) / 4)
    )

}

//Código del círculo


function diametroCirculo(radio){
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio){
    return diametroCirculo(radio) * PI;
} 


function areaCirculo(radio){
    return (radio * radio) * PI;
} 


// Interacción HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}









