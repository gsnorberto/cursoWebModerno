// Como trabalhar com essa função (que retorna uma promise) que é uma função assíncrona de uma forma muito mais síncrona. O código vai aparecer muito mais síncrono do que ele realmente é 

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

// Recurso recente do ES8
// Objetivo: Simplificar o uso de promises
// Sempre que eu estiver lidando com uma função que retorna uma promise (como é o caso abaixo) eu posso colocar o await, e essa função só vai para o próximo passo se ela estiver resolvida, ou se tiver rejeitada recebendo o erro
let obterAlunos = async () => { // a função sempre deve estar marcada com "async"
    const ta = await getTurma('A') // o "await" só pode ser utilizado dentro de uma função marcada com assync.
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return []. concat(ta, tb, tc)
} // retorna um objeto AssynFunction embora o return seja um Array

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))