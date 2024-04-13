function montanteJurosSimples(capital, taxa, tempo) {
    return capital * (1 + (taxa * tempo))
}

function montanteJurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa), tempo)
}

var capitalInicial = 1000
var taxaDeJuros = 0.05
var tempoDeAplicacao = 2

var montanteSimples = montanteJurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao)
console.log("Montante com juros simples: R$" + montanteSimples.toFixed(2))

var montanteComposto = montanteJurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao)
console.log("Montante com juros compostos: R$" + montanteComposto.toFixed(2))
