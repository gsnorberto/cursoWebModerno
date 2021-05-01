/** O desafio será obeter o conteúdo dos 3 arquivos Json presentes no seguinte Endereço de URL:  http://files.cod3r.com.br/curso-js/turmaA.json  (Obs: substituir o TurmaA por turmaB e turmaC para obter os outros dois links). E depois extrair apenas os nomes desses arquivos*/ 
/** Esse exemplo servirá para mostrarar no exemplo seguinte que utilizar o promise pode ser mais vantajoso que utilizar a callback */

/** Esse exemplo tem como intuito motivar a usar promise no lugar de callcbacks em alguns casos.  */

const http = require('http')

const getTurma = (letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados =>{ /** Cada um dos dados que forem chegando será concatenado na variável "resultado" */
            resultado += dados
        })

        res.on('end', () => { /** Resposta quando terminar de chegar os dados. Logo após vai pegar o dado que é uma string Json, vai converter para objeto (json.parse) e esse objeto convertido será passado para a função de callback pra quem chamou a função turma receber a callback com o objeto todo pronto. E o objeto que será passado é exatamente um dos arquivos JSON*/
            callback(JSON.parse(resultado))
        }) 
    })
}

let nomes = []
getTurma('A', alunos => {
    //console.log(alunos) // Array de objetos com todos elementos da turma A
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map( b => `B: ${b.nome}`))
        console.log(nomes)

        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map( c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})

/** Observe que nesse exemplo temos várias callbacks, uma dentro da outra, o que acaba deixando mais difícil o entendimento do código.
 * Há uma maneira muito mais simples e elegante para fazer esse mesmo exemplo que é através de promises. Vamos ver no exemplo seguinte: usandoPromise.js
 */