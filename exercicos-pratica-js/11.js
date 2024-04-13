function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log(ano + " é um ano bissexto.")
        return true
    } else {
        console.log(ano + " não é um ano bissexto.")
        return false;
    }
}

console.log(ehBissexto(2020))
console.log(ehBissexto(2021))
