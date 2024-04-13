function trocarElementos(vetorA, vetorB) {
    if (vetorA.length !== vetorB.length) {
        console.log("Os vetores têm tamanhos diferentes.")
        return
    }

    for (let i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }

    console.log("Vetor A após a troca:", vetorA)
    console.log("Vetor B após a troca:", vetorB)
}

let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9, 10]

console.log("Vetor A antes da troca:", vetorA)
console.log("Vetor B antes da troca:", vetorB)

trocarElementos(vetorA, vetorB)
