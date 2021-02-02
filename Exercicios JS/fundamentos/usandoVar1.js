// Exemplo um pouco mais estranho
/*Em algumas outras linguagens essa variável definida dentro do bloco
ficaria visivel apenas dentro deste bloco, fora dele ela não existiria.
Com JS isso não acontece quando se usa o "var". Mesmo que a variável seja 
declarada dentro de um bloco, ela estará disponível fora dele*/
{
    {
        var sera = 'Será????'
    }
}
console.log(sera)

/* Já em uma função, a variável criada dentro dela, só pode ser acessada também
dentro dela, como mostra abaixo. Se o console.log estivesse fora da função não iria
imprimir, e ocasionaria erro na compilação. */
function teste(){
    var local = 123
    console.log(local)
}

/* Ao criar uma variável global (fora da função) ela pode ser vista dentro ou fora da função */

