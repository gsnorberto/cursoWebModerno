//O objetivo é converter o TypeScripy para JavaScript já que o TS não é reconhecido/compatível com o NODE
const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    return tsProject.src() // pelo arquivo de configuração definido no tsProject ele sabe qual é o código fonte da aplicação
        .pipe(tsProject()) //Responsável por todo o processo de compilação
        .pipe(gulp.dest('build'))

}

exports.default = series(transformacaoTS)