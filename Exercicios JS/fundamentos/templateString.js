// Criar concatenação mais organizada
// Template String é um recurso lançado recentemente

const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + '!' // Método tradicional - mais trabalhoso
console.log(concatenacao)

// Concatenação no modelo Templete
const template = `
    Olá
    ${nome}!
`
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

// Chama a função na linha acima para escrever "cuidado" com letra maiúscula
console.log(`Ei... ${up('cuidado')}!`) 


