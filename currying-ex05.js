function textoComTamanhoEntre(min){
    return function (max){
        return function (erro){
            return function (texto) {
                const tamanho = (texto || '').trim().length
            
                if (tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }

}

const p1 = { nome: 'A', preco: 19.88, desc: 0.25 }
textoComTamanhoEntre(4)(255)('Nome do produto inválido')(p1.nome)