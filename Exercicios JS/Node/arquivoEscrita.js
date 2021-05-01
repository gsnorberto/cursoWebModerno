/** Como escrever um arquivo usando File Systen*/

const fs = require('fs')
const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log (err || 'Arquivo salvo!') /** Imprime o valor de erro (caso ocorra algum
        erro) ou se não houver erro imprime a mensagem 'Arquivo salvo!'*/
}) /** Nome do arquivo que deseja gerar, Conteúdo do arquivo, CallBack que vai receber
como resposta apenas o erro. Se tiver acontecido algum erro nessa CallBack você poderá
fazer algum tipo de tratamento, mas se não tiver você pode colocar qualquer coisa, como
uma mensagem, por exemplo*/

/** Executando a primeira vez ele criará o módulo arquivoGerado.json */