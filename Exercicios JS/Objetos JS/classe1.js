/** Na maioria das vezes iremos utilizar mais funções contrutoras
 * do que classes
 */

class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    
    addLancamentos(...lancamentos){ /** concatena todos os parâmetros
        no array "lancamentos" */
        //console.log(this.lancamentos)
        lancamentos.forEach(l => {
            this.lancamentos.push(l) /**Adicionando os parâmetros no
            "this.lancamentos" */
            //console.log(l)
        }) /** percorre
        cada elemento do array dando push */
       // console.log(this.lancamentos)
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario()) //valor consolidado