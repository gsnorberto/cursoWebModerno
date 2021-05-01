console.log(module.exports) /** Inicialmente é um objeto vazio */
console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null /** Não acontecerá nada */
console.log(module.exports) /** Resultado: { a: 1, b: 2, c: 3 }. Ou seja, mesmo 
atribuindo o Null para o exports, ele continua apontando para o que foi
setado em "this, exports e module.exports." */

exports = { /** Esse objeto não será retornado em module.exports, porque houve
    um mudança da referência de exports para um outro objeto, mas quem é 
    retornado é o module.exports. Ou seja, sempre que quiser trabalhar com
    um objeto a ser exportado, obrigatoriamente tem que usar o module.exports */
    nome: 'Teste'
}

console.log(module.exports)