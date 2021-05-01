require('./global') /** Uma vez carregado, aquilo que você colocou no global fica
disponível em sua aplicação inteira */

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) /** Conseguirá alterá normalmente se não utilizar o freeze
no objeto globla */