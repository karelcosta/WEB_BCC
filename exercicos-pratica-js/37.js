function progressaoAritmetica(n, a1, r) {
    let termos = []
    let soma = 0;
    for (let i = 0; i < n; i++) {
        let termo = a1 + i * r
        termos.push(termo)
        soma += termo
    }
    console.log("Termos da progressão aritmética:", termos)
    console.log("Soma dos elementos da progressão aritmética:", soma)
}

function progressaoGeometrica(n, a1, r) {
    let termos = []
    let soma = 0;
    for (let i = 0; i < n; i++) {
        let termo = a1 * Math.pow(r, i)
        termos.push(termo)
        soma += termo
    }
    console.log("Termos da progressão geométrica:", termos)
    console.log("Soma dos elementos da progressão geométrica:", soma)
}

console.log("Progressão Aritmética:")
progressaoAritmetica(5, 2, 3)

console.log("\nProgressão Geométrica:")
progressaoGeometrica(5, 2, 3)
