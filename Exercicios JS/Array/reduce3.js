/** Implementando uma versão simples de reduce */

Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1 /** Se valor inicial foi
    declarado, retorna 0, caso não, retorna 1  */
    let acumulador = valorInicial || this[0]
    for(let i = 1; i < this.length; i++ ){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador // soma total
}

console.log('---------EXEMPLO 1---------')
/** EXEMPLO 1--------------------------------------------- */
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
console.log(alunos.map(a=>a.nota))

const resultado = alunos.map(a => a.nota).reduce2(function(acumulador, atual){ 
    console.log(acumulador, atual)
    return acumulador + atual 
}, 10)

console.log(resultado)

console.log('---------EXEMPLO 2---------')
/** EXEMPLO 2--------------------------------------------- */
const soma = (total, valor) => total+valor
const nums = [1,2,3,4,5]
console.log(nums.reduce(soma, 10))