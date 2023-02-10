function composicao(fn1, fn2, fn3, valor) {
    return fn3(fn2(fn1(valor)))
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

const resultado = composicao(
    gritar, 
    enfatizar, 
    tornarLento, 
    'cuidado com o buraco'
)

console.log(resultado)