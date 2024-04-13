function calcularValorPedido(codigo, quantidade) {
    let precoUnitario;
    switch (codigo) {
        case 100:
            precoUnitario = 3.00
            break
        case 200:
            precoUnitario = 4.00
            break
        case 300:
            precoUnitario = 5.50
            break
        case 400:
            precoUnitario = 7.50
            break
        case 500:
            precoUnitario = 3.50
            break
        case 600:
            precoUnitario = 2.80
            break
        default:
            console.log("Produto não existente.")
            return
    }
    const total = precoUnitario * quantidade
    console.log("Total a pagar: R$" + total.toFixed(2))
}

calcularValorPedido(100, 2)
calcularValorPedido(400, 1)
calcularValorPedido(700, 1)
