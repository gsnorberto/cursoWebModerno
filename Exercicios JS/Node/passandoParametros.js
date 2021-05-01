/** Passar parâmetro para um módulo */

module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}