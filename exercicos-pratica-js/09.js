function arredondarNota(nota) {
    if (nota < 38) {
        return nota 
    }

    const proximoMultiploDe5 = Math.ceil(nota / 5) * 5
    if (proximoMultiploDe5 - nota < 3) {
        return proximoMultiploDe5
    } else {
        return nota
    }
}

function classificarAluno(nota) {
    const notaArredondada = arredondarNota(nota)
    if (notaArredondada >= 40) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

console.log(classificarAluno(84))
console.log(classificarAluno(29)) 
console.log(classificarAluno(38)) 
