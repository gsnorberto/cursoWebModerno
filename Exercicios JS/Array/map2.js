/** Desafio: Pegar um array em formato JSON e imprimir apenas os preços */
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderson", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//const paraObjeto = json => JSON.parse(json) /** Transforma json em objeto */
//const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(json => JSON.parse(json)).map(produto => produto.preco)
console.log(resultado)