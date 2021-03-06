const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

/** "__proto__" consegue acessar o protótipo do objeto. Se ele tentar
 * acessar algum atributo de ferrari e não encontrar dentro de ferrari
 * ele vai procurar esse mesmo atributo dentro de protótipo, que no caso
 * seria o objeto pai. Se não encontrar no objeto pai, ele vai procurando
 * em toda cadeia de protótipo. 
  */
console.log(ferrari.__proto__) /** O protótipo de ferrari aqui será
um objeto vazio */
console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype) //true

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)