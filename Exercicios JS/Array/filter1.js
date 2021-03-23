/** O filter tem como objetivo filtrar um array com os elementos
 * desejados e retornar um subarray com esses elementos
 * Assim como no forEach e no Map, o Filter recebe um callback com
 * três parâmetros: elemento, índice e array, respectivamente
 * Link de informações sobre filter e outros: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'iPad', preco: 4199, fragil: true},
    {nome:'Copo de vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false}
]
/*
console.log(produtos.filter(function(produto){ //parâmetro recebe cada um dos produtos do array
    return produto.preco > 2400
}))
*/
const caro = produto => produto.preco >= 2000
const fragil = produto => produto.fragil // Ele já retorna implicitamente se o valor for true
const result = produtos.filter(caro).filter(fragil)

console.log(result)