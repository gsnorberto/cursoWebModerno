// Destructuring - Novo recurso de ES2015

// ------------ Destructuring em objeto ------------------
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Tirar o atributo nome e idade de dentro do objeto. Desta forma elas podem ser vistas fora do objeto
const { nome, idade } = pessoa // Tirar do objeto nome o atributo 'nome' e 'idade'
console.log(nome, idade)

// Modificar o nome do atributo tirado do objeto
const { nome: n, idade: i } = pessoa
console.log(n, i) 

console.log(pessoa) 

const {endereco: {logradouro, numero}} = pessoa 

// ------------ Destructuring em array ------------------

const [a] = [10]
console.log(a)

const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)