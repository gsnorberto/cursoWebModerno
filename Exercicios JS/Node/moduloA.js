/** Usar nossos próprios módulos ou módulos de terceiros são extremamentes
 * importantes para construir qualquer aplicação usando javascript no backend
 */
/** Você organiza uma aplicação backend no Node em pastas e em arquivos,
 * cada arquivo representa um módulo.
 * Tudo que você escreve dentro do módulo não fica disponível para todo
 * mundo. Tudo o que você tem escrito dentro do módulo fica visível apenas
 * dentro do módulo. 
 * Se você quiser que isso fique visível fora do módulo é preciso exportar.
 * Existem várias formas de exportar determinados códigos para fora de um 
 * módulo e também existem formas de importar
 * 
 * Todos os arquivos que em .js que criamos até agora são executados dentro
 * do node.
*/

/** Como exportar códigos dentro de um módulo node para ser utilizado em
 * outros arquivos - 3 maneiras logo abaixo
 */

this.ola = "Fala Pessoal"
exports.bemVindo = "Bem vindo ao node!"
module.exports.ateLogo = "Até o próximo exemplo"
/** Criado o "moduloCliente.js" para acessar esse arquivo */