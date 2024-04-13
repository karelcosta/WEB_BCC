function calcularValorPlanoSaude(idade) {
    let valorBase = 100
    let adicional = 0

    if (idade < 10) {
        adicional = 80
    } else if (idade >= 10 && idade <= 30) {
        adicional = 50
    } else if (idade > 30 && idade <= 60) {
        adicional = 95
    } else {
        adicional = 130
    }

    let valorTotal = valorBase + adicional
    console.log("Valor a ser pago pelo plano de saúde: R$" + valorTotal.toFixed(2))
}

calcularValorPlanoSaude(5)
calcularValorPlanoSaude(25)
calcularValorPlanoSaude(40)
calcularValorPlanoSaude(65)