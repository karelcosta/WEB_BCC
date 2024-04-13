
function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero"
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}
console.log(classificarTriangulo(5, 5, 5))
console.log(classificarTriangulo(5, 5, 6))
console.log(classificarTriangulo(3, 4, 5))
