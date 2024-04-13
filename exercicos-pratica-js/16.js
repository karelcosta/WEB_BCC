function calculadora(numero1, operacao, numero2) {
    switch (operacao) {
        case '+':
            return numero1 + numero2
        case '-':
            return numero1 - numero2
        case '*':
            return numero1 * numero2
        case '/':
            return numero1 / numero2
        default:
            return "Operação inválida"
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(5, '-', 2))
console.log(calculadora(3, '*', 4))
console.log(calculadora(10, '/', 2))
console.log(calculadora(5, '%', 3))
