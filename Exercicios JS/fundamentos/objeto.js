// O objeto em JS é uma coleção de chave (identificador) e valor (valor que você atribui ao identificador)
const produto1 = {} // o par de chaves determina a criação de um objeto
produto1.nome = 'Celular Ultra Mega' //A criação do objeto é dinâmica
produto1.preco = '4998.90'
produto1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(produto1)

// Outra forma de criar o objeto e seus atributos
// Apesar de parecido, a estrutura abaixo não é um JSON (forma de trocar dados entre diferentes sistemas)
const produto2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(produto2)