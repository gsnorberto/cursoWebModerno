/** ATENÇÃO AO EXECUTAR ESSE CÓDIGO !!!! Não esqueça de finalizá-lo*/

const moduloA = require('../../moduloA') /** "../" serve para sair de
uma pasta */
console.log(moduloA.ola)

const saudacao = require('saudacao') /** Saudacao é o nome do módulo
que foi instalado dentro da pasta node_module. Dentro da pasta saudação
ele irá procurar por padrão o arquivo index.js */
console.log(saudacao.ola) /** Ele encontrará o "bom dia, pessoal" do index.js
sem precisar colocar o caminho relativo */

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) =>{
    /** Respondendo requisições */
    res.write('Bom dia!')
    res.end() /** Finalizar a requisição */
}).listen(8080) /**porta 8080 */
/** Assim que executar o programa, abra um navegador e acesse: "localhost:8080"
 * Aparecerá o "Bom dia!" no navegador
 * OBS:  NÃO ESQUEÇA DE FINALIZAR O PROCESSO COM CTRL + ALT + M
*/