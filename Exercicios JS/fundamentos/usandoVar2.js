// variáveis definidas com "var" tem escopo global e de função
var numero = 1
{
    var numero = 2
    console.log ('dentro= ', numero)
}
console.log('fora= ', numero) /* Nesse caso o valor considerado será
o do dentro do bloco */

// Esse comportamento não acontece com let
// variáveis definidas com "let" tem escopo global, de função e de bloco
let numeroo = 1
{
    let numeroo = 2
    console.log ('dentro= ', numeroo)
}
console.log('fora= ', numeroo) /* Nesse caso o valor considerado será
o valor global (fora do bloco */