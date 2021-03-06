const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Pega todas as chaves
console.log(Object.values(pessoa)) //Pega todos os valores
console.log(Object.entries(pessoa)) //Todos os registros do Array

//Percorrer os elementos do Array com ForEach--------------------
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//Mesma coisa de cima, porém utilizando o destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/**Definir propriedades de um objeto. Ex: A propriedade pode ou
 * não ser alterada?
 */
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //vai ser listado
    writable: false, //não permite ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' /** Mesmo tentando alterar aqui
a data de nascimento permanecerá a que foi definida nas propriedades
do objeto logo acima */
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) /** Se mudar o "enumerable" para false
"dataNascimento" não será listado */

//Object.assign (ECMAScript 2015)
const dest = {a: 21}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) /**Concatenará todos os objetos
no objeto que foi passado no primeiro parâmentro. Ou seja, "dest" unirá
todos os elementos presentes no o1 e o2*/

Object.freeze(obj)
obj.c = 1234 /** Não será alterado por conta do freeze */
console.log(obj)