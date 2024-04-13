function contarNumerosNoIntervalo(vetor) {
    let dentroIntervalo = 0
    let foraIntervalo = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }

    console.log("Quantidade de números no intervalo [10, 20]:", dentroIntervalo)
    console.log("Quantidade de números fora do intervalo [10, 20]:", foraIntervalo)
}

let numeros = [5, 10, 15, 20, 25, 30]
contarNumerosNoIntervalo(numeros)
