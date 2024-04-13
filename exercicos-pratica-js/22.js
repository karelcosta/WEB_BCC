function calcularValorAnuidade(mes, valorAnuidade) {
    if (mes === 1) {
        return valorAnuidade
    }

    let juros = 0.05
    let mesesPassados = mes - 1
    let valorTotal = valorAnuidade * Math.pow(1 + juros, mesesPassados)

    return valorTotal.toFixed(2)
}

console.log(calcularValorAnuidade(1, 100))
console.log(calcularValorAnuidade(2, 100))
console.log(calcularValorAnuidade(6, 100))