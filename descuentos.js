
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "El precio con descuento son: " + precioConDescuento + " €";
}



 //Cargamos los cupones validos o activos
 let cuponesValidos = [
    {
        nombre: "cupon1",
        descuento: Math.round(Math.random() * (50 - 1) + 1)
    },
    {
        nombre: "cupon2",
        descuento: Math.round(Math.random() * (50 - 1) + 1)
    },
    {
        nombre: "cupon3",
        descuento: Math.round(Math.random() * (50 - 1) + 1)
    },
]

function onClickButtonCheckCupon(){
    const inputCupon = document.getElementById("inputCupon");
    const valueCupon = inputCupon.value;

    const cuponComprobado = cuponesValidos.find(cupon => cupon.nombre == valueCupon);

    const resultPrice = document.getElementById("resultPrice")

    if(cuponComprobado){
        resultPrice.innerText = "Le corresponde un: " + cuponComprobado.descuento + " % de descuento";
    }else{
        resultPrice.innerText = "Lo sentimos, no hay un cupón activo con ese nombre";
    }
}




