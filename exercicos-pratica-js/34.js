function caracteresContidos(string1, string2) {
    let str1 = string1.toLowerCase()
    let str2 = string2.toLowerCase()

    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            return false
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            return false
        }
    }

    return true
}

console.log(caracteresContidos("Hello", "world"))
console.log(caracteresContidos("Hello", "oleH"))
console.log(caracteresContidos("OpenAI", "iNtelligence"))