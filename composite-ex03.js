// mais flexível, aceita x funções
function composicao(...funcoes) {
    // técnica currying
    // currying é uma técnica de transformação de uma função que recebe múltiplos parâmetros
    return function(valor) {
        return funcoes.reduce((acc, fn) => {
            return fn(acc) //acc = acumulador, passar cada função para outra
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

const exagerado = composicao(
    gritar, 
    enfatizar, 
    tornarLento
)

const quaseExagerado = composicao(
    gritar, 
    enfatizar
)

console.log(exagerado('cuidado com o buraco'))
console.log(quaseExagerado('para'))

console.log(composicao(
    gritar,
    enfatizar
)('eita'))