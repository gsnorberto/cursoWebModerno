/** Estrutua Map - Estrutura chave-valor seguindo os princípios parecidos ao de um objeto. A difierença do Map para uma String é que no Map você pode ter a chave como sendo uma função, número, objeto, etc... Você tem uma maior flexibilidade do ponto de vista de como você pode colocar a chave. O Map não vem para substituir o Objeto, mas em algumas situações pode ser interessante você utilizá-lo */

const tecnologias = new Map()
tecnologias.set('react', {framework: false}) // chave é uma string
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //undefined - forma errada de acessar
console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([
    [function(){}, 'Função'], //chave é uma função
    [{}, 'Objeto'], // chave é um objeto
    [123, 'Número'] // chave é um número
])

chavesVariadas.forEach((vl, ch) =>{
    console.log(ch, vl) /** [Function (anonymous)] Função
     {} Objeto
     123 Número */
})

console.log(chavesVariadas.has(123)) // True - Has é uma função que diz se um elemento está ou não contido dentro desse map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) //false
console.log(chavesVariadas.size) //2 

chavesVariadas.set(123, 'a') // Adicionando uma chave com valor no chavesVariadas
chavesVariadas.set(123, 'b') // tentando adicionar outro elemento com mesma chave
console.log(chavesVariadas) /**A chave será o valor b, pois não pode ter chaves duplicadas. Então você do lado da chave uma estrutura que não permite repetição e do lado do valor uma estrutura que aceita repetição
  Map(3){
    [Function (anonymous)] => 'Função',
    {} => 'Objeto',
    123 => 'b'
  }
   */
chavesVariadas.set(456, 'b') // Adicionando mais uma chave no Map chavesVariadas
console.log(chavesVariadas)
