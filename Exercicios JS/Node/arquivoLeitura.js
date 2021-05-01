const fs = require('fs') /** FS é um módulo que já vem previamente instalado no Node */


const caminho = __dirname + '/arquivo.json' /** __dirname é uma constante que está 
presente em todos os arquivos e módulos  do Node que representam o diretório atual*/

//Síncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') /**Lé o arquivo de forma síncrona. Se 
for um arquivo grande ele vai travar até ler o arquivo por completo */

//Assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{ /** Passando uma callback pra ser chamado
    quando o arquivo tiver sido carregado */
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
}) /** err e conteúdo são uma callback */

const config = require('./arquivo.json') /** Lê o arquivo e já converte em objeto */
console.log(config.db) /** Será executado antes do console.log da função assíncrona acima */

fs.readdir(__dirname, (err, arquivos)=>{  /** Lê o diretório, passa o caminho do diretório
    pelo "__dirname" e ele dá como uma resposta uma callback com todos os arquivos que 
    pertencem àquele diretório*/
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
}) /** __dirrname é o diretório atual */