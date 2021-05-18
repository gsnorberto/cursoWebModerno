const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Uma vez que submete os dados do formulário (em form.html) ele vai fazer um "parser"(análise) no corpo da requisição e no corpo do request (solicitação) e jogar dentro do request.body. Ou seja, quando acessar o "request.body" eu vou ter acesso a todos os dados do formulário submetido.
app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp)=>{ // Atender uma requisição do tipo Post em cima da URL "/usuarios"
    console.log(req.body) // Recebe impressão dos dados do formulário no BackEnd
    resp.send('<h1>Parabéns. Usuário Incluído!</h1>') // Manda como resposta à requisição do formulário
})

app.post('/usuarios/:id', (req, resp)=>{ // Atender uma requisição do tipo Post em cima da URL "/usuarios"
    console.log(req.params.id)
    console.log(req.body) // Recebe impressão dos dados do formulário no BackEnd
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>') // Manda como resposta à requisição do formulário
})

app.listen(5500) //Escutando a requisição do form.htm na porta: 5500