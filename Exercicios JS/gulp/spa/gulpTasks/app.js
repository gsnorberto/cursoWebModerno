// Arquivos da aplicação... CSS, JS, HTML
const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml(){
    return gulp.src('src/**/*.html') // pega todos arquivos html da pasta src
        .pipe(htmlmin({collapseWhitespace: true})) //Tirar espaços em branco
        .pipe(gulp.dest('build')) //jogar dentro da pasta build
}

function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true})) //Tirar comentários do arquivo final
        .pipe(concat('app.min.css')) //Concatenar todos os arquivos em um só
        .pipe(gulp.dest('build/assets/css'))
}

function appJS(){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG(){
    return gulp.src('src/assets/imgs/**/*.*') // Qualquer tipo de img: jpg, png...
        .pipe(gulp.dest('build/assets/imgs'))
}

//Registro de tasks para utilização no "servidor.js"
gulp.task('appHTML', appHtml) 
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHtml,
    appCSS,
    appJS,
    appIMG
}