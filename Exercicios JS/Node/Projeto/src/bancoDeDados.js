const sequence = {
    _id: 1,
    get id() {return this._id++} /** usando o método get quando for chamaro id não é preciso chamar a função e simplesmente usa o conceito de propriedade. Chama o atributo e internamente ele vai disparar a função*/
}

const produtos = {}

function salvarProduto(produto){ //Salvar
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto /** Produto já com o ID */
}

function getProduto(id){ //Ler produto específico
    return produtos[id] || {} /** Caso esteja null ou undefined, ele retornará um objeto vazio */
}

function getProdutos(){ //Ler todos os produtos
    return Object.values(produtos) /** Retornar todos os valores, apenas os valores. */
}

function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos} /** Apenas o "sequence" não estará disponível fora do módulo "bancoDeDados" */