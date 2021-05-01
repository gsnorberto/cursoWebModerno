const porta = 3003 /** Porta é um processo dentro do computador, não basta apenas ter o endereço ip da máquina, a porta tem associação com o endereço ip do hospedeiro, assim como o tipo de protocolo usado para comunicação. Exemplo: Quando dois computadores vão se comunicar, além de ter um endereço ip para que eu saiba aonde é que está a máquina a qual quero me comunicar, também é preciso o número da porta, pois dentro da máquina que vai receber a requisição existem várias outras aplicações que estão rodando na internet (ex: Skype, browser acessando rede, um app de mensagem, etc). Então se você está, por exemplo, mandando sua última posição do jogo CS online, a máquina do amigo que está jogando CS com você vai receber sua posição através do endereço IP e a porta vai direcionar que essa sua posição no jogo seja enviada para o jogo CS (do pc do amigo) e não para o skype dele, por exemplo. Ou seja, a porta nada mais é do que a forma que você tem pra selecionar qual processo vai atender aquela requisição. A porta  80 é a porta padrão quando você faz uma requisição usando o protocolo http.*/
const express = require('express') /** express é uma pasta dentro de node_modules que vai conter um arquivo index.js que é o que vai ser carregado quando fazer esse import*/
const app = express()
const bodyParser = require('body-parser') //Exemplo 2
const bancoDeDados = require('./bancoDeDados') //Exemplo 2

app.use(bodyParser.urlencoded({extended: true})) // Exemplo 2 - Essa linha significa que para qualquer requisição que você faça no seu servidor usando Express, ele vai obrigatoriamente passar por esse Middleware, e se no corpo da requisição tiver um padrão chamado urlencoded (padrão que estamos enviando os dados através do programa postaman) quando chegar em sua aplicação ele vai aplicar esse Middleware que vai fazer um parser que vai transformar isso em objeto para que você possa acessar da forma "req.body.name" usada em um dos Middleware abaixo. Quem faz todo esse trabalho é o "bodyParser"

//Exemplo 1
// O get serve para obter informações do servidor
/* app.get('/produtos', (req, res, next) =>{ // Criação apenas para ilustração
    console.log('Middleware 1...')
    next() // Se comentar o next ele não vai responder (pois aqui não tem nenhuma função send) e também não está passando para o próximo "app.get" por conta do "next" comentado aqui
})

app.get('/produtos', (req, res, next) =>{ // Está utilizando o padrão Middleware falado anteriormente.  (requisição, resposta, e next
    res.send({nome:'Notebook', preco: 123.45}) // Objeto mandado como resposta. Esse objeto será convertido automaticamente para formaro JSON através do método send 
})  */

app.get('/produtos', (req, res, next) =>{  //Exemplo 2 - Leitura - Obter todos os produtos cadastrados
    res.send(bancoDeDados.getProdutos()) 
}) 

app.get('/produtos/:id', (req, res, next) => { // Exemplo 2 - Leitura- Obter um produto específico baseado no ID. Vai obter exatamente o parâmetro que se deseja obter através do link produtos/idDoProduto
    res.send(bancoDeDados.getProduto(req.params.id)) /** req.params é o local onde tem os parâmetros que foi colocado na URL*/ 
}) 

app.post('/produtos', (req, res, next) => { //Exemplo 2 - Salvar -
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco // preço recebe o preço que veio no corpo da requisição (que seria, por exemplo, o preço preenchido e enviado -dentro de uma página de formulário- por algum usuário para o servidor)
    })
    res.send(produto) /** JSON - resposta retornada do banco de dados */
})

app.put('/produtos/:id', (req, res, next) => { //Exemplo 2 - Alterar -
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco 
    })
    res.send(produto) /** JSON - resposta retornada do banco de dados */
})

app.delete('/produtos/:id', (req, res, next) => { //Exemplo 2 - Alterar -
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) /** JSON - resposta retornada do banco de dados */
})

app.listen(porta, ()=>{ /**porta 3003 que ficará escutando a aplicação*/
    console.log(`Servidor está executando na porta ${porta}.`)
}) 