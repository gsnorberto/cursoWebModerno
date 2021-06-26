(function ($) { //Protege a variável dolar
    $.fn.temporizador = function (opcoes) {

        //mesclar o que tiver definido como parâmetro padrão e aquilo que foi recebido por parametro na função
        const opcoesFinais = $.extend({
            //todos os valores padrão
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes) //Se porventura em "plugin2.html" não tiver sido passado a "mensagem" por parâmetro ele vai assumir o valor da mensagem definido acima
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador') //Adiciona a classe temporizador à div
        $(this).append(horaDezena,horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) //cria um grupo de captura dos conteúdos dentro dos parênteses para pegar hora, minuto e segundo individualmente
        const horarioAlvo = regex.exec(opcoesFinais.horario) //faz a separação da hora, minuto e segundo passado por parâmetro
        console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date() //pega a hora atual
            const alvo = new Date()

            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime() //horário que falta para atingir horário alvo

            if(diferencaEmMili >= 0) { //significa que a hora atual ainda não atingiu a hora alvo
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString()) //usa o toisostring para não levar em consideração o time zone (fuso horário) para que a hora não seja alterada automaticamente para um fuso horário diferente
                horaDezena.html(diferenca[1][0]) //primeiro digito da hora
                horaUnidade.html(diferenca[1][1]) //segundo digito da hora
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador)
            }
        }, 1000)

        return this
    }
})(jQuery)