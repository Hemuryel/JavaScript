const forcarTextoComTamanhoEntre = min => max => erro => texto => {
    // currying permite salvar funções intermediárias, não é obrigatório passar todos parâmetros
    // lazy evaluation = só executado quando passado todos os parâmetros e deixa o processamento para o mais tarde possível
    const tamanho = (texto || '').trim().length

    if (tamanho < min || tamanho > max) {
        throw erro
    }
}

// reuso
const forcarTextoComTamanhoPadrao = forcarTextoComTamanhoEntre(4)(255)
const forcarNomeProdutoInvalido = forcarTextoComTamanhoPadrao('Nome do produto inválido')

const p1 = { nome: 'A', preco: 19.88, desc: 0.25 }
const p2 = { nome: 'AB', preco: 19.88, desc: 0.25 }

forcarTextoComTamanhoEntre(4)(255)('Nome do produto inválido')(p1.nome)
forcarTextoComTamanhoEntre(4)(255)('Nome do produto inválido')(p2.nome)

forcarTextoComTamanhoPadrao('Nome do produto inválido')(p1.nome)
forcarTextoComTamanhoPadrao('Nome do produto inválido')(p2.nome)

forcarNomeProdutoInvalido(p1.nome)
forcarNomeProdutoInvalido(p2.nome)