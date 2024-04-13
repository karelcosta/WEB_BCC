function contarNegativos(vetor) {
    let quantidadeNegativos = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            quantidadeNegativos++
        }
    }

    console.log("Quantidade de números negativos:", quantidadeNegativos)
}

let numeros = [5, -3, 10, -7, 0, -2]
contarNegativos(numeros)
