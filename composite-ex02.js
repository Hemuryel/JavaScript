function composicao(fn1, fn2, fn3) {
    // técnica currying + lazy evaluation (só processa quando receber todos parâmetros necessários e deixa o processamento para o mais tarde possível)
    return function(valor) {
        return fn3(fn2(fn1(valor)))
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

console.log(exagerado('cuidado com o buraco'))
console.log(exagerado('para'))