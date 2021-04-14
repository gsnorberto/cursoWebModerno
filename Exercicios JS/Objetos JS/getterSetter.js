/** getters e setter são funções, e dentro dessas funções os valores
 * são acessados. Getter para obter e setter para alterar
*/
const sequencia = {
    _valor: 1, /** Convenção - ato de mostrar para outros desenvolvedores
    que essa é uma variável que é pretendida ser acessada apenas
    internamente dentro do objeto sequência*/
    get valor() {return this._valor++}, //Retorna o valor
    set valor(value) { //Altera o valor
        if(value > this._valor){
            this._valor = value /**Atribuir o valor que
            recebeu como parâmetro para o valor de this._valor*/
        }
    } 
}

console.log(sequencia.valor, sequencia.valor) /** Internamente está
chamando o método get e set */
sequencia.valor = 1000 /** Ele não altera a variável valor diretamente.
Primeiro é verificado através do set se a alteração pode ser feita
conforme as condições pré estabelecidas para alteração. Nesse caso,
o "if" do set */
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Vai ser ignorando por conta do método set
console.log(sequencia.valor, sequencia.valor)