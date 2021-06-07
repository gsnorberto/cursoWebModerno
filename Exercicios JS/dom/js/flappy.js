

//FUNÇÃO GENÉRICA PARA CRIAR DIV E A CLASSE DA DIV
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

//FUNÇÃO PARA CRIAÇÃO DE CADA BARREIRA EM INDIVIDUAL
function Barreira(reversa = false) { // Verifica se a barreira está invertida ou não, com isso define quem vem primeiro, a borda ou o corpo

    //Dentro da div barreira se encontram as divs "borda" e "corpo"
    this.elemento = novoElemento('div', 'barreira') // elemento criado apartir de document.createElement. Criado uma tag "div" com classe "barreira"
    const borda = novoElemento('div', 'borda') // uma div com a classe "borda"
    const corpo = novoElemento('div', 'corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px` //altura da barreira
}

//FUNÇÃO PARA POSICIONAR O PAR DE BARREIRAS (A DE CIMA E A DE BAIXO), JUNTO COM O ESPAÇO ENTRE ELAS PARA PASSAGEM DO PÁSSARO
function ParDeBarreiras(altura, abertura, x) { //altura total do cenário do jogo, abertura para passagem do pássaro e posição de cada barreira em relação ao eixo X
    //OBS: Todos esses objetos com o "this" (que tornam eles objetos públicos) precisarão ser acessados fora dessa função. Se não fosse necessário, o objeto poderia ser criado com o "const" ao invés do "this"
    this.elemento = novoElemento('div', 'par-de-barreiras') //div com a classe "par-de-barreiras"
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    //Cálculo que gera posições aleatórias para o espaço por onde o pássaro passa
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior //altura do jogo menos a abertura, menos altura superior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    //Saber em que posição o par de barreiras está
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) //pegando o x (a posição atual do par de barreiras)
    this.setX = x => this.elemento.style.left = `${x}px` //alterando a posição do par de barreiras na posição x a partir do valor que foi passado por parâmetro
    this.getLargura = () => this.elemento.clientWidth //obter largura do par de barreira

    this.sortearAbertura()
    this.setX(x)
}

// FUNÇÃO PARA POSICIONAMENTO DAS BARREIRAS E SUA MOVIMENTAÇÃO EM RELAÇÃO AO EIXO X
function Barreiras(altura, largura, abertura, espaco, notificarPonto) { //Altura e largura do cenário, abertura entre as duas barreiras(cima e baixo), espaço entre os pares de barreira. Notificação de ponto quando o pássaro ultrapassa cada barreira 
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3 // de quantos em quantos pixels a barreira vai sendo deslocada
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento) // Deslocamento. Posição atual menos deslocamento

            // Quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) { // Se a posição atual do "x" da barreira for menor que a largura da barreira
                par.setX(par.getX() + espaco * this.pares.length) // Posição atual(totalmente fora do cenário) + espaço entre as barreiras * quantidade de barreiras que tem. Ou seja, quando a barreira sai do cenário ele retorna para posição inicial.
                par.sortearAbertura() // se não sortear, as barreiras sempre terão as mesmas aberturas em suas respectivas posições
            }

            // Soma de pontos a cada vez que passa por uma barreira
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio // verifica se o pássaro passou pela barreira retornando um true ou false

            cruzouOMeio && notificarPonto() // É o mesmo que if(cruzouOMeio) notificarPonto()
        })
    }
}

//FUNÇÃO PARA ANIMAÇÃO DO PÁSSARO VOANDO
function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro') //Tag img da classe "passaro"
    this.elemento.src = 'imgs/tenor.gif'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true //Quando o usuário clicar em qualquer tecla e tiver pressionada, vai ficar setando para "true"
    window.onkeyup = e => voando = false // Quando o usuário solta a tecla

    this.animar = () => { // Manipula a altura do pássaro para que tenha a sensação que ele está voando
        const novoY = this.getY() + (voando ? 8 : -5) // o pássaro sobe 8 pixels e cai 5 pixels
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) { //Condição para que o pássaro nunca desça mais do que o chão
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2) //Posição inicial do pássaro em relação ao Y (meio)
}

//IMPRESSÃO DO SOMA DE PONTOS (SCORE) NA TELA
function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

//VERIFICAR SE OS ELEMENTOS ESTÃO SOBREPOSTOS
//elementoA = pássaro   elementoB = barreira
function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect() //dimensões do pássaro
    const b = elementoB.getBoundingClientRect() //dimensões das barreiras inferior e superior

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left 
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical // os dois devem ser "true" para confirmar uma colisão
}

//RETORNA TRUE SE O PÁSSARO COLIDIR COM A BARREIRA
function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) { //só entra no teste se a  colisão estiver 'false'
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu //retorna true ou false
}

function FlappyBird() {
    let pontos = 0
    document.getElementById('btn-restart').style.display = 'none';
    const areaDoJogo = document.querySelector('[wm-flappy]')

    const over = novoElemento('span', 'gameOver') // Frase "game over" na tela

    const altura = areaDoJogo.clientHeight //700px = altura do jogo definida no css
    const largura = areaDoJogo.clientWidth //1200px = largura do jogo

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 250, 400, () => progresso.atualizarPontos(++pontos))

    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    //loop do jogo
    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) { // se colidir
                clearInterval(temporizador) // Vai fazer com que o jogo pare e só volte reiniciando o jogo
                areaDoJogo.appendChild(over)
                over.innerHTML = 'GAME OVER!'
                document.getElementById('btn-restart').style.display = 'inline';
            }
        }, 20)
    }
}

new FlappyBird().start()