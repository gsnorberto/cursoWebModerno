/* Esse exemplo tem como objetivo mostrar que mesmo com o bind
o "this" é irreversível para casos em que é utilizada em contexto
de Arrow Function  */
let compareComThis = function (param){
    console.log(this === param)
}

compareComThis(global) /** True - No NODE o objeto global é 
chamado de global, o que no navegador é chamdado de window */

const obj = {}
compareComThis = compareComThis.bind(obj)
compareComThis(global) //False
compareComThis(obj) /* true - Pois o This aponta para "obj" por
conta do bind*/

let compareComThisArrow = param => console.log (this === param)
compareComThisArrow(global) //false
compareComThisArrow(module.exports) // true

compareComThisArrow = compareComThisArrow.bind(obj)
compareComThisArrow(obj) /* false - Vai continuar sendo false mesmo que
tenha chamado o bind referenciando "obj", por conta do function Arrow */
compareComThisArrow(module.exports) /* true - Ele continua apontando
para o objeto que originalmente ele foi escrito*/
