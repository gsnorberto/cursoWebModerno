/*Acesse o site: https://imasters.com.br/javascript/javascript-entendendo-o-de-uma-vez-por-todas
para mais informações sobre this e bind*/

//const saudacao = 'bom dia 2'
const pessoa = {
    saudacao: 'Bom dia!!!',
    falar() {
        console.log(this.saudacao)
        //console.log(saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() /*resultado será Undefined, pois essa função não está
inserida no contexto do objeto pessoa uma vez que a função falar
dentro do objeto "pessoa" foi armazenada em uma variável */

const falarDePessoa = pessoa.falar.bind(pessoa) /*O bind é responsável
por amarrar determinado objeto (nesse caso "pessoa") para que ele seja 
o dono da função (função "falar") que se encontra dentro dele (do objeto)*/

falarDePessoa()