const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') /** Importando o axios que já foi instalado
dentro desse projeto. Axios é um client http, ele faz requisições para obter
informações de algo que está remoto. O link utilizado, por exemplo, não está
na máquina local, está no servidor remoto da cod3r. Mas quer obter o arquivo
desse link para fazer algum tipo de trabalho em cima dele */

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data /** Dentro do atributo data desta
    resposta tem a lista de funcionários */
    //console.log(funcionarios)
    
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
}) /** Em resumo, está fazendo uma requisição em cima da url
e no final vai obter o conteúdo do arquivo do link nesse código local*/

/**DESAFIO - Obter a mulher chinesa com menos salário */
