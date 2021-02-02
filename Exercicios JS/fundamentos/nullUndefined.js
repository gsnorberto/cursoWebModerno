// Para maior entendimento leia o texto "Entendendo Null e Undefined"

let valor
console.log(valor) /* nesse caso será Undefined, pois a variável nunca foi inicializada e 
atribuída um valor*/

valor = null /* Não tem nenhum valor e não está apontando para nenhum endereço de memória 
que possua algum valor. A variável foi definida com um valor dizendo que ela não aponta para
nenhum local da memória. o "null" é utilizado quando você quer que determinada variável não
aponte mais para determinado valor armazenado em um endereço de memória*/
console.log(valor)
// console.log(valor.toString()) // acessar valor da variável que não aponta para nada. Dará erro
const produto = {}
console.log(produto.preco) // não dará erro mesmo não sendo atribuído o preço do produto
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(produto.preco.toFixed(2)) // Imprimir com duas casa decimais

produto.preco = undefined // nunca atribua undefined. Má prática de programação
console.log(!!produto.preco) // boolean
delete produto.preco // forma correta de tirar um atributo de um objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
