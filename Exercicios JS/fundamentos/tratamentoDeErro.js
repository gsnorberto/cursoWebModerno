// Try - Aonde está acontecendo o erro
// Catch - Tratamento do erro ou mensagem para o usuário
//finaly - Bloco que é executado independente de ocorrer ou não algum erro
function tratarErroELancar(erro){
    //throw new Error ('Ocorreu um erro durante o processamento')
    //throw 10
    //throw true
    //throw 'Erro!!!'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!') //toUpperCase - Transforma a string em maiúscula
    } catch (e) { // uma vez gerado um erro dentro da sentença acima, utiliza-se o catch
        tratarErroELancar(e)
    } finally {
        console.log('Finalizado!!')
    }
    
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)