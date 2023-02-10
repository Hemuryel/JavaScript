// técnica currying
// currying é uma técnica de transformação de uma função que recebe múltiplos parâmetros
// torna função mais flexível
let soma = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(soma(1)(2)(3))