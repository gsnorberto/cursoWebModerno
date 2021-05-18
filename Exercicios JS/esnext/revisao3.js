// ES8: Object.values/Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj)) //[ 1, 2, 3 ] -> somente valores
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ] -> conjunto chave e valor

// Melhorias na Nortação Literal
const nome = 'Carla'
const pessoa = {
    nome, // Não precisa mais colocar nome: nome
    plan(){
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.plan()) // Carla Oi gente

//Class
class Animal{}
class Cachorro extends Animal{ // Sintaxe para entender como se define uma herança em classes
    falar(){
        return 'au au'
    }
}
console.log(new Cachorro().falar())
