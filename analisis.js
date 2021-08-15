const salariosCol = colombia.map( persona => persona.salary);

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);

const mediaAritmeticaCalculada = calcularMediaAritmetica(salariosColSorted);
const medianaCalculada = calcularMediana(salariosColSorted);


// Mediana del 10% top
const porcentajeTopDeMediana = 10;
// splice(posición inicial, posición final).
// Crea un nuevo array con los datos entre posición inicial y final y los SACA del array original.
// Busco la posición inicial con la ayuda de la  función de descuentos
// const salariosTop = salariosColSorted.splice(posStar, Count);

const posStart = calcularPrecioConDescuento(salariosColSorted.length, porcentajeTopDeMediana);
const Count = salariosColSorted.length - posStart;

// Busco la posición inicial con la ayuda de la  función de descuentos
// El método slice funciona igual que splice, pero no SACA los elementos del array original.

const salariosTop = salariosColSorted.slice(posStart, Count);
const medianaTopCalculada = calcularMediana(salariosTop)