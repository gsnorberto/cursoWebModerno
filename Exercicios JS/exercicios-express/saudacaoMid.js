//A ideia aqui é de ter um encapsulamento dos dados através de módulos
function saudacao(nome){
    return function(req, res, next){ //retorna uma função middleware
        console.log(`Seja bem vindo ${nome}.`)
        next()
    }
}

module.exports = saudacao //será acessado dentro do index.js