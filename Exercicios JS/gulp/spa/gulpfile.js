const { series, parallel } = require('gulp')
const gulp = require('gulp')

const{appHtml, appCSS, appJS, appIMG} = require('./gulpTasks/app')
const{depsCSS, depsFonts} = require('./gulpTasks/deps')
const{monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series( // Execução em série 1
    parallel( // Execução em paralelo
        series(appHtml, appCSS, appJS, appIMG), // Execução em série 1.1
        series(depsCSS, depsFonts) // Execução em série 1.2
    ),
    servidor, // Execução em série 2
    monitorarArquivos // Execução em série 3
)