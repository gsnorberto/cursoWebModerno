const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() /*vai achar "valor" global e não "valor" declarado
    dentro desta função*/
}

exec()