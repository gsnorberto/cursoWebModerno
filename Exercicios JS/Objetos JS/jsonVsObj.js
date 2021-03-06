/** JSON é um formato para compartilhamento de dados entre diferentes
 * linguagens de programação.
 * Ele não aceita funções, apenas formatos textuais (String).
 */

const obj = {a: 1, b:2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj)) /** Transforma o objeto "obj" em um
formato textual JSON */

//console.log(JSON.parse("{a:1, b:2, c:3}")) //errado
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) //errado
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) /** Transforma o JSON
em objeto */
console.log(JSON.parse('{"a": 1.7, "b":"string", "c":true, "d":{}, "e": []}')) //outro exemplo