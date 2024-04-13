function calcularNovoSalario(plano, salarioAtual) {
    let novoSalario
    switch (plano) {
        case 'A':
            novoSalario = salarioAtual * 1.10
            break
        case 'B':
            novoSalario = salarioAtual * 1.15
            break
        case 'C':
            novoSalario = salarioAtual * 1.20
            break
        default:
            console.log("Plano inválido")
            return
    }
    console.log("Novo salário: R$" + novoSalario.toFixed(2))
}

calcularNovoSalario('A', 3000)
calcularNovoSalario('B', 2500)
calcularNovoSalario('C', 4000)
calcularNovoSalario('D', 3500)
