/** Não aceita repetição e não é indexado - Você não tem um índice associado a um set que nem é o caso do Map e do Object */

const times = new Set()

times.add('Vasco')
times.add('São Paulo')
times.add('Palmeiras')
times.add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times) // Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size) //5
console.log(times.has('Vasco')) //True
times.delete('Palmeiras')
console.log(times.has('Palmeiras')) //False

//Outra forma de adicionar
const nomes = ['Raquel', 'Lucas', 'Julia']
const nomesSet = new Set(nomes)
console.log(nomesSet) //Set(3) { 'Raquel', 'Lucas', 'Julia' }