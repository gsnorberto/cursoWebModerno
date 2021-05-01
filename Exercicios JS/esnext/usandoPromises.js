// Resolvendo com promise o desafio feito em "usandoCallBack.js"

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve,reject) => { // Passando as duas funções callback por parâmetro
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados =>{ 
                resultado += dados
            })
    
            res.on('end', () => { 
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            }) 
        })

    }) 
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) //Em uma única chamada ele vai chamar as 3, e vai ficar esperando todas as promises serem resolvidas ou rejeitadas e a partir daí começa a fazer composição de função
    .then(turmas => [].concat(...turmas)) // Recebe um array contendo as três turmas. Cada turma está dentro de um SubArray. Depois concatena todos eles para ter um único array com todos os alunos 
    .then(alunos => alunos.map(aluno => aluno.nome)) // Nesse ponto há apenas um único Array com os alunos das 3 salas
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))

/*
let nomes = []
getTurma('A').then(alunos => {
    //console.log(alunos) // Array de objetos com todos elementos da turma A
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)

    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map( b => `B: ${b.nome}`))
        console.log(nomes)

        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map( c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
}) */