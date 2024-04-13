function analisarPontuacoes(pontuacoes) {
    const pontuacoesArray = pontuacoes.split(" ").map(Number);
    let recordeMaximo = pontuacoesArray[0]
    let recordeMinimo = pontuacoesArray[0]
    let recordeMaximoContador = 0
    let piorJogo = 0

    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (pontuacoesArray[i] > recordeMaximo && i > 0) {
            recordeMaximo = pontuacoesArray[i]
            recordeMaximoContador++
        } else if (pontuacoesArray[i] < recordeMinimo) {
            recordeMinimo = pontuacoesArray[i]
            piorJogo = i
        }
    }

    return [recordeMaximoContador, piorJogo + 1]
}

const pontuacoes = "10 20 20 8 25 3 0 30 1";
const resultado = analisarPontuacoes(pontuacoes)
console.log("Número de vezes que bateu o recorde máximo: " + resultado[0])
console.log("Número do pior jogo: " + resultado[1])
