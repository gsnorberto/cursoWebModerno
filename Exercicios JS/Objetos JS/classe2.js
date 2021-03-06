class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{ // Pai herda do avô
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{ // Filho herda do pai
    constructor(){
        super('Silva') //Vai chamar o construtor do pai
    }
}

const filho = new Filho
console.log(filho)
