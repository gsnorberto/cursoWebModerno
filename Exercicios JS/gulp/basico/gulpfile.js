//OBJETVIO: Copiar os dois arquivos da pasta A para uma pasta B que será criada pelo próprio Gulp

const gulp = require('gulp')
const { series, parallel } = require('gulp')
//const series = gulp.series // Importar dentro de "gulp" o "series". Fazer várias tarefas em séries
// const { series } = require('gulp') // Faz a mesma coisa que a linha acima (importa o "series")
const antes1 = cb => { // Cada função representa uma Task
    console.log('Tarefa Antes 1');
    return cb() // retorna chamada da CallBack
}

const antes2 = cb => { 
    console.log('Tarefa Antes 2');
    return cb() 
}

function copiar(cb){
    //gulp.src('pastaA/**/*.txt') // Qualquer arquivo que esteja dentro da pastaA e que tenha a extensão ".txt" será copiado para pasta B
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/Arquivo2.txt']) //arquivos de entrada
        .pipe(gulp.dest('pastaB')) //Serve para aplicar transformações nos arquivos que foram definidos como arquivos de entrada para seu workflow. Nesse exemplo os arquivos vão da pastaA vão ser copiados para pastaB
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim');
    return cb()
}

//Essas funções serão executadas em série. Maneira Sequencial
module.exports.default = series(
    parallel(antes1, antes2), //vão executar em paralelo
    copiar,
    fim
)

//Comando Utilizado
    //gulp - com terminal na pasta "basico"