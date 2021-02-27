function pessoa(){
    this.idade = 0

    const self = this /**Metódo 2 */
    setInterval(function(){ //Dispara uma outra função a partir o intervalo definido
        self.idade++ /**Metódo 2 */
        console.log(self.idade) /**Metódo 2 */
        //this.idade++ /**Metódo 1 - Comentar linhas do método 2 */
        //console.log(this.idade) /**Metódo 1 */
    }/*.bind(this)*/ /**Metódo 1 */, 1000) /* a cada 1000 milissegundos (1s) essa função será disparada.
    Sem o bind ativo ele retornará NaN.  */ 
}

pessoa()