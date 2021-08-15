

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    //const inputPrice = document.getElementById("inputPrice");
    //const valuePrice = inputPrice.value; 

    //const inputDiscount = document.getElementById("inputDiscount");
    //const valueDiscount = inputDiscount.value;

    const precio = inputValue("inputPrice");
    const descuento = inputValue("inputDiscount");
    
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    const resultPrice = document.getElementById("precioDescuento")
    resultPrice.innerText = "El precio con descuento son: " + precioConDescuento + " €";
}



 //Cargamos los cupones validos o activos
 const cuponesValidos = [
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
    //const inputCupon = document.getElementById("inputCupon");
    //const valueCupon = inputCupon.value;
    const cuponUsuario = inputValue("inputCupon")

    const cuponComprobado = cuponesValidos.find(cupon => cupon.nombre == cuponUsuario);

    const cuponDescuento = document.getElementById("cuponDescuento")
    const inputDescuento = document.getElementById("inputDiscount")

    if(cuponComprobado){
        cuponDescuento.innerText = "Le corresponde un: " + cuponComprobado.descuento + " % de descuento";
        inputDescuento.value = cuponComprobado.descuento;
    }else{
        cuponDescuento.innerText = "Lo sentimos, no hay un cupón activo con ese nombre";
    }
}



function inputValue(idElementHtml){
    const input = document.getElementById(idElementHtml);
    return input.value;
}


