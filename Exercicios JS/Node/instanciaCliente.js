const contadorA = require('./instanciaUnica') /** Exportou um objeto do node. TERÁ CACHE*/
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() /** Nova instância criada a partir de uma
factory. NÃO TERÁ CACHE */
const contadorD = require('./instanciaNova')()

contadorA.inc() // 2
contadorA.inc() // 3
console.log(contadorA.valor, contadorB.valor) /** 3  3 -> O que fizer no contador A o 
contador B também vai saber, isso se dá por conta do cache */

contadorC.inc() // 2
contadorC.inc() // 3
console.log(contadorC.valor, contadorD.valor) /** 3  1 */