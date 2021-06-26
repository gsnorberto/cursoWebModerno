const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
//configuração do script do webpack
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: modoDev ? 'development' : 'production', //define se está em modo de desenvolvimento(development) ou produção (production). Em modo produção o arquivo main ficará todo em uma mesma linha, sem espaços e quebras de linha. 
    entry: './src/principal.js', //Arquivo de entrada
    output: {
        filename: 'principal.js', //Arquivo de saída
        path: __dirname + '/public' //dirname é a pasta webpack
    },
    optimization: {
        minimizer:[

            // new UglifyJsPlugin({ // Executar da forma mais rápida possível para otimizar o processo de minificação
            //     cache: true,
            //     parallel: true
            // }),
            // new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "estilo.css" //Arquivo que vai ser gerado a partir da interpretação dos arquivos css
        })
    ],
    module: {
        rules: [{ //regras
            test: /\.s?[ac]ss/, //Lê os arquivos .css, scss e sass. Na expressão, "s" = opcional, "[ac]" = "a" ou "c", e no final coloca o "ss"
            use: [
                MiniCssExtractPlugin.loader, //Extrai o css para um arquivo externo, que nesse caso é o "estilo.css"
                // 'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @inport, url()
                'sass-loader',
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }] 
    }
}
