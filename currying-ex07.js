const forcarTextoComTamanhoEntre = min => max => erro => texto => {
    // currying permite salvar funções intermediárias, não é obrigatório passar todos parâmetros
    // lazy evaluation = só executado quando passado todos os parâmetros e deixa o processamento para o mais tarde possível
    const tamanho = (texto || '').trim().length

    if (tamanho < min || tamanho > max) {
        throw erro
    }
}

const aplicarValidacao = (fnValidacao, valor) => {
    try{
        fnValidacao(valor)
    } catch (e){
        return { erro: e };
    }
}


// reuso
const forcarTextoComTamanhoPadrao = forcarTextoComTamanhoEntre(4)(255)
const forcarNomeProdutoInvalido = forcarTextoComTamanhoPadrao('Nome do produto inválido')

const p1 = { nome: 'A', preco: 19.88, desc: 0.25 }
const p2 = { nome: 'AB', preco: 19.88, desc: 0.25 }
const p3 = { nome: 'ABCD', preco: 19.88, desc: 0.25 }

const r1 = aplicarValidacao(forcarNomeProdutoInvalido, p1.nome)
const r2 = aplicarValidacao(forcarNomeProdutoInvalido, p2.nome)
const r3 = aplicarValidacao(forcarNomeProdutoInvalido, p3.nome)

console.log(r1, r2, r3)