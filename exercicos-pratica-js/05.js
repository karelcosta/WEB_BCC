function formatarDinheiro(valor) {
    valor = Math.round(valor * 100) / 100
    
    var partes = valor.toString().split(".")
    var parteInteira = partes[0]
    var parteDecimal = partes.length > 1 ? partes[1] : "00"
    
    parteDecimal += "00"
    parteDecimal = parteDecimal.slice(0, 2)

    parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    return "R$" + parteInteira + "," + parteDecimal
}

console.log(formatarDinheiro(0.1 + 0.2))