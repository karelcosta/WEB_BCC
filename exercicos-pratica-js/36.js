function multiplicarPorNumero(vetor, numero) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * numero)
    }
    return resultado
}

function multiplicarPorNumeroSeMaiorQue5(vetor, numero) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            resultado.push(vetor[i] * numero)
        } else {
            resultado.push(vetor[i])
        }
    }
    return resultado
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numero = 2

console.log("Resultado da multiplicação por", numero, "para todos os elementos:")
console.log(multiplicarPorNumero(vetor, numero))

console.log("\nResultado da multiplicação por", numero, "apenas para os elementos maiores que 5:")
console.log(multiplicarPorNumeroSeMaiorQue5(vetor, numero))
