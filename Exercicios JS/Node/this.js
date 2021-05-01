/** FORA DE UMA FUNÇÃO (DENTRO DE UM MÓDULO) O THIS ESTARÁ ACESSANDO O MODULE.EXPORTS, 
 * E DENTRO DE UMA FUNÇÃO ESTARÁ ACESSANDO O OBJETO GLOBAL */
console.log(this === global) //false
console.log(this === module) //false

console.log(this === module.exports) //true
console.log(this === exports) //true

/** É importante em saber exatamente em que momento você está utilizando o This*/
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) /** false. Dentro de uma função o This não aponta 
    para exports. Mas fora de uma função ele aponta */
    console.log(this === module.exports) // false
    console.log(this === global) // true. Nesse cenário o this está apontando para Global
}

logThis()

