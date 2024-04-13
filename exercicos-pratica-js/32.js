function calcularMedia(vetor) {
    if (vetor.length === 0) {
        console.log("O vetor está vazio.")
        return
    }

    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    let media = soma / vetor.length
    console.log("A média aritmética é:", media)
}

let numeros = [5, 10, 15, 20, 25]
calcularMedia(numeros)
