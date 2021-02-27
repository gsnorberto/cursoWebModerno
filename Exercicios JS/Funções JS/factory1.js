//Factory é uma função que retorna um objeto
/*
// Factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
} */

/** Função genérica para instaciar objetos do tipo produto */
function criarProduto(nome, preco){
    return{
        nome, /** Não precisa colocar "nome: nome" */
        preco,
        desconto: 0.1 /** Valor fixo */
    }
}

const prod1 = criarProduto('cadeira', 50)
console.log(prod1)