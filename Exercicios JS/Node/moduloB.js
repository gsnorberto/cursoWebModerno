/** Forma mais comum (padrão) de se exportar um objeto.
 * Atribuir um novo objeto para module.exports. E esse objeto criado estará
 * disponível fora do módulo
 * O padrão é que tudo fique dentro do module.exports para quando um terceiro
 * desejar acessar
 */

module.exports = {
    bomDia: "Bom dia!!!",
    boaNoite(){
        return "Boa noite!!!"
    }
}
/** Criado o "moduloCliente.js" para acessar esse arquivo */