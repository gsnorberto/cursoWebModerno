/** ECMAScript é uma especificação de linguagem, ou seja, ele definine padrões para uma linguagem de programação, e o javaScript é a implementação desses padrões */

// let e const
{
    var a = 2
    let b = 3
}
console.log(a) //2
//console.log(b) //b is not defined

// Template String
const produto = 'ipad'
console.log(`${produto} é caro!`) // "ipad é caro!" reconhece quebra de linhas, o que não acontece com aspas simples e duplas 

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) //C o [ 'd', '3', 'r' ]

const [x, ,y] = [1,2,3]
console.log(x,y) // 1,3 

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i,nome) // 9 Ana