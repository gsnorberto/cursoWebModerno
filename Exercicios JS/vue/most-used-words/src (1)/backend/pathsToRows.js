const fs = require('fs')
//Lê o arquivo do caminho especifinado "path", converte o conteúdo desse arquivo em string, separa o texto completo em pedaços
module.exports = paths => {
    return new Promise((resolver, reject) => {
        try { 
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                .split('\n')
            resolver(rows)
        } catch(e) {
            reject(e)
        }
    })
}