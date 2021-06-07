//OBJETIVO - Gerar uma pasta com o resultado final da aplicação, unindo e convertendo conteúdo scss em um arquivo css, e também removendo os espaçamentos para diminuir o arquivo e otimizar o processo de leitura do mesmo.

const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // "sass()" = já pega todo o sass e converte para css. Depois verifica se há algum erro.
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

//Copiar arquivo "index.html" e color na basta "build"
function copiarHTML(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML) //Execução das duas funções em paralelo