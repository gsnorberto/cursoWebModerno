import $ from 'jquery' //vai procurar o jquery dentro de node_modules

const loadHtmlSucessCallbacks = [] //Array de funções. Será importado em "cityButtons"

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSucessCallbacks.includes(callback)){ //Uma vez que a callback não está incluída nesse array
        loadHtmlSucessCallbacks.push(callback)
    }
}

function loadIncludes(parent){ //vai ler todos os atributos que são "wm-include". Parent é a tag que tem essas propriedades "wm-include".
    if(!parent) parent = 'body' //Se o parâmetro "parent" estiver vazio vai setar o parent para procurar no body inteiro
    $(parent).find('[wm-include]').each(function(i,e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){ //Função callback para ser chamada se a requisição for feita de forma bem sucedida
                $(e).html(data) //seta o data dentro do html do elemento atual
                $(e).removeAttr('wm-include') //Exclui essa propriedade para que não haja novamente uma interpretação dela

                loadHtmlSucessCallbacks.forEach(callback => callback(data))

                loadIncludes(e) //De forma recursiva ele vai analisar o elemento atual como "parent" para verificar se dentro desse elemento que acabou de ser incluído existem outros "wm-include", e assim fazendo esse processo até não haver mais nenhum "wm-include" 
            }
        })
    })
}

loadIncludes() //passando parâmetro vazio ele vai usar a tag "body" como primeiro parent, para a partir de então sair processando todos os "wm-include"