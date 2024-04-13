function encontrarMaiorEMenor(vetor) {
    if (vetor.length === 0) {
        console.log("O vetor está vazio.")
        return
    }

    let maior = vetor[0]
    let menor = vetor[0]

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    console.log("Maior valor:", maior)
    console.log("Menor valor:", menor)
}

let numeros = [5, 10, 3, 8, 20]
encontrarMaiorEMenor(numeros)
