
function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 === altura2) {
        console.log("As crianças têm a mesma altura.")
        return
    }

    let anos = 0
    if (altura1 < altura2) {
        while (altura1 < altura2) {
            altura1 += taxa1
            altura2 += taxa2
            anos++
        }
        console.log("A criança menor ultrapassará a maior em", anos, "anos.")
    } else {
        while (altura2 < altura1) {
            altura1 += taxa1
            altura2 += taxa2
            anos++
        }
        console.log("A criança menor não ultrapassará a maior.")
    }
}

calcularCrescimento(120, 5, 110, 7)
calcularCrescimento(130, 4, 120, 5)
