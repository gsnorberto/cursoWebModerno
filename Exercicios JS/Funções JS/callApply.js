function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15, //15% desconto
    getPreco //Associa à função getPreco acima
}

globalThis.preco = 20
globalThis.desc = 0.1 // 10% de desconto
console.log(getPreco())

console.log(produto.getPreco())

//Usando call e apply
/** A diferença entre o call e o apply está apenas na forma
 * como você passa os parâmetros, que no caso do apply deve
 * estar dentro de um Array
 */
const carro = {preco: 4000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))