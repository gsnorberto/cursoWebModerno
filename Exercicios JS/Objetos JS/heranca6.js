function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Bem vindo', 456)

console.log(aula1, aula2)

// Simulando o operador new
function novo(f, ...params){
    const obj = {}
    
    obj.__proto__ = f.prototype /** Associação do protótipo de obj
    ao atributo prototype da função que foi passada por parâmetro  */
    f.apply(obj, params) /** "f.apply" = executar a função f. 
    "Params" vai ser um array com um conjunto de parametros recebido em 
    "...params" */
    return obj
}
const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Bem vindo', 456)
console.log(aula3, aula4)
