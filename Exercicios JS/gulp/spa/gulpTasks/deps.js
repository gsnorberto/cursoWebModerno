// Todas dependências externas: JS de framework, arquivos CSS de framework 

const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({"uglyComments" : false})) // não remover comentários
        .pipe(concat('deps.min.css')) // concatenação (quando tiver mais de um arquivo)
        .pipe(gulp.dest('build/assets/css')) //destino do arquivo
}

// Dentro de node_modules vai ter uma série de fontes
function depsFonts(){
    return gulp.src('node_modules/font-awesome/fonts/*.*') // pega tudo o que tem dentro da pasta "fonts"
        .pipe(gulp.dest('build/assets/fonts')) //pasta destino
}

module.exports = {
    depsCSS,
    depsFonts
}