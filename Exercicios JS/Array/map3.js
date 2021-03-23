/** Simular o funcionamento de um map */
//Transformar JSON em Array e imprimir apenas os preços
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i]/**, i, this */)) /** Elemento atual, 
        índice e array original, respectivamente */
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderson", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//const paraObjeto = json => JSON.parse(json) /** Transforma json em objeto */
//const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(json => JSON.parse(json)).map2(produto => produto.preco)
console.log(resultado)