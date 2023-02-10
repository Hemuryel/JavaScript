// técnica currying
// currying é uma técnica de transformação de uma função que recebe múltiplos parâmetros
// currying permite salvar funções intermediárias, não é obrigatório passar todos parâmetros
// torna função mais flexível
function soma(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(soma(1)(2)(3))