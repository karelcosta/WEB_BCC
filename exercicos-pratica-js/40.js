function atribuirConceitos(notas) {
    let conceitos = []

    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i]
        let conceito

        if (nota >= 0 && nota <= 4.9) {
            conceito = 'D'
        } else if (nota >= 5 && nota <= 6.9) {
            conceito = 'C'
        } else if (nota >= 7 && nota <= 8.9) {
            conceito = 'B'
        } else if (nota >= 9 && nota <= 10) {
            conceito = 'A'
        } else {
            conceito = 'Nota inválida'
        }

        conceitos.push(conceito)
    }

    return conceitos
}

let notas = [7.5, 3.2, 9.8, 5.6, 6.9]
let conceitos = atribuirConceitos(notas)

console.log("Notas:", notas)
console.log("Conceitos:", conceitos)
