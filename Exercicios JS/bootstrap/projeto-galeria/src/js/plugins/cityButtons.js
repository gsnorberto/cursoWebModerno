import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

//Função para mostrar as imagens da cidade escolhida no click do botão
function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') === city || city === null //Se city for nulo todos os elementos vão ser alvos, ou seja, vai mostrar todas as fotos. Caso não, vai mostrar só os elementos correspondentes
        if (isTarget) { //Se a imagem existir
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none') //Oculta a respectiva imagem
            })
        }
    })
}

$.fn.cityButtons = function () { //Inclui a função dentro do Jquery
    const cities = new Set //O Set não tem repetição, desta forma, por mais que tenha mais de uma imagem com o mesmo nome de cidade ele vai colocar uma única vez o nome dessas cidades dentro do Set, e para cada elemento do set ele vai criar um botão associado
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city')) //adiciona os nomes das cidades na variável "cities" e ignora as repetições
    })

    // Botão para mostrar uma cidade em específico
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city) //Cria botão com o nome da respectiva cidade
        btn.on("click", e => filterByCity(city))
        
        return btn
    })

    // Botão para mostrar todas as cidades
    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas') //Botão "Todas"

    btnAll.on("click", e => filterByCity(null)) //Quando clica no botão "Todas". Passando nulo vai exibir todas as imagens
    
    btns.push(btnAll) //adiciona o botão "Todas" dentro de botões

    const btnGroup = $('<div>').addClass(['btn-group']) //grupo de botões
    btnGroup.append(btns) //coloca todos os botões dentro do btnGroup

    $(this).html(btnGroup)

    return this
}

onLoadHtmlSuccess(function(){
    $('[wm-city-buttons]').cityButtons() //Só vai chamar essa linha quando uma página for carregada de forma bem sucedida
})
