//Pega os dois arquivos JS da pasta src e faz o processo através do Gulp de concatenar os dois códigos e remover os espaçamentos. O arquivo destino vai para a pasta "build"

const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify') //Converte todo código para ficar minificado. Removendo espaçamentos e caracteres inúteis
const babel = require('gulp-babel') //Converte os códigos criados mais modernos da linguagem em códigos equivalentes que são mais compatíveis com os Browsers

function padrao(cb){
    gulp.src('src/**/*.js') // Seleciona todos os arquivos ".js" dentro da pasta src
        .pipe(babel({
            comments: false, //Os comentários do código não serão transferidos para o arquivo final
            presets: ["env"] //Pega o preset mais novo do JS com tudo o que há de mais moderno e converte para uma versão mais antiga
        }))
        .pipe(uglify()) //Não precisa passar parâmetro nenhum. 
        .on('error', err => console.log(err)) //Evento de erro
        .pipe(concat('codigo.min.js')) //Passa como parâmetro qual arquivo quer que gere no final
        .pipe(gulp.dest('build')) //O destino do código será a pasta build
    return cb()
}

exports.default = series(padrao) 
//Feito isso, já temos o "gulpfile.js" que é o arquivo esperado. E também temos a pasta "src" que vai ser usado como referência para pegar os arquivos. E no final só resta chamar o comando "gulp" através do terminal no diretório "javascript"