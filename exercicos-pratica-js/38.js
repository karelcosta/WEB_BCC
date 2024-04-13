function imprimirNumerosImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        let temp = inicio
        inicio = fim
        fim = temp
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

console.log("Números ímpares entre 0 e 100:")
imprimirNumerosImpares()

console.log("\nNúmeros ímpares entre 50 e 150:")
imprimirNumerosImpares(50, 150)

console.log("\nNúmeros ímpares entre 100 e 0:")
imprimirNumerosImpares(100, 0)
