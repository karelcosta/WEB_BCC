function calcularCedulas(valor) {
    let cedulas100 = 0, cedulas50 = 0, cedulas10 = 0, cedulas5 = 0, cedulas1 = 0

    while (valor > 0) {
        if (valor >= 100) {
            cedulas100++
            valor -= 100
        } else if (valor >= 50) {
            cedulas50++
            valor -= 50
        } else if (valor >= 10) {
            cedulas10++
            valor -= 10
        } else if (valor >= 5) {
            cedulas5++
            valor -= 5
        } else {
            cedulas1++
            valor -= 1
        }
    }

    let resultado = "";
    if (cedulas100 > 0) {
        resultado += cedulas100 + " nota(s) de R$ 100. "
    }
    if (cedulas50 > 0) {
        resultado += cedulas50 + " nota(s) de R$ 50. "
    }
    if (cedulas10 > 0) {
        resultado += cedulas10 + " nota(s) de R$ 10. "
    }
    if (cedulas5 > 0) {
        resultado += cedulas5 + " nota(s) de R$ 5. "
    }
    if (cedulas1 > 0) {
        resultado += cedulas1 + " nota(s) de R$ 1. "
    }

    console.log(resultado)
}

calcularCedulas(18)
