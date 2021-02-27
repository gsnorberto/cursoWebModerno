//IIFE - Immediately Invoked Function Expression

//Função anônima não precisa ser invocada
/** Sua utilização é importante para evitar manipulações diretamente
 * do escopo global
 */
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()