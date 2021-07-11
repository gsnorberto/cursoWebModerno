const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

//manda os "paths" que são processador e retornam um array com todas as palavras com a quantidade de vezes que ela apareceu
ipcMain.on('process-subtitles', (event, paths) => {

    pathsToRows(paths) //recebimento (do Home.vue)

        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply('process-subtitles', groupedWords))
}) //envio de resposta