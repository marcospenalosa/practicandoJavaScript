function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    //El método reduce recorre todos los elementos del array | array.reduce(sumatorio, ElementoDelArray) |
    // Se llama reduce, porque REDUCE todos los elementos a 1.
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumaLista = lista.reduce( (valorAcumulado = 0, ElementoDelArray) => valorAcumulado + ElementoDelArray);

    let promedio = sumaLista / lista.length;
    return promedio;
}


//Función que ayuda a ordenar elementos NUMÉRICOS con el uso del método sort() en un Array
// function comparar (elemento1 , elemento2){
//     return elemento1 - elemento2;
// } 

const comparar = (elemento1, elemento2) => elemento1 - elemento2;




function esPar(numero){

    if(numero % 2 === 0){
        return true;
    }else{
        return false
    }
}

function calcularMediana(lista){
    //Ordeno la lista que recibo con el método sort() ayudado de la función comparar()
    const listaOrdenada = lista.sort(comparar);

    //parseInt devuelve el entero sin redondear --> 2.99 = 2
    const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);

    let mediana
    // Cuando la lista es par, la mediana se calcula sobre los dos elementos del medio de la lista
    if(esPar(listaOrdenada.length)){
        // Una lista con 6 elementos, las dos posiciones del medio son la 3 y la 4
        // Pero los vectores comienzan en la posición 0, yo recibo que la posición del medio es la 3
        // Él índice 3 corresponde a la posición 4 del vector [0,1,2,3] 
        // Por eso resto una posición
        const elementos = [
            listaOrdenada[mitadListaOrdenada - 1],
            listaOrdenada[mitadListaOrdenada]
        ]
        mediana = calcularMediaAritmetica(elementos)
    }else{
        mediana = listaOrdenada[mitadListaOrdenada];
    }
    return mediana;
}

function calcularModa(lista){
    const listaToObject = {};
    //El metodo map recorre los elementos de un Array
    lista.map(
        function (elemento){
            if(listaToObject[elemento]){
                listaToObject[elemento] += 1;
            }else{
                listaToObject[elemento] = 1;
            }
        }  
    );
     //Convierto el objeto en Array, con lo que obtengo un Array con Arrays como datos
    //Ordeno de menor a mayor por el segundo elemento del array de cada dato, que es la cantidad de veces que se repite
    const objectToArray = Object.entries(listaToObject).sort((elemento1, elemento2) => elemento1[1] - elemento2[1]);
    const moda = objectToArray[objectToArray.length - 1];
    return moda;
}

const lista1 = [
  3,5,12
];


//La media geométrica consiste en multiplicar los elementos y calcular la raiz "enésima" de esa multiplicación
// Si tengo una lista de 3 elementos (5,10,3) --> 5 * 10 * 3 = 150 --> Ráiz cubica (3 elementos) de 150
function calcularMediaGeometrica(lista){
    //Al ser una multiplicación el primer valor tiene que ser 1, sino siempre da 0.
    let totalMultiplicado = 1;

    //Transformo la función en función flecha
    //lista.forEach(function (elemento){
    //     total = total * elemento;
    //     return total
    //     } 
    //)

    //Recorro el vector para calcular la multiplicación de sus elementos
    lista.forEach(elemento => totalMultiplicado = totalMultiplicado * elemento);

    //Guardo el número de elementos que hay en el vector para la raíz.
    const enesima = lista.length;

    //Para calcular la raíz "enésima" se puede utilizar la potencia con un exponente divido
    //Si necesito la ráiz octava de 200 => 200 elevado a 1 / 8 
    const mediaGeometrica = Math.pow(totalMultiplicado, 1 / enesima);   
    return mediaGeometrica;
}
