function calcularMediaPonderada(codigo, nota1, nota2, nota3) {
    if (codigo < 0) {
        console.log("Encerrando o programa...")
        return
    }

    const pesoMaiorNota = 4
    const pesoOutrasNotas = 3

    let maiorNota = Math.max(nota1, nota2, nota3)

    let media = (nota1 * pesoOutrasNotas + nota2 * pesoOutrasNotas + nota3 * pesoMaiorNota) / (pesoMaiorNota + 2 * pesoOutrasNotas)

    let situacao = (media >= 5) ? "APROVADO" : "REPROVADO"

    console.log("Código do aluno:", codigo)
    console.log("Notas:", nota1, nota2, nota3)
    console.log("Média:", media.toFixed(2))
    console.log("Situação:", situacao)
}

calcularMediaPonderada(1, 6, 7, 8)
calcularMediaPonderada(2, 4, 5, 5)
calcularMediaPonderada(-1)