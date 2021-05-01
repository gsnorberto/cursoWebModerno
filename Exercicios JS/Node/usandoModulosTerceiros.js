/** Para importar arquivos terceiros, primeiramente é necessário instalar a 
 * biblioteca "node_modules" com um comando digitado no terminal que é: 
 * "npm i lodash"
 */

/** O node_modules foi instalado de forma local. Mas para instalar uma 
 * biblioteca de forma global tem que utilizar o "-g". Um exemplo instalando
 * outra bilbioteca seria: npm i -g nodemon.
 * Nodemon é uma ferramenta que através de linhas de comando dentro do terminal
 * você consegue disparar o node, e ele vai ficar monitorando cada mudança no 
 * arquivo para dar um refresh, e caso aconteça algum tipo de erro a sua
 * aplicação não iria cair.
 */

/** O "_" (underline) é para criar uma referência para lodash. É muito comum
 * quem usa um biblioteca referenciá-la a partir do underline
*/

/** Por padrão quando você faz esse tipo de import, ele vai procurar dentro
 * de node_modules e dentro de node_modules ele vai procurar o arquivo index.js
 * para executar esse import
 */
const _ = require('lodash')

/** random é uma função do lodash */
setInterval(()=> console.log(_.random(1, 1000)), 2000) /** Vai executar um 
valor aleatório entre 1 e 1000 em um intervalo de 2000ms (2s)*/