function pessoa (){
    this.idade = 0

    /*Utilizando a função Arrow o This não varia de acordo
    a quem está chamando. Comparando com o exemplo feito
    anteriormente "ThisEBind2", percebemos que ao utilizar
    funções normais que não sejam do tipo Arrow o this pode
    variar, sendo necessário utilizar o bind*/
    setInterval(() => {
        this.idade++ /* o this sempre estará vinculado a function 
        pessoa ao utilizar o Arrow */
        console.log(this.idade)
    }, 1000)
}

new pessoa