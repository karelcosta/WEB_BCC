// Declarando os vetores
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

let resultado1 = vetorInteiro.concat(vetorString, vetorDouble)
console.log("Resultado 1:", resultado1)

let resultado2 = [].concat(vetorInteiro, vetorString, vetorDouble)
console.log("Resultado 2:", resultado2)
