function pessoa3(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new pessoa3('Paulo')
p3.falar()

