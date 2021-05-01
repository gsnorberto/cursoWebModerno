/** Se o módulo estiver dentro do seu projeto é o caminho relativo. Se o módulo
 * não estiver no seu projeto (for um módulo de terceiros), a forma de importar
 * é usando a mesma função só que não precisa ter o caminho relativo
 */
/** Importando o arquivo moduloA e moduloB */
const moduloA  = require('./moduloA')
const moduloB = require('./moduloB')
/* const fs = require('fs')
const moduloA = __dirname + '/moduloA.js' */

/* fs.readFile(moduloA, 'utf-8', (err, conteudo) => {
    console.log('\n---------Módulo A---------')
    console.log(conteudo.ola)
    console.log(conteudo.bemVindo)
    console.log(conteudo.ateLogo)
}) */

console.log('\n---------Módulo A---------')
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA) 
console.log('\n---------Módulo B---------')
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())