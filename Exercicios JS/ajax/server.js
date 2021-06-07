// Arquivo responsável por ter o servidor para proves os dados estáticos como também para ter alguns serviços necessários na hora de submeter formulários e outras coisas.

const bodyParser = require('body-parser') //Fazer o parser(análise) do body da requisição. Quando fizer o request e mandar dados dentro desse request ele vai interpretar esses dados e deixar esses dados prontos para serem manipulados dentro desse arquivo server.js
const express = require('express') //Importar o express
const app = express() // instanciar o express e colocá-lo em uma variável

//Middleware = uma função que vai ser executada quando uma determinada requisição chegar
app.use(express.static('.')) //Dentro da pasta atual ao qual o arquivo server.js está (pasta ajax), vai servir todos os arquivos estáticos que estão nessa pasta. Isso inclui todos arquivos, html, js, fonts, dados, css, etc...
app.use(bodyParser.urlencoded({ extended: true })) //Se vier em um formato a partir de um submit de um formulário esse código vai ser responsável por ler os dados e transformar isso em objeto
app.use(bodyParser.json()) // Se vier um json dentro do body da requisição, esse é o código que vai ser aplicado para transformar o json em objeto

//------------------XMLHTTPRequest#02-------------------------
const multer = require('multer') //interpretar o formulário que veio o arquivo do upload
const storage = multer.diskStorage({ // Dentro do multer tem a função diskStorage que recebe um objeto e esse objeto serve para configurar/personalizar tanto a pasta que você vai salvar os arquivos, como também serve para personalizar o nome do arquivo no momento de salvar ele
    destination: function (req, file, callback) {
        callback(null, './upload') //passa como segundo parâmetro qual pasta de destino que eu quero que seja armazenado o arquivo. Nesse exemplo será na pasta upload.
    },
    filename: function (req, file, callback) { // chamada no momento que vai escolher o nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`) // Vai sempre colocar a data atual antes do nome do arquivo para que tenha sempre arquivos com nomes diferentes
    }
})

const upload = multer({storage}).single('arquivo') // na requisição vai vir um arquivo com o nome "arquivo"
app.post('/upload', (req, res) => { //A requisição para fazer o upload do arquivo será via post a partir da url /upload
    upload(req, res, err =>{ // no momento que o upload for concluído ele vai chamar essa função
        if(err){
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso') // caso não deu erro
    })
})
// -------

// app.get('/teste', (req, res) => res.send('Ok')) // 
//OBS: Executar o comando npm start e depois acessar através de localhost: 8080/teste Quando vier uma requisição do tipo get nessa url "/teste", chame a função middleware que envia como resposta um "ok"

//------------------Fetch2-------------------------------------
//função middleware que vai tratar o recebimento do formulário html
app.post('/formulario', (req, res) => { //dados passados no body
    // vai retornar para o frontend os dados recebidos no corpo da requisição do backend(dados do formulário preenchido pelo usuário) mais um ID. Como se tivesse inserido um dado no banco de dados e estivesse retornando o objeto mais o id
    res.send({ 
        ...req.body,
        id: 1
    })
})

//------------------Axios2-------------------------------------
//Essa função vai receber como parâmetro um número, e em cima desse número vai ser calculado para saber se ele é par ou ímpar
app.get('/parOuImpar', (req, res) =>{ //Dados passados na url
    //formas de receber dados do frontend
    //1
    //req.body

    //2 com query o final da url seria: /parOuImpar?numero=33 (qualquer número)
    //req.query

    //3 - com params o final da url seria: /parOuImpar/:33 (qualquer número)
    //req.params

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...')) //Startar o servidor na porta 8080

//OBS: Executar o comando npm start e depois acessar através de localhost: 8080