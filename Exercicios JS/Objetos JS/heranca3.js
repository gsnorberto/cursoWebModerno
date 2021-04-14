const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)/** Criação do objeto filha tendo
como protótipo o objeto pai*/
filha1.nome = 'Ana'
console.log(filha1.corCabelo) 

const filha2 = Object.create(pai, {
    nome: {value: 'BIA', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome ='Carla' // não vai ser alterado por conta do "writable: false"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    //console.log(key)
    filha2.hasOwnProperty(key) ? /** Propriedade para saber se determinado
    atributo pertence ao objeto ou se veio por herança */
        console.log(`Pertence ao objeto filha2: ${key}`) : console.log(`Por Herança: ${key}`)
}

const obje = {nome: gabriel, idade: 24}
