//Arquivos SASS
//Importar o index.scss (que contem os imports scss) para que a partir disso o web-pack comece a monitorar esses arquivos e consigo importar todos esses para gerar o arquivo css final
import './scss/index.scss'

//Dependencies
import 'jquery' //Por padrão o webpack entende que se trata de uma arquivo JS
import 'bootstrap'

//Meus arquivos JS
import './js/core/includes'
import './js/plugins/cityButtons'