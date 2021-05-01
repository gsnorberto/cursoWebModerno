//Desafio: passar para Promise um caminho e o resultado da Promise será o conteúdo do arquivo. Ou seja, quando o usuário chamar o método then o resultado será o conteúdo daquele arquivo

const fs = require('fs')
const path = require('path')


function lerArquivo(caminho){
    return new Promise (resolve => {
        fs.readFile(caminho, function(_, conteudo){ // Sempre nessa função o primeiro parâmetro "_" é o erro, e o segundo parâmetro "conteúdo" é o conteúdo do arquivo
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    //.then(caminho => caminho.toString())
    .then(conteudo => conteudo.split('\n')) // divide em um lista ordenada de substrings e coloca em um array
    .then(linhas => linhas.join(',')) // Junta todos os elementos de um array em uma string
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)


