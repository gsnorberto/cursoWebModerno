//Class vs Factory

//-------------------------Class-----------------------------
class pessoa{
    constructor(nome){ // Onde é armazenada as variáveis
        this.nome = nome /** This.nome = variável pública disponível
        a partir da instância dessa classe */
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('João')
p1.falar()

//--------------------------Factory------------------------
const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Marcos')
p2.falar()

//------------------------Construtora----------------------
function pessoa3(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new pessoa3('Paulo')
p3.falar()