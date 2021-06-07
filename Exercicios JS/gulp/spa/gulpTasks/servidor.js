// Servidor usado para desenvolvimento, não para produção. Ele vai ajudar no fluxo de desenvolvimento. Quando, por exemplo, um arquivo for modificado ele vai disparar todo processo automaticamente e já atualiza o resultado para você

const gulp = require('gulp')
const webServer = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(){
    return gulp.src('build')
        .pipe(webServer({ //configurações do servidor
            port: 8080,
            open: true, //Abrir o browser
            livereload: true
        }))
}

function monitorarArquivos(){
    //Monitoramento. Sempre que alterar o html vai ser chamado a função "appHTML" (que é uma task do gulp. Essa função está dentro do arquivo "app.js") para que possa gerar os novos html
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

}

module.exports = {
    monitorarArquivos,
    servidor
}