function divisao(D, d){
    result = 0
    if (D % d == 0 ){
        result = D / d
    } else {
        result = (D - (D % d) ) / d
    }
    console.log("resultado = "+result)
    console.log("resto = ",D%d)
}
divisao(9, 4)