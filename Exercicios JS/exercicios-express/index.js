//USE O POSTAMAN

const { response } = require('express')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid') // se não passar o "./" ele vai procurar dentro do "node_modules".
const userApi = require('./api/user')
require('./api/product')(app, 'com param!')

//Se for requisição do tipo post , aponta para função "save". Se for do tipo get aponta para a função "obtain"
app.post('/usuario', userApi.save)
app.get('/usuario', userApi.obtain)


app.use(bodyParser.text()) // Chama a função text e o resultado dessa função é uma função middleware. Faz automaticamente aquilo que foi escrito (que está comentado) em app.post. Mas só vai aceitar requisições do tipo texto. Para requisições do tipo json use o ".json()" em vez do ".text()"
app.use(bodyParser.json())

app.use(saudacao('Guilherme')) // ele vai entender que saudação é uma função middleware

//Função Middleware - Chain of Responsibility - usa o next para encadear uma sequência de chamadas. Ou seja, caso você queira passar para a próxima função na cadeia, deverá explicitamente usar a função next(). Vale ressaltar que aqui a ordem das funções é importante, elas serão chamadas em sequência.
app.use('/opa', (req, res, next)=>{
    console.log('Antes...')
    next()
})

//http://localhost:3000/cliente/relatorio?completo=true&ano=2018
app.get('/clientes/relatorio', (req, res) =>{
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
    //Resultado: Cliente relatório: completo true ano = 2018
})

//Lendo dados da requisição
//requisição do tipo get passa o parâmetro diretamente na url
app.get('/clientes/:id', (req, res) => {
    res.send(`Client ${req.params.id} selecionado!`)

})

// http://localhost:3000/corpo
// Manda no corpo da função
app.post('/corpo', (req,res)=>{
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // //quando terminar essa requisição envia uma resposta
    // req.on('end', function(){ 
    //     res.send(corpo)
    // })
    res.send(req.body) //o que vem no body da requisição
})


//o protocolo http é baseado em requisição e resposta
//vai conseguir acessar com url/qualquercoisa
// "use" é genérico. Serve para requisição do tipo get, post, etc.
//na mairoria dos casos a "res" será um json
app.get('/opa', (req, res, next) => {
    console.log('Durante...');
    // Método Middleware
    res.json({
        //dados
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3},
        ],
        count: 30, //quantos registros tem na base para essa consulta
        skip: 0, //quantas páginas você já pulou na paginação. O "0" representa a primeira página
        limit: 3, //quantos elementos tem naquela página
        status: 200
    })

    next()

    //pode retornar um array de objetos json
    // res.json([
    //     {id: 7, name: 'Ana', position: 1},
    //     {id: 34, name: 'Bia', position: 2},
    //     {id: 73, name: 'Carlos', position: 3},
    // ])

    //pode retornar um json
    // res.json({
    //     name: 'iPad 32gb',
    //     price: '1899.00',
    //     discount: 0.12
    // })
    
    //pode retornar uma mensagem
    // res.send('Estou bem!')
})

app.use('/opa', (req, res)=>{
    console.log('Depois...')
})


// Requisição do tipo get
// app.get((req, res) => {
//     res.send('Estou bem!')
// })

// Genérico
// app.all((req, res) => {
//     res.send('Estou bem!')
// })

//só consegue acessar com a url/opa
// app.use('/opa', (req, res) => {
//     res.send('Estou bem!')
// })

//Carrega o express na porta 3000
app.listen(3000, () => {
    console.log("Backend executando...")
})