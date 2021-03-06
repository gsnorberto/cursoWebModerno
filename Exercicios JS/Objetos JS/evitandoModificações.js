//Object.preventExtensions
/** Impede que o tamanho do objeto seja aumentado. Ou seja, não
 * é possível aumentar o número de atributos do objeto
 */
const produto = Object.preventExtensions({
    nome:'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto)) /** Mostra
que o objeto não é extensível */
produto.nome = 'Borracha'
produto.desc = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal----------------------------------------------------------------
/** Não consegue Adicionar nem excluir valores do objeto, apenas alterar */
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(peesoa))
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze
/**Não podem ser alterados, excluidos ou adicionados. Trata-se de valores constantes*/